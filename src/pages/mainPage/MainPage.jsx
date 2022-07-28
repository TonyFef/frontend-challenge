import { useEffect } from "react";
import { useRecoilState } from "recoil";
import store from "store";

import { catsErrorState, catsItemsState, catsLoadingState, moreCatsLoadingState } from "../../state/atoms";

import { MainPageContainer } from "./MainPageContainer";

export const MainPage = () => {
    const [fetchedArray, setFetchedArray] = useRecoilState(catsItemsState);
    const [stateLoading, setEndLoading] = useRecoilState(catsLoadingState);
    const [moreCatsLoading, setMoreCatsLoading] = useRecoilState(moreCatsLoadingState);
    const [stateError, setStateError] = useRecoilState(catsErrorState);

    useEffect(() => {
        if (!localStorage.getItem("fetchedData")) {
            setEndLoading(true);
            fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=15", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "x-api-key": "874ac5de-db55-4802-a54b-4c0baed954e3",
                },
            })
                .then((res) => res.json())
                .catch(() => {
                    setStateError(true);
                })
                .then((data) => {
                    store.set("fetchedData", data);
                    setFetchedArray(data);
                    setEndLoading(false);
                });
        } else {
            const initialCatsList = JSON.parse(localStorage.getItem("fetchedData"));
            setFetchedArray(initialCatsList);
            setEndLoading(false);
        }
    }, []);

    const fetchNewCats = () => {
        setMoreCatsLoading(true);
        fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "x-api-key": "874ac5de-db55-4802-a54b-4c0baed954e3",
            },
        })
            .then((res) => res.json())
            .catch(() => {
                setStateError(true);
            })
            .then((newData) => {
                const initalStorageArray = JSON.parse(localStorage.getItem("fetchedData"));
                store.set("fetchedData", [...initalStorageArray, ...newData]);
                setFetchedArray((prev) => [...prev, ...newData]);
                setMoreCatsLoading(false);
            });
    };

    return (
        <MainPageContainer
            stateLoading={stateLoading}
            stateError={stateError}
            fetchedArray={fetchedArray}
            fetchNewCats={fetchNewCats}
            moreCatsLoading={moreCatsLoading}
        />
    );
};
