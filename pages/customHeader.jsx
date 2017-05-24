import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './customHeader.scss';
import logoImg from '../img/logo.png';

class CustomHeader extends React.Component {
    render() {
        return (
            <nav className="white" role="navigation" id="top">
                <div className="nav-top indigo darken-4">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m8">
                                {/*<i className="tiny material-icons">phone</i> 06XXXXXXXX &nbsp;*/}
                                <i className="tiny material-icons">email</i> <a href="mailto:info@conversaschool.nl">info@conversaschool.nl</a>
                            </div>
                            <div className="col s12 m4 right-align">facebook  |  insta  |  twitter  |  youtube</div>
                        </div>
                    </div>
                </div>
                <div className="nav-wrapper container">
                    <Link
                        to={prefixLink('/')}
                        className="brand-logo"
                    >
                        <img src={prefixLink(logoImg)} alt="Conversa School Logo"/>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to={prefixLink('/#top')}>Home</Link></li>
                        <li><a href="#courses">Cursussen</a></li>
                        <li><a href="#nuggets">Poolse Taalweetjes</a></li>
                        <li><a href="#mission">Onze Missie</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><Link to={prefixLink('/#')}>Home</Link></li>
                        <li><a href="#">Cursussen</a></li>
                        <li><a href="#">Poolse Taalweetjes</a></li>
                        <li><a href="#">Onze Missie</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}


CustomHeader.propTypes = {};

export default CustomHeader;