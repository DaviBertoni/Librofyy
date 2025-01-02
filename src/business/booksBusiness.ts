import { BooksData } from "../data/booksData";
import { Response } from "express";
import { HttpException } from "../errors/exeception";

export class BooksBusiness {
    private booksData: BooksData;

    constructor() {
        this.booksData = new BooksData();
    }

    buscarLivros = async (res: Response, titulo?: string, autor?: string, genero?: string, dataPublicacao?: string) => {
        try {
            let livros;
            const data = dataPublicacao ? new Date(dataPublicacao as string) : undefined;

            if (!titulo && !autor && !genero && !dataPublicacao) {
                livros = await this.booksData.buscarTodosLivros(res);
            } else {
                livros = await this.booksData.buscarLivros(res, titulo, autor, genero, data);
            }

            return livros;
        }
        catch (e: any) {
            HttpException(res, 500, "Não foi possivel buscar os livros");
            throw new Error();

        }
    }
}
