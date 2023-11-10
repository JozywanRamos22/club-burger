import { Router } from 'express'
import multer from 'multer'
import CategoryController from './app/controllers/CategoryController'
import OrderController from './app/controllers/OrderController'
import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import autMiddleware from './app/middlewares/auth'
import multerconfig from './config/multer'
const upload = multer(multerconfig)
const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(autMiddleware) // todas as rotas abaixo do meu middleware serão chamadas

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

export default routes
