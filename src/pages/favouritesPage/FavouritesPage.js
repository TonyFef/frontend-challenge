import { useRecoilValue } from "recoil";

import { catsItemsState } from "../../state/atoms";
import { FavouritesPageContainer } from "./FavouritesPageContainer";

export const FavouritesPage = () => {
    const fetchedArray = useRecoilValue(catsItemsState);

    const favouritesArray = fetchedArray.filter((item) => {
        return item.isFilled;
    });

    return <FavouritesPageContainer favouritesArray={favouritesArray} />;
};
