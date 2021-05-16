
import md5 from 'md5';

export default function passwordEncrypt(password: String){
    return md5(password.toString());
}