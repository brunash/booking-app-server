import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, updateRoom, getRoom, getAllRooms } from "../controllers/room.js";

const router = express.Router();


//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin,  updateRoom);

//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);

//GET SPECIFIC HOTEL
router.get("/:id", getRoom);

//GET ALL 
//
router.get("/", getAllRooms);


export default router;
