from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from .settings import settings

_CLIENT: AsyncIOMotorClient = None
DB: AsyncIOMotorDatabase = None


def init_database() -> None:
    global _CLIENT
    global DB
    
    _CLIENT = AsyncIOMotorClient(settings.MONGODB_CONN_URI)
    DB = _CLIENT[settings.MONGODB_DATABASE]