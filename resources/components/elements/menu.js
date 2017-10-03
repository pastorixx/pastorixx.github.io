import React from 'react';
import createReactClass  from 'create-react-class';

var MenuComponent = createReactClass({
    
    getInitialState() {
        return {
            intervalId: 0
        };
    },

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    },

    handleClick() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    },
    
    render () {
        return (

            <nav className="navbar navbar-default navbar-mobile-fixed-top">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu"
                        aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">PastoriXx</a>
                    </div>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about">{this.props.data.about}</a></li>
                            <li><a href="#experiences">{this.props.data.experiences}</a></li>
                            <li><a href="#education">{this.props.data.education}</a></li>
                            <li><a href="#skills">{this.props.data.skills}</a></li>
                            <li><a href="#contacts">{this.props.data.contacts}</a></li>
                            <li><a href="#" className="switch-language"
                                title={this.props.data.button_language.title} 
                                onClick={this.props.switchLanguage.bind(this, this.props.data.button_language.key)}
                            >{this.props.data.button_language.key}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

export default MenuComponent;