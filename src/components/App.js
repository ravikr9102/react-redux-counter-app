import { increment, decrement, reset } from '../store/action';
import { useSelector, useDispatch } from 'react-redux';
import Steps from './steps';
import MaxValue from './maxValue';

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </center>
      <div>
        <center>
          <Steps />
        </center>
      </div>
      <div>
        <center>
          <MaxValue />
        </center>
      </div>
    </>
  );
}


export default App;
