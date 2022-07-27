import { useState } from "react";

import { Like } from "../Like/Like";

export const Card = ({ cat }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className=" hover:scale-[1.14] relative
        "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={cat.url} alt="cat" className="xl:w-[225px] xl:h-[225px] sm:max-w-[155px] sm:h-[155px] md:max-w-[200px] md:h-[200px] " />
            <Like hover={hover} cat={cat} />
        </div>
    );
};
