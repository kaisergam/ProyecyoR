import { createContext, useState, useMemo } from 'react';

interface MyContextProps {
  booleanValue: boolean;
  setBooleanValue: (value: boolean) => void;
}

export const MyContext = createContext<MyContextProps>({
  booleanValue: false,
  setBooleanValue: () => {},
});

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}: MyContextProviderProps) => {
  const [booleanValue, setBooleanValue] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      booleanValue,
      setBooleanValue,
    }),
    [booleanValue]
  );

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
