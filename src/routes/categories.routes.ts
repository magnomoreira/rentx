import {  Router } from 'express';
import { PostgresCategoryRepository } from '../repository/PostgresCategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categorieRepository = new PostgresCategoryRepository();


categoriesRoutes.post("", ( request , response ) => {
     
    const { name , description } = request.body;

    const createCategoryService = new CreateCategoryService(categorieRepository);
    createCategoryService.execute({name , description})

    return response.status(201).send();

});

categoriesRoutes.get("/", ( request, response ) => {
    const all = categorieRepository.list();

    return response.json(all);
    
})

export { categoriesRoutes };