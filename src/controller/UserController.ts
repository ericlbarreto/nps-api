import { Request, Response } from "express";
import { User } from "../models/User";
import { AppDataSource } from "../database";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepository = AppDataSource.getRepository(User);

        const userAlreadyExists = await usersRepository.findOne({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists!",
            });
        }

        const user = usersRepository.create({ name, email })

        await usersRepository.save(user);

        return response.json(user);
    }
}

export { UserController};