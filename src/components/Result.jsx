import React from 'react';
import '../resources/sass/Result.scss';

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
                <p>intp 댕댕이의 학교생활 동화!</p>
                <button className='tale'><Link to='/dduka'>동화보러 Go!</Link></button>
            </div>
        </div>
    );
}

export default Result;