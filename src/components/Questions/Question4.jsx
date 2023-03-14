import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question4(props) {

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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbj0Z5l%2FbtrDpOWLZh1%2Flm00SOWQUwfXKZLtxPJmyK%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q4.</p>
                <p className='qut_txt'>댕댕아~ 산책가자~!</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/5" onClick={() => changeResult(7)}>
                    <button className='top'>오늘은 근처에 자주 가던 놀이터에서 쉬를 하고 담에 슈퍼로 가야지</button>
                </Link>
                <Link to="/dduka/5" onClick={() => changeResult(8)}>
                    <button className='bottom'>오늘은 여기가 끌리는데?? 집사의 줄을 당긴다</button>
                </Link>
            </div>
        </>
    );
}
export default Question4;