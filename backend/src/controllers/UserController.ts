import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm'
import bcryptjs from 'bcryptjs';
import * as yup from 'yup';
import { config } from '../config/config';

import { UsersRepository } from '../repositories/UsersRepository';
import { ProfileRepository } from '../repositories/ProfileRepository';

class UserController {

    async findAll(req: Request, res: Response) {

        try {
            const usersRepository = getCustomRepository(UsersRepository);

            const users = await usersRepository.find();

            return res.json(users);

        } catch (error) {
            console.log(error);
        }


    }

    async findOne(req: Request, res: Response) {

        try {
            const { id } = req.params;

            const usersRepository = getCustomRepository(UsersRepository);

            const user = await usersRepository.findOne(id);

            return res.json(user);
            
        } catch (error) {
            console.log(error);

        }

    }

    async create(req: Request, res: Response) {

        try {
            const { profile_id } = req.params;
            const { name, email, password } = req.body;

            const usersRepository = getCustomRepository(UsersRepository);


            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required(),
            });

            const profileRepository = getCustomRepository(ProfileRepository);
            const profile = await profileRepository.findOne({ where: { id: profile_id } });

            try {
                await schema.validate(req.body, { abortEarly: false })

            } catch (err) {
                return res.status(400).json({ error: err });
            }

            const userAlreadyExists = await usersRepository.findOne({
                email
            });

            if (userAlreadyExists)
                return res.status(400).json({ error: 'User already exists!' });

            const user = usersRepository.create({
                profile,
                name,
                email,
                password: await bcryptjs.hash(password, 10)
            });

            await usersRepository.save(user);

            return res.json(user);

        } catch (error) {
            console.log(error);

        }

    }

    async login(req: Request, res: Response) {

        try {
            const { email, password } = req.body;

            const usersRepository = getCustomRepository(UsersRepository);

            const userExists = await usersRepository.findOne({ where: { email } });

            if (!userExists)
                return res.status(400).json({ error: 'User does not exists' });

            if (!await bcryptjs.compare(password, userExists.password))
                return res.status(401).json({ error: 'Senha inválida, tente novamente!' });

            return res.status(200).json({
                userExists,
                token: jwt.sign({
                    id: userExists.id,
                    name: userExists.name,
                    email,
                    profile: (userExists.profile.id == 1) ? 'Admin' : 'Cliente'
                }, config.SECRET, { expiresIn: 60 })
            });

        } catch (error) {
            console.log(error);

        }

    }

    async update(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            const usersRepository = getCustomRepository(UsersRepository);

            const userExists = await usersRepository.findOne(id);

            if (!userExists)
                return res.status(400).json({ error: 'User not found' });


            await usersRepository.save({
                name,
                email,
                password: await bcryptjs.hash(password, 10)
            });

            return res.status(201);

        } catch (error) {
            console.log(error);

        }

    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const usersRepository = getCustomRepository(UsersRepository);

            const user = usersRepository.findOne(id);

            await usersRepository.delete({ id: id });

            return res.status(201).json(user);

        } catch (error) {
            console.log(error);
        }
    }
};

export { UserController };