import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/Contacts/Filter/';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      Поиск контактов
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
