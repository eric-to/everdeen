import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => $('.step-1').addClass('fadeIn'), 100);
    setTimeout(() => $('.step-2').addClass('fadeIn'), 800);
    setTimeout(() => $('.step-3').addClass('fadeIn'), 1400);
    setTimeout(() => $('.step-4').addClass('fadeIn'), 1800);
    setTimeout(() => $('.step-5').addClass('fadeIn'), 2000);
  }

  render() {
    return (
      <section className="splash">
        <div className="splash-text">
          <h1>
            <div className="step-1">Investing.</div>
            <div className="step-2">Now for the rest of us.</div>
          </h1>
          <h4 className="step-3">
            Everdeen lets you invest in the stock market<br/>for free, directly from your desktop.
          </h4>
          <Link class="step-5" to="/signup">Sign Up</Link>
        </div>

        <img className="step-4" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/iPhoneHome_still%402x.png" />
      </section>
    );
  }
}

export default Splash;
