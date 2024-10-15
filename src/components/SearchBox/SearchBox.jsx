import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="search"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
