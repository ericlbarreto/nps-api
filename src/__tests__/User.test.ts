import { app } from "../app";
import request from 'supertest';
import { initializeDataSource } from "../database";

describe("Users", () => {   
    beforeAll(async () => {
        const connection = await initializeDataSource();
        await connection.runMigrations();
    })

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user2@example.com",
            name: "User2 Example"
        })

        expect(response.status).toBe(201);
    })
})