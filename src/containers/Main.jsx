import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Intro from '../components/Intro';
import Test from '../components/Test';
import '../resources/sass/Main.scss';

function Main(props) {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/dduka' element={<Test />} />
    </Routes>
  );
}

export default Main;