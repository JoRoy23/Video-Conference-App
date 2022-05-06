import React, {useContext, useEffect} from "react";
import { IMainHeaderContext, MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';

const HomePage = () => {
  const {setMainHeaderTitle} = useContext(MainHeaderContext) as IMainHeaderContext;

  useEffect(() => {
    setMainHeaderTitle("Home");
  }, [setMainHeaderTitle]);

  return (
    <div>HomePage</div>
  )
}

export default HomePage;