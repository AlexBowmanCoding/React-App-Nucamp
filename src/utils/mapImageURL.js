
import { imgUrl } from "../app/shared/imgUrl";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: imgUrl + item.image
        };
    });
};