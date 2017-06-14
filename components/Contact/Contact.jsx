import React, { PropTypes } from 'react';
import TextField from '../form/TextField';
import TextArea from "../form/TextArea";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_name: '',
            contact_email: '',
            contact_phone: '',
            contact_message: ''
        };
        this.sendForm = this.sendForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    sendForm(e) {
        e.preventDefault();
        const url = 'https://formspree.io/info@conversaschool.nl';
        //const url = 'http://httpbin.org/post';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.contact_name,
                email: this.state.contact_email,
                phone: this.state.contact_phone,
                message: this.state.contact_message
            })
        })
            .then(data => data.json())
            .then(data => {
                if(data.status === 'ok') {
                    console.log(`Get completed to: ${data.fileName}`);
                } else {
                    throw new Error('failed');
                }
            })
            .catch(error => console.error('error: ' + error));
    }

    handleUpdate(id, newValue) {
        this.setState({[id]: newValue});
    }

    render() {
        const submitDisabled = this.state.contact_email && this.state.contact_message ? false : true;
        return (
            <form id="contact" onSubmit={this.sendForm}>
                <TextField id="contact_name" type="text" label="Uw naam" value={this.state.contact_name}
                           handleUpdate={this.handleUpdate}/>
                {/*<TextField id="contact_email" type="email" label="Uw e-mail" errorMessage="Vul een geldig e-mail adres in" required={true}/>*/}
                <TextField id="contact_email" type="email" label="Uw e-mail" value={this.state.contact_email}
                           handleUpdate={this.handleUpdate} required={true}/>
                <TextField id="contact_phone" type="text" label="Uw telefoonnummer" value={this.state.contact_phone}
                           handleUpdate={this.handleUpdate}/>
                <TextArea id="contact_message" label="Uw bericht" value={this.state.contact_message}
                          handleUpdate={this.handleUpdate} required={true}/>
                <div className="row">
                    <button className="btn waves-effect waves-light indigo darken-4" type="submit" disabled={submitDisabled}>Verstuur
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        );
    }
}

Contact.propTypes = {};

export default Contact;