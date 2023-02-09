import logo from './assets/Lululemon_logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './recipient.css';

const RecipientConfirmation = () => {
  const text = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const line = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <div className="recipient-landing-wrapper">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={text}
        className="hero-text lll-text-large"
      >
        <motion.p variants={line}>Order confirmed</motion.p>
        <motion.p variants={line}>Your gift is on its way</motion.p>
      </motion.div>
      <Link className="gift-img" to={'/gifter-confirmation'}>
        <motion.img
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            type: 'spring',
            stiffness: 10,
            repeat: Infinity,
            duration: 2,
          }}
          src={logo}
          className="img"
          alt="logo"
        />
      </Link>
      <p className="gift-label lll-text-small">Happy Birthday from Gifter and lululemon!</p>
    </div>
  );
};

export default RecipientConfirmation;
