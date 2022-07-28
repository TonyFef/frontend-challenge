import { Card } from "../../components/Card/Card";
import Spinner from "./Spinner";

export const MainPageContainer = ({ stateLoading, stateError, fetchedArray, fetchNewCats, moreCatsLoading }) => {
    return (
        <>
            {stateLoading && <Spinner />}
            {stateError && <p className="text-center text-lg text-red-600">{stateError}</p>}
            <div
                className="grid 2xl:grid-cols-5 2xl:mt-[48px] 2xl:gap-y-[52px] xl:px-[62px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:mt-[24px] sm:px-[32px] sm:gap-y-[20px] md:gap-y-[40px]
            "
            >
                {fetchedArray.map((cat, i) => (
                    <Card key={cat.id} cat={cat} i={i} />
                ))}
            </div>
            {moreCatsLoading ? (
                <Spinner />
            ) : (
                <div className="text-center text-lg cursor-pointer mb-[31px] mt-[48px]" onClick={fetchNewCats}>
                    ... загружаем еще котиков ...
                </div>
            )}
        </>
    );
};
