import s from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} size="20" />
          {name}
        </p>
        <p>
          <ImPhone className={s.icon} size="20" />
          {number}
        </p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
