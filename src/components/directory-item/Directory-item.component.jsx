import {
    BackgroundImage,
    ItemBody,
    DirectoryItemContainer
} from './directory-item.style';

const DirectoryItem = ({category})=>{
    const {title, imageUrl} = category
    return(
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <ItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </ItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem