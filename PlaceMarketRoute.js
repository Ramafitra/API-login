import express from "express";
import { createBarang, getBarang, getBarangById } from "../controller/PlaceMarketcontroller.js";


const router = express.Router();
router.get('/Barang', getBarang);
router.get('/Barang/', getBarangById);
router.post('/Barang', createBarang);
router.patch('/Barang', createBarang);

export default router;