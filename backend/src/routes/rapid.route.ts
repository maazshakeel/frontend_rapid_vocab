import express from 'express'
import {
  welcome,
  showComplaint,
  createComplaint,
  finishComplaint,
  getComplaints,
  getComplaintsDetails,
  getComplaintCategory,
  getComplaintStatus,
  getComplaintType
} from '../controllers/complaints.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = express.Router()

router.get(
  "/api/checking",
  welcome
)

router.post(
  "/api/createComplaint",
  verifyToken,
  createComplaint
)

router.get(
  "/api/showComplaint",
  verifyToken,
  showComplaint
)

router.delete(
  "/api/complaint",
  verifyToken,
  finishComplaint
)

router.get(
  "/api/complaints",
  verifyToken,
  getComplaints
)

router.get(
  "/api/complaintDetails",
  verifyToken,
  getComplaintsDetails
)

router.get(
  "/api/complaintStatus",
  verifyToken,
  getComplaintStatus
)

router.get(
  "/api/complaintType",
  verifyToken,
  getComplaintType
)

router.get(
  "/api/complaintCategory",
  verifyToken,
  getComplaintCategory
)

export default router;
