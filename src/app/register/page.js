'use client';

import styles from '../../style/style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accountType: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState('');
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, accountType, password, confirm } = form;

    // Vérification des champs obligatoires
    if (!firstName || !lastName || !email || !phone || !accountType || !password || !confirm) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Validation simple du numéro de téléphone (ex: chiffres uniquement et longueur minimale)
    const phoneRegex = /^[0-9]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Veuillez entrer un numéro de téléphone valide (8 à 15 chiffres).");
      return;
    }
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setError('');
    setLoading(true);

    // Simulation d'appel API
    setTimeout(() => {
      setLoading(false);
      alert(`Compte créé avec succès ! Bienvenue ${firstName}
Type de compte : ${accountType}
Téléphone : ${phone}`);
      router.push('/login');
    }, 1000);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Ewallet</div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/login">Connexion</Link>
          
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.text}>
          <h1>Inscription</h1>
          <p>Créez votre compte E-Wallet en quelques secondes.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              className={`${styles.input} ${touched.lastName && !form.lastName ? styles.inputError : ''}`}
              value={form.lastName}
              onChange={handleChange}
              onBlur={() => handleBlur('lastName')}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              className={`${styles.input} ${touched.firstName && !form.firstName ? styles.inputError : ''}`}
              value={form.firstName}
              onChange={handleChange}
              onBlur={() => handleBlur('firstName')}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              className={`${styles.input} ${touched.phone && !form.phone ? styles.inputError : ''}`}
              value={form.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`${styles.input} ${touched.email && !form.email ? styles.inputError : ''}`}
              value={form.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className={`${styles.input} ${touched.password && !form.password ? styles.inputError : ''}`}
              value={form.password}
              onChange={handleChange}
              onBlur={() => handleBlur('password')}
              required
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirmer le mot de passe"
              className={`${styles.input} ${touched.confirm && !form.confirm ? styles.inputError : ''}`}
              value={form.confirm}
              onChange={handleChange}
              onBlur={() => handleBlur('confirm')}
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.primary} disabled={loading}>
              {loading ? "Inscription..." : "S'inscrire"}
            </button>
          </form>

          <p className={styles.signup}>
            Déjà un compte ? <Link href="/login">Connectez-vous</Link>
          </p>
        </div>

        <div className={styles.image}>
          <Image src="/images/wallet4.png" alt="Créer un compte" width={500} height={500} />
        </div>
      </main>

      <footer className={styles.footer}>By EUNICE KISSI</footer>
    </div>
  );
}
