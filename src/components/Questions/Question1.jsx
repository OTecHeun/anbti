import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question1(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCb94R%2FbtrDpOPWwiY%2FI6j26wxK2D3GaYkettbty1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q1.</p>
                <p>댕댕이가 선물을 받았다! 반응은!?</p>
            </div>
            <div className='buttons'>
                <button className='top'>
                    <Link to="/dduka/2" >우와! 뭘까 큰 인형?? 터그놀이 하는 거 ?? 뭐든 다 좋아</Link>
                </button>
                <button className='button'>
                    <Link to="/dduka/2" >음...! 생김새를 보아하니 공이군</Link>
                </button>
            </div>
        </>

    );
}

export default Question1;