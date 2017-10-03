import React from 'react';
import createReactClass  from 'create-react-class';

var ContactsComponent = createReactClass({

  render() {
    return (
        <section className={this.props.class} id="contacts">
            <div className="container">
                <span className="grow col-md-3"><h1>{this.props.data.name}</h1></span>
                <span className="col-md-9">                   
                    <ul>
                        {this.props.data.list.map((item, i) => 
                            <li key={i} className="col-md-6">
                                <a href={item.url}>
                                    <i className={"contact-icon " + item.logo} aria-hidden="true"></i>
                                    <p className="contact-name grow">{item.name}</p>
                                </a>
                            </li>
                        )}
                    </ul>
                </span> 
            </div>            
        </section>
    );
  }
});

export default ContactsComponent;
