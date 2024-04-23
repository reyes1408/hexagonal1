import express from "express"
import { conexionDB } from './database/database'
import { vendedorRouter } from "./vendedor/infraestructura/vendedorRoutes"
import { productoRouter } from "./producto/infraestructura/productoRoutes";

const app = express();

app.use(express.json());
app.use('/vendedores', vendedorRouter);
app.use('/productos', productoRouter);

async function connectionToServer() {
    try {
        await conexionDB()
        app.listen(3000, () => {

            console.log("Servidor corriendo en el puerto 3000");
            
        })

    } catch (error) {
        console.log("No se pudo establecer conexion con el servidor.", error);
        
    }
}

connectionToServer();
