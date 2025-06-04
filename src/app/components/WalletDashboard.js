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

  const [showModal, setShowModal] = useState(null);
  const [formData, setFormData] = useState({ amount: '', date: '', recipient: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (type) => {
    const amount = parseFloat(formData.amount);
    if (!amount || (type !== 'Dépôt' && amount > balance)) return;

    setBalance(type === 'Dépôt' ? balance + amount : balance - amount);
    setHistory([
      {
        id: Date.now(),
        type,
        amount,
        date: formData.date || new Date().toISOString().split('T')[0],
        recipient: formData.recipient || '',
      },
      ...history,
    ]);
    setFormData({ amount: '', date: '', recipient: '' });
    setShowModal(null);
    alert(`${type} effectué avec succès !`);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <header className={styles.header}>
        <div className={styles.logo}>E-Wallet</div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/login">Déconnexion</Link>
            <Link href="/paramètres">Paramètres</Link>
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
          <div className={styles.cardRow}>
            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
            <div className={styles.cardAmount}>{balance.toFixed(2)} FCFA</div>
             <div className={styles.cardTitle}>Solde Actuel</div>
            
            </motion.div>

            {['Dépôt', 'Retrait', 'Transfert'].map((type) => (
              <motion.button
                key={type}
                className={`${styles.card} ${styles.buttonCard}`}
                onClick={() => setShowModal(type)}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'Dépôt' && '💰 Dépôt'}
                {type === 'Retrait' && '💸 Retrait'}
                {type === 'Transfert' && '🔄 Transfert'}
              </motion.button>
            ))}
          </div>

          <h2 style={{ marginTop: '3rem', color: '#E60023' }}>
            Historique des Transactions
          </h2>
          <ul className={styles.historyList}>
            <AnimatePresence>
              {history.map(({ id, type, amount, date, recipient }) => (
                <motion.li
                  key={id}
                  className={styles.historyItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.historyIcon}>
                    {type === 'Dépôt' && <ArrowDown color="green" size={20} />}
                    {type === 'Retrait' && <ArrowUp color="red" size={20} />}
                    {type === 'Achat carte' && <CreditCard color="#555" size={20} />}
                    {type === 'Transfert' && <Repeat color="#007bff" size={20} />}
                  </div>
                  <div className={styles.historyDetails}>
                    <span className={styles.historyType}>{type}</span>
                    <span className={styles.historyDate}>{date}</span>
                    {recipient && <span className={styles.historyRecipient}>→ {recipient}</span>}
                  </div>
                  <span
                    className={`${styles.historyAmount} ${
                      type === 'Dépôt'
                        ? styles.amountPositive
                        : styles.amountNegative
                    }`}
                  >
                    {amount} FCFA
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
          style={{ maxWidth: '420px' }}
        >
          <Image
            src="/images/money.png"
            alt="Dashboard"
            width={420}
            height={420}
          />
        </motion.div>
      </main>

      <footer className={styles.footer}>Do by ASD</footer>

      {showModal && (
        <div className={styles.modalOverlay}>
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h3>{showModal} - Formulaire</h3>
            <input
              type="number"
              name="amount"
              placeholder="Montant (F CFA)"
              value={formData.amount}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
            />
            {showModal === 'Transfert' && (
              <input
                type="text"
                name="recipient"
                placeholder="Nom du destinataire"
                value={formData.recipient}
                onChange={handleChange}
              />
            )}
            <button onClick={() => handleSubmit(showModal)}>
              Confirmer {showModal}
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
 */
'use client';
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

  const handleAction = (type) => {
    const amount = 100; // Montant par défaut pour chaque opération
    const date = new Date().toISOString().split('T')[0];

    if (type === 'Dépôt') {
      setBalance(balance + amount);
      setHistory([{ id: Date.now(), type, amount, date }, ...history]);
    } else if (type === 'Retrait' || type === 'Transfert') {
      if (balance >= amount) {
        setBalance(balance - amount);
        setHistory([{ id: Date.now(), type, amount, date }, ...history]);
      } else {
        alert("Fonds insuffisants pour cette opération !");
      }
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <header className={styles.header}>
        <div className={styles.logo}>E-Wallet</div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/login">Historique</Link>
          <Link href="/paramètres">Déconnexion</Link>
        </nav>
      </header>

      <main
        className={styles.main}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Image à gauche */}
        <motion.div
          className={styles.image}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          style={{ flex: '1 1 200px', maxWidth: '210px' }}
        >
          <Image src="/images/human.png" alt="Wallet" width={360} height={360} />
        </motion.div>


        {/* Texte au centre */}
        <motion.div
          className={styles.text}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ flex: '2 1 600px', textAlign: 'center' }}
        >
          <h1>Mon Portefeuille</h1>
          <p>Gérez vos opérations en toute simplicité.</p>

          <div className={styles.cardRow} style={{ justifyContent: 'center', gap: '1rem' }}>
            <motion.div
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <div className={styles.cardAmount}>{balance.toFixed(2)} FCFA</div>
              <div className={styles.cardTitle}>Solde Actuel</div>
            </motion.div>

            {['Dépôt', 'Retrait', 'Transfert'].map((type) => (
              <motion.button
                key={type}
                className={`${styles.card} ${styles.buttonCard}`}
                onClick={() => handleAction(type)}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'Dépôt' && 'Dépôt'}
                {type === 'Retrait' && ' Retrait'}
                {type === 'Transfert' && ' Transfert'}
              </motion.button>
            ))}
          </div>

          <h2 style={{ marginTop: '3rem', color: '#E60023' }}>
            Historique des Transactions
          </h2>
          <ul className={styles.historyList}>
            <AnimatePresence>
              {history.map(({ id, type, amount, date }) => (
                <motion.li
                  key={id}
                  className={styles.historyItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.historyIcon}>
                    {type === 'Dépôt' && <ArrowDown color="green" size={20} />}
                    {type === 'Retrait' && <ArrowUp color="red" size={20} />}
                    {type === 'Achat carte' && <CreditCard color="#555" size={20} />}
                    {type === 'Transfert' && <Repeat color="#007bff" size={20} />}
                  </div>
                  <div className={styles.historyDetails}>
                    <span className={styles.historyType}>{type}</span>
                    <span className={styles.historyDate}>{date}</span>
                  </div>
                  <span
                    className={`${styles.historyAmount} ${
                      type === 'Dépôt' ? styles.amountPositive : styles.amountNegative
                    }`}
                  >
                    {amount} FCFA
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </motion.div>

        {/* Image à droite */}
        <motion.div
          className={styles.image}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          style={{ flex: '1 1 200px', maxWidth: '210px' }}
        >
          <Image src="/images/money.png" alt="Dashboard" width={260} height={260} />
        </motion.div>
      </main>

      <footer className={styles.footer} style={{ textAlign: 'center' }}>
        By EUNICE KISSI
      </footer>
    </motion.div>
  );
}
