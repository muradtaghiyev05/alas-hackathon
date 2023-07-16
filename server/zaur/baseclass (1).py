from pydantic import BaseModel

import pickle
with open('credit_predict_model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

class ModelInput(BaseModel):
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
