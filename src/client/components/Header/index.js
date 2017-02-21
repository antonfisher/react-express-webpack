import React from 'react';

import styles from './style.scss';

function Header({children}) {
  return (
    <h1 className={styles.header}>
      {children}
      <span>test</span>
    </h1>
  );
}

Header.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Header;
