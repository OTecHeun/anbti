import React from 'react';
import '../resources/sass/Test.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function test(props) {
    return (
        <div className='testContent'>
            <div className='progBar'>
                <Progress percent={88} status="success" />
            </div>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCb94R%2FbtrDpOPWwiY%2FI6j26wxK2D3GaYkettbty1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q1.</p>
                <p>댕댕이가 선물을 받았다! 반응은!?</p>
            </div>
            <div className='buttons'>
                <button className='top'>우와! 뭘까 큰 인형?? 터그놀이 하는 거 ?? 뭐든 다 좋아</button>
                <button className='button'>음...! 생김새를 보아하니 공이군</button>
            </div>
        </div>
    );
}

export default test;