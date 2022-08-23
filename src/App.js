import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './App.scss';
import { CodeIcon, DiamondIcon, EyeIcon } from './components/Icon';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('app')}>
            <div className={cx('header')}>
                <p className={cx('logo')}>Content..</p>
                <div className={cx('menu')}>
                    <p>Home</p>
                    <p>Case Studies</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className={cx('home')}>
                <div className={cx('section')}>
                    <div className={cx('banner')}>
                        <h1 className={cx('title')}>
                            Another landing page for startups
                        </h1>
                        <p className={cx('subtitle')}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <button className={cx('btn')}>Get Statted</button>
                    </div>
                </div>
            </div>

            <div className={cx('section')}>
                <Row gutter={20}>
                    <Col xl={8}>
                        <div className={cx('card')}>
                            <CodeIcon />
                            <p className={cx('card__title')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <span className={cx('card__subtitle')}>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
                            </span>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <div className={cx('card')}>
                            <DiamondIcon />
                            <p className={cx('card__title')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <span className={cx('card__subtitle')}>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
                            </span>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <div className={cx('card')}>
                            <EyeIcon />
                            <p className={cx('card__title')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <span className={cx('card__subtitle')}>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={cx('section')}>
                <div className={cx('right')}>
                    <div className={cx('banner-right')}>
                        <h1 className={cx('title')}>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore
                        </h1>
                        <p className={cx('subtitle')}>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('section')}>
                <div className={cx('banner')}>
                    <h1 className={cx('title')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                    <p className={cx('subtitle')}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

            <div className={cx('section')}>
                <div className={cx('right')}>
                    <div className={cx('banner-right')}>
                        <h1 className={cx('title')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </h1>
                        <p className={cx('subtitle')}>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('home')}>
                <div className={cx('section')}>
                    <h1 className={cx('title-main')}>
                        Frequently Ask Questions
                    </h1>
                    <div className={cx('box')}>
                        <Row gutter={20}>
                            <Col xl={12}>
                                <div className={cx('box__item')}>
                                    <div className={cx('item')}>
                                        <p className={cx('item__title')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit?
                                        </p>
                                        <span className={cx('item__subtitle')}>
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo.
                                        </span>
                                    </div>
                                    <div className={cx('item')}>
                                        <p className={cx('item__title')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit?
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <div className={cx('box__item')}>
                                    <div className={cx('item')}>
                                        <p className={cx('item__title')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit?
                                        </p>
                                    </div>
                                    <div className={cx('item')}>
                                        <p className={cx('item__title')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit?
                                        </p>
                                    </div>
                                    <div className={cx('item')}>
                                        <p className={cx('item__title')}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit?
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className={cx('home')}>
                <div className={cx('section')}>
                    <h1 className={cx('title-main')}>
                        Interested in our Services?
                    </h1>

                    <div className={cx('ct')}>
                        <button className={cx('btn-ct')}>Let’s Talk</button>
                    </div>
                </div>
            </div>

            <div className={cx('section')}>
                <div className={cx('footer')}>
                    <div className={cx('content1')}>
                        <h2>Content..</h2>
                        <span>Got questions? Reach us at hey@email.com</span>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content__item')}>
                            <h2>Menu</h2>
                            <p>Home</p>
                            <p>About</p>
                            <p>Contact us</p>
                            <p>FAQ</p>
                        </div>
                        <div className={cx('content__item')}>
                            <h2>Social</h2>
                            <p>Twitter</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                        </div>
                        <div className={cx('content__item')}>
                            <h2>Legal</h2>
                            <p>Terms of Use</p>
                            <p>Privace Policy</p>
                            <p>Legal Notice</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
