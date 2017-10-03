import * as action_types from './action-types';

var actions = {
    switchLanguage(language) {
        return {
            type: action_types.SWITCH_LANGUAGE,
            language
        }
    }
};

export default actions;