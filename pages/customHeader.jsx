import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import '../css/header.scss';
import logoImg from '../img/logo.png';

class CustomHeader extends React.Component {
    render() {
        return (
            <nav className="white" role="navigation">
                <div className="nav-top">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m8">
                                <i className="tiny material-icons">phone</i> 0613452354 &nbsp;
                                <i className="tiny material-icons">email</i> mail@example.com
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
                        <li><a href="#">Lessen</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#">Lessen</a></li>
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