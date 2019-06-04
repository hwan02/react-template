import React, { Component } from 'react';
import { Container } from 'reactstrap';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import styles from './Banner.scss';

class Banner extends Component {
    render() {
        return (
            <section id="banner" className={styles.Banner} data-video="../../../videos/banner">
                <Container>
                    <div className={styles.Banner__inner__wrap}>
                        <div className={styles.Banner__inner}>
                            <h1>
                                <span>TEAM</span>
                                {' '}
EIGHT
                            </h1>
                            <h2>
              Safety in all mobility of the world.
                            </h2>
                            <p>
              &apos;TEAM EIGHT&apos;is a youth start-up
                                <br />
              now preparing to launch their product which is
                                <br />
              IoT Device and software for riders&apos; safety.
                                <br />
                                <br />
              We&apos;d like to make a safe and pleasant culture
                                <br />
              of mobility all over the world.
                            </p>
                        </div>
                        <div className={styles.Banner_insta}>
                            <a href="https://www.instagram.com/88ei8ht88">
                                <LogoInstagram fontSize="50px" />
                                {' '}
Come and Visit Us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Banner;
