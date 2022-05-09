import React, {useContext, useEffect} from "react";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const ChatPage = () => {
  const { setMainHeaderTitle } = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Chat");
  }, [setMainHeaderTitle]);

  return (
    <div>ChatPage</div>
  );
};

export default ChatPage;