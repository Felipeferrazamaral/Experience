import { HttpContext } from "@adonisjs/core/http"
import UserService from "../service/UserService.js"

export default class UserController {
  private UserService: UserService

  constructor() {
    this.UserService = new UserService()
  }

  public async create(ctx: HttpContext) {
    await this.UserService.createUserHandler(await ctx.request.validate(CreateValidator), ctx)
  }
}