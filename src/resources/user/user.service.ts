import { getRepository } from "typeorm";
import md5 from 'crypto-js/md5';
import { User } from '../../entitys/Users';
import AppError from "../../shared/errors/AppError";
import { UserSignIn } from "./dtos/users.signin.dto";
import { UserSignUp } from "./dtos/users.signup.dto";

export default class UserService {
    async signin(user: UserSignIn) {
        const userRepository = getRepository(User);
 
        const {email, password} = user;
        const passwordHash = md5(password).toString();
 
        const existUser = await userRepository.findOne({where: {email, password: passwordHash}})
 
        if(!existUser){
          throw new AppError('User was not found', 401);
        }
}

async signup(user: UserSignUp) {
    const userRepository = getRepository(User);

    const existUser = await userRepository.findOne({where: {email: user.email}})

    if(existUser){
      throw new AppError('This email already has registered', 401);
    }
