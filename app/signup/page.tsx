'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Head from 'next/head';
import 'hive/styles/signup.css';
import Image from 'next/image';
import hive from 'hive/pages/hive.jpeg';
import Link from 'next/link';

import { ApiService } from 'hive/services/api.service';

export default function SignUpPage() {
  const router = useRouter();
  const apiService = new ApiService();
  const [isAdmin, setIsAdmin] = useState(false);

  const apiUrl =
    'http://4.224.242.223:8083/api/v1/supplierportal/user/RegisterUsers';

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.mail.value;

    const requestData = {
      username: username,
      password: password,
      email: email,
      isAdmin: isAdmin,
    };

    apiService
      .PostData(apiUrl, requestData)
      .then((data) => {
        console.log('Response:', data);
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Something Went Wrong !');
      });
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
          <form onSubmit={handleSignUp}>
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

            <div style={{ marginTop: '15px', marginBottom: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>Is Admin</span>
              <label className="switch" style={{ marginLeft: '10px' }}>
                <input type="checkbox" onChange={() => setIsAdmin(true)} />
                <span className="slider round"></span>
              </label>
            </div>

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
