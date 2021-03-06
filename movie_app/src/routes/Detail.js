import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;

        if(location.state) {
        return <p className="disc_detail">Description: {location.state.summary}</p>
        }
        else return null;
    }
}
export default Detail;