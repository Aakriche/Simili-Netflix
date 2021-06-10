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
          <button className="btn" onClick={this.handleClick.bind(this)}>Go</button>
        </div>
      </div>
    );
  }

  handleClick() {
    this.props.callback(this.state.inputValue)
  }
}

export default SearchBar;
