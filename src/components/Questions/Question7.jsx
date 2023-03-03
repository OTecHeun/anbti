import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question7(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdLUR3g%2FbtrDgiB1dLO%2FMc8iPHCvh9aJ81kTDBcVhK%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q7.</p>
                <p className='qut_txt'>댕댕이 유치원을 다니게 된 댕댕이...</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/8" >
                    <button className='top'>내 하루일정이 정해져있는 건 넘 안정적인 거야! 너무 좋아!!</button>
                </Link>
                <Link to="/dduka/8" >
                    <button className='bottom'>일어나기 귀찮아,,, 시간표도 싫어! 내 맘대로 놀고싶어ㅠ.ㅠ</button>
                </Link>
            </div>
        </>
    );
}
export default Question7;