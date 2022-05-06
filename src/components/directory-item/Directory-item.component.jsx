import { useNavigate } from 'react-router-dom';

import {
    BackgroundImage,
    ItemBody,
    DirectoryItemContainer
} from './directory-item.style';

const DirectoryItem = ({category})=>{
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <ItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </ItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem