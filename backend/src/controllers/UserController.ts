import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm'
import * as yup from 'yup';

import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

    async index(req: Request, res: Response) {
        
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await usersRepository.find();

        return res.json(users);
    }
    
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        });

        try {
            await schema.validate(req.body, { abortEarly: false })

        } catch (err) {
            return res.status(400).json({ error: err });
        }

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists)
            return res.status(400).json({error: 'User already exists!'});

        const user = usersRepository.create({
            name, email, password
        });

        await usersRepository.save(user);

        return res.json(user);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({ email });
        console.log(userExists);
        
        if(!userExists)
            return res.status(400).json({error: 'User does not exists'});

        // if (!await bcrypt.compare(password, user.password))
        //     return res.status(401).json({ error: 'Senha inválida, tente novamente!' });

        if(password != userExists.password)
            return res.status(400).json({error: 'Incorret password'});

        return res.status(200).json({ message: 'User logged!'});
    }

    async update (req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne(id);

        if(!userExists)
            return res.status(400).json({ error: 'User not found' });

        //const user = usersRepository.update();

        //await usersRepository.save(user);

        //return res.json(user);
    }
};

export { UserController };