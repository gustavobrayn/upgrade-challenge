import { createContext, useContext, useMemo, useState } from 'react';

const SignUpContext = createContext();

export const SignUpProvider = (props) => {
  const { children } = props;
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    color: '',
    terms: false,
  });

  const values = useMemo(() => ({ info, setInfo }), [info, setInfo]);

  return (
    <SignUpContext.Provider value={values}>{children}</SignUpContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error('useSignUp must be used within a SignUpProvider');
  }

  return context;
};
