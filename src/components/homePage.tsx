import React from "react";

interface State {

}

class HomePage extends React.Component<State, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>The HomePage</h1>
        </div>
    }
}

export default HomePage;
