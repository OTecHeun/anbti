import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question2(props) {
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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrlkhu%2FbtrDpPVF2M6%2FIyarNlPjQYvkOya40TpXB0%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q2.</p>
                <p className='qut_txt'>꿈나라로 빠져든 댕댕이는 어떤 꿈을 꿀까??</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/3" onClick={() => changeResult(3)}>
                    <button className='top'>구름 위를 둥~둥~~ 날아다니면서 도넛 구름을 냠냠</button>
                </Link>
                <Link to="/dduka/3" onClick={() => changeResult(2)}>
                    <button className='bottom'>꿈? 그런 거 없이 잠은 눈 감았다가 뜨는 일</button>
                </Link>
            </div>
        </>
    );
}
export default Question2;