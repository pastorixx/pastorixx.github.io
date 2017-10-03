import React from 'react';
import createReactClass  from 'create-react-class';

var AboutComponent = createReactClass({

  render() {
    return (
        <section className={this.props.class} id="about">
            <div className="container">
                <span className="grow col-md-3"><h1>{this.props.data.name}</h1></span>
                <span className="col-md-9">                   
                    <p>{this.props.data.description}</p>
                </span> 
            </div>            
        </section>
    );
  }
});

export default AboutComponent;
