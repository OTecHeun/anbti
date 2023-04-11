import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resultSave } from '../../modules/testReducer';

function Question12(props) {
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
            <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAKgkj%2FbtrCRRduxRI%2FjAR7PwknkY6mkj7PH2z6J1%2Fimg.jpg'/>
            <div>
                <p className='qut'>Q12.</p>
                <p className='qut_txt'>어질리티 대회에서 말다툼이 생겼다...</p>
            </div>
            <div className='buttons'>
                <div>  
                    <Link to="/dduka/result" onClick={() => changeResult(4)}>
                        <button className='top'>미안해(기분이 나쁘지만 상처주긴 싫으니 사과한다)</button>
                    </Link>
                </div>
                <div>
                    <Link to="/dduka/result" onClick={() => changeResult(5)}>
                        <button className='bottom'>미..미...미친댕아!! 니가 잘못했잖아!!!!<br></br>(말싸움에서 이기고 싶어한다)</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Question12;