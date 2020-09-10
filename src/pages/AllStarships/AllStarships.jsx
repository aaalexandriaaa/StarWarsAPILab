import React, { Component } from 'react'
import { getAllStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

class AllStarships extends Component {
    state = {
        allStarships: []
    }

    async componentDidMount() {
        const allStarships = await getAllStarships();
        console.log(allStarships)
        this.setState({ allStarships: allStarships.results })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.allStarships.map((starship, idx) =>
                        <button key={idx}>
                            <Link
                                to={{
                                    pathname: '/starship',
                                    starshipState: { starship }
                                }}>
                                {starship.name}
                            </Link>
                        </button>

                    )}
                </div>
            </>
        );
    }
}


export default AllStarships;