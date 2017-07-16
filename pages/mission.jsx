import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import iconBulbImg from '../img/mission-icon-bulb.png';
import iconConversationImg from '../img/mission-icon-conversation.png';
import iconGrowImg from '../img/mission-icon-grow.png';
import missionTheme1Img from '../img/mission-theme-1.jpg';
import missionTheme2Img from '../img/mission-theme-2.jpg';
const block1Color = '#303170';
const block2Color = '#231D1E';
const block3Color = '#B22425';

export default class ReactComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <Helmet
                    title={`${config.siteTitle} | Missie`}
                />
                <div className="row" style={{marginBottom: 0}}>
                    <div className="col s12" style={{backgroundColor: '#d9d9d9'}}>
                        <h3>Mission statement Conversa School</h3>

                        <p>
                            <img src={prefixLink(missionTheme1Img)}
                                 alt="studenten met leerboek"
                                 style={{float: 'right', width: '40%', marginLeft: '2em'}}/>
                            Wil jij nog beter worden in Pools? Of heb je de basis van de Poolse taal al onder de knie – maar wil je jouw gesprekken naar een hoger niveau brengen? Of misschien zijn je ouders wel Pools, alleen is het jou nooit gelukt om verder te komen dan simpele gesprekken?
                        </p>
                        <p>
                            Wat jouw reden ook is om beter Pools te willen leren spreken, bij Conversa School ben je aan het juiste adres. Wij helpen namelijk al bijna 5 jaar om allerlei verschillende mensen met verschillende achtergronden Pools te laten spreken.
                        </p>
                        <p>
                            Of je nu jong of oud bent, een ervaren taalkenner of een beginneling, of je alle tijd van de wereld hebt of misschien binnen korte tijd zo vloeiend mogelijk Pools wilt spreken. Wij kunnen jou helpen om je doel te bereiken.
                        </p>

                        <div style={{clear: 'both'}}></div>
                        <h4>Onze missie: De Poolse taal toegankelijk maken voor jong en oud!</h4>

                        <p>Wij begrijpen dat Pools een lastige taal is. Vandaar dat wij een unieke aanpak gebruiken om ervoor te zorgen dat ook jij de Poolse taal onder de knie kunt krijgen. Wanneer je bij ons Pools komt leren dan leren wij jou hoe je:</p>

                        {/*<div className="row flex-boxes">
                            <div className="col s12 m12 l4" id="mission">
                                <div className="icon-block">
                                    <h2 className="center">
                                        <img style={{height: '1.5em'}} src={prefixLink(iconBulbImg)} alt="Library Icon"/>
                                    </h2>
                                    <p>Een origineel gesprek kunt houden in het Pools</p>
                                </div>
                            </div>

                            <div className="col s12 m12 l4" id="courses">
                                <div className="icon-block">
                                    <h2 className="center">
                                        <img style={{height: '1.5em'}} src={prefixLink(iconConversationImg)} alt="Library Icon"/>
                                    </h2>
                                    <p style={{textAlign: 'center'}}>Goedlopende correcte zinnen in het Pools kunt maken met de woorden en grammatica die je al kent</p>
                                </div>
                            </div>

                            <div className="col s12 m12 l4" id="nuggets">
                                <div className="icon-block">
                                    <h2 className="center">
                                        <img style={{height: '1.5em'}} src={prefixLink(iconGrowImg)} alt="Library Icon"/>
                                    </h2>
                                    <p>Binnen 1 jaar op niveau B1/B2 in de Poolse taal kunt komen<a href="#footnote">*</a></p>
                                </div>
                            </div>
                        </div>*/}

                        <ul className="browser-default">
                            <li>Een origineel gesprek kunt houden in het Pools</li>
                            <li>Goedlopende correcte zinnen in het Pools kunt maken met de woorden en grammatica die je al kent</li>
                            <li>Binnen 1 jaar op niveau B1/B2 in de Poolse taal kunt komen<a href="#footnote">*</a></li>
                        </ul>

                        <p>Zoals je ziet kun je dus snel en effectief Pools leren bij Conversa School. Wij hanteren namelijk een gebalanceerde aanpak die gebruik maakt van verschillende off- en online middelen. Denk hierbij aan online handleidingen en gidsen (voor effectieve zelfstudie thuis), maar vooral aan conversatie cursussen en avonden – waar je jezelf kunt testen en alles wat je geleerd hebt écht in de praktijk kunt toepassen!</p>

                        <h4>Wil jij ook Pools leren?</h4>

                        <p>
                            <img src={prefixLink(missionTheme2Img)}
                                 alt="groep van overleggende mensen"
                                 style={{float: 'left', width: '40%', marginRight: '2em'}}/>

                            Heb je interesse om samen met ons aan de slag te gaan om het niveau van jouw Poolse taal naar een hoger niveau te brengen?
                            Neem dan contact op met ons via ons <a href="/#contact">contactformulier</a>. Wij helpen je graag om al jouw doelen in de Poolse taal te bereiken.</p>

                        <p>Dziękujemy bardzo i czekamy na Was!</p>


                        <div style={{clear: 'both'}}></div>
                        <p id="footnote" style={{color: '#646464', borderTop: '1px solid #646464', marginTop: '4em'}}>
                            * Uit ervaring hebben wij gezien dat onze studenten B1/B2 binnen 1 jaar kunnen behalen – echter is het uiteraard ook afhankelijk van de inzet en toewijding vanuit jouw kant!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
