from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import init_database
from .note_route import router as note_router


def create_app() -> FastAPI:
    app = FastAPI(title="Tech Notes API")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(note_router)

    init_database()

    return app


app = create_app()
