from fastapi import APIRouter, Body

router = APIRouter()

@router.put("/{session_id}")
async def save_notes(session_id: str, notes_data: dict = Body(...)):
    """
    Endpoint to auto-save the BlockNote editor content.
    The frontend calls this debounced (e.g. every 2 seconds after typing).
    
    Args:
        notes_data: The full JSON object from editor.document.
        
    TODO:
    1. Check if session exists.
    2. Update the 'content' JSONB column in the 'notes' table for this session_id.
    3. (Optional) Parse the notes to see if user manually added a "Task" or "Question".
    """
    pass
