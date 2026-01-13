from fastapi import FastAPI
from app.api.endpoints import sessions, transcription, notes, analysis
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI application
app = FastAPI(title="SecondMind Backend", version="1.0.0")

# Setup CORS to allow requests from the React Frontend
# TODO: Allow origins should include 'http://localhost:5173' for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
# These modules will contain the actual API logic
app.include_router(sessions.router, prefix="/api/sessions", tags=["Sessions"])
app.include_router(transcription.router, prefix="/api/transcription", tags=["Transcription"])
app.include_router(notes.router, prefix="/api/notes", tags=["Notes"])
app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])

@app.on_event("startup")
async def startup_event():
    """
    Function executed when the server starts.
    TODO: 
    1. Initialize Database connection poll.
    2. Load AI models (Whisper, LLM clients) into memory to avoid latency on first request.
    3. Verify API keys (Gemini/OpenAI) are present in environment variables.
    """
    pass

@app.on_event("shutdown")
async def shutdown_event():
    """
    Function executed when the server stops.
    TODO:
    1. Close Database connections.
    2. Clean up any temporary audio files.
    """
    pass
