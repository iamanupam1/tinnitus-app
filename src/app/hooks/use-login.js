import { useState, useCallback } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const useFirebaseLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  }, [auth]);

  return { login, loading, error };
};

export default useFirebaseLogin;
