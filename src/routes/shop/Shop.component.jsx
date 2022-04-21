import SHOP_DATA from '../../shop-data.json';

const Shop = ()=>{
    return(
        <div>
            { SHOP_DATA.map(({id, name, imageUrl, price})=>(                
                    <div key={id}> 
                        <div>{name}</div>
                        <div>{imageUrl}</div>
                        <div>{price}</div>
                    </div>
                )
            )}
        </div>
    )
}

export default Shop