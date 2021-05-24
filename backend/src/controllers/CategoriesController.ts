import { getCustomRepository } from 'typeorm';
import { json, Request, Response } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';


class CategoriesController {
    
    async index(req: Request, res: Response) {

        const categoryRepository = getCustomRepository(CategoryRepository);

        const categories = await categoryRepository.find();

        return res.status(200).json(categories);
    }

    async create(req: Request, res: Response) {
        const { category } = req.body;

        const nameCategory = category.toUpperCase();

        const categoryRepository = getCustomRepository(CategoryRepository);

        const categoryAlreadyExists = await categoryRepository.findOne({
            category: nameCategory
        });

        if (categoryAlreadyExists)
            return res.status(400).json({ error: 'Category already exists!' });

        const createCategory = categoryRepository.create({
            category: nameCategory
        });

        await categoryRepository.save(createCategory);

        return res.status(201).json(category);
    }

    async update(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const { category } = req.body;

            const nameCategory = category.toUpperCase();

            const categoryRepository = getCustomRepository(CategoryRepository);

            const categoryExists = await categoryRepository.findOne(id);

            const categoryAlreadyExists = await categoryRepository.findOne({
                category: nameCategory
            });

            if (!categoryExists)
                return res.status(400).json({ error: 'Category not found' });

            if (categoryAlreadyExists)
                return res.status(400).json({ error: 'Category already exists!' });

            const categoryUpdated = await categoryRepository.save({
                id,
                category: nameCategory
            });

            return res.status(201).json(categoryUpdated);

        } catch (error) {
            return console.log(error);
        }
    }

    async delete(req: Request, res: Response) {

        try {

            const { id } = req.params;

            const categoryRepository = getCustomRepository(CategoryRepository);

            const category = categoryRepository.findOne(id);

            await categoryRepository.delete({ id: id });

            return res.status(201).json(category);

        } catch (error) {
            return console.log(error);
        }

    }
}

export { CategoriesController }