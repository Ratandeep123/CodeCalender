import React from 'react';

class Upcoming extends React.Component {

    render() {
        return (
            <>
                 <div className="oneBox" key={this.props.index}>
                                <button type="button" data-toggle="collapse" data-target={"#" + this.props.index+999} className="btn btn-outline-success button2"><h6>Name:{this.props.data.Name}</h6></button>
                                <div id={this.props.index+999} className=" rd collapse">
                                    <p>Duration:{this.props.data.Duration}</p>
                                    <p>EndTime:{this.props.data.EndTime}</p>
                                    <p>Name:{this.props.data.Name}</p>
                                    <p>Platform:{this.props.data.Platform}</p>
                                    <p>StartTime:{this.props.data.StartTime}</p>
                                    <p>url:{this.propsp.data.url}</p>
                                </div>
                            </div>
            </>
        );
    }

}

export default Upcoming;