import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer indigo darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Conversa School</h5>
                            <p className="grey-text text-lighten-4">Modern en interactief Pools</p>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Sitemap</h5>
                            <ul>
                                <li>
                                    {/*<Link className="white-text" to={prefixLink('/#top')}>Home</Link>*/}
                                    <a className="white-text" href="#top">Home</a>
                                </li>
                                <li><a className="white-text" href="#courses">Cursussen</a>
                                </li>
                                <li><a className="white-text" href="#nuggets">Taalweetjes</a>
                                </li>
                                <li><a className="white-text" href="#mission">Missie</a>
                                </li>
                                <li><a className="white-text" href="#top">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="col l3 s12">
                            <h5 className="white-text">Example</h5>
                            <ul>
                                <li><Link className="white-text" to={prefixLink('/1/')}>1</Link>
                                </li>
                                <li><Link className="white-text" to={prefixLink('/2/')}>2</Link>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
                <div className="footer-copyright indigo darken-4">
                    <div className="container">
                        © 2017 Conversa School {/*<a className="indigo-text text-darken-2" href="http://mdworld.nl">mdworld.nl</a>*/}
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;