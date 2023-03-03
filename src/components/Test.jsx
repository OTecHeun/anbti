import React, { useState } from 'react';
import '../resources/sass/Test.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Link, Route, Routes} from 'react-router-dom';

import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Question5 from './Questions/Question5';
import Question6 from './Questions/Question6';
import Question7 from './Questions/Question7';
import Question8 from './Questions/Question8';
import Question9 from './Questions/Question9';
import Question10 from './Questions/Question10';
import Result from './Result';

function Test(props) {

	const [value, setValue] = useState([]);
	
    return (
        <div className='testContent'>
            <div className='progBar'>
                <Progress percent={88} status="success" />
            </div>
            //프로그래스 바는 페이지가 바뀌어도 바뀌지 않고 그대로 있는 요소니까 여기 둔다!

            <Routes>
				<Route path="/*" element={<Question1 />} />
				<Route path="/2" element={<Question2 />} />
				<Route path="/3" element={<Question3 />} />
				<Route path="/4" element={<Question4 />} />
				<Route path="/5" element={<Question5 />} />
				<Route path="/6" element={<Question6 />} />
				<Route path="/7" element={<Question7 />} />
				<Route path="/8" element={<Question8 />} />
				<Route path="/9" element={<Question9 />} />
				<Route path="/10" element={<Question10 />} />
				<Route path="/result" element={<Result />} />
			</Routes>
            //여기는 라우트가 바뀌면 교체될 내용을 적어준다.
        </div>
    );
}
export default Test;