import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout, Header, HeaderContacts } from './Layout';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { CirclesWithBar } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Header>Phonebook</Header>
      <ContactForm />
      <HeaderContacts>Contacts</HeaderContacts>
      <Filter />
      {isLoading && !error && (
        <CirclesWithBar
          height="100"
          width="100"
          color="#9555af"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      )}
      <ContactList />
    </Layout>
  );
};
