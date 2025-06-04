import styles from '../style/style.module.css'; // le même fichier CSS module
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Head>
        <title>E-Wallet</title>
      </Head>
      <div className={styles.page}>  {/* wrapper unique pour la page */}
        <header className={styles.header}>
          <div className={styles.logo}>Ewallet</div>
          <nav className={styles.nav}>
            <a href="#">Accueil</a>
            <a href="#" className={styles.active}>A propos</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <main className={styles.main}>
          <div className={styles.contentWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/credit.png"
                alt="Illustration Gauche"
                width={390}
                height={390}
              />
            </div>

            <div className={styles.text}>
              <h1>E-Wallet</h1>
              <p>
                Gérez facilement vos finances avec notre portefeuille électronique sécurisé. Suivez vos dépenses, effectuez des paiements rapides, et contrôlez votre budget en toute simplicité.
              </p>
              <div className={styles.buttons}>
                <Link href="/login" className={styles.primaryLink}>Connexion</Link>
                <Link href="/register" className={styles.secondaryLink}>Inscription</Link>
              </div>
            </div>

            <div className={styles.image}>
              <Image
                src="/images/Plain.png"
                alt="E-Wallet"
                width={390}
                height={390}
              />
            </div>
          </div>
        </main>

        <footer className={styles.footer}>RUTH-EUNICE KISSI</footer>
      </div>
    </>
  );
}
