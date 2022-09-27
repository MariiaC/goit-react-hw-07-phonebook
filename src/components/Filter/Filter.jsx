import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/actions';
import s from './Filter.module.css';


export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contactsBookReducer.filter);

  const handleInput = evt => {
    dispatch(filter(evt.target.value));
  };

  return (
     <div className={s.filter}>
    <label>
      Find contacts by name
      <input type="text" name="search" value={value} onChange={handleInput} />
    </label>
 </div>
  );
}