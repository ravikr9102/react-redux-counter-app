import { useDispatch } from 'react-redux';
import { updateStep } from '../store/action';

function Steps() {
  const dispatch = useDispatch();
  const handleClick = (step) => {
    dispatch(updateStep(step));
  };
  return (
    <>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(10)}>10</button>
      <button onClick={() => handleClick(15)}>15</button>
    </>
  );
}

export default Steps;
