import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {

  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });



  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Header />
          <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
