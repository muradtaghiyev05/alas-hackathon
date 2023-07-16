from fastapi import FastAPI
import pandas as pd
from baseclass import ModelInput
from baseclass import loaded_model
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import pickle
with open('credit_predict_model.pkl', 'rb') as file:
    load_model = pickle.load(file)

class ModelInput1(BaseModel):
    c : float
    e : float
    j : float
    k : float
    l : float
    m : float
    n : float
    o : float
    p : float
    r : float
    s : float

with open('mobile_predict_model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

class ModelInput2(BaseModel):
    a : float
    c : float
    e : float
    g : float
    i : float
    j : float
    k : float
    l : float
    m : float
    n : float
    o : float
    p : float
    q : float

app = FastAPI(host="0.0.0.0")

origins = ['*']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": ", FastAPI!"}

def process_data_credit(data):
    data={
        'c' : [data.c],
        'e' : [data.e],
        'j' : [data.j],	
        'k' : [data.k],
        'l' : [data.l],
        'm' : [data.m],
        'n' : [data.n],
        'o' : [data.o],
        'p' : [data.p],	
        'r' : [data.r],
        's' : [data.s],
    }
    df_credit = pd.DataFrame(data)
    return df_credit

def process_data_mobile(data):
    data={
        'a' : [data.a],
        'c' : [data.c],
        'e' : [data.e],	
        'g' : [data.g],
        'i' : [data.i],
        'j' : [data.j],
        'k' : [data.k],
        'l' : [data.l],
        'm' : [data.m],	
        'n' : [data.n],
        'o' : [data.o],
        'p' : [data.p],
        'q' : [data.q],
    }
    df_mobile = pd.DataFrame(data)
    return df_mobile


@app.post('/predict_credit')
def predict(inp: ModelInput1):
    df_credit = process_data_credit(inp)
    prediction = load_model.predict(df_credit)
    return {"prediction": str(prediction[0])}
    

@app.post('/predict_mobile')
def predict(inp: ModelInput2):
    df_mobile = process_data_mobile(inp)
    prediction = loaded_model.predict(df_mobile)
    return {"prediction": str(prediction[0])}


