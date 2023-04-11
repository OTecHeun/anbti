import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question6(props) {

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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdnCris%2FbtrDynCOWqA%2F2cmbUHnyHQsYRAH3ULFUf1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q6.</p>
                <p className='qut_txt'>멍 때리고 있는 댕댕이에게 다른 댕댕이의 짖는 소리가 들린다!</p>
            </div>
            <div className='buttons'>
                <div>
                    <Link to="/dduka/7" onClick={() => changeResult(2)}>
                        <button className='top'>멍멍! 와를르 멍! 무서운게 왔나봐! <br></br>온갖 상상을 펼치며 같이 따라 짖는다</button>
                    </Link>
                </div>
                <div>
                    <Link to="/dduka/7" onClick={() => changeResult(3)}>
                        <button className='bottom'>어 왜 짖지..? 주위 상황을 파악한다</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Question6;