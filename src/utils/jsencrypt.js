import JSEncrypt from 'jsencrypt';
import { getPublicKey } from '@/api/login';

export const passwordEncryption = (password) => {
    getPublicKey().then(res => {
        const publicKey = res.data;
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey)
        password = encrypt.encrypt(password)
        // localStorage.setItem("password",password)
        return password;
    }).catch(err => console.log(err))
}