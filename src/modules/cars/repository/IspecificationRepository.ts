import { Specification } from "../model/Specification";



interface ICreateSpecificationDTO {
    name : string ;
    description: string;

}

interface IspecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): void ;
    findByName(name: string): Specification;
}

export { IspecificationRepository };