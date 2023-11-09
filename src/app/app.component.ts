import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from './service/books.service';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }))
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }))
  }

  constructor(
    private store: Store,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

}
