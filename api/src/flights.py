import os
from datetime import timedelta, date

import requests
from dotenv import load_dotenv


def get_cheapest_flights(destination_code):
    load_dotenv()

    api_token = os.getenv("AMADEUS_API_TOKEN")
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

    # Send the request to Amadeus API and get the response
    response = requests.get(api_url, headers=headers, params=params)
    # Parse the response and extract the flight offers
    flight_numbers = response.json()["meta"]["count"]
    if flight_numbers <= 0:
        return ""
    else:
        data = response.json()
        flight_data = []

        for flight in data['data']:
            carrier_code = flight['itineraries'][0]['segments'][0]['carrierCode']
            departure = flight['itineraries'][0]['segments'][0]['departure']['iataCode']
            arrival = flight['itineraries'][0]['segments'][-1]['arrival']['iataCode']
            price = float(flight['price']['total'])
            flight_data.append(
                {'carrierCode': carrier_code, 'departure': departure, 'arrival': arrival, 'price': price})

        # sort the list of dictionaries by price from smallest to largest
        flight_data = sorted(flight_data, key=lambda x: x['price'])

        return flight_data
