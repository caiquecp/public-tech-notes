from locust import HttpUser, task


class PublicTechNotesUser(HttpUser):
    @task(70)
    def get_notes(self) -> None:
        self.client.get("/notes")

    @task(25)
    def create_notes(self) -> None:
        note = {
            "writer": "Caique C Pereira",
            "noteTitle": "Lorem ipsum dolor sit amet",
            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis feugiat dui, ut interdum tortor euismod nec. Integer non sodales tellus. Praesent semper tellus volutpat, ornare augue pulvinar, vulputate nulla."
        }
        self.client.post("/notes", json=note)

    @task(5)
    def delete_all_notes(self) -> None:
        self.client.delete("/notes")