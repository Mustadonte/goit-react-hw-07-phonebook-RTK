import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from 'redux/Contacts/Contact-list/contacts-slice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);

  const { data: contacts } = useGetContactsQuery();

  const filteredContacts = () => {
    const normalizedText = filter.toLowerCase();
    return contacts?.filter(item =>
      item.name.toLocaleLowerCase().includes(normalizedText)
    );
  };
  return (
    <ul>
      {filteredContacts()?.map(({ id, name, number }) => (
        <ContactListItem
          key={id} // To remove warning from Console.
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};
