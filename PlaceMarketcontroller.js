
import PlaceMarket from "../models/PlaceMarketModels.js";
import { verifyToken } from "./Auth.js";

export const getBarang = async(req, res) => {
    try {
        const response = await PlaceMarket.findAll({
            attributes: ['id','nama_barang','harga_barang','stok']
        });
        res.status(200).json(response);
        verifyToken;
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getBarangById = async(req, res) => {
    try {
        const response = await PlaceMarket.findOne({
            attributes: ['id','nama_barang','harga_barang','stok'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBarang = async (req, res) => {
    
    if(req.files === null) return res.status(400).json({msg: "No file Uploaded"});
    const bio = req.body.bio;
    const nama_barang = req.body.nama_barang;
    const harga_barang = req.body.harga_barang;
    const stok = req.body.stok;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:
    "invalid images"});
    if(fileSize > 50000000) return res.status(422).json({msg: "Image must be less than 5 mb"});

    file.mv(`./public/images/${fileName}`, async(err) =>{
        if(err) return res.status(500).json({msg: err.message});
        try{
            await Profil.create({id: id, nama_barang: nama_barang,harga_barang: harga_barang, stok: stok,background: fileName,url: url});
            res.status(201).json({msg: "Data berhasil ditambah"})
        } catch (error) {
            console.log(error.message);
        }
    })
};
