import React, { PropTypes } from 'react';
import TextField from '../form/TextField';
import TextArea from "../form/TextArea";

// TODO send values
// TODO mobile

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
                <TextArea id="contact_message" label="Uw bericht"/>
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