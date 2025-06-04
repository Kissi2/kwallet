'use client';
import styles from '../../style/style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; //   redirection

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); //  Initialisation du routeur

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Ici tu peux intégrer une vraie API de login
    if (email === 'test@example.com' && password === '123456') {
      setError('');
      router.push('/2fa'); // Redirection vers la page de gestion
    } else {
      setError("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Ewallet</div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/register">Inscription</Link>

         
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.text}>
          
          <p>Entrez vos identifiants pour accéder à votre compte E-Wallet.</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.primary}>Se connecter</button>
          </form>
          <p className={styles.signup}>
            Vous n'avez pas encore de compte ? <Link href="/register">Inscrivez vous</Link>
          </p>
        </div>
        <div className={styles.image}>
          <Image src="/images/wallet3.png" alt="Connexion E-Wallet" width={500} height={500} />
        </div>
      </main>

      <footer className={styles.footer}>By EUNICE KISSI</footer>
    </div>
  );
}
