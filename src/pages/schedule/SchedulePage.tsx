import React, {useContext, useEffect} from "react";
import { IMainHeaderContext, MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const SchedulePage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext) as IMainHeaderContext;

  useEffect(() => {
    setMainHeaderTitle("Schedule");
  }, [setMainHeaderTitle]);

  return (
    <div>SchedulePage</div>
  )
}

export default SchedulePage;