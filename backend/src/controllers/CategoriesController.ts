import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';


class CategoriesController {
    async index(req: Request, res: Response) {

        const categoryRepository = getCustomRepository(CategoryRepository);

        const categories = await categoryRepository.find();

        return res.status(200).json(categories);
    }

    async create(req: Request, res: Response) {
        const { category } = req.body;

        const categoryRepository = getCustomRepository(CategoryRepository);

        const createCategory = categoryRepository.create({
            category
        });

        await categoryRepository.save(createCategory);

        return res.status(201).json(category);
    }
}

export { CategoriesController }