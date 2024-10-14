import { useState } from 'react';
import { server } from '../../services';

export const useSignUpApi = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (data) => {
    try {
      setLoading(true);

      await server.post('/submit', data);

      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { success, loading, submit, error };
};
