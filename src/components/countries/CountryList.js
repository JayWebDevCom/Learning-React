import React, {Component} from 'react';
import fetch from 'isomorphic-fetch'

export class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        const api = 'https://restcountries.eu/rest/v1/all';
        fetch(api)
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({countryNames, loading: false}))
            .catch(e => new Error(`there was an error ${e}`))
    }

    render() {
        const {countryNames, loading} = this.state;
        return (
            (loading) ?
                <div>Loading country names</div> :
                (!countryNames.length) ? <div>No countries</div> :
                    <div>
                        <ul>
                            {countryNames.map((country, i) =>
                                <li key={i}>{country}</li>
                            )}
                        </ul>
                    </div>
        )
    }
}