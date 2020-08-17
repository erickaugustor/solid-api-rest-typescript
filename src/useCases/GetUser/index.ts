import { PostgressUsersRepository } from "../../repositories/Implementations/PostgresUsersRepository";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";

const postgresUsersRepository = new PostgressUsersRepository();

// passando a implementação do código
const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository,
)

const getUserController = new GetUserController(
  getUserUseCase,
)

export { getUserUseCase, getUserController }