import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()
// @ts-ignore
import bcrypt from 'bcryptjs'

// import types
import { TCreateClient } from "../types/user.type"

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

const clientId = async (req: Request, res: Response) => {

  if (!req.body.email) return res.send("Please provide email!")

  const user_token = req.headers['x-access-token']
  async function main() {
    const clientId = await prisma.client.findFirst({
      where: {
        email: req.body.email
      },
      select: {
        id: true
      }
    })
    console.log(clientId)
    return res.send(clientId?.id)
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', message: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

const createUser = async (req: Request, res: Response) => {

  let { firstName, lastName, cnic, block, homeNo, email, phoneNo, password, verified }: TCreateClient = req.body

  // validation
  if (password.length < 5) {
    return res.send({ status: 'error', message: "Password is too small!" })
  }

  // creating client
  async function main() {
    // check if user already exists
    // Validate if user exists in our database
    const oldUser = await prisma.client.findUnique({
      where: {
        email: req.body.email
      }
    })

    if (oldUser) {
      res.send({ status: 'error', message: "User already exists. Please login." })
    }

    // hash the password
    const hashedPass = await bcrypt.hash(password, 10)

    // create data
    const user = await prisma.client.create({
      data: {
        firstName,
        lastName,
        cnic,
        email,
        phoneNo,
        block,
        homeNo: homeNo,
        password: hashedPass,
        verified,
      }
    })

    // send request to client
    return res.send({ status: 'success', message: "User successfully registered!" })
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', message: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

const logIn = async (req: Request, res: Response) => {
  // get email and password
  if (!req.body.email || !req.body.password) {
    return res.send({ status: "error", message: "Please provide email and password!" })
  }
  console.log(`${req.body.email} is trying to login ..`);

  // check if that user actually exists
  async function main() {
    // find user with that email
    const response = await prisma.client.findFirst({
      where: {
        email: req.body.email,
      },
      select: {
        email: true,
        password: true
      }
    })
    if (!response) {
      return res.send({ status: 'error', message: "User don't exist. Go to registration" })
    }
    // console.log(await bcrypt.compare(req.body.password, response.password))
    console.log(response.email)
    if (await bcrypt.compare(req.body.password, response.password)) {
      // get the id
      const user_id = await prisma.client.findUnique({
        where: {
          email: req.body.email
        },
        select: {
          id: true
        }
      })

      // logging to id to console
      console.log(user_id)

      // Create token
      const token = jwt.sign(
        { user_id: user_id, email: req.body.email },
        TOKEN_KEY,
      );

      // update token
      await prisma.client.update({
        where: {
          email: req.body.email
        },
        data: {
          token: token
        }
      })
      return res.send({ status: 'ok', message: "Login Successful", token: token, user_id: user_id })
    }
    res.send({ status: 'error', message: 'Invalid username/password' })
  }
  // check errors
  main()
    .catch((e) => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

const getClientData = async (req: Request, res: Response) => {

  console.log(req.headers['x-access-token'])

  async function main() {
    const response = await prisma.client.findFirst({
      where: {
        token: req.headers['x-access-token']
      },
      select: {
        createdAt: true,
        firstName: true,
        lastName: true,
        cnic: true,
        email: true,
        phoneNo: true,
        verified: true,
        block: true,
        homeNo: true,
      }
    })
    console.log(response)
    return res.send(response)
  }
  main()
    .catch((e) => {
      res.send({ status: 'error', error: e })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

const welcome = (req: Request, res: Response) => {
  res.status(200).send("Welcome 🙌 ");
};

export { createUser, welcome, clientId, logIn, getClientData }
