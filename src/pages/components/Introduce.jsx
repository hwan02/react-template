import React, { Component } from 'react';
// import {Row, Col} from 'reactstrap';
// import logo from '../images/teameight_logo.png';
import { Container } from 'reactstrap';
import styles from './Introduce.scss';

class Introduce extends Component {
    render() {
        return (
            <section id="introduce" className={styles.Introduce}>
                <Container>
                    <div className={styles.Introduce__inner}>
                        <h2>PRODUCT</h2>
                        <div>
                            <div className={styles.Introduce__box}>
                                <div className={styles.Introduce__image}>
                                    <img src="../../../images/introduce.png" alt="introduce team8" />
                                </div>
                                <div className={styles.Introduce__image__top}>
                                    <img src="../../../images/bag_lesslight.png" alt="bag_lesslight team8" />
                                </div>
                                <div className={styles.Introduce__image__left}>
                                    <img src="../../../images/bike_bag.png" alt="bike_bag team8" />
                                </div>
                                <div className={styles.Introduce__image__bottom}>
                                    <img src="../../../images/motorcycle.png" alt="motorcycle team8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Introduce;
