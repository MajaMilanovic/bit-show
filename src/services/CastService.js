import * as api from "../shared/constants";
import {
    Cast
} from "../entities/Cast";

const fetchCast = (id) => {
    return fetch(api.showSearchByID + id + api.showCast)
        .then(responseCast => responseCast.json())
        .then(resultCast => resultCast.map(person => new Cast(person)))
        .catch(error => alert("Sorry, failed to display cast"))
}

export {
    fetchCast
};