import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LibraryView from '../components/library-page'
import { LibraryStore } from '../stores/library'

import BookView from '../components/book-page'
import { BookStore } from '../stores/book'

export const Routes = () => (
  <Switch>
    <Route path='/books/:bookId'>
      <BookView book={BookStore} />
    </Route>
    <Route path='/'>
      <LibraryView library={LibraryStore} />
    </Route>
  </Switch>
);