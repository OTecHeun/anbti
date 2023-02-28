import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question2(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCb94R%2FbtrDpOPWwiY%2FI6j26wxK2D3GaYkettbty1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q2.</p>
                <p>질문 투~ㅋ</p>
            </div>
            <div className='buttons'>
                <button className='top'>
                    <Link to="/3" >아아ㅏ</Link>
                </button>
                <button className='button'>
                    <Link to="/3" >뚜기모카 바보</Link>
                </button>
            </div>
        </>

    );
}

export default Question2;