from fastapi import APIRouter

router = APIRouter()

@router.post("/{session_id}/generate-quiz")
async def generate_quiz(session_id: str):
    """
    Endpoint to generate generic Q&A or Quiz from the transcript.
    Used for the "Interview Mode" or "Exam Prep".
    
    TODO:
    1. Fetch full transcript for the session.
    2. Construct prompt for LLM: "Generate 5 multiple choice questions based on this text..."
    3. Return the structured JSON of questions.
    """
    pass

@router.post("/{session_id}/extract-references")
async def extract_references(session_id: str):
    """
    Endpoint to parse transcript for academic citations.
    
    TODO:
    1. Scan transcript for patterns like "According to [Author]" or "In the 2012 paper...".
    2. Use LLM or Scholarly API (e.g. CrossRef) to find the real metadata (Title, Year, Link).
    3. Return list of valid citation objects.
    """
    pass
