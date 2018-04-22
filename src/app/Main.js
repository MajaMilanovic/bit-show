import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { FeedPage } from "./feed/FeedPage.js";
import { ShowDetailsPage }  from "./details/ShowDetailsPage.js";
import { NotFoundPage } from "./NotFoundPage";

class Main extends Component {
    
    render() {
        return (
            <main className="main-container container">
                <Switch>
                    <Route path="/details/:id" component={ShowDetailsPage}/>
                    <Route exact path="/" component={FeedPage}/>
                    <Route component={ NotFoundPage }/>
                </Switch>
            </main>
        )
    }
}

export { Main };