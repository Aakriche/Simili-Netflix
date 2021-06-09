import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", placeholder: "Votre recherche" };
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            placeholder={this.state.placeholder}
            onChange={this.handleChange.bind(this)}
            className="form-control input-lg"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
