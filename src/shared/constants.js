const baseURL = "http://api.tvmaze.com/"

const showSearchURL = baseURL + "singlesearch/shows?q=";
const showListSearchURL = baseURL + "search/shows?q=";
const showSingleSearch=baseURL+"singlesearch/shows?q=";
const showSearchByID = baseURL + "shows/";
const showListFeed = baseURL + "shows";
const showSeasons = "/seasons";
const showCast = "/cast";
const placeholder = "https://cdn3.iconfinder.com/data/icons/diversity-avatars-vol-2/64/charlie-chaplan-actor-entertainer-512.png";
const pageNotFoundImage="https://i.pinimg.com/564x/6e/01/8f/6e018fa90bb56784c4a2b7ebaf3870af.jpg";

export {
    showSearchURL,
    showListSearchURL,
    showSearchByID,
    showSingleSearch,
    showListFeed,
    showSeasons,
    showCast,
    placeholder,
    pageNotFoundImage
};