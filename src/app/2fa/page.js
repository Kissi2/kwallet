'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../style/style.module.css';
import Image from 'next/image';

export default function TwoFactorPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  // Code 2FA simulé à valider (en production, ce sera côté serveur)
  const VALID_CODE = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === VALID_CODE) {
      router.push('/dashboard');  // Accès au dashboard après validation 2FA
    } else {
      setError('Code incorrect. Veuillez réessayer.');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Ewallet</div>
      </header>

      <main className={styles.main}>
        <div className={styles.text}>
          <h1>Authentification à double facteur</h1>
          <p>Veuillez saisir le code envoyé sur votre téléphone ou email.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Code 2FA"
              className={styles.input}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.primary}>Valider</button>
          </form>
        </div>
         <div className={styles.image}>
          <Image src="/images/secure.png" alt="Connexion E-Wallet" width={500} height={500} />
        </div>
      </main>

      <footer className={styles.footer}>By EUNICE KISSI</footer>
    </div>
  );
}
