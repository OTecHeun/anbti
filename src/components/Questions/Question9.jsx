import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question9(props) {
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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgYEfq%2FbtrCMXMKQJN%2FhnvNq8YDgxtngSiSprtfc0%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q9.</p>
                <p className='qut_txt'>집사가 갑자기 집에서 춤을 추는데..! 그걸 본 댕댕이의 반응은??</p>
            </div>
            <div className='buttons'>
                <Link to="/dduka/10" onClick={() => changeResult(3)}>
                    <button className='top'>나비 잡으러 가는 거지!? 옆에서 점프하고 같이 난리난 댕댕</button>
                </Link>
                <Link to="/dduka/10" onClick={() => changeResult(4)}>
                    <button className='bottom'>어,, 너,,, 뭐하는,,,? 바라본다</button>
                </Link>
            </div>
        </>
    );
}
export default Question9;