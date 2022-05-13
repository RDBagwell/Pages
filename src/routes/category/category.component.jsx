import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/Product-Card.component';
import {selectCategoriesMap} from '../../store/categories/category.slector' ;
import './category.styles.scss';

const Category = ()=>{
    const {category} = useParams();
    const  categoriesMap  = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    console.log('render/re-rendering component');

    useEffect(()=>{
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category])
    },[category, categoriesMap])
    return(
        <>
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
            <div className='category-container'>
                
                {        
                    products && products.map((product)=>(
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>

    )
}

export default Category