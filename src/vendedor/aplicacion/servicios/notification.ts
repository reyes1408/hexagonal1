import amqplib from 'amqplib'
import { Vendedor } from '../../dominio/vendedor'

export interface Inotification {
    provideChannel: amqplib.Channel | undefined;
    conn(): Promise <boolean>
    notification(vendedor: Vendedor): boolean
}
