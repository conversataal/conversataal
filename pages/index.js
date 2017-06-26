import React from 'react';
//import {Link} from 'react-router';
//import 'materialize-css/dist/js/materialize.min'; // gatsby build fails with this line
import {prefixLink} from 'gatsby-helpers';
import Helmet from 'react-helmet';
import {config} from 'config';
import ReactGA from 'react-ga';
import Contact from '../components/Contact/Contact';

import './index-banner.scss';

import capImg from '../img/cap.svg';
import lightbulbImg from '../img/lightbulb.svg';
import rocketImg from '../img/rocket.svg';

import img1 from '../img/krakow.jpg';
import img2 from '../img/krakow_kazimierzdistrict_facade.jpg';
import img3 from '../img/krakow_wawel_birdview.jpg';
import img4 from '../img/lublin_castle.jpg';
import img5 from '../img/poznan_oldtown_market.jpg';
const imgbgs = [img1, img2, img3, img4, img5];

const block1Color = '#303170';
const block2Color = '#231D1E';
const block3Color = '#B22425';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgImg: imgbgs[1],
            showDebug: false
        };
        this.dbgChangeBg = this.dbgChangeBg.bind(this);
        this.getDbgMenu = this.getDbgMenu.bind(this);
        this.setBg = this.setBg.bind(this);
    }

    componentDidMount() {
        ReactGA.initialize('UA-99911967-1');
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    // componentDidUpdate() {}

    /* start debug functions */
    dbgChangeBg() {
        this.setState({showDebug: !this.state.showDebug});
    }

    setBg(uri) {
        this.setState({bgImg: uri});
    }

    getDbgMenu() {
        if(this.state.showDebug) {
            const entries = imgbgs.map((item, index) => {
                console.log(item, index);
                return <div onClick={() => this.setBg(item)}>background {index}</div>
            });
            return (
                <div style={{
                    backgroundColor: 'black',
                    color: 'green',
                    fontFamily: 'monospace'
                }}>
                    {entries}
                </div>
            );
        }
    }
    /* end debug functions */

    render() {
        const debug = this.getDbgMenu();
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
                    {debug}
                    {/*<div className="background" onClick={this.dbgChangeBg} style={{*/}
                    <div className="background" style={{
                        backgroundImage: 'url(' + this.state.bgImg + ')'
                    }}> </div>
                    <div className="section no-pad-bot" style={{
                        marginTop: '-600px'
                    }}>
                        <div className="container">
                            <div className="banner-text">
                                <h1 className="header white-text">Conversa School</h1>
                                <div className="row">
                                    <h5 className="header col s12 light white-text">Modern en interactief Pools</h5>
                                </div>
                                {/*<div className="row">
                                 <a href="#courses" id="download-button"
                                 className="btn-large waves-effect waves-light indigo darken-4">Cursussen</a>
                                 </div>*/}
                            </div>
                        </div>
                    </div>

                    <div className="container index-banner-info">
                        <div className="section">
                            <div className="row flex-boxes">
                                {/*<div className="col s12 m4 indigo white-text" id="mission">*/}
                                <div className="col s12 m12 l4 white-text" id="mission" style={{backgroundColor: block1Color}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            <img style={{height: '1.5em'}} src={prefixLink(rocketImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Missie</h5>

                                        <p className="light">Ben je al een tijdje met Pools leren bezig, maar vind je het
                                            toch moeilijk om een basis gesprek in het Pools te houden?
                                            Ken je veel verschillende Poolse woorden, maar weet je niet hoe je er
                                            originele zinnen van moet maken?<br/>
                                            Conversa School is een offline en online Poolse taalschool en onze missie is
                                            jouw kennis van de Poolse taal naar een hoger niveau te brengen!</p>
                                        <a href="/mission/">Lees meer</a>
                                    </div>
                                </div>

                                {/*<div className="col s12 m4 red darken-2 white-text" id="courses">*/}
                                <div className="col s12 m12 l4 white-text" id="courses" style={{backgroundColor: block2Color}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            {/*<i className="material-icons">group</i>*/}
                                            <img style={{height: '1.5em'}} src={prefixLink(capImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Cursussen</h5>

                                        <p className="light">We bieden je online handleidingen en gidsen die helpen
                                            jouw taalniveau van Pools te bepalen, je grammatica en zinsbouw op orde te
                                            krijgen en je luistervaardigheid te verbeteren.<br/>
                                            Daarnaast bieden we (offline) conversatiecursussen en Poolse Taal Avonden
                                            zodat je de Poolse taal in een veilige en gezellige omgeving kan oefenen.
                                            Kom gauw terug voor meer informatie of neem een kijkje
                                            op <a href="https://www.facebook.com/ConversaSchool/">onze Facebook pagina</a>.</p>
                                    </div>
                                </div>

                                <div className="col s12 m12 l4 white-text" id="nuggets" style={{backgroundColor: block3Color}}>
                                    <div className="icon-block">
                                        <h2 className="center">
                                            <img style={{height: '1.5em'}} src={prefixLink(lightbulbImg)} alt="Library Icon"/>
                                        </h2>
                                        <h5 className="center">Taalweetjes</h5>

                                        <p className="light">Taal leren moet ook leuk zijn! Hier vind je wat leuke
                                            taalweetjes, mini-toetsen, fabels en feiten over de Poolse taal.<br/>
                                            De informatie die je hier vindt helpen je iedereen met jouw Poolse taalkennis
                                            te imponeren.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="container">
                    <Contact></Contact>
                </div>

            </div>
        )
    }
}
