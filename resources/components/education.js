import React from 'react';
import createReactClass  from 'create-react-class';

var EducationComponent = createReactClass({

  render() {
    return (
        <section className={this.props.class}>
            <div className="container">
                <span className="grow col-md-3"><h1>{this.props.data.name}</h1></span>
                <span className="col-md-9">                   
                    <ul className="timeline">
                        {this.props.data.list.map((item, i) => 

                            <li key={i}>
                                <div className="col-md-3">
                                    {item.period}
                                </div>
                                <div className="col-md-9">
                                    <div className="timeline-header">
                                        <b>{item.position}</b>
                                    </div>
                                    <div className="timeline-body">
                                        <a href={item.url} target="_blank">{item.name}</a>
                                    </div>
                                </div>
                            </li>

                        )}
                    </ul>
                </span> 
            </div>            
        </section>
    );
  }
});

export default EducationComponent;
