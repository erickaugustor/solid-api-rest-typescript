import { MailtrapMailProvider } from "../../providers/Implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/Implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgressUsersRepository();

// passando a implementação do código
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase,
)

export { createUserUseCase, createUserController }