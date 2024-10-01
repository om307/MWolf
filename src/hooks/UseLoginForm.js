import { useState } from 'react';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Validate email and password
  const validateForm = () => {
    let valid = true;
    let tempErrors = { email: '', password: '' };

    if (!email) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!password) {
      tempErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  // Handle login logic
  const handleLogin = (navigation) => {
    if (validateForm()) {
      navigation.replace('Home'); // Navigate to Home if form is valid
    } else {
      alert('Please enter valid credentials');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    handleLogin,
  };
};

export default useLoginForm;
