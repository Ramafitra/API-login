import Pengajuan from "../models/FormPengajuanModels.js";
import { verifyToken } from "./Auth.js";

export const getFormPengajuan = async(req, res) => {
    try {
        const response = await Pengajuan.findAll({
            attributes: ['id','nik','name','alamat']
        });
        res.status(200).json(response);
        verifyToken;
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getFormPengajuanById = async(req, res) => {
    try {
        const response = await Pengajuan.findOne({
            attributes: ['id','nik','name','alamat'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createFormPengajuan = async (req, res) => {
    const { nik, name,alamat } = req.body;
    try {
        await Pengajuan.create({
            nik: nik,
            name: name,
            alamat: alamat,
        });
        res.json({ msg: "form pengajuana berhasil di isi " });
    } catch (error) {
        console.log(error);
    }
};

export const updateFormPengajuan = async(req, res) =>{
const {name, nik, alamat} = req.body;
try {
    await Jabatans.update({
        name: name,
        nik: nik,
        alamat: alamat,
    },{
        where:{
            uuid : req.params.id
        }
    });
    res.status(201).json({msg: "Form berhasil di isi"})
} catch (error) {
    console.log(error)
}
}
