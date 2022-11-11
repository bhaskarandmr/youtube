import React from 'react';

import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }
    
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return(
            <div><img src='https://stat.dinamalar.com/new/images/dmrenglishlogonew.png'/></div>
        )
    }
}

export default SearchBar;
