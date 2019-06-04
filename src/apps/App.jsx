import React from 'react';
import { Route } from 'react-router-dom';
// import { Main } from '../pages/';
import { Intro } from '../pages/';
import styles from './App.scss';


const App = () =>
    (
        <div className={`GlobalMain ${styles.App__globalmain}`}>
            <Route exact path="/" render={() => <Intro />} />
        </div>
    );

export default App;
