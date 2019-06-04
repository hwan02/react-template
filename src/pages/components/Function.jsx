import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';
import styles from './Function.scss';

class Function extends Component {
    render() {
        return (
            <section id="functions" className={styles.Function}>
                <Container>
                    <div className={styles.Function_List}>
                        <Row>
                            <Col md={4}>
                                <img src="../../../images/attach.png" alt="" className={styles.Function_List_Image} />
                                <p className={styles.Function_List_Title}>

                Attachable in
                                    <br />
Various Ways
                                </p>
                            </Col>
                            <Col md={4}>
                                <img src="../../../images/light_patter.png" alt="" className={styles.Function_List_Image} />
                                <p className={styles.Function_List_Title}>

                Light Pattern
                                    <br />
Customizing
                                </p>
                            </Col>
                            <Col md={4}>
                                <img src="../../../images/group_sync.png" alt="" className={styles.Function_List_Image} />
                                <p className={styles.Function_List_Title}>

                Light Group-Sync
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ size: 4, offset: 2 }}>
                                <img src="../../../images/alert.png" alt="" className={styles.Function_List_Image} />
                                <p className={styles.Function_List_Title}>

                Accident Alert
                                    <br />
to Family & Insurance
                                </p>
                            </Col>
                            <Col md={4}>
                                <img src="../../../images/notification.png" alt="" className={styles.Function_List_Image} />
                                <p className={styles.Function_List_Title}>

                Notification toward
                                    <br />
the Dangerous Areas
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={{ size: 6, offset: 6 }}>
                            <Fade left>
                                <div className={styles.Function__Attach}>
                                    <div className={classNames({ [styles.Function__Image__Wrap]: true, [styles.Function__Image__Wrap__Odd]: true })}>
                                        <img src="../../../images/function_helmet.png" alt="introduce team8" />
                                    </div>
                                    <div className={classNames({ [styles.Function__Cont]: true, [styles.Function__Cont__Odd]: true })}>
                                        <h2 className={styles.Function__Title}>
                                            <p>Attachable in</p>
                                            <p>Various Ways</p>
                                        </h2>
                                        <p className={styles.Function__Desc}>
On helmets, bags...
                                            <br />
This can be put wherever you want.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Fade right>
                                <div className={styles.Function_Custom}>
                                    <div className={classNames({ [styles.Function__Image__Wrap]: true, [styles.Function__Image__Wrap__Even]: true })}>
                                        <img src="../../../images/function_light.png" alt="introduce team8" />
                                    </div>
                                    <div className={styles.Function__Cont}>
                                        <h2 className={styles.Function__Title}>Light Pattern Customizing</h2>
                                        <p className={styles.Function__Desc}>
You don&apos;t need to use same light
                                            <br />
like others. You can design the
                                            <br />
taillight for your own vehicle.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 6, offset: 6 }}>
                            <Fade left>
                                <div className={styles.Function__Group}>
                                    <div className={classNames({ [styles.Function__Image__Wrap]: true, [styles.Function__Image__Wrap__Odd]: true })}>
                                        <img src="../../../images/function_bicycle.png" alt="introduce team8" />
                                    </div>
                                    <div className={classNames({ [styles.Function__Cont]: true, [styles.Function__Cont__Odd]: true })}>
                                        <h2 className={styles.Function__Title}>Light Group Sync</h2>
                                        <p className={styles.Function__Desc}>
When you ride a bike with your
                                            <br />
friends or team members,
                                            <br />
turn the light group sync on!
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Fade right>
                                <div className={styles.Function__Alert}>
                                    <div className={classNames({ [styles.Function__Image__Wrap]: true, [styles.Function__Image__Wrap__Even]: true })}>
                                        <img src="../../../images/function_lego.png" alt="introduce team8" />
                                    </div>
                                    <div className={styles.Function__Cont}>
                                        <h2 className={styles.Function__Title}>
                                            <p>Accident Alert</p>
                                            <p>to Family & Insurance</p>
                                        </h2>
                                        <p className={styles.Function__Desc}>
It will send messages to contacts
                                            <br />
you&apos;ve saved in the app immediately
                                            <br />
after having the accident to reduce
                                            <br />
your anxxiety about having accidents.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 6, offset: 6 }}>
                            <Fade left>
                                <div className={styles.Function__Notify}>
                                    <div className={classNames({ [styles.Function__Image__Wrap]: true, [styles.Function__Image__Wrap__Odd]: true })}>
                                        <img src="../../../images/function_trafficlight.png" alt="introduce team8" />
                                    </div>
                                    <div className={classNames({ [styles.Function__Cont]: true, [styles.Function__Cont__Odd]: true })}>
                                        <h2 className={styles.Function__Title}>
                                            <p>Notification toward</p>
                                            <p>the Dangerous Areas</p>
                                        </h2>
                                        <p className={styles.Function__Desc}>
We are going to use our big data
                                            <br />
about accidents for informing you
                                            <br />
of frequent accident areas.
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Function;
