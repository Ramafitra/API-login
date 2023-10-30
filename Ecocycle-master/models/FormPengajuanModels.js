import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModels.js";

const { DataTypes } = Sequelize;

const Pengajuan = db.define('pengajuan', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false,
            len: [3, 100]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty:false
        }
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default Pengajuan;