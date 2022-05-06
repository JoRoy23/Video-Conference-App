import React, {useContext, useEffect} from "react";
import { IMainHeaderContext, MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const MeetingsPage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext) as IMainHeaderContext;

  useEffect(() => {
    setMainHeaderTitle("Meetings");
  }, [setMainHeaderTitle]);

  return (
    <div>Meetings</div>
  )
}

export default MeetingsPage;