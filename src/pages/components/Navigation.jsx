import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';
import TogglerIcon from './svg/TogglerIcon';
import styles from './Navigation.scss';
// import logo from '../images/teameight_logo.png';


let lastScrollY = 0;
let ticking = false;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            activeTabClassName: 'banner',
            activeNavReduce: 'none',
            handleScroll: () => {
                this.handleScroll();
            },
        };

        this.scroller = Scroll.scroller;

        this.onNavLinkClicked = this.onNavLinkClicked.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.state.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.state.handleScroll);
    }

    onNavLinkClicked(e) {
        e.preventDefault();
        const scroll = Scroll.animateScroll;
        const target = e.target.name;
        const navHeight = 126.04;
        if (target === 'header') {
            scroll.scrollToTop();
        } else {
            const offset = document.getElementById(target).getBoundingClientRect();
            scroll.scrollTo((offset.top + window.pageYOffset) - navHeight);
        }
    }

    handleScroll() {
        lastScrollY = window.pageYOffset;
        const navHeight = 150;
        // console.log('handleScroll >>> ', lastScrollY);
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const margin = 10;
                const introduce = document.getElementById('introduce');
                const news = document.getElementById('news');
                const functions = document.getElementById('functions');
                const footer = document.getElementById('footer');
                if ( lastScrollY > navHeight ) {// console.log('activeNavReduce : active');
                    this.setState(prevState => ({
                        activeNavReduce: 'active'
                    }));
                } else {// console.log('activeNavReduce : none');
                    this.setState(prevState => ({
                        activeNavReduce: 'none'
                    }));
                }

                if (lastScrollY < introduce.getBoundingClientRect().top + window.pageYOffset) {
                    if (this.state.activeTabClassName !== 'banner') {
                        this.setState(prevState => ({
                            activeTabClassName: 'banner'
                        }));
                    }
                } else if (lastScrollY < news.getBoundingClientRect().top + window.pageYOffset) {
                    if (this.state.activeTabClassName !== 'introduce') {
                        this.setState(prevState => ({
                            activeTabClassName: 'introduce',
                        }));
                    }
                } else if (lastScrollY < functions.getBoundingClientRect().top + window.pageYOffset) {
                    if (this.state.activeTabClassName !== 'news') {
                        this.setState(prevState => ({
                            activeTabClassName: 'news',
                        }));
                    }
                } else if (lastScrollY < (footer.getBoundingClientRect().top + window.pageYOffset) - margin) {
                    if (this.state.activeTabClassName !== 'functions') {
                        this.setState(prevState => ({
                            activeTabClassName: 'functions',
                        }));
                    }
                } else if (this.state.activeTabClassName !== 'footer') {
                    this.setState(prevState => ({
                        activeTabClassName: 'footer',
                    }));
                }
                ticking = false;
            });
            ticking = true;
        }
    }


    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        // console.log('render >>> ', this.state.activeTabClassName);
        return (
            <Navbar className={(this.state.activeNavReduce !== 'none') ? [styles.Navbar, styles.Navbar__reduce].join(' ') : styles.Navbar} expand="md" fixed="top">

                <Container>
                    <NavbarBrand className={styles.NavbarBrand} href="#" onClick={this.onNavLinkClicked}>
                        <img src="../../../images/teameight_logo.png" name="header" alt="team8 logo" />
                    </NavbarBrand>
                    <NavbarToggler className={styles.NavbarToggler} onClick={this.toggle}>
                        <TogglerIcon />
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={styles.Navbar__nav} navbar>
                            <NavItem className={styles.NavItem}>
                                <NavLink className={(this.state.activeTabClassName === 'banner') ? [styles.NavLink, styles.active].join(' ') : styles.NavLink} href="#" name="banner" onClick={this.onNavLinkClicked}>ABOUT</NavLink>
                            </NavItem>
                            <NavItem className={styles.NavItem}>
                                <NavLink className={(this.state.activeTabClassName === 'introduce') ? [styles.NavLink, styles.active].join(' ') : styles.NavLink} href="#" name="introduce" onClick={this.onNavLinkClicked}>PRODUCT</NavLink>
                            </NavItem>
                            <NavItem className={styles.NavItem}>
                                <NavLink className={(this.state.activeTabClassName === 'footer') ? [styles.NavLink, styles.active].join(' ') : styles.NavLink} href="#" name="footer" onClick={this.onNavLinkClicked}>CONTACTS</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};


export default Navigation;
