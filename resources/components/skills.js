import React from 'react';
import createReactClass  from 'create-react-class';

var SkillsComponent = createReactClass({

  render() {
    return (
        <section className={this.props.class}>
            <div className="container">
                <span className="grow col-md-3"><h1>{this.props.data.name}</h1></span>
                <span className="col-md-9">                   
                    <ul>
                        {this.props.data.list.map((item, i) => 
                            <li key={i} className="skill text-center col-xs-6 col-sm-6 col-md-3 col-lg-3 grow">
                                <a href={item.url} target="_blank">
                                    <img src={item.logo} alt={item.name}  height="64"/>
                                    <p className="skill-name">{item.name}</p>
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

export default SkillsComponent;
