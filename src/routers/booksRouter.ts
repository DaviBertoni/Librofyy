import express from "express";
import { BooksController } from "../controller/booksController";

export const booksRouter = express.Router();

const booksController = new BooksController();

booksRouter.get("/buscarLivros", booksController.buscarLivros);
