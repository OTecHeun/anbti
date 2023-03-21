import React from 'react';
import {Link} from 'react-router-dom';

function Intro(props) {
    return (
        <div className='bigBox'>
            <div className='hide'></div>
            <div className='content'>
                <p className='title'>댕댕이가 사람이라면!?</p>
                <p>- 학교생활 -</p>
                <p className='sub-title'>댕댕이의 MBTI를 검사하면 AI가 <br />우리 댕댕이가 주인공인 동화를 만들어줍니다.</p>
                <div>사진</div>
                <div>할 수 있는지 알아봐야하는 url연결</div>
                <button><Link to='/dduka'>테스트 시작!</Link></button>
                <div>메이드 이미지</div>
            </div>
        </div>
    );
}

export default Intro;