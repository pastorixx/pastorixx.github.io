import React from 'react';
import createReactClass  from 'create-react-class';

var HeaderComponent = createReactClass({

  render() {
    return (
        <header className="text-center">
            <div className="container">      
                <img src={this.props.data.image} className="img-circle" alt="Roman Khomenko" height="200" />           
                <h1 className="grow">
                    {this.props.data.title}
                </h1>
            </div>            
        </header>
    );
  }
});

export default HeaderComponent;
