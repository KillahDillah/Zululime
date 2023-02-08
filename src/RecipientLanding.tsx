import logo from './assets/Lululemon_logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './recipient.css';

const Recipient = () => {
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
        className="hero-text lll-text-xlarge"
      >
        <motion.p variants={line}>Hey Leah,</motion.p>
        <motion.p variants={line}>Someone thinks you're pretty great!</motion.p>
      </motion.div>
      <Link className="gift-img" to={'/recipient-gift'}>
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
      <p className="gift-label lll-text-small">See what Gifter got for you!</p>
    </div>
  );
};

export default Recipient;
