import store from "store";
import { useRecoilState } from "recoil";

import { catsItemsState, filledLikeState } from "../../state/atoms";
import { LikeContainer } from "./LikeContainer";

export const Like = ({ hover, cat }) => {
    const styles = "absolute right-[28px] bottom-[28px] sm:left-[45%] sm:bottom-[10%] md:right-[35%] xl:right-[45%]";

    const [filledState, setFilledState] = useRecoilState(filledLikeState);
    const [fetchedArray, setFetchedArray] = useRecoilState(catsItemsState);

    const toggleItemCheck = () => {
        setFetchedArray(
            getItemsWithUpdateItem(fetchedArray, {
                ...cat,
                isFilled: !cat.isFilled,
            })
        );
    };

    function getItemsWithUpdateItem(items, item) {
        const catsListFromStorage = JSON.parse(localStorage.getItem("fetchedData"));

        const likedCat = catsListFromStorage.filter((cat) => {
            return cat.id === item.id;
        });
        const otherCats = catsListFromStorage.filter((cat) => {
            return cat.id !== item.id;
        });
        likedCat.map((item) => (item.isFilled = !item.isFilled));

        const newList = [...likedCat, ...otherCats];

        store.set(`fetchedData`, newList);

        return items.map((_item) => {
            if (_item.id === item.id) {
                return item;
            }
            return _item;
        });
    }

    return <LikeContainer styles={styles} toggleItemCheck={toggleItemCheck} setFilledState={setFilledState} hover={hover} cat={cat} />;
};
