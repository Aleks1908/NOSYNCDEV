import os
from datetime import timedelta, date

import requests
from dotenv import load_dotenv

def get_amadeus_api_token(api_token_url,api_key,api_secret):
    response = requests.post(
        api_token_url,
        data={"grant_type": "client_credentials"},
        auth=(api_key, api_secret),
    )
    api_token = response.json()["access_token"]
    return api_token

def get_cheapest_flights(destination_code):
    load_dotenv()
    api_key = os.getenv("AMADEUS_API_KEY")
    api_secret = os.getenv("AMADEUS_API_SECRET")
    api_token_url = os.getenv("AMADEUS_API_TOKEN_URL")

    api_token = get_amadeus_api_token(api_token_url,api_key,api_secret)
    api_url = os.getenv("AMADEUS_API_URL")
    # Get tomorrow's date
    tomorrow = date.today() + timedelta(days=1)

    # Set up the request parameters for Amadeus API
    headers = {
        "Authorization": f"Bearer  {api_token}",
        "Content-Type": "application/vnd.amadeus+json"
    }
    params = {
        "originLocationCode": "LHR",
        "destinationLocationCode": destination_code,
        "departureDate": tomorrow.strftime("%Y-%m-%d"),
        "adults": 1,
        "max": 20
    }

    # # Send the request to Amadeus API and get the response
    response = requests.get(api_url, headers=headers, params=params)
    # Parse the response and extract the flight offers
    flight_numbers = response.json()["meta"]["count"]
    if flight_numbers <= 0:
        return ""
    data = response.json()['data']
    flight_data = []
    for flight in data:
        carrier_code = flight['itineraries'][0]['segments'][0]['carrierCode']
        departure = flight['itineraries'][0]['segments'][0]['departure']['iataCode']
        arrival = flight['itineraries'][0]['segments'][0]['arrival']['iataCode']
        price = flight['price']['grandTotal']
        flight_data.append(
            {'carrierCode': carrier_code, 'departure': departure, 'arrival': arrival, 'price': price})
    # Convert the list of dictionaries to a list of tuples
    tuple_list = [tuple(d.items()) for d in flight_data]
    # Convert the list of tuples to a set to remove duplicates
    unique_set = set(tuple_list)
    # Convert the set of tuples back to a list of dictionaries
    unique_list = [dict(t) for t in unique_set][0:5]
    return unique_list

