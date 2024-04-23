import amqplib from 'amqplib'
import { Vendedor } from '../../dominio/vendedor'
import { Inotification } from '../../aplicacion/servicios/notification'

export class Notification implements Inotification {
    
    provideChannel: amqplib.Channel | undefined

    async conn() {
        try {
            const connection = await amqplib.connect("amqp://guest:guest@54.224.107.230")
            this.provideChannel = await connection.createChannel()
            console.log("Conexion exitosa"); 
            return true
        } catch (error) {
            console.log("Error en infraestructura (helpers/notification)",error)
            return false
        }
    }

    notification(vendedor: Vendedor): boolean {
        if(this.provideChannel === undefined) {
            return false
        }
        const exchange = "exchangeRabbit";
        //revisa que exista y que los datos existan
        console.log(JSON.stringify(vendedor.id));
        
        this.provideChannel.assertExchange(exchange, 'direct', {durable:true}); //Configuración del exchange
        this.provideChannel.publish(exchange, '12345', Buffer.from(JSON.stringify(vendedor.id))); //Información que se manda al exchange (vendedor.id)
        console.log("Mensaje enviado al exchange");
        return true;
    }
}
