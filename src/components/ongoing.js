import React from 'react';

class Ongoing extends React.Component {

    render() {
        return (
            <>
                <div className="onBox" key={this.props.index}>
                    <button type="button" data-toggle="collapse" data-target={"#" + this.props.index} className="btn btn-outline-success button1 "><h6>Name:{this.props.data.Name}</h6> </button>
                    <div id={this.props.index} className="collapse">
                        <p>Name:{this.props.data.Name}</p>
                        <p>EndTime:{this.props.data.EndTime}</p>
                        <p>Platform:{this.props.data.Platform}</p>
                        {this.props.data.challenge_type ? (<p>challenge_type:{this.props.data.challenge_type}</p>) : null}
                        <p>url:<a target='blank' href={this.props.data.url}>{this.props.data.url}</a></p>
                    </div>
                </div>
            </>
        );
    }

}

export default Ongoing;