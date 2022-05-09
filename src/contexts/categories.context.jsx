import { createContext, useEffect, useReducer } from "react";

import {getCategiriesAndDocument} from '../utils/firebase/firebasr.utils'

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: ()=> null
});

export const CATEGORIES_ACTION_TYPE = {
    SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP'
}

const categoriesReducer = (state, action)=>{
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
            return{
                ...state,
                categoriesMap: payload
            }
    
        default:
            throw new Error(`Unhandled type ${type} in categoriesReducer`);
    }
}

const INITTAL_STATE = {
    categoriesMap: {}
}

export const CategoriesProvider = ({children})=>{
    const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, INITTAL_STATE);
    const setCategoriesMap = (categoryMap)=>{
        dispatch({type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, payload: categoryMap})
    }

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategiriesAndDocument();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap()
    }, []);

    const value = {categoriesMap, setCategoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}