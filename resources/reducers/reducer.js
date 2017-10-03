import actionTypes from '../actions/action-types';
import content from '../config/state';

function getContent(language = 'EN') {
    return content.filter(obj => obj.language === language)[0];
}

const initialState = {
    content: getContent()
};

var reducer = function (state = initialState, action) {
    switch (action.type) {
      case actionTypes.SWITCH_LANGUAGE:
        return {
            content: getContent(action.language)
        };
    default:
        return state;
    }
};

export default reducer;