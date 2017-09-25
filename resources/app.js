import React from 'react';
import createReactClass  from 'create-react-class';
import { render } from 'react-dom';
import HeaderComponent from './components/header';
import AboutComponent from './components/about';
import ExperiencesComponent from './components/experiences';
import EducationComponent from './components/education';
import SkillsComponent from './components/skills';
import ContactsComponent from './components/contacts';
import FooterComponent from './components/footer';

import initialState from './config/state';
import './styles/sass/app.scss';
import './styles/css/custom.css';

// require('./styles/sass/app.scss');

var ParentComponent = createReactClass({
    getInitialState() {
        return initialState;
    },
  
    render() {
        return (
            <div>                
                <HeaderComponent data={this.state.header} />
                <AboutComponent data={this.state.about} class="bg-color" />
                <ExperiencesComponent data={this.state.experiences} />
                <EducationComponent data={this.state.education} class="bg-color" />
                <SkillsComponent data={this.state.skills} />
                <ContactsComponent data={this.state.contacts} class="bg-color" />
                <FooterComponent data={this.state.footer} />           
            </div>
        );
    }
});

render(<ParentComponent />, document.getElementById('app'));
