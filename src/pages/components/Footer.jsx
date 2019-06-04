import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import IosCallOutline from 'react-ionicons/lib/IosCallOutline';
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline';
// import { Form, Field } from 'react-final-form';

import styles from './Footer.scss';
import { getFullUri } from '../../Page';

class Footer extends Component {
    constructor(props) {
        super(props);

        const constants = {
            DEFAULT_LAT: 37.5634236,
            DEFAULT_LONG: 126.9918384,
            GOOGLE_MAP_URL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2frTy4tc-UaInRtQYs3rTZO5QdH3js0k&v=3.exp&libraries=geometry,places,visualization',
        };

        this.CONST = constants;

        /* Events */
        this.onSendButtonClicked = this.onSendButtonClicked.bind(this);

        this.apiUri = { send: 'send' };
    }

    onSendButtonClicked(e) {
        e.preventDefault();
        const subject = document.getElementById('subject').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const queryObj = {
            subject,
            name,
            email,
            message,
        };
        console.log('contactForm content>>>', queryObj);

        axios.post(getFullUri(this.apiUri.send, queryObj))
            .then((response) => {
                if (response.data === 'success') {
                    alert('메일 전송 완료');
                    window.location.assign('/');
                } else {
                    alert('메일 전송 실패');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <section id="footer" className={styles.Section}>
                <div className={styles.Section__div} />
                <Container>
                    <Row>
                        <Col sm="12">
                            <div className={styles.Contact__mt}>
                                <div className={styles.BOX__shadow__full}>
                                    <Row>
                                        <Col md="6">
                                            <div>
                                                <Form id="contact-form">
                                                    <div className={styles.Form__sendMessage}>Your message has been sent. Thank you!</div>
                                                    <div className={styles.Form__errorMessage} />
                                                    <Row>
                                                        <Col md="12" className={styles.M_B_3}>
                                                            <Input type="text" name="name" id="name" placeholder="name" data-rule="minlen:2" data-msg="Please enter at least 2 chars" />
                                                            <FormGroup>
                                                                <div className={styles.Form__FormGroup__validation} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="12" className={styles.M_B_3}>
                                                            <FormGroup>
                                                                <Input type="email" name="email" id="email" placeholder="e-mail" data-rule="email" data-msg="Please enter a valid email" />
                                                                <div className={styles.Form__FormGroup__validation} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="12" className={styles.M_B_3}>
                                                            <FormGroup>
                                                                <Input type="text" name="subject" id="subject" placeholder="title" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                <div className={styles.Form__FormGroup__validation} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="12" className={styles.M_B_3}>
                                                            <FormGroup>
                                                                <Input type="textarea" name="message" rows="5" id="message" data-rule="required" data-msg="Please write something for us" placeholder="message" />
                                                                <div className={styles.Form__FormGroup__validation} />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="12">
                                                            <Button onClick={this.onSendButtonClicked} className={styles.Button} color="secondary">Send a message</Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div className={styles.List__ico__Wrap}>
                                                <ul>
                                                    <li>
                                                        <IosCompassOutline />
                                                        {' '}
811(8F), 2, Toegye-ro 36-gil, Jung-gu, Seoul
                                                    </li>
                                                    <li>
                                                        <IosCallOutline />
                                                        {' '}
(+82)0507-1307-2977
                                                    </li>
                                                    <li>
                                                        <IosMailOutline />
                                                        {' '}
www.8riders.com
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <footer>
                    <Container>
                        <Row>
                            <Col sm="12">
                                <div>
                                    <p className={styles.Footer__copyright}>
&copy; Copyright
                                        <strong>Team Eight</strong>
. All Rights Reserved
                                    </p>
                                    <div className={styles.Footer__credits}>

                    Designed by
                                        <strong>Team Eight</strong>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </section>
        );
    }
}

export default Footer;

Form.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
};

Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    size: PropTypes.string,

    close: PropTypes.bool,
};
