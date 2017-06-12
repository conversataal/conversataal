import React, { PropTypes } from 'react';
import TextField from '../form/TextField';

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
                <TextField id="contact_name" type="text" label="Uw naam"/>
                {/*<TextField id="contact_email" type="email" label="Uw e-mail" errorMessage="Vul een geldig e-mail adres in" required={true}/>*/}
                <TextField id="contact_email" type="email" label="Uw e-mail" required={true}/>
                <TextField id="contact_phone" type="text" label="Uw telefoonnummer"/>
                <div className="row">
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