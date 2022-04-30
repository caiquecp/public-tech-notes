import requests


def add_lorem_note(qt: int) -> None:
    for _ in range(qt):
        msg = {
            "writer": "Caique C Pereira",
            "noteTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum arcu, mollis ac nisl sit amet, venenatis feugiat nisl. Aenean non lacus vitae leo tempor consectetur sit amet eu turpis. Fusce tellus arcu."
        }
        requests.post("http://localhost:3000/notes", json=msg)


def delete_all_notes() -> None:
    requests.delete("http://localhost:3000/notes")


if __name__ == "__main__":
    add_lorem_note(25)