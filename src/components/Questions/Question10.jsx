
import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question10(props) {
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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcPieNd%2FbtrDe3efonJ%2F7GhDqlTnkEYTO0UMqgPuYk%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q10.</p>
                <p className='qut_txt'>낯선 곳으로 여행을 떠나는 댕댕이가 하는 생각은!?</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/result" onClick={() => changeResult(0)}>
                    <button className='top'>낯선 곳은 좀 무서운데,,ㅜ_ㅜ 자기만의 세상에 빠진다..</button>
                </Link>
                <Link to="/dduka/result" onClick={() => changeResult(1)}>
                    <button className='bottom'>우와 저기 재밌어 보인다. 여기저기 가서 오줌 막 눌거야!</button>
                </Link>
            </div>
        </>
    );
}
export default Question10;