import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/new', 'UserController.create')
  })
  .prefix('api/v1/user')
