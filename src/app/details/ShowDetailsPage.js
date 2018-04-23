import React, { Component, Fragment } from "react";
import { fetchShowByID } from "../../services/ShowService";
import { fetchSeasons } from "../../services/SeasonsService";
import { fetchCast } from "../../services/CastService";
import { getNumberOfItemsFromArray } from "../../shared/utils";
import { placeholder } from "../../shared/constants";
import "./detailsPage.css";
import "../feed/spinner.css";

class ShowDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null,
            seasons: [],
            castList: []
        }
    }


    fetchShowDetails = (id) => {
        fetchShowByID(id)
            .then(show => {
                this.setState({
                    show
                })
            });

        fetchSeasons(id)
            .then(responseSeasons => this.setState({
                seasons: responseSeasons
            }));

        fetchCast(id)
            .then(responseCast => {
                const castList = getNumberOfItemsFromArray(responseCast, 5);
                this.setState({
                    castList
                })
            })
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchShowDetails(id);
    }

    componentWillReceiveProps(nextProps) {
        //get new ID from url
        this.fetchShowDetails(nextProps.match.params.id);
    }


    render() {
        const { show, seasons, castList } = this.state;

        if (!show) {
            return <div className="spinner"></div>
        }

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <h5 className="col-12">{(!show) ? "" : show.name}</h5>
                        <div className="col-sm-12 col-md-6 show-image-large" ><img src={show.originalImage} alt={show.name} /></div>
                        <div className="col-sm-12 col-md-6">
                            <h6 className="list-group-item">Seasons ({seasons.length})</h6>
                            <ul className="list-group list-group-flush">
                                {(!seasons.length) ? <div className="tba-message">Info not available.</div> : seasons.map((season) => {
                                    return <li key={season.id}>{`Premiered on :`
                                        + ((season.premiereDate === null) ? "TBA" : season.premiereDate)
                                        + ` - Ended on:` + ((season.endDate === null) ? "TBA" : season.endDate)}</li>
                                })}
                            </ul>
                            <h6 className="list-group-item">Cast</h6>
                            <ul className="list-group list-group-flush cast-list">
                                {(!castList.length) ? <div className="tba-message">Info not available.</div> : castList.map(({ person, character }) => {
                                    return <li className="list-group-item" key={person.id}>
                                        <img src={(!person.image) ? placeholder : person.image.original} alt={person.name} className="actor-img" />
                                        <span>{person.name} as {character.name}</span></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="card col-12 show-summary-card">
                        <div className="card-body">
                            <p>Summary:</p>
                           {(!show.summary) ? "Summary not available." : show.summary.replace(/<[^>]*>/g, "")}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { ShowDetailsPage };
