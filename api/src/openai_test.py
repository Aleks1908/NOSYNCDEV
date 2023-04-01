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
    messages=add_questions()
    # messages=[
    #     {"role": "user", "content": "Who won the world series in 2020?"},
    #     {"role": "user", "content": "Where was it played?"},
    #     {"role": "user", "content": "Who was on second place!"}
    # ]
)


print(completion.choices[0].message['content'])
