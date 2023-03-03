import React from 'react';

import {Link, Route, Routes} from 'react-router-dom';

function Question8(props) {
    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCgVjD%2FbtrDdI2ZvZX%2F7swd0zSzyxDVESXKH6OHh1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q8.</p>
                <p className='qut_txt'>기분이 좋지 않은 댕댕이</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/9" >
                    <button className='top'>좋아하는 장소에 가서 추욱 누워있는다</button>
                </Link>
                <Link to="/dduka/9" >
                    <button className='bottom'>집사에게 들이대며 위로해주고 기분을 풀어버리려고 한다</button>
                </Link>
            </div>
        </>
    );
}
export default Question8;