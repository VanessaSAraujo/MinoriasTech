import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useRegistrationValidation = (defaultValues = {}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur', 
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  // Funções para formatar valores
  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '') 
      .slice(0, 11) 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 11) 
      .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
  };

  const fields = {
    email: register('email', {
      required: 'O campo de e-mail não pode ficar em branco',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Digite um e-mail correto',
      },
    }),
    password: {
      ...register('password', {
        required: 'O campo de senha não pode ficar em branco',
        minLength: {
          value: 8,
          message: 'A senha deve ter entre 8 e 15 caracteres',
        },
        maxLength: {
          value: 15,
          message: 'A senha deve ter entre 8 e 15 caracteres',
        },
      }),
      showPassword, 
      toggleShowPassword, 
    },
    cpf: register('cpf', {
      required: 'O campo de CPF não pode ficar em branco',
      validate: (value) =>
        value.replace(/\D/g, '').length === 11 || 'CPF inválido',
      onChange: (e) => {
        const formattedValue = formatCPF(e.target.value);
        setValue('cpf', formattedValue);
      },
    }),
    phone: register('phone', {
      required: 'O campo de telefone não pode ficar em branco',
      validate: (value) => {
        const numericValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        return numericValue.length === 11 || 'Telefone inválido';
      },
      onChange: (e) => {
        const formattedValue = formatPhone(e.target.value);
        setValue('phone', formattedValue, { shouldValidate: true }); // Atualiza o valor e valida
      },
    }),    
    name: register('name', {
      required: 'O campo de nome não pode ficar em branco',
    }),
  };

  return {
    fields,
    errors,
    onSubmit: handleSubmit,
    getValues,
  };
};

export default useRegistrationValidation;
