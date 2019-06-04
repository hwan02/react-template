import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './Shop.scss';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.onReadyButtonClicked = this.onReadyButtonClicked.bind(this);
    }

    onReadyButtonClicked() {
        alert('준비중입니다.');
    }

    render() {
        return (
            <section id="shop" className={styles.Shop}>
                <Container>
                    <Row>
                        <div className={styles.Shop__Wrap}>
                            <Col md={{ size: 6, offset: 6 }}>
                                <div className={styles.Shop__Cont}>
                                    <h2 className={styles.Shop__Title}>Download our App !</h2>
                                    <p className={styles.Shop__Desc}>
Download EIGHT app to fully enjoy
                                        <br />
EIGHT&apos;s features.
                                    </p>
                                    <Button className={styles.Store__btn} onClick={this.onReadyButtonClicked}><img src="../../../images/shop_google.png" alt="google play" /></Button>
                                    <Button className={styles.Store__btn} onClick={this.onReadyButtonClicked}><img src="../../../images/shop_apple.png" alt="appstore" /></Button>
                                </div>
                            </Col>
                            <Button className={styles.Shop__Btn} onClick={this.onReadyButtonClicked}>Shop Now</Button>
                        </div>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Shop;
