'use client';
import { useRouter } from 'next/navigation';

import Head from 'next/head';
import 'hive/styles/signup.css';
import Image from 'next/image';
import hive from 'hive/pages/hive.jpeg';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();

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
          <form>
            <h1>Hive Sign Up</h1>

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
            <input
              type="email"
              placeholder="Email"
              name="mail"
              className="int"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mob"
              className="int"
            />

            <button style={{ cursor: 'pointer' }}>Sign Up</button>

            <Link href="/">
              <span>Already Have an Account ?</span>{' '}
              <span style={{ fontWeight: 'bold' }}>Sign In</span>
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
