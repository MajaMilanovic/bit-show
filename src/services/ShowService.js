import * as api from "../shared/constants";
import { getNumberOfItemsFromArray } from "../shared/utils";
import { Show } from "../entities/Show";


const fetchShowList = (val) => {
    return fetch(api.showListSearchURL + val.replace(" ", "%20"))
        .then((responseShowList) => responseShowList.json())
        .then((resultShowList) => {
            return resultShowList
        })
        .catch((error) => alert(error))
}

const fetchShowListFeed = () => {
    return fetch(api.showListFeed)
        .then(responseShowListFeed => responseShowListFeed.json())
        .then((resultShowListFeed) => {
            return getNumberOfItemsFromArray(resultShowListFeed, 48).map((item) => {
                return new Show(item);
            })
        })
        .catch((error) => alert(error))
}

const fetchShowByName=(name)=>{
    return fetch(api.showSingleSearch+name)
    .then(responseSingleShow=>responseSingleShow.json())
    .then(resultSingleShow=>new Show(resultSingleShow))
    .catch(error=>console.log("Sorry, error happened.")
    )
}

const fetchShowByID=(id)=>{
    return fetch(api.showSearchByID+id)
    .then(responseSingleShow=>responseSingleShow.json())
    .then(resultSingleShow=>new Show(resultSingleShow))
    .catch(error=>alert("Sorry, error happened!"))
}

export { fetchShowList, fetchShowListFeed, fetchShowByID, fetchShowByName };