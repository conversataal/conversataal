import React from 'react';
//import {Link} from 'react-router';
//import $ from 'jquery';
//import 'materialize-css/dist/js/materialize.min'; // gatsby build fails with this line
import {prefixLink} from 'gatsby-helpers';
import Helmet from 'react-helmet';
import {config} from 'config';
import sliderBgImg from '../img/bg-parallax.jpg';
import './index-banner.scss';

// $.fn.parallax = function () {
//    var window_width = $(window).width();
//    // Parallax Scripts
//    return this.each(function(i) {
//      var $this = $(this);
//      $this.addClass('parallax');
//
//      function updateParallax(initial) {
//        var container_height;
//        if (window_width < 601) {
//          container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
//        }
//        else {
//          container_height = ($this.height() > 0) ? $this.height() : 500;
//        }
//        var $img = $this.children("img").first();
//        var img_height = $img.height();
//        var parallax_dist = img_height - container_height;
//        var bottom = $this.offset().top + container_height;
//        var top = $this.offset().top;
//        var scrollTop = $(window).scrollTop();
//        var windowHeight = window.innerHeight;
//        var windowBottom = scrollTop + windowHeight;
//        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
//        var parallax = Math.round((parallax_dist * percentScrolled));
//
//        if (initial) {
//          $img.css('display', 'block');
//        }
//        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
//          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
//        }
//
//      }
//
//      // Wait for image load
//      $this.children("img").one("load", function() {
//        updateParallax(true);
//      }).each(function() {
//        if (this.complete) $(this).trigger("load");
//      });
//
//      $(window).scroll(function() {
//        window_width = $(window).width();
//        updateParallax(false);
//      });
//
//      $(window).resize(function() {
//        window_width = $(window).width();
//        updateParallax(false);
//      });
//
//    });
// };

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        //this.renderParallax = this.renderParallax.bind(this);
    }

    componentDidMount() {
        //this.renderParallax();
    }

    componentDidUpdate() {
        //this.renderParallax();
    }

    // See http://tech.oyster.com/using-react-and-jquery-together/
    // renderParallax() {
    //   console.log('renderParallax', $('footer'));
    //   //$('.parallax').parallax();
    // }

    render() {
        return (
            <div>
                <div id="index-banner" style={{width: '100%'}}>
                    <div className="background"></div>
                    {/*<img src={prefixLink(sliderBgImg)} alt="Background image"
                         style={{height: '400px', width: '100%'}}/>*/}

                    <div className="section no-pad-bot" style={{marginTop: '-600px'}}>
                        <div className="container">
                            <br/><br/>
                            <h1 className="header white-text">Conversa</h1>
                            <div className="row">
                                <h5 className="header col s12 light white-text">Tailor-made individual and group courses</h5>
                            </div>
                            <div className="row">
                                <a href="http://materializecss.com/getting-started.html" id="download-button"
                                   className="btn-large waves-effect waves-light indigo lighten-1">Get Started</a>
                            </div>
                            <br/><br/>

                        </div>
                    </div>

                    <div className="container index-banner-info">
                        <div className="section">
                            {/*<div className="row">
                                <div className="col s12">
                                    Some information about this picture
                                </div>
                            </div>*/}
                            <div className="row">
                                <div className="col s12 m4 indigo white-text">
                                    <div className="icon-block">
                                        <h2 className="center"><i className="material-icons">business</i></h2>
                                        <h5 className="center">In your company</h5>

                                        <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                            scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                            consequat magna fermentum ac. </p>
                                    </div>
                                </div>

                                <div className="col s12 m4 red darken-2 white-text">
                                    <div className="icon-block">
                                        <h2 className="center"><i className="material-icons">group</i></h2>
                                        <h5 className="center">At your chosen location</h5>

                                        <p className="light">Cras ut ultricies eros. Maecenas eros justo, ullamcorper a
                                            sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget,
                                            bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl
                                            maximus sed. Nulla imperdiet semper molestie. </p>
                                    </div>
                                </div>

                                <div className="col s12 m4 indigo white-text">
                                    <div className="icon-block">
                                        <h2 className="center"><i className="material-icons">videocam</i></h2>
                                        <h5 className="center">On Skype</h5>

                                        <p className="light">Morbi massa odio, condimentum sed ipsum ac, gravida ultrices
                                            erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum
                                            primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="section no-pad-bot">
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
                    </div>
                </div>



                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src={prefixLink(sliderBgImg)} alt="Unsplashed background img 2"/>
                    </div>
                </div>

                <div className="container">
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
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">Tailor-made individual and group courses</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src={prefixLink(sliderBgImg)} alt="Unsplashed background img 3"/>
                    </div>
                </div>


                <Helmet
                    title={config.siteTitle}
                    meta={[
                        {"name": "description", "content": "Sample"},
                        {"name": "keywords", "content": "sample, something"},
                    ]}
                />
            </div>
        )
    }
}
