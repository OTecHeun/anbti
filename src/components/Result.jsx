import React from 'react';

import { Link } from 'react-router-dom';

function Result(props) {
    return (
        <div className='bigBox'>
            <div className='hide'></div>
            <div className='content'>
                <p>결과 페 이 지 지 료!</p>
                <div>사진</div>
                <p>intp</p>
                <p>설명</p>
                <p>우리 댕댕이의 동화만들기</p>
                <button><Link to='/dduka'>동화만들기</Link></button>
            </div>
        </div>
    );
}

export default Result;