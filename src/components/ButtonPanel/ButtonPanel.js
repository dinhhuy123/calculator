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
            <table className={cx('component-button-panel')}>
                <thead>
                    <tr>
                        <th>
                            <Button name="AC" clickHandler={this.handleClick} />
                        </th>
                        <th>
                            <Button name="+/-" clickHandler={this.handleClick} />
                        </th>
                        <th>
                            <Button name="%" clickHandler={this.handleClick} />
                        </th>
                        <th>
                            <Button name="÷" clickHandler={this.handleClick} orange />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button name="7" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="8" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="9" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="x" clickHandler={this.handleClick} orange />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button name="4" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="5" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="6" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="-" clickHandler={this.handleClick} orange />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button name="1" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="2" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="3" clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="+" clickHandler={this.handleClick} orange />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <Button name="0" clickHandler={this.handleClick} wide />
                        </td>
                        <td>
                            <Button name="." clickHandler={this.handleClick} />
                        </td>
                        <td>
                            <Button name="=" clickHandler={this.handleClick} orange />
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
