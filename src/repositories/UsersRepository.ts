import { User } from "../models/User";
import { AppDataSource } from "../database";

export const UserRepository = AppDataSource.getRepository(User).extend({

})