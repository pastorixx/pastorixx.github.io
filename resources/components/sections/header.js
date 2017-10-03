import React from 'react';
import createReactClass  from 'create-react-class';
import MenuComponent from '../elements/menu';

var HeaderComponent = createReactClass({

  render() {
    return (
        <div className="bg-header">
            <MenuComponent data={this.props.dataMenu} switchLanguage={this.props.switchLanguage} />
            <header>
                <div className="container text-center">      
                    <img src={this.props.data.image} className="img-circle" alt="Roman Khomenko" height="200" />           
                    <h1 className="grow">
                        {this.props.data.title}
                    </h1>
                </div>            
            </header>
        </div>
    );
  }
});

export default HeaderComponent;
