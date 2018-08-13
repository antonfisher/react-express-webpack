import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.scss';

function Header({children}) {
  return <h1 className={styles.header}>{children}</h1>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
