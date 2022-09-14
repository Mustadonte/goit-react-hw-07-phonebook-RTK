import { Container } from '../Container/Container';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useGetContactsQuery } from 'redux/Contacts/Contact-list/contacts-slice';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const { isLoading } = useGetContactsQuery();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};
