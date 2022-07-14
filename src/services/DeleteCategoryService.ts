import { Category } from "../entities/Category";
import { IDataSource } from "../interfaces/DataSource_interface";


export class DeleteCategoryService {
    async execute(id: string, dataSource: IDataSource) {
        try {
            const repo = dataSource.getRepository(Category)

            if (!await repo.findOneBy({ id: id })) {
                return new Error("Category does not exists!")
            }

            const deleted = await repo.delete({ id: id })
            console.log(deleted)

        } catch (error) {
            return new Error(error)
        }
    }
}