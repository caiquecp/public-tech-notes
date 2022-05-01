from typing import Any, List, Optional

from pydantic import BaseModel


class Note(BaseModel):
    id: Optional[str] = None
    writer: str
    noteTitle: str
    note: str


class ListWrapper(BaseModel):
    items: List[Any]