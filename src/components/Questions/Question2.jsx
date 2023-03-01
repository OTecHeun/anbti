import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question2(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrlkhu%2FbtrDpPVF2M6%2FIyarNlPjQYvkOya40TpXB0%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q2.</p>
                <p className='qut_txt'>꿈나라로 빠져든 댕댕이는 어떤 꿈을 꿀까??</p>
            </div>
            <div className='buttons'>
                <button className='top'>
                    <Link to="/dduka/3" >구름 위를 둥~둥~~ 날아다니면서 도넛 구름을 냠냠</Link>
                </button>
                <button className='button'>
                    <Link to="/dduka/3" >꿈? 그런 거 없이 잠은 눈 감았다가 뜨는 일</Link>
                </button>
            </div>
        </>

    );
}

export default Question2;