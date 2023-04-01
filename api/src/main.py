from __future__ import annotations

from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from jsonschema import FormatChecker, validate

from pydantic import BaseModel
from starlette.responses import JSONResponse

app = FastAPI()

def create_openai_request_api(json_data):
    destination = json_data["destination"]
    climate = json_data["climate"]

    message = destination + " " + climate
    return message

@app.post("/showcities/")
async def return_cities(request: Request):
    json_data = await request.json()
    openai_request_message = create_openai_request_api(json_data)
    # TODO: call openai and pass message

    return JSONResponse(content=jsonable_encoder({"message": "Data was sent to OpenAI", "data":openai_request_message}))