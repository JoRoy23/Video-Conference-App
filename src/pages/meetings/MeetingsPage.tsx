import React, {useContext, useEffect} from "react";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const MeetingsPage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Meetings");
  }, [setMainHeaderTitle]);

  return (
    <div>Meetings</div>
  );
};

export default MeetingsPage;