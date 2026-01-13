from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/start")
async def start_session(session_type: str, title: str = None):
    """
    Endpoint to initialize a new active session.
    
    Args:
        session_type: 'lecture', 'meeting', or 'interview'.
        title: Optional title for the session.
    
    Returns:
        JSON object containing the new 'session_id'.
        
    TODO:
    1. Validate input (check if type is valid).
    2. Create a new record in the 'sessions' SQL table with status='active'.
    3. Return the UUID of the newly created session.
    """
    pass

@router.post("/{session_id}/stop")
async def stop_session(session_id: str):
    """
    Endpoint to finalize a session.
    
    TODO:
    1. Retrieve session from DB.
    2. Update status to 'completed' and set 'ended_at' timestamp.
    3. Trigger a background task to generate the 'Final Summary' or 'Action Items' list using the LLM Service.
    4. Save the final summary to the DB.
    """
    pass

@router.get("/history")
async def get_recent_sessions(limit: int = 5):
    """
    Endpoint to fetch historical sessions for the SetupScreen.
    
    TODO:
    1. Query the 'sessions' table for the most recent completed sessions.
    2. Return a list of objects: { id, title, type, date, summary_snippet }.
    """
    pass

@router.get("/{session_id}")
async def get_session_details(session_id: str):
    """
    Endpoint to load a past session's full state (for re-opening).
    
    TODO:
    1. Fetch session metadata.
    2. Fetch full transcript from 'transcripts' table.
    3. Fetch saved block-notes from 'notes' table.
    4. Fetch concept graph nodes from 'concepts' table.
    5. Return a consolidated JSON object to rehydrate the frontend state.
    """
    pass
