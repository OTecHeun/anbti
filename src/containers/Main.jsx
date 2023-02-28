import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import Intro from '../components/Intro';
import Test from '../components/Test';
import '../resources/sass/Main.scss';

function Main(props) {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/dduka/*' element={<Test />} />
      // "/dduka/" 로 시작하는 모든 경로는 Test 컴포넌트로 일단 이동!
    </Routes>
  );
}

export default Main;