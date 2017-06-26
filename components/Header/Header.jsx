import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Header.scss';
import logoImg from '../../img/logo.png';
import fbImg from '../../img/facebook.svg';
import liImg from '../../img/linkedin.svg';

class Header extends React.Component {
    render() {
        return (
            <nav className="white" role="navigation" id="top">
                <div className="nav-top indigo darken-4">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <div className="icon-and-contact">
                                    <a href="tel:+31651031900">
                                        <i className="small material-icons">phone</i>
                                        <span className="hide-on-small-and-down">06 5103 1900</span>
                                    </a>
                                </div>
                                <div className="icon-and-contact">
                                    <a href="mailto:info@conversaschool.nl">
                                        <i className="small material-icons">email</i>
                                        <span className="hide-on-small-and-down">info@conversaschool.nl</span>
                                    </a>
                                </div>
                                <div className="right">
                                    <a className="social-media" href="https://www.facebook.com/ConversaSchool/">
                                        <img src={prefixLink(fbImg)} alt="Conversa School Facebook"/>
                                    </a>
                                    <a className="social-media" href="https://www.linkedin.com/company-beta/18039347/">
                                        <img src={prefixLink(liImg)} alt="Conversa School LinkedIn"/>
                                    </a>
                                    {/*|  insta  |  twitter  |  youtube*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-wrapper container">
                    <div className="row">
                        <div className="col s6 m3">
                            <Link
                                to={prefixLink('/')}
                                className=""
                            >
                                <img src={prefixLink(logoImg)} alt="Conversa School Logo"/>
                            </Link>
                        </div>
                        <div className="col s6 m9">
                            {/*large screen menu*/}
                            <ul className="main-menu">
                                <li><Link to={prefixLink('/#top')}>Home</Link></li>
                                <li><a href="/#courses">Cursussen</a></li>
                                <li><a href="/#nuggets">Taalweetjes</a></li>
                                <li><a href="/#mission">Missie</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                            {/*small screen menu*/}
                            {/*<ul className="right hide-on-large-only">
                                <Link to={prefixLink('/#top')}>Home</Link><br/>
                                <a href="#courses">Cursussen</a><br/>
                                <a href="#nuggets">Taalweetjes</a><br/>
                                <a href="#mission">Missie</a><br/>
                                <a href="#top">Contact</a><br/>
                            </ul>*/}
                        </div>
                    </div>

                    {/*<ul className="right hide-on-med-and-down">
                        <li><Link to={prefixLink('/#top')}>Home</Link></li>
                        <li><a href="#courses">Cursussen</a></li>
                        <li><a href="#nuggets">Taalweetjes</a></li>
                        <li><a href="#mission">Missie</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><Link to={prefixLink('/#')}>Home</Link></li>
                        <li><a href="#">Cursussen</a></li>
                        <li><a href="#">Taalweetjes</a></li>
                        <li><a href="#">Missie</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>*/}
                </div>
            </nav>
        );
    }
}


Header.propTypes = {};

export default Header;