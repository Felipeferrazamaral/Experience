import { PrismaClient } from '@prisma/client'

export default class UserRepository {
  private static instance: PrismaClient
  private prisma: PrismaClient

  constructor() {
    this.prisma = this.getInstance()
  }

  public getInstance(): PrismaClient {
    if (!UserRepository.instance) {
        UserRepository.instance = new PrismaClient()
    }
    return UserRepository.instance
  }

  public async createUser(payload: any) {
    try {
      const user = await this.prisma.user.create({
        data: {
          fullName: payload.fullName,
          email: payload.email,
          password: payload.password,
        },
      })

      return user
    } catch (error) {
      return new Error('Error creating user')
    }
  }
}