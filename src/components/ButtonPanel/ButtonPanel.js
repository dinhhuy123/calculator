import React, { Component } from 'react';
import { Button } from '~/components/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ButtonPanel.module.scss';

const cx = classNames.bind(styles);

class ButtonPanel extends Component {
    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };
    render() {
        return (
            <div className={cx('component-button-panel')}>
                <div>
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
