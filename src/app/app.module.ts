import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reduce';
import { CounterComponent } from './counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { booksReduce } from './state/books.reduce';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReduce, collection: collectionReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
