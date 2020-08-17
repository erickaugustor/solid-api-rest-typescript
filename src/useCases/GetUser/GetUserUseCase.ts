import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";
import { User } from "../../models/User";

export class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IGetUserRequestDTO) {
    const selectedUser = await this.usersRepository.findByEmail(data.email)
  
    if (!selectedUser) {
      throw new Error('User not found')
    }

    const finalUser = new User(selectedUser);

    return finalUser;
  }
}