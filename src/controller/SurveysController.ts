import { Request, Response } from "express"
import { SurveyRepository } from "../repositories/SurveysRepository";

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const survey = SurveyRepository.create({
            title, description
        });

        await SurveyRepository.save(survey);

        return response.status(201).json(survey)
    }

    async getAll(request: Request, response: Response) {
        const all = await SurveyRepository.find()

        return response.json(all)
    }
}

export { SurveysController }