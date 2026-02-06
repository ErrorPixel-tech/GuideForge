import { useDispatch } from 'react-redux';
import { updateInput, removeInput, moveInputDown, moveInputUp } from '../features/inputs/inputs';
import style from './TextInput.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

function TextInput({ id, value, index, ref, onKeyDown }) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput({ id, value: e.target.value }));
  };

  const handleDelete = () => {
    if (confirm("Уверены, что хотите удалить этот элемент?")) {
      dispatch(removeInput({ id }));
    }
  };

  const handleMoveDown = (index) => {
    dispatch(moveInputDown({index}));
  };
  const handleMoveUp = (index) => {
    dispatch(moveInputUp({index}));
  };

  return (
    <div className={style.container}>
      <button onClick={()=>{handleMoveUp(index)}}>UP</button>
      <button onClick={()=>{handleMoveDown(index)}}>DOWN</button>
      <TextareaAutosize
        minRows={1}
        maxRows={5}
        key={id}
        ref={ref}
        onKeyDown={onKeyDown}

        className={style.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      ></TextareaAutosize>
      <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default TextInput;
