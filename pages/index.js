import React from 'react';
//import {Link} from 'react-router';
//import 'materialize-css/dist/js/materialize.min'; // gatsby build fails with this line
import {prefixLink} from 'gatsby-helpers';
import Helmet from 'react-helmet';
import {config} from 'config';
import './index-banner.scss';
import capImg from '../img/cap.svg';
import libraryImg from '../img/library.svg';
import lightbulbImg from '../img/lightbulb.svg';
import rocketImg from '../img/rocket.svg';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {}
    //
    // componentDidUpdate() {}

    render() {
        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        {"name": "description", "content": "Conversa School - Modern en interactief Pools"},
                        {"name": "keywords", "content": "polish, language, pools, taal, modern, interactief, conversatieles"},
                    ]}
                />

                <div id="index-banner" style={{width: '100%'}}>
                    <div className="background"></div>
                    <div className="section no-pad-bot" style={{marginTop: '-600px'}}>
                        <div className="container">
                            <br/><br/>
                            <h1 className="header white-text">Conversa School</h1>
                            <div className="row">
                                <h5 className="header col s12 light white-text">Modern en interactief Pools</h5>
                            </div>
                            {/*<div className="row">
                                <a href="#courses" id="download-button"
                                   className="btn-large waves-effect waves-light indigo darken-4">Cursussen</a>
                            </div>*/}
                            <br/><br/><br/><br/><br/>

                        </div>
                    </div>

                    <div className="container index-banner-info">
                        <div className="section">
                            <div className="row" style={{display: 'flex'}}>
                                {/*<div className="col s12 m4 indigo white-text" id="mission">*/}
                                <div className="col s12 m4 white-text" id="mission" style={{backgroundColor: '#7AA622'}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            <img style={{height: '1.5em'}} src={prefixLink(rocketImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Onze Missie</h5>

                                        <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                            scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                            consequat magna fermentum ac. </p>
                                    </div>
                                </div>

                                {/*<div className="col s12 m4 red darken-2 white-text" id="courses">*/}
                                <div className="col s12 m4 white-text" id="courses" style={{backgroundColor: '#B22425'}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            {/*<i className="material-icons">group</i>*/}
                                            <img style={{height: '1.5em'}} src={prefixLink(capImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Cursussen</h5>

                                        <p className="light">Cras ut ultricies eros. Maecenas eros justo, ullamcorper a
                                            sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget,
                                            bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl
                                            maximus sed. Nulla imperdiet semper molestie. </p>
                                    </div>
                                </div>

                                <div className="col s12 m4 white-text" id="nuggets" style={{backgroundColor: '#166B6B'}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            <img style={{height: '1.5em'}} src={prefixLink(lightbulbImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Poolse Taalweetjes</h5>

                                        <p className="light">Morbi massa odio, condimentum sed ipsum ac, gravida ultrices
                                            erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum
                                            primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/*<div className="section no-pad-bot">
                        <div className="container">
                            <br/><br/>
                            <h1 className="header center teal-text text-lighten-2">Conversa</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
                            </div>
                            <div className="row center">
                                <a href="http://materializecss.com/getting-started.html" id="download-button"
                                   className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                            <br/><br/>

                        </div>
                    </div>*/}
                </div>
                {/*<div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src={prefixLink(sliderBgImg)} alt="Unsplashed background img 2"/>
                    </div>
                </div>*/}

                {/*<div className="container">
                    <div className="section">

                        <div className="row">
                            <div className="col s12 center">
                                <h3><i className="mdi-content-send brown-text"></i></h3>
                                <h4>Contact Us</h4>
                                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                    consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo,
                                    ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium
                                    eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
                                    nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed
                                    ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                    Curae;</p>
                            </div>
                        </div>

                    </div>
                </div>*/}

                {/*<div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src={prefixLink(sliderBgImg)} alt="Unsplashed background img 3"/>
                    </div>
                </div>*/}
            </div>
        )
    }
}
