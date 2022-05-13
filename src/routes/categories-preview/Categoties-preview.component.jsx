import { useSelector } from 'react-redux';

import {selectCategoriesMap} from '../../store/categories/category.slector' ;
import CategoryPreview from "../../components/category-preview/Category-preview.component";

const CategoriesPreview = ()=>{
    const  categoriesMap = useSelector(selectCategoriesMap)
    return(
        <>
            {
                Object.keys(categoriesMap).map( title =>{
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </>
    )
}
export default CategoriesPreview