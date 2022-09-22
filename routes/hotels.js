import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin,  updateHotel);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

//GET SPECIFIC HOTEL
router.get("/find/:id", getHotel);

//GET ALL 
//
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);


export default router;
