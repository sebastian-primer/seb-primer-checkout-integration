from fastapi import FastAPI
from dotenv import load_dotenv
import requests
import os
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv('API_KEY')
API_URL_ROOT = "https://api.sandbox.primer.io"

@app.post("/client-session")
async def root():
    API_URL = "{}/client-session".format(API_URL_ROOT)
    headers = {
        "Content-Type": "application/json",
        "X-Api-Version": "2021-10-19",
        "X-Api-Key": API_KEY,
    }
    payload = {
        "orderId": "1",
        "currencyCode": "USD",
        "order": {
            "lineItems": [
                {
                    "itemId": "1",
                    "description": "This is a test item!",
                    "amount": 5000,
                    "quantity": 1
                }
            ]
        }
    }

    res = requests.post(API_URL, json=payload, headers=headers)

    return res.json()
