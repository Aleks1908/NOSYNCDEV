import os
import openai
from dotenv import load_dotenv
def add_questions():
    questions_answers_dict = {}
    messages = []
    # TODO: Fill dict with questions for keys and inputs from front-end for values
    #  - The idea is to create sentence or sentences from those answers to pass to content as a variable

    # This is how a dict should like where content is a single message. This should be appended to messages list
    # {"role": "user", "content": "Some text"},

    return messages

load_dotenv()

openai.organization = "org-U5BcpPCYe6UAevd1ylf5SuDP"
openai.api_key = os.getenv("OPENAI_API_KEY")
completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    # messages=add_questions()
    messages=[
        {"role": "user", "content": "Suggest 5 cities with cold climate, luxury accommodation, modern attractions, natural environment, which are adventure-packed, which have airport. Return the cities in the format 'city, country':'short description'"},
        #{"role": "user", "content": "Where was it played?"},
        #{"role": "user", "content": "Who was on second place!"}
    ]
)

api_response = completion.choices[0].message['content']

#city_country, description = api_response.split(":")
#list = [x for x in raw_list if x != "\n"]
#print(city_country)
#print(description)

def split_data(api_response_data):
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

split_data(api_response)