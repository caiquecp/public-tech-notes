from locust import HttpUser, task


class PublicTechNotesUser(HttpUser):
    @task
    def get_notes(self) -> None:
        self.client.get("/notes")