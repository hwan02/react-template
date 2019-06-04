import React, { Component } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Container,
} from 'reactstrap';

import styles from './News.scss';

const items = [
    {
        src: '/images/article1.png',
        altText: 'Slide 1',
        caption: 'Slide 1',
        href: 'https://www.sedaily.com/NewsView/1VFB701GW0',
    },
];
class News extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
            >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} alt={item.altText} className={styles.News_Img} />
                </a>
            </CarouselItem>
        ));

        return (
            <section id="news" className="News wrapper">
                <div className={styles.News}>
                    <Container>
                        <h2>TEAM EIGHT IN THE MEDIA</h2>
                        <div className="inner">
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        </div>
                    </Container>
                </div>
            </section>
        );
    }
}

export default News;
