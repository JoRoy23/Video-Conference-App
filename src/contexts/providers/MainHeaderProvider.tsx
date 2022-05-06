import React, {createContext, useState} from "react";

export interface IMainHeaderContext {
  mainHeaderTitle: string;
  setMainHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
}

interface IMainHeaderProvider {
  children: React.ReactNode;
}

export const MainHeaderContext = createContext<IMainHeaderContext | null>(null);

const MainHeaderProvider = ({children}: IMainHeaderProvider) => {
  const [mainHeaderTitle, setMainHeaderTitle] = useState("");

  return (
    <MainHeaderContext.Provider value={{mainHeaderTitle, setMainHeaderTitle}}>{children}</MainHeaderContext.Provider>
  )
}

export default MainHeaderProvider;