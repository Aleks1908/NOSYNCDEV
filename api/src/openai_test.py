import os
import openai
from dotenv import load_dotenv


def ask_openai(request_message,message_type):
    load_dotenv()

    openai.api_key = os.getenv("OPENAI_API_KEY")
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user","content": request_message}]
    )

    api_response = completion.choices[0].message['content']
    if message_type == "destinations":
        city_country_list, descriptions_list = split_data_destinations(api_response)

        return city_country_list, descriptions_list
    elif message_type == "activities":
        activities_list, activity_descriptions = split_data_activities(api_response)

        return activities_list, activity_descriptions


def split_data_destinations(api_response):
    raw_list = api_response.split("\n")

    city_country_list = []
    descriptions_list = []

    for element in raw_list:
        if element == "":
            raw_list.remove(element)
    #print(raw_list)
    for place_description in raw_list:
        city_country_list.append(place_description.split(": ")[0])
        descriptions_list.append(place_description.split(": ")[1])

    #print(city_country_list)
    #print(descriptions_list)
    return city_country_list, descriptions_list

def split_data_activities(api_response):
    raw_list = api_response.split("\n")

    activities_list = []
    activity_descriptions = []

    for element in raw_list:
        if element == "":
            raw_list.remove(element)
    # print(raw_list)
    for place_description in raw_list:
        activities_list.append(place_description.split(": ")[0])
        activity_descriptions.append(place_description.split(": ")[1])

    # print(city_country_list)
    # print(descriptions_list)
    return activities_list, activity_descriptions
    #TODO: return lists

