class LLMService:
    """
    Service responsible for all 'Intelligence' features (Concepts, Summaries, Tasks).
    Interacts with Gemini Pro or GPT-4.
    """

    async def extract_concepts(self, text_chunk: str, previous_concepts: list):
        """
        Analyzes distinct concepts from stream.
        
        Args:
            text_chunk: The latest segment of transcript.
            previous_concepts: List of concepts already found (to avoid duplicates).
            
        TODO:
        1. Prompt LLM: "Identify any new technical terms or concepts in this text. Ignore these existing ones: {...}"
        2. Schema: Return { term: str, definition: str, relevance: float }.
        3. Return list of new concepts.
        """
        pass

    async def detect_action_items(self, text_chunk: str):
        """
        Analyzes text for tasks (Meeting Mode).
        
        TODO:
        1. Prompt LLM: "Extract any promised tasks, deadlines, or assignees."
        2. Schema: { text: str, assignee: str, priority: 'high'|'normal' }.
        """
        pass

    async def generate_final_summary(self, full_transcript: str, mode: str):
        """
        Generates the post-session report.
        
        Args:
            mode: 'lecture' (focus on key learnings) vs 'meeting' (focus on decisions).
            
        TODO:
        1. If transcript is huge, chunk it and map-reduce.
        2. Generate Markdown formatted summary.
        """
        pass
