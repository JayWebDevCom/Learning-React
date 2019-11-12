import React, {Component} from 'react';
import {Member} from "./Member";

export class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    getFakeMembers = (count) => new Promise((resolves, rejects) => {
        console.log(`promise started, count: ${count}`);
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () =>
            request.status === 200 ?
                resolves(JSON.parse(request.response).results) :
                new Error('reject method error');
        // reject(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    });

    componentWillMount() {
        this.setState({loading: true});
        this.getFakeMembers(7)
            .then(members => {
                    this.setState({members, loading: false})
                },
                error => {
                    this.setState({error, loading: false})
                }
            )
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(`updating lifecycle ${nextProps}, ${nextState}, ${nextContext}`)
    }

    render() {
        const {members, loading, error} = this.state;
        return (
            <div className={'member-list'}>
                {(loading) ? <span>Loading Members</span> :
                    members.length ? members.map((user, i) =>
                            <Member key={i} {...user}/>
                        ) :
                        <span>No members loaded</span>
                }
                {error ? <p>Error Loading Members: error</p> : ""}
            </div>
        );
    }
}