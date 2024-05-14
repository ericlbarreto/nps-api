import { Request, Response } from "express";
import { UserRepository } from "../repositories/UsersRepository";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const userAlreadyExists = await UserRepository.findOne({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists!",
            });
        }

        const user = UserRepository.create({ name, email })

        await UserRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController};