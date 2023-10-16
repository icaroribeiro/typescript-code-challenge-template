import dataSource from '@/configs/TypeormConfig'
import server from './server'
import 'reflect-metadata'

// MIDDLEWARE
// 1. Body parser
// 2. Logger
// 3. Cookie Parser
// 4. Cors
// ROUTES
// HEALTH CHECKER
// app.get('/api/healthchecker', async (_, res: Response) => {
//   const message = await redisClient.get('try');
//   res.status(200).json({
//     status: 'success',
//     message,
//   });
// });
// UNHANDLED ROUTE
// GLOBAL ERROR HANDLER
dataSource
  .initialize()
  .then(() => {
    console.log(`Datasource has been initialized`)
  })
  .catch(err => {
    console.error(`Failed to initialize datasource:`, err)
  })

const port = process.env.HTTP_PORT

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
