import { atom } from "recoil";

export const catsFetchingState = atom({
    key: "catsFetchingState",
    default: true,
});

export const catsItemsState = atom({
    key: "catsItemsState",
    default: [],
});

export const catsLoadingState = atom({
    key: "catsLoadingState",
    default: false,
});

export const catsErrorState = atom({
    key: "catsErrorState",
    default: false,
});

export const favouritesCatsState = atom({
    key: "favouritesCatsState",
    default: [],
});

export const filledLikeState = atom({
    key: "filledLikeState",
    default: false,
});
export const moreCatsLoadingState = atom({
    key: "moreCatsLoadingState",
    default: false,
});
