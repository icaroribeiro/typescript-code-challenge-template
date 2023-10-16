import { Router } from 'express'

import { router as userRouter } from '@/internal/presentation/api/routes/UserRouter'

const rootRouter = Router()

rootRouter.use('/users', userRouter)

export default rootRouter
