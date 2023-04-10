import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { selectSearchContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const list = useSelector(selectSearchContacts);

  return (
    <List>
      {list.map(contact => (
        <Contact key={contact.id} contact={contact}></Contact>
      ))}
    </List>
  );
}
