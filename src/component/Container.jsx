import React from "react";
import RenderName from "./RenderName";
import Pesan from "./Pesan";

export default class Container extends React.Component {
    constructor(props){
        super(props);
        this.state={name : "belum ada nama"};
    }

  render() {
    return (
      <>
        <RenderName name={this.state.name} />
        <Pesan ucapan="halo" name="dandi" style={{ backgroundColor: "blue" }} size="small" onClick={(name) => this.setState({ name })} />
        <Pesan ucapan="halo" name="satrio" style={{ backgroundColor: "red" }} size="large" onClick={(name) => this.setState({ name })} />
        <Pesan ucapan="halo" name="Tifa" style={{ backgroundColor: "pink" }} size="medium" onClick={(name) => this.setState({ name })} />
      </>
    );
  }
}
