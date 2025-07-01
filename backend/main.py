from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import metrics_data, users_data

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/metrics")
def get_metrics():
    return metrics_data

@app.get("/users")
def get_users():
    return users_data
