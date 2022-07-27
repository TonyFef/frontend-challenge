import { Card } from "../../components/Card/Card";

export const FavouritesPageContainer = ({ favouritesArray }) => {
    return (
        <div className="grid grid-cols-5 mt-[48px] gap-y-[52px] px-[62px]">
            {favouritesArray.map((item) => (
                <Card key={item.id} cat={item} />
            ))}
        </div>
    );
};
