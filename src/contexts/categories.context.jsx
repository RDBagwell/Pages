import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from '../shop-data.js';

import {getCategiriesAndDocument} from '../utils/firebase/firebasr.utils'

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: ()=> null
});

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({});

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