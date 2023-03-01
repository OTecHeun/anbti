import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question5(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsYRpr%2FbtrDrPt4Ke3%2FFuvorEJALP3oZvXKOFuCP1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q5.</p>
                <p className='qut_txt'>산책 가다가 만난 행인! "어머~ 댕댕이 너무 귀엽다"</p>
            </div>
            <div className='buttons'>
                <button className='top'>
                    <Link to="/dduka/6" >맞아요. 저예요. 기다렸어요. 당신의 관심. 만져! 예뻐해줘! 사랑해줘!</Link>
                </button>
                <button className='button'>
                    <Link to="/dduka/6" >으르릉,,, 으즈므르,,, 일단 피한다</Link>
                </button>
            </div>
        </>
    );
}

export default Question5;