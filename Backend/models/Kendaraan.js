import { DataTypes, Model } from "sequelize";
import { sequelizeUsers } from "../database/db.js";

class Kendaraan_Dinas extends Model{}
Kendaraan_Dinas init(
    {
        Nopol: {
            type = DataTypes.VARCHAR,
            allowNull = false,
            primarykey = true,
        },
        Jenis_Roda : {
            type = DataTypes.INTEGER,
            allowNull = false,

        },
        Merk : {
            type = DataTypes.CHAR,
            allowNull = false,

        },
        Jenis_Kendaraan : {
            type = DataTypes.CHAR,
            allowNull = false,

        },
        Tahun_Kendaraan : {
            type = DataTypes.DATE
            allowNull = false
        }
        sequelize = sequelizeUsers,
        modelName = "Kendaran_Dinas",

    },
);

export default Kendaraan_Dinas;