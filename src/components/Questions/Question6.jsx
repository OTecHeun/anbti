import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question6(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnCris%2FbtrDynCOWqA%2F2cmbUHnyHQsYRAH3ULFUf1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q6.</p>
                <p className='qut_txt'>멍 때리고 있는 댕댕이에게 다른 댕댕이의 짖는 소리가 들린다!</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/7" >
                    <button className='top'>멍멍! 와를르 멍! 무서운게 왔나봐! 온갖 망상에 같이 따라 짖는다</button>
                </Link>
                <Link to="/dduka/7" >
                    <button className='bottom'>어 왜 짖지..? 주위 상황을 파악한다</button>
                </Link>
            </div>
        </>
    );
}
export default Question6;