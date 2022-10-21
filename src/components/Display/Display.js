import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Display.module.scss';

const cx = classNames.bind(styles);

class Display extends Component {
    render() {
        return <div className={cx('component-display')}>{this.props.value}</div>;
    }
}

Display.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Display;
