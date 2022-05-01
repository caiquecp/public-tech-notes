from pydantic import BaseSettings


class Settings(BaseSettings):
    ENVIRONMENT: str
    MONGODB_DATABASE: str
    MONGODB_CONN_URI: str


settings = Settings()