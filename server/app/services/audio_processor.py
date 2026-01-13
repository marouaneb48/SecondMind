class AudioProcessor:
    """
    Service responsible for handling raw audio bytes and converting them to text.
    """
    
    def __init__(self):
        # TODO: Load Whisper model here if using local inference
        # self.model = whisper.load_model("base")
        pass

    async def transcribe_buffer(self, audio_bytes: bytes) -> str:
        """
        Main function to transribe a chunk of audio.
        
        TODO:
        1. Save `audio_bytes` to a temporary .wav file (Whisper usually needs a file path or strict format).
        2. Call OpenAI Whisper API (or local model.transcribe()).
        3. Return the text string.
        4. Clean up temp file.
        """
        pass
    
    def normalize_audio(self, audio_bytes: bytes):
        """
        Helper to normalize volume or convert sample rate (e.g. 48k -> 16k) using ffmpeg/pydub.
        """
        pass
