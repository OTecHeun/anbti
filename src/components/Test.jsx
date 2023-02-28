import React from 'react';
import '../resources/sass/Test.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Link, Route, Routes} from 'react-router-dom';

import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';

function Test(props) {
    return (
        <div className='testContent'>
            <div className='progBar'>
                <Progress percent={88} status="success" />
            </div>
            //프로그래스 바는 페이지가 바뀌어도 바뀌지 않고 그대로 있는 요소니까 여기 둔다!

            <Routes>
					<Route path="/*" element={<Question1 />} />
					<Route path="/2" element={<Question2 />} />
			</Routes>
            //여기는 라우트가 바뀌면 교체될 내용을 적어준다.

        </div>
    );
}

export default Test;