import { DataTypes, Model } from "sequelize";
import { sequelizeUsers } from "../database/db.js";

class Data_ASN extends Model{}
Data_ASN init(
    {
        NIP: {
            type = DataTypes.INTEGER,
            allowNull = false,
            primarykey = true,
        },
        Nama : {
            type = DataTypes.CHAR,
            allowNull = false,

        },
        Instansi : {
            type = DataTypes.CHAR,
            allowNull = false,

        },
        Kendaraan_Dinas : {
            type = DataTypes.CHAR,
            allowNull = false,
        },
        sequelize = sequelizeUsers
        modelName = "Data_ASN",

    },
);

export default Data_ASN;
