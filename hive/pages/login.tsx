'use client';
import { AuthService } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import '../styles/globals.css';
import Head from 'next/head';
import '../styles/login.css';
import Image from 'next/image';
import hive from './hive.jpeg';
import Link from 'next/link';

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
    <main className="main-log">
      <Head>
        <title>My page title</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form onSubmit={handleLogin}>
            <h1>Hive Sign In</h1>

            <input
              type="text"
              placeholder="Username"
              name="username"
              className="int"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="int"
            />
            <div style={{ display: 'flex', marginTop: '5px' }}>
              <input type="checkbox" />
              <label htmlFor="vehicle1"> Remember me</label>
            </div>

            <a href="#">Forgot your password?</a>

            <button style={{ cursor: 'pointer' }}>Sign In</button>

            <Link href="/signup">
              <span>Don't Have an Account ?</span>{' '}
              <span style={{ fontWeight: 'bold' }}>Sign Up</span>
            </Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <Image
                src={hive}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
