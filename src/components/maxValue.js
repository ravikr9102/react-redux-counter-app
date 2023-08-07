import { useDispatch } from 'react-redux';
import { updateMaxValue } from '../store/action';

function MaxValue() {
  const dispatch = useDispatch();
  const handleClick = (val) => {
    dispatch(updateMaxValue(val));
  };
  return (
    <>
      <button onClick={() => handleClick(15)}>15</button>
      <button onClick={() => handleClick(100)}>100</button>
      <button onClick={() => handleClick(200)}>200</button>
    </>
  );
}

export default MaxValue;
