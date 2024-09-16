import { useEffect, useState } from 'react';
import { logout } from '@/firebase/firebaseAuth';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/firebase/firbaseConfig';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Home Page</h1>
      {user ? (
        <div>
          <p style={{textAlign:'center'}}>Welcome, {user.email}</p>  {/* Display user's email */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default HomePage;
