import React, { useState } from 'react';
import '../resources/sass/Test.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Link, Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import Question11 from './Questions/Question11';
import Question12 from './Questions/Question12';
import Result from './Result';

function Test(props) {

	const saveData = useSelector(state => state.testReducer.saveData)

    return (
        <div className='testContent'>
            <div className='progBar'>
                <Progress percent={88} status="success" />
                array: { saveData }
            </div>

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
				<Route path="/11" element={<Question11 />} />
				<Route path="/12" element={<Question12 />} />
				<Route path="/result" element={<Result />} />
			</Routes>
        </div>
    );
}
export default Test;