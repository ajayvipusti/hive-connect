'use client';
import { AuthService } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import '../styles/globals.css';


export default function LoginPage() {
  const authService = new AuthService();
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (authService.login(username, password)) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" className='btn-login'>Login</button>
    </form>
  );
}
