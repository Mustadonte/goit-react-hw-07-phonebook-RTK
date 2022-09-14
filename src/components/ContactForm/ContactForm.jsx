import useForm from 'hooks/useForm';
import css from './Form.module.css';
import { useAddContactMutation } from 'redux/Contacts/Contact-list/contacts-slice';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const initialState = {
    name: '',
    number: '',
  };
  const onSubmit = async data => {
    try {
      await addContact(data);
      toast.success('Contact is added');
    } catch (error) {
      toast.error('Error adding contact');
      console.log(error);
    }
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.button} type="submit" disabled={isLoading}>
        {isLoading ? (
          <span>
            <ClipLoader size={15} />
            Adding contact
          </span>
        ) : (
          'Add contact'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
