from typing import List

from motor.motor_asyncio import AsyncIOMotorCollection

from .schemas import Note


def _get_collection() -> AsyncIOMotorCollection:
    from .database import DB
    return DB['notes']


async def get_all() -> List[Note]:
    collection = _get_collection()
    cursor = collection.find()
    docs = await cursor.to_list(None)
    return [Note(**{**doc, "id": str(doc["_id"])}) for doc in docs]


async def create(note: Note) -> Note:
    collection = _get_collection()
    result = await collection.insert_one(note.dict())
    note.id = str(result.inserted_id)
    return note


async def delete_all() -> int:
    collection = _get_collection()
    result = await collection.delete_many({})
    return result.deleted_count