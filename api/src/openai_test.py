import os
import openai
from dotenv import load_dotenv

load_dotenv()

openai.organization = "org-U5BcpPCYe6UAevd1ylf5SuDP"
openai.api_key = os.getenv("OPENAI_API_KEY")
completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "How are you!"}
  ]
)

print(completion.choices[0].message)