/* 'use client';
import styles from '../../style/style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp, CreditCard, Repeat } from 'lucide-react';

export default function WalletDashboard() {
  const [balance, setBalance] = useState(1250.75);
  const [history, setHistory] = useState([
    { id: 1, type: 'Dépôt', amount: 500, date: '2025-05-15' },
    { id: 2, type: 'Retrait', amount: 100, date: '2025-05-17' },
    { id: 3, type: 'Achat carte', amount: 50, date: '2025-05-19' },
  ]);

  const handleDeposit = () => {
    const amount = 200;
    setBalance(balance + amount);
    setHistory([
      {
        id: Date.now(),
        type: 'Dépôt',
        amount,
        date: new Date().toISOString().split('T')[0],
      },
      ...history,
    ]);
  };

  const handleWithdraw = () => {
    const amount = 150;
    if (amount > balance) return;
    setBalance(balance - amount);
    setHistory([
      {
        id: Date.now(),
        type: 'Retrait',
        amount,
        date: new Date().toISOString().split('T')[0],
      },
      ...history,
    ]);
  };

  const handleTransfer = () => {
    const amount = 100;
    if (amount > balance) return;
    setBalance(balance - amount);
    setHistory([
      {
        id: Date.now(),
        type: 'Transfert',
        amount,
        date: new Date().toISOString().split('T')[0],
      },
      ...history,
    ]);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <header className={styles.header}>
        <div className={styles.logo}>YourLogo</div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/login">Déconnexion</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <motion.div
          className={styles.text}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Mon Portefeuille</h1>
          <p>Gérez vos opérations en toute simplicité.</p>

          <motion.div
            className={styles.balanceCard}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h2>Solde Actuel</h2>
            <p className={styles.balance}>F {balance.toFixed(2)}</p>
          </motion.div>

          <div className={styles.buttons}>
            <motion.button
              className={styles.primary}
              onClick={handleDeposit}
              whileTap={{ scale: 0.95 }}
            >
              💰 Dépôt
            </motion.button>
            <motion.button
              className={styles.secondary}
              onClick={handleWithdraw}
              whileTap={{ scale: 0.95 }}
            >
              💸 Retrait
            </motion.button>
            <motion.button
              className={styles.tertiary}
              onClick={handleTransfer}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Transfert
            </motion.button>
          </div>

          <h2 className={styles.sectionTitle}>Historique des Transactions</h2>
          <ul className={styles.historyList}>
            <AnimatePresence>
              {history.map((item) => (
                <motion.li
                  key={item.id}
                  className={styles.historyItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.historyIcon}>
                    {item.type === 'Dépôt' && <ArrowDown color="green" size={20} />}
                    {item.type === 'Retrait' && <ArrowUp color="red" size={20} />}
                    {item.type === 'Achat carte' && <CreditCard color="#555" size={20} />}
                    {item.type === 'Transfert' && <Repeat color="#007bff" size={20} />}
                  </div>
                  <div className={styles.historyDetails}>
                    <span className={styles.historyType}>{item.type}</span>
                    <span className={styles.historyDate}>{item.date}</span>
                  </div>
                  <span
                    className={`${styles.historyAmount} ${
                      item.type === 'Dépôt' ? styles.amountPositive : styles.amountNegative
                    }`}
                  >
                    € {item.amount}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </motion.div>

        <motion.div
          className={styles.image}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image src="/images/money.png" alt="Dashboard" width={500} height={500} />
        </motion.div>
      </main>

      <footer className={styles.footer}>Do with love</footer>
    </motion.div>
  );
}
// Note: Ensure you have the necessary packages installed for framer-motion and lucide-react
// npm install framer-motion lucide-react */
'use client';
import WalletDashboard from '../components/WalletDashboard';

export default function DashboardPage() {
  return <WalletDashboard />;
}
