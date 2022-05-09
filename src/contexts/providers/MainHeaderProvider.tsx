import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
interface IMainHeaderContext {
  mainHeaderTitle: string;
  setMainHeaderTitle: Dispatch<SetStateAction<string>>;
}

interface IMainHeaderProvider {
  children: ReactNode;
}

export const MainHeaderContext = createContext<IMainHeaderContext | null>(null);

const MainHeaderProvider = ({children}: IMainHeaderProvider) => {
  const [mainHeaderTitle, setMainHeaderTitle] = useState("");

  return (
    <MainHeaderContext.Provider value={{mainHeaderTitle, setMainHeaderTitle}}>{children}</MainHeaderContext.Provider>
  )
}

export default MainHeaderProvider;