import { genSalt, hash, compare, hashSync, genSaltSync } from 'bcryptjs';


const SALT_RANDOMS = 8;



const hashPassword = async (password: string) => {
    
    const saltGenerated = await genSalt(SALT_RANDOMS);

    

    const salt = genSaltSync(SALT_RANDOMS);
    const hash = hashSync(password, salt);
    // Store hash in your password DB.



   
    return hash;

//return  hash(password, saltGenerated);
        
}

const verifyPassword = async(password: string, hashedPassword: string) => { 
   return await compare(password, hashedPassword);
    
};




export const PasswordCripto = {
    hashPassword,
    verifyPassword,

};