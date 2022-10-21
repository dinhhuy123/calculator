import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        // console.log(this.props.name);
        return (
            <button className={cx('component-button')} onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default Button;
