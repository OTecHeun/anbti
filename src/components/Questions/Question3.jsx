
import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question3(props) {

    const dispatch = useDispatch();

	const saveData = useSelector(state => state.testReducer.saveData);

    const changeResult = (index) => {
        var tmpArr = saveData;
        tmpArr[index] = saveData[index] + 1;
        console.log(tmpArr);

        dispatch(resultSave(tmpArr))
    }

    return (
        <>
        <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5qAHJ%2FbtrCE3k13mH%2FVbkHvh3YvXOOI9okM2mOk0%2Fimg.jpg'/>
        <div>
            <p className='qut'>Q3.</p>
            <p className='qut_txt'>친구와 신나게 놀고난 후!</p>
        </div>
        <div className='buttons'>
            <Link to="/dduka/4" onClick={() => changeResult(1)}>
                <button className='top'>이제 슬슬 집 갈까??(아..얼른 혼자 쉬고싶어...)</button>
            </Link>
            <Link to="/dduka/4" onClick={() => changeResult(0)}>
                <button className='bottom'>우리 집에 가서 자자 같이 더 놀자 내일도 놀자~!</button>
            </Link>
        </div>
    </>
    );
}
export default Question3;