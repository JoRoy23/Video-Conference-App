import React, {useContext, useEffect} from "react";
import { IMainHeaderContext, MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const ChatPage = () => {
  const { setMainHeaderTitle } = useContext(MainHeaderContext) as IMainHeaderContext;

  useEffect(() => {
    setMainHeaderTitle("Chat");
  }, [setMainHeaderTitle]);

  return (
    <div>ChatPage</div>
  )
}

export default ChatPage;