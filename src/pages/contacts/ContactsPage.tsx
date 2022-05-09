import React, {useContext, useEffect} from "react";
import { MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';

const ContactsPage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Contacts");
  }, [setMainHeaderTitle]);

  return (
    <div>ContactsPage</div>
  );
};

export default ContactsPage;