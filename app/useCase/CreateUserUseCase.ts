export default class CreateUserUseCase {
    private userRepository: UserRepository
  
    constructor() {
      this.userRepository = new UserRepository()
    }
  
    public async execute(payload: any) {
      try {
        const createdUser = await this.userRepository.createUser(payload)
        if (createdUser instanceof Error) {
          return createdUser
        }
  
        return createdUser
      } catch (error) {
        return new Error('Error creating user')
      }
    }
  }