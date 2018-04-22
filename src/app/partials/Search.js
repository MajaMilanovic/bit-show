import React, { Component } from "react";
import { fetchShowList, fetchShowByName } from "../../services/ShowService";
import { getNumberOfItemsFromArray } from "../../shared/utils";
import { Link } from "react-router-dom";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            inputSearchElementValue: "",
            resultShowList: [],
            resultShow: null
        }
    }

    onChangeSearch = (e) => {
        const inputSearchValue = e.target.value;
        this.setState({
            inputSearchElementValue: inputSearchValue
        })

        fetchShowList(inputSearchValue)
            .then(resultShowList => {
                this.setState({
                    resultShowList,
                })
            });

        fetchShowByName(inputSearchValue)
            .then(resultShow => {
                this.setState({
                    resultShow,
                })
            })
    }

    getSingeShowFromState = () => {
        if (this.state.resultShow) {
            return this.state.resultShow;
        }
    }

    clearDropdownOnClick = () => {
        this.setState({
            inputSearchElementValue: "",
            resultShowList: []
        })
    }

    render() {
        return (
            <form className="form-inline" id="form-search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.onChangeSearch} value={this.state.inputSearchElementValue} />
                <Link to={(this.getSingeShowFromState())
                    ? `/details/${this.getSingeShowFromState().id}`
                    : ""} className="btn btn-outline-light my-2 my-sm-0" onClick={this.clearDropdownOnClick} >Search</Link>
                <ul id="list-result">
                    {(!this.state.resultShowList.length) ? ""
                        : getNumberOfItemsFromArray(this.state.resultShowList, 7).map((item) => {
                            return <li className="list-result" onClick={this.clearDropdownOnClick} key={item.show.id} ><Link to={`/details/${item.show.id}`} className="search-dropdown-item" >{item.show.name}</Link></li>
                        })
                    }
                </ul>
            </form>
        )
    }
}
export { Search };