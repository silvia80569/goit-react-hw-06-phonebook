import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  <input
    type="text"
    placeholder="Search contacts..."
    value={value}
    onChange={onChange}
    className={styles.input}
  />;
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
