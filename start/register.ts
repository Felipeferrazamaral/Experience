import router from '@adonisjs/core/services/router'
import UserController from 'app/controller/user_controller.js'

router
  .group(() => {
    router.post('/create', 'UserController.create')
  })
  .prefix('api/v1/user')

export default router