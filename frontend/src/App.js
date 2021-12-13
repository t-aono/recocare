import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

import styles from "./MainStyles.module.css";
import { Header } from './components/Header';
import { Top } from './components/Top';
import { Product } from './components/Product';
import { QuestionForm } from './components/QuestionForm';
import { Ranking } from './components/Ranking';
import NotFound from './svgs/undraw_page_not_found.svg';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container className={styles.mainFontColor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route exact path="/question">
              <QuestionForm />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="*">
              <Center mt="20">ページが見つかりません！</Center>
              <Center mt="20">
                <Image src={NotFound} />
              </Center>
              <Center mt="20" color="red.600">
                <Link to="/">トップへ</Link>
              </Center>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
