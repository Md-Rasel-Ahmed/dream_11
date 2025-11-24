import React, { Component } from "react";

class Newslater extends Component {
  render() {
    return (
      <div className="w-100  p-5 mt-20 bg-gray-400 rounded absolute lg:left-100 lg:bottom-50 md:bottom-50">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input type="text" className="input" placeholder="Type here" />
          <p className="label">Optional</p>
        </fieldset>
      </div>
    );
  }
}

export default Newslater;
