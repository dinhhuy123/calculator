import React, { Component } from 'react';
import { ButtonPanel } from '~/components/ButtonPanel';
import { Display } from '~/components/Display';
import calculate from '~/logic/calculate';
import classNames from 'classnames/bind';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }
    handleClick = (buttonName) => {
        // console.log('click', buttonName);
        this.setState(calculate(this.state, buttonName));
    };
    render() {
        return (
            <div className={cx('App')}>
                <Display value={this.state.next || this.state.total || '0'} />
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;
