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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6Vi0A%2FbtrDpOJb4oK%2FNKFqM1QKQSn6kLgfL1Yp51%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q2.</p>
                <p className='qut_txt'>오잉..? 집사가 울고 있잖아..!</p>
            </div>
            <div className='buttons'>
                <div>
                    <Link to="/dduka/3" onClick={() => changeResult(4)}>
                        <button className='top'>어디 아파??ㅠㅠ 내가 핥아줄게 아프지마 집사가 아프면 <br></br>내가 아프고 심장이 찢어지고 내 세상이 무너져...</button>
                    </Link>
                </div>
                <div>
                    <Link to="/dduka/3" onClick={() => changeResult(5)}>
                        <button className='bottom'>시끄럽네... 그칠 때까지 자리를 피한다</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Question2;