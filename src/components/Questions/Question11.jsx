import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question11(props) {
    const dispatch = useDispatch();

	const saveData = useSelector(state => state.testReducer.saveData)

    const changeResult = (index) => {
        var tmpArr = saveData;
        tmpArr[index] = saveData[index] + 1;
        console.log(tmpArr);

        dispatch(resultSave(tmpArr))
    }

    return (
        <>
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb4JXha%2FbtrCEparCDl%2FJrsDkG5R9srtjYwSKf9240%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q11.</p>
                <p className='qut_txt'>어질리티!? 나도 참가할래!</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/12" onClick={() => changeResult(6)}>
                    <button className='top'>일단 나중에~ 미뤄두고 게임을 한다</button>
                </Link>
                <Link to="/dduka/12" onClick={() => changeResult(7)}>
                    <button className='bottom'>오늘 오전에 일어나서 어질리티 연습을 하고 체력을 키워야지</button>
                </Link>
            </div>
        </>
    );
}
export default Question11;