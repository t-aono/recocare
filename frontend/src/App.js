import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Product } from './components/Product';
import { QuestionForm } from './components/QuestionForm';
import { Ranking } from './components/Ranking';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <QuestionForm />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="*">
              <Center mt={10}>ページが見つかりません！</Center>
              <Center mt={10} color="cyan.500"><Link to="/">トップへ</Link></Center>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
