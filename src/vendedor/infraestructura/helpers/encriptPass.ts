import {IencriptPass} from '../../aplicacion/servicios/encriptPass';
import bcrypt from 'bcrypt';

export class EncriptPassHelpers implements IencriptPass{

    encodePassword(pass: string): Promise <string>{
        const recurso = 10;
        let passEncoded = bcrypt.hash(pass, recurso);
        return passEncoded;
    }

    authPass(passEncoded: string, hashingPass: string): Promise<boolean> {
        let result = bcrypt.compare(passEncoded, hashingPass);
        return result;
    }
}
