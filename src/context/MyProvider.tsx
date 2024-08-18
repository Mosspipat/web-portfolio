import React, { createContext, useState } from "react";

type MyContextType = {
  heightHeader: number;
  setHeightHeader: React.Dispatch<React.SetStateAction<number>>;
};

export const MyContext = createContext<MyContextType>({
  heightHeader: 0,
  setHeightHeader: () => {},
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [heightHeader, setHeightHeader] = useState<number>(0);

  return (
    <MyContext.Provider value={{ heightHeader, setHeightHeader }}>
      {children}
    </MyContext.Provider>
  );
};
