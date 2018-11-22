import React, { Component, Suspense } from 'react';

import './style.css';

class Devil extends Component {
  state = { isButtonClicked: false };

  handleButtonClick = event => {
    event.preventDefault();
    this.Action = React.lazy(() => import('../Action'));
    this.setState({ isButtonClicked: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick} className="devil__button">
          Push Me!
        </button>
        {this.state.isButtonClicked && (
          <Suspense fallback={<span />}>
            <this.Action by="devil" />
          </Suspense>
        )}
      </div>
    );
  }
}

export default Devil;
