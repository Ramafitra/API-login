import express from "express";
import { createFormPengajuan, getFormPengajuan, getFormPengajuanById } from "../controller/FormPengajuanController.js";


const router = express.Router();
router.get('/Pengajuan', getFormPengajuan);
router.get('/Pengajuan/', getFormPengajuanById);
router.post('/Pengajuan', createFormPengajuan);
router.patch('/Pengajuan', createFormPengajuan);

export default router;