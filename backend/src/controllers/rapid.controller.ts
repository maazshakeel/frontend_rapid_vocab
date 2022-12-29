import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { TCreateComplaint } from '../types/rapid.type'
import jwt from 'jsonwebtoken'
import ComplaintList from '../../../src/components/ComplaintLists'

const TOKEN_KEY: string = "^)<FT#ZwJ4?Xl'<<<<>>>>>>>bCpmp+<<<<>>>}ApotSTO"

// prisma client
const prisma = new PrismaClient()

// create complaint
const createComplaint = (req: Request, res: Response) => {
  const { ticketNo, type, complaintDetail, isUrgent }: TCreateComplaint =
    req.body

  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)
  console.log(user_id.id)

  async function main() {
    await prisma.complaints.create({
      data: {
        ticketNo,
        ComplaintStatus: {
          create: {
            isResolved: false,
            isClosed: false
          }
        },
        ComplaintCategory: {
          create: {
            name: 'others'
          }
        },
        ComplaintDetails: {
          create: {
            complaintDetail: complaintDetail,
            complaintSelectedOptions: 'Nothing',
            isUrgent: isUrgent
          }
        },
        ComplaintType: {
          create: {
            type: type
          }
        },
        clientId: user_id.id
      }
    })
    return res.send('Created complaint!')
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
// finish complaint
const finishComplaint = (req: Request, res: Response) => {
  const { ticketNo } = req.body

  if (!ticketNo) {
    return res.send({
      status: 'error',
      message: 'Please provide ticket number!'
    })
  }
  if (ticketNo < 6) {
    return res.send({
      status: 'error',
      message: 'Please provide valid ticket number!'
    })
  }

  async function main() {
    // deleting complaint
    await prisma.complaints.delete({
      where: {
        ticketNo
      },
      include: {
        ComplaintCategory: true,
        ComplaintDetails: true,
        ComplaintStatus: true,
        ComplaintType: true
      }
    })
    return res.send({
      status: 'success',
      message: 'complaint deleted succesfuly'
    })
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

// show complaint
const showComplaint = (req: Request, res: Response) => {
  // id
  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)
  const id = user_id.id

  // get complaint
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: id
      },
      select: {
        ticketNo: true,
        ComplaintCategory: true,
        ComplaintStatus: true,
        ComplaintDetails: true
      }
    })
    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

// get complaints
const getComplaints = (req: Request, res: Response) => {
  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)

  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ticketNo: true,
        ComplaintCategory: true,
        ComplaintStatus: true,
        ComplaintDetails: true,
        ComplaintType: true
      }
    })
    console.log(complaints)
    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

// get complaint detail
const getComplaintsDetails = (req: Request, res: Response) => {
  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)

  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ComplaintDetails: true
      }
    })
    if (!complaints) {
      console.log('No compalint')
    }
    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
//
// get complaint status
const getComplaintStatus = (req: Request, res: Response) => {
  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)

  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ComplaintStatus: true
      }
    })
    if (!complaints) {
      console.log('No compalint')
    }
    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

// get complaint category
const getComplaintCategory = (req: Request, res: Response) => {
  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)

  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ComplaintCategory: true
      }
    })
    if (!complaints) {
      console.log('No compalint')
    }
    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

// get complaint type
const getComplaintType = (req: Request, res: Response) => {
  return res.send('Hello')

  const { user_id } = jwt.verify(req.headers['x-access-token'], TOKEN_KEY)

  console.log(user_id.id)

  // get all complaints
  async function main() {
    const complaints = await prisma.complaints.findMany({
      where: {
        clientId: user_id.id
      },
      select: {
        ComplaintType: true
      }
    })
    if (!complaints) {
      console.log('No compalint')
    }

    return res.send(complaints)
  }
  // check errors
  main()
    .catch(e => {
      res.send({ status: 'error', error: e.message })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
const welcome = (req: Request, res: Response) => {
  //return res.json({ok: "Welcome 🙌"});
}

export {
  welcome,
  createComplaint,
  showComplaint,
  getComplaintType,
  getComplaintStatus,
  getComplaintCategory,
  getComplaintsDetails,
  finishComplaint,
  getComplaints
}
