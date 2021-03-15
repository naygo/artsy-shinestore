import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
//import * as yup from 'yup';

import { ProductsRepository } from '../repositories/ProductsRepository';

class ProductController {

    async index(req: Request, res: Response) {
        
        const productsRepository = getCustomRepository(ProductsRepository);

        const products = await productsRepository.find();

        return res.status(200).json(products);
    }
    
    async create(req: Request, res: Response) {
        const { name, value, description, category_id } = req.body;
        const fileName = req.file.originalname;

        const productsRepository = getCustomRepository(ProductsRepository);

        const product = productsRepository.create({
            name, 
            value, 
            description,
            img_link: fileName, 
            category_id
        });

        await productsRepository.save(product);

        return res.status(201).json(product);
    }
}

export { ProductController };