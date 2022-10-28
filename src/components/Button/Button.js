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
            <div
                className={cx(
                    'component-button',
                    `${this.props.orange ? 'orange' : ''}`,
                    `${this.props.wide ? 'wide' : ''}`,
                )}
            >
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func.isRequired,
};

export default Button;
