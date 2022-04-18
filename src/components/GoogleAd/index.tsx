import React from 'react';
import { iGoogleAd } from './interface';

const googleAdId = 'ca-pub-9208283570899101';

class GoogleAd extends React.Component<iGoogleAd> {
  googleInit: NodeJS.Timeout | null = null;

  componentDidMount() {
    const { timeout } = this.props;
    const windowWithI = window as any;
    this.googleInit = setTimeout(() => {
      if (typeof windowWithI !== 'undefined')
        (windowWithI.adsbygoogle = windowWithI.adsbygoogle || []).push({});
    }, timeout || 200);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot } = this.props;
    return (
      <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={googleAdId}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

export default GoogleAd;