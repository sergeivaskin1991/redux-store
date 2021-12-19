import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './components/app';
import ErrorBoudnry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
		<ErrorBoudnry>
			<BookstoreServiceProvider value={bookstoreService}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</BookstoreServiceProvider>
		</ErrorBoudnry>
	</Provider>,
	document.getElementById('root')
);