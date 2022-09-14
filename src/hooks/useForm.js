import { useState } from 'react';
import { customAlphabet } from 'nanoid';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const nanoid = customAlphabet('1234567890', 5);
  const id = nanoid();
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      id: Number(id),
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
