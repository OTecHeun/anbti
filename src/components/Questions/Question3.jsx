import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question3(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6Vi0A%2FbtrDpOJb4oK%2FNKFqM1QKQSn6kLgfL1Yp51%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q3.</p>
                <p className='qut_txt'>오잉..? 집사가 울고 있잖아..!</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/4" >
                    <button className='top'>어디 아파??ㅠㅠ 내가 핥아줄게 아프지마 집사가 아프면 내가 아프고 심장이 찢어지고 내 세상이 무너지고 그리고 어쩌구 저쩌구</button>
                </Link>
                <Link to="/dduka/4" >
                    <button className='bottom'>시끄럽네... 그칠 때까지 자리를 피한다</button>
                </Link>
            </div>
        </>
    );
}
export default Question3;