import express, { application, Request, response, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { createUser, getClientData, welcome, logIn, clientId } from '../controllers/users.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = express.Router()

router.post(
  '/api/register',
  createUser,
)

router.post(
  '/api/login',
  logIn
)

router.get(
  '/api/client_data',
  verifyToken,
  getClientData
)

router.post(
  "/api/welcome",
  verifyToken,
  welcome
)

router.get(
  "/api/clientId",
  verifyToken,
  clientId
)

export default router;
