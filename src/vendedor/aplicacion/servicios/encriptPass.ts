export interface IencriptPass {
    encodePassword(pass: string): Promise <string>,
    authPass(passEncoded: string, hashingPass: string): Promise <boolean>, 
}