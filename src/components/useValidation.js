import { useState } from 'react';

const useValidation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const [name, setName] = useState('');
  const [nameEmpty, setNameEmpty] = useState(false);

  const [cpf, setCpf] = useState('');
  const [cpfError, setCpfError] = useState(false);
  const [cpfEmpty, setCpfEmpty] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);

  const handleEmailChange = (event) => {
    const input = event.target.value;
    setEmail(input);
    setEmailEmpty(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(input) && input.length > 0);
  };

  const handlePasswordChange = (event) => {
    let input = event.target.value;

    if (input.length > 15) {
      input = input.slice(0, 15);
    }

    setPassword(input);
    setPasswordEmpty(false);
    setPasswordError(input.length > 0 && input.length < 8);
  };

  const handleNameChange = (event) => {
    const input = event.target.value;
    setName(input);
    setNameEmpty(false);
  };

  const handleCpfChange = (event) => {
    let input = event.target.value;

    input = input.replace(/\D/g, '');

    if (input.length > 11) {
      input = input.slice(0, 11);
    }

    if (input.length <= 11) {
      input = input
        .replace(/^(\d{3})(\d)/, '$1.$2') 
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') 
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); 
    }

    setCpf(input); 
    setCpfEmpty(false); 

    setCpfError(input.length > 0 && input.replace(/\D/g, '').length !== 11);
  };

  const handlePhoneChange = (event) => {
    let input = event.target.value;

    input = input.replace(/\D/g, '');

    if (input.length > 11) {
      input = input.slice(0, 11);
    }

    if (input.length <= 11) {
      input = input
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3');
    }

    setPhone(input);
    setPhoneEmpty(false);

    setPhoneError(input.length > 0 && input.replace(/\D/g, '').length !== 11);
  };


  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        if (!name) setNameEmpty(true);
        break;
      case 'cpf':
        if (!cpf) setCpfEmpty(true);
        break;
      case 'email':
        if (!email) setEmailEmpty(true);
        break;
      case 'phone':
        if (!phone) setPhoneEmpty(true);
        break;
      case 'password':
        if (!password) setPasswordEmpty(true);
        break;
      default:
        break;
    }
  };

  return {
    name,
    nameEmpty,
    handleNameChange,
    cpf,
    cpfError,
    cpfEmpty,
    handleCpfChange,
    email,
    emailError,
    emailEmpty,
    handleEmailChange,
    phone,
    phoneEmpty,
    handlePhoneChange,
    password,
    passwordError,
    passwordEmpty,
    handlePasswordChange,
    handleBlur,
  };
};

export default useValidation;
