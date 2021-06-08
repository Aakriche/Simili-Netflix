import React from 'react';


class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { inputValue: '',
                        placeholder: 'Votre recherche'

        };


    }

    handleChange(e){

        this.setState({ inputValue: e.target.value})

    };

    render() {
        return (
            <div>
                <input type='text' 
                placeholder={this.state.placeholder} 
                onChange= {this.handleChange.bind(this)}/>
                <button type="submit">Rechercher</button>
            
            </div>
        )
    }

   

}

export default SearchBar;