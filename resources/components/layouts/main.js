import React from 'react';
import createReactClass  from 'create-react-class';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
// Components:
import HeaderComponent from '../sections/header';
import AboutComponent from '../sections/about';
import ExperiencesComponent from '../sections/experiences';
import EducationComponent from '../sections/education';
import SkillsComponent from '../sections/skills';
import ContactsComponent from '../sections/contacts';
import FooterComponent from '../sections/footer';
import ButtonScrollComponent from '../elements/button-scroll';


var LayoutComponent = createReactClass({
    render() {
    
        const content = this.props.content;
        const switchLanguage = this.props.switchLanguage;
  
        return (
            <div>
                <HeaderComponent data={content.header} dataMenu={content.menu} switchLanguage={switchLanguage} />
                <AboutComponent data={content.about} class="bg-color" />
                <ExperiencesComponent data={content.experiences} />
                <EducationComponent data={content.education} class="bg-color" />
                <SkillsComponent data={content.skills} />
                <ContactsComponent data={content.contacts} class="bg-color" />
                <FooterComponent data={content.footer} />
                <ButtonScrollComponent data={content.button_scroll} />
            </div>
        );
    }
});

export default connect(
    (state) => ({content: state.content}),
    (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(LayoutComponent);