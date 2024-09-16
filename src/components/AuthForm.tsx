// components/AuthForm.tsx
import { useState } from "react";
import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseAuth";

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Hello Auth</h1>
      Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => signupWithEmailPassword(email, password)}>Signup</button>
      <button onClick={() => loginWithEmailPassword(email, password)}>Login</button>
    </>
  );
};

export default AuthForm;
