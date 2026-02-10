import { useDispatch } from 'react-redux';
import { updateInput, removeBlock, moveBlockDown, moveBlockUp } from '../features/blocks/blocks';
import style from './TextInput.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { useTranslation } from "react-i18next";

function TextInput({ id, value, index, ref, isDisabled, onKeyDown }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = (e) => {
    dispatch(updateInput({ id, value: e.target.value }));
  };

  const handleDelete = () => {
    if (confirm("Уверены, что хотите удалить этот элемент?")) {
      dispatch(removeBlock({ id }));
    }
  };

  const handleMoveDown = (index) => {
    dispatch(moveBlockDown({ index }));
  };
  const handleMoveUp = (index) => {
    dispatch(moveBlockUp({ index }));
  };

  return (
    <div className={style.container}>
      <TextareaAutosize
        minRows={1}
        maxRows={5}
        disabled={isDisabled}
        ref={ref}
        onKeyDown={onKeyDown}
        className={style.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={t("inputs.placeholderText")}
      ></TextareaAutosize>
      <div className={style.container__menu}>
        <button className={style.menu__button} onClick={() => { handleMoveUp(index) }}>↑</button>
        <button className={style.menu__button + " " + style['menu__button--red']} onClick={handleDelete}>x</button>
        <button className={style.menu__button} onClick={() => { handleMoveDown(index) }}>↓</button>
      </div>
    </div>
  );
}
export default TextInput;
