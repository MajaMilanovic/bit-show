import React, { Component } from "react";
import { fetchShowListFeed } from "../../services/ShowService";
import { ShowCard } from "./ShowCard";
import "./spinner.css";

class FeedPage extends Component {
    constructor() {
        super();
        this.state = {
            showList: []
        }
    }

    componentDidMount() {
        fetchShowListFeed()
            .then(showList => {
                this.setState({
                    showList
                })
            })
    }

    render() {
         if (this.state.showList.length === 0) { return <div className="spinner"></div>} 
        return (
            <div className="row">
                <h5 className="col-12">Popular TV shows</h5>
                {this.state.showList.map((show) => {
                    return <ShowCard show={show} key={show.id} />
                })}
            </div>

        )
    }
}

export { FeedPage };