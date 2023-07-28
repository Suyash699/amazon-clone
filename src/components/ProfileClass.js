import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1
        }
        console.log(" -Child - constructor")
    }

    componentDidMount(){
        //API calls are done in this.
        this.interval = setInterval(()=>{
            console.log("Interval");
        }, 1000)
        console.log(" -Child - componentDidMount");
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        console.log("cleared");
    }

    render(){
        console.log(" -Child - render");
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: 1
                    })
                }}>Count</button>
            </div>
        )
    }
}

export default Profile;