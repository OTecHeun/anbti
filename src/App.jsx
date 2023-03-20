import Main from "./containers/Main";
import GPT from "./containers/GPT";

import {Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/gpt' element={<GPT />} />
      </Routes>
    </div>
  );
}

export default App;
