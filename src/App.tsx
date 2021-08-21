import React from 'react';

import { Slideshow } from './components/Slideshow';
import { Container } from './styles/GlobalStyles';

import NatureImg01 from './assets/nature/nature01.jpeg';
import NatureImg02 from './assets/nature/nature02.jpeg';
import NatureImg03 from './assets/nature/nature03.jpeg';
import NatureImg04 from './assets/nature/nature04.jpeg';
import NatureImg05 from './assets/nature/nature05.jpeg';
import NatureImg06 from './assets/nature/nature06.jpeg';
import NatureImg07 from './assets/nature/nature07.jpeg';
import NatureImg08 from './assets/nature/nature08.jpeg';

const imageUrlList = [
  NatureImg01,
  NatureImg02,
  NatureImg03,
  NatureImg04,
  NatureImg05,
  NatureImg06,
  NatureImg07,
  NatureImg08,
];

function App() {
  return (
    <Container>
      <Slideshow imgUrlList={imageUrlList} />
    </Container>
  );
}

export default App;
