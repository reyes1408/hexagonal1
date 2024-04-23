import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
import ModelVendedor from "../vendedor/infraestructura/model/vendedor.model";
import ModelProducto from "../producto/infraestructura/model/producto.model";

dotenv.config()

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    models: [ModelVendedor, ModelProducto]
})

//Conexión con la base de datos
export async function conexionDB () {
    try {
        await sequelize.authenticate()
        console.log("Conexión exitosa a la base de datos.");
        
        await sequelize.sync({
            force: false
        })

    } catch (error) {
        console.log("No se pudo establecer conexion con la base de datos", error);
        
    }
}
