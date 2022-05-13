import {CATEGORIES_ACTION_TYPE} from './category.types'

const CATEGORIES_INITTAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = CATEGORIES_INITTAL_STATE, action = {})=>{
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
    
        default:
            return state
    }
}