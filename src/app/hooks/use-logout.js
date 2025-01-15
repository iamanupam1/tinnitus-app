import { useState, useCallback } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const useFirebaseLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    const auth = getAuth();

    try {
      await signOut(auth);
      setLoading(false);
      router.push('/auth/login');
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error('Logout error:', error);
    }
  }, [router]);

  return { logout, loading, error };
};

export default useFirebaseLogout;
