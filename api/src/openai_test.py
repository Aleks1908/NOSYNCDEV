import os
import openai
from dotenv import load_dotenv


def ask_openai(request_message):
    load_dotenv()

    openai.api_key = os.getenv("OPENAI_API_KEY")
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user","content": request_message}]
    )

    api_response = completion.choices[0].message['content']

    city_country_list, descriptions_list = split_data(api_response)

    return city_country_list, descriptions_list


def split_data(api_response):
    raw_list = api_response.split("\n")

    city_country_list = []
    descriptions_list = []

    for element in raw_list:
        if element == "":
            raw_list.remove(element)
    print(raw_list)
    for place_description in raw_list:
        city_country_list.append(place_description.split(": ")[0])
        descriptions_list.append(place_description.split(": ")[1])

    print(city_country_list)
    print(descriptions_list)
    return city_country_list, descriptions_list
    #TODO: return lists

