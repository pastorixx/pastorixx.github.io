import React from 'react';
import createReactClass  from 'create-react-class';

var ButtonScrollComponent = createReactClass({
    
    getInitialState() {
        return {
            intervalId: 0
        };
    },
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.data.step_px);
    },
    
    handleClick() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.data.delay_ms);
        this.setState({ intervalId: intervalId });
    },
    
    render () {
        return (
            <button title={this.props.data.title} className='scroll' onClick={ this.handleClick }>
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </button>
        )
    }
});

export default ButtonScrollComponent;