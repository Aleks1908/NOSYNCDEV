from __future__ import annotations

from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse

from openai_test import ask_openai

app = FastAPI()


def create_openai_request_message(json_data):
    """Creates the request message for OpenAI with values from response_body"""
    climate = json_data["climate"]
    accommodation = json_data["accommodation"]
    environment_type = json_data["environment_type"]
    trip_type = json_data["trip_type"]


    str_message = f"Suggest 5 cities with {climate} climate, {accommodation} accommodation, {environment_type} environment, which are {trip_type}, which have an airport. Return the cities in the format 'city, country':'short description'"

    return str_message

@app.post("/showcities/")
async def return_cities(request: Request):

    # Gets the request body as JSON
    json_data = await request.json()

    openai_request_message = create_openai_request_message(json_data)

    # OpenAI returns two list one with cities and the other with descriptions
    city_country_list, descriptions_list = ask_openai(openai_request_message)

    return JSONResponse(content=jsonable_encoder({"message": "Data was sent to OpenAI. Here is the response",
                                                  "city_country_list":city_country_list,
                                                  "descriptions_list": descriptions_list }))