import * as api from "../shared/constants";
import {
    Season
} from "../entities/Season";

const fetchSeasons = (id) => {
    return fetch(api.showSearchByID + id + api.showSeasons)
        .then((responseSeasons => responseSeasons.json()))
        .then((resultSeasons) => resultSeasons.map((season) => {
            return new Season(season)
        }))
        .catch((error) =>alert("Sorry, failed to display seasons."))
}

export {
    fetchSeasons
};