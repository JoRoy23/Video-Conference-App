import React, {useContext, useEffect} from "react";
import { IMainHeaderContext, MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';

const ContactsPage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext) as IMainHeaderContext;

  useEffect(() => {
    setMainHeaderTitle("Contacts");
  }, [setMainHeaderTitle]);

  return (
    <div>ContactsPage</div>
  )
}

export default ContactsPage;