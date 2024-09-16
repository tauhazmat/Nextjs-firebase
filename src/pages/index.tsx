// pages/index.tsx
import { useState } from 'react';
import { signupWithEmailPassword, loginWithEmailPassword } from '@/firebase/firebaseAuth';
import { useRouter } from 'next/router';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    await signupWithEmailPassword(email, password);
    router.push('/home');
  };

  const handleLogin = async () => {
    await loginWithEmailPassword(email, password);
    router.push('/home');
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /><br />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthPage;
