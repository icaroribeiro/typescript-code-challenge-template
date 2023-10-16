import Router, { type Request, type Response, type NextFunction } from 'express'
import UserController from '@/internal/presentation/api/controller/UserController'
import { container } from 'tsyringe'
import asyncHandler from 'express-async-handler'

const router = Router()

const userController = container.resolve(UserController)

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bar = await userController.getAllUsers()
      res.send(bar)
    } catch (err) {
      console.log(err)
      res.status(401).json('Authentication failed!')
    }
  }),
)

export { router }
