import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository"
import { EncriptPassHelpers } from '../infraestructura/helpers/encriptPass'
import { Notification } from "../infraestructura/helpers/notification";

export class CreateVendedorUseCase {

    constructor(readonly vendedorRepository: VendedorRepository, readonly EncriptPassHelpers: EncriptPassHelpers, readonly notification: Notification){}

    async run(
        id: number,
        name: string,
        lastName: string,
        password : string
    ): Promise <Vendedor | null> {
        try {

            const encryptedPassword = await this.EncriptPassHelpers.encodePassword(password)

            const vendedorCreated = await this.vendedorRepository.createVendedor(
                id,
                name,
                lastName,
                encryptedPassword,
            )

                if (vendedorCreated) {
                    this.notification.notification(vendedorCreated);
                }

            return vendedorCreated
        } catch (error) {
            console.log("Error en el archivo (createvendedorUseCase)", error);
            return null
        }
    }
}
