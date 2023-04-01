from __future__ import annotations

from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from openai_test import ask_openai

app = FastAPI()


def create_openai_request_message_cities(json_data):
    """Creates the request message for OpenAI with values from response_body"""
    interests = json_data["interests"]
    budget = json_data["budget"]
    season_weather = json_data["season_weather"]
    cultural_language_familiarity = json_data["cultural_language_familiarity"]
    food_preference = json_data["food_preference"]

    str_message = f"What are your personal interests? What is your budget? What is your favourite season and weather? What are your cultural and language familiarity preferences? What type of food do you prefer? {interests} {budget}, {season_weather} {cultural_language_familiarity} {food_preference} Based on the user's answers recommend five destinations. Return the destinations in the format city, country: short description up to 30 words"


    return str_message


def create_openai_request_message_activities(json_data):
    """Creates the request message for OpenAI with values from response_body"""
    city = json_data["city"]
    short_description = json_data["short_description"]
    extreme_activity = json_data["extreme_activity"]
    fav_color = json_data["fav_color"]
    music_preference = json_data["music_preference"]
    fears = json_data["fears"]

    str_message = f"How would you describe yourself in three words? What is the most extreme activity you have done? What is your favourite color? What type of music do you listen to? What are your fears? {short_description} {extreme_activity} {fav_color} {music_preference} {fears} Based on the user's answers recommend five activities in {city}. Return the activities in the format activity: description with reasons why do you recommend it, limit it to 25 words."

    return str_message

@app.post("/showcities/")
async def return_cities(request: Request):

    # Gets the request body as JSON
    json_data = request.json()

    openai_request_message = create_openai_request_message_cities(json_data)

    # OpenAI returns two list one with cities and the other with descriptions
    city_country_list, descriptions_list = ask_openai(openai_request_message,"destinations")

    return JSONResponse(content=jsonable_encoder({"message": "Data was sent to OpenAI. Here is the response",
                                                  "city_country_list":city_country_list,
                                                  "descriptions_list": descriptions_list }))

@app.post("/activities/")
async def return_activities(request: Request):

    # Gets the request body as JSON
    json_data = request.json()
    openai_request_message = create_openai_request_message_activities(json_data)

    # OpenAI returns two list one with activities and the other with descriptions
    activities_list, activity_descriptions = ask_openai(openai_request_message, "activities")

    return JSONResponse(content=jsonable_encoder({"message": "Data was sent to OpenAI. Here is the response",
                                                  "activities_list":activities_list,

                                              "activity_descriptions": activity_descriptions }))
origins = [
  "*"
]

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)