import React from 'react';

import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Introduce from '../components/Introduce';
import News from '../components/News';
import Footer from '../components/Footer';
import Function from '../components/Function';
import Shop from '../components/Shop';


class Intro extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Banner />
                <News />
                <Introduce />
                <Function />
                <Shop />
                <Footer />
            </div>
        );
    }
}

export default Intro;
