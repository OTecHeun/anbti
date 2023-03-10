import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question1(props) {
    const dispatch = useDispatch();

	const saveData = useSelector(state => state.testReducer.saveData)

    const changeResult = (index) => {
        var tmpArr = saveData;
        tmpArr[index] = saveData[index] + 1;
        console.log(tmpArr);

        dispatch(resultSave(tmpArr))
    }

    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCb94R%2FbtrDpOPWwiY%2FI6j26wxK2D3GaYkettbty1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q1.</p>
                <p className='qut_txt'>댕댕이가 선물을 받았다! 반응은!?</p>
            </div>
            <div className='buttons'>
                 <Link to="/dduka/2" onClick={() => changeResult(0)}>
                    <button className='top'>우와! 뭘까 큰 인형?? 터그놀이 하는 거 ?? 뭐든 다 좋아</button>
                </Link>
                <Link to="/dduka/2" onClick={() => changeResult(1)}>
                    <button className='bottom' >음...! 생김새를 보아하니 공이군</button>
                </Link>
            </div>
        </>
    );
}
export default Question1;