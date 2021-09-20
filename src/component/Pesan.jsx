import React from "react";
import "./Pesan.css";

export default class Pesan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  handleClick = () => {
    if (this.state.ucapan !== "hola") {
      this.setState((current) => ({
        ...current,
        ucapan: "hola",
      }));
      this.props.onClick(this.props.name);
    }
  };

  render() {
    return (
      <div className={`box box--${this.state.size}`} style={{ fontStyle: "italic", ...this.state.style }}>
        {`${this.state.ucapan} ${this.state.name}`}
        <button onClick={this.handleClick}>Updater</button>
      </div>
    );
  }
}
