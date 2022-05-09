import React, {useContext, useEffect} from "react";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const SchedulePage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Schedule");
  }, [setMainHeaderTitle]);

  return (
    <div>SchedulePage</div>
  );
};

export default SchedulePage;