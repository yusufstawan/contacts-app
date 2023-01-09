import React from "react";
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    }

    this.onNameChangeEventHander = this.onNameChangeEventHander.bind(this);
    this.onTagChangeEventHander = this.onTagChangeEventHander.bind(this);
    this.onSubmitEventHander = this.onSubmitEventHander.bind(this);
  }

  onNameChangeEventHander(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    })
  }

  onTagChangeEventHander(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    })
  }

  onSubmitEventHander(event) {
    event.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHander}>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChangeEventHander} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHander} />
        <button type="submit">Tambah</button>
      </form>
    )
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
}

export default ContactInput;
