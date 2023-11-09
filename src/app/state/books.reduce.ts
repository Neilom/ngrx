import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { BooksApiActions } from "./books.action";


export const initialState: ReadonlyArray<Book> = [];

export const booksReduce = createReducer(
  initialState,
  //@ts-ignore
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
)
