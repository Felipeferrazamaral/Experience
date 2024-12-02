import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserUseCase from '../useCase/CreateUserUseCase.js'

export default class UserService {
  private createUserUseCase: CreateUserUseCase

  constructor() {
    this.createUserUseCase = new CreateUserUseCase()
  }

  public async createUserHandler(payload: any) {
    const user = await this.createUserUseCase.execute(payload)

    if (user instanceof Error) {
      throw user
    }

    return ctx.response.status(200).json(user)
  }
}