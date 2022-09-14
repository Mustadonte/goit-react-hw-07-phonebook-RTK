import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useRemoveContactMutation } from 'redux/Contacts/Contact-list/contacts-slice';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number }) => {
  const [removeContact, { isLoading }] = useRemoveContactMutation();
  const onDeleteContact = async id => {
    try {
      await removeContact(id);
      toast.success('Contact is removed');
    } catch (error) {
      toast.error('Error removing contact');
      console.log(error);
    }
  };
  return (
    <li key={id} className={css.listItem}>
      {name}: {number}{' '}
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader size={14} /> : 'Delete'}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
