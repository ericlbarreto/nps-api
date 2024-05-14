import { AppDataSource } from "../database";
import { Survey } from "../models/Survey";

export const SurveyRepository = AppDataSource.getRepository(Survey).extend({})