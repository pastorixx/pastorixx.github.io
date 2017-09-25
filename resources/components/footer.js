import React from 'react';
import createReactClass  from 'create-react-class';

var FooterComponent = createReactClass({

  render() {
    return (
        <footer className="text-center">
            <div className="container">                 
                <p>{this.props.data.copyright}</p>
            </div>            
        </footer>
    );
  }
});

export default FooterComponent;
