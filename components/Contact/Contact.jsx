import React, { PropTypes } from 'react';
import styles from './Contact.module.scss';

// TODO colors to indigo
// TODO fix animations and validations from materialize on form inputs that do not work because the materialize jquery plugins cant be imported (breaks build)
// TODO mobile
// TODO send values

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.sendForm = this.sendForm.bind(this);
    }

    sendForm(e) {
        e.preventDefault();
        alert('send form NYI');
    }

    render() {
        return (
            <form id="contact" onSubmit={this.sendForm}>
                <h1 className={styles['the-css-module-class']}>
                    css modules test
                </h1>
                <div className="row">
                    <div className="input-field col s6">
                        {/*<input placeholder="Placeholder" id="first_name" type="text" className="validate"/>*/}
                        <input id="contact_name" type="text"/>
                        <label htmlFor="contact_name">Uw naam</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="contact_email" type="email" className="validate" required/>
                        <label htmlFor="contact_email" data-error="Vul een geldig e-mail adres in">Uw e-mail</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="contact_phone" type="text"/>
                        <label htmlFor="contact_phone">Uw telefoonnummer</label>
                    </div>
                </div>
                <div className="row">
                    {/*<div className="input-field col s6">
                        <input id="contact_subject" type="text" className="validate"/>
                        <label for="contact_subject">Last Name</label>
                    </div>*/}
                    <div className="input-field col s6">
                        <textarea id="contact_message" type="text" className="materialize-textarea" required/>
                        <label htmlFor="contact_message">Uw bericht</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light indigo darken-4" type="submit" name="action">Verstuur
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        );
    }
}

Contact.propTypes = {};

export default Contact;