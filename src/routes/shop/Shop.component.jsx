import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/Categoties-preview.component';
import Category from '../category/category.component';
import { getCategiriesAndDocument } from '../../utils/firebase/firebasr.utils';
import { setCategories } from '../../store/categories/category.action';

import './shop.styles.scss';

const Shop = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoriesArray = await getCategiriesAndDocument();
            console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap()
    }, [dispatch]);
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>} />
        </Routes>
    )
}

export default Shop