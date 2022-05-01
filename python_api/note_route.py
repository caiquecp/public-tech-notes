from fastapi import APIRouter

from .schemas import Note, ListWrapper
from .note_repository import get_all, create, delete_all

router = APIRouter(prefix="/notes")


@router.get("/")
async def read_notes():
    notes = await get_all()
    return ListWrapper(items=notes)


@router.post("/")
async def create_note(note: Note) -> Note:
    created_note = await create(note)
    return created_note


@router.delete("/")
async def delete_all_notes():
    deleted_qt = await delete_all()
    return deleted_qt