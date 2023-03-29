import React from 'react';
import '../resources/sass/Result.scss';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Result(props) {

    const saveData = useSelector(state => state.testReducer.saveData)
    const [fetchedData, setFetchedData] = useState({});

    var resultMBTI = '';

    // I & E
    if ( saveData[0] > saveData[1] ) {
        resultMBTI += "E";
    }
    else {
        resultMBTI += "I";
    }
    // N & S
    if ( saveData[2] > saveData[3] ) {
        resultMBTI += "N";
    }
    else {
        resultMBTI += "S";
    }
    // F & T
    if ( saveData[4] > saveData[5] ) {
        resultMBTI += "F";
    }
    else {
        resultMBTI += "T";
    }
    // J & P
    if ( saveData[6] > saveData[7] ) {
        resultMBTI += "P";
    }
    else {
        resultMBTI += "J";
    }

    var data = [];

    useEffect(() =>{
        fetch('/nbti.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then((res) => res.json())
          .then((data) => {
            data.map((el) => {
                if (el.type == resultMBTI) {
                    console.log('el',el)
                    setFetchedData(el)
                }
            })
          })
    },[])

    return (
        <div className='bigBox'>
            <div className='hide'></div>
            <div className='content'>
                <p>과연 우리 댕댕이의 MBTI는!?</p>
                <div>사진</div>
                <p className='resultNbti'>{ resultMBTI }</p>
                <p>설명{ fetchedData.Desc }</p>
                <p>{resultMBTI} 댕댕이의 학교생활 동화!</p>
                <button className='tale'><Link to='/gpt'>동화보러 Go!</Link></button>
            </div>
        </div>
    );
}

export default Result;