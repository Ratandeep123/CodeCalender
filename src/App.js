import React from 'react';
import './App.css';
import logo from './logo.svg';
import Ongoing from './components/ongoing';
import Upcoming from './components/upcoming';
// import 'pretty-checkbox';
class CodeCalender extends React.Component {
    constructor() {
        super()
        this.state = {
            result: {},
            ongoing: [],
            upcoming: [],
            hacker: true,
            rank: true,
            chef: true,
            cforces: true,
        }
    };

    //    componentDidMount=()=>{
    //        fetch('http://contesttrackerapi.herokuapp.com/android/').then((res)=>{
    //            return res.json();
    //        }).then((data)=>{
    //         console.log(data)
    //        })
    //    }
    componentDidMount = () => {
        this.getContestData();
    }
    getContestData = () => {
        fetch('http://contesttrackerapi.herokuapp.com/android/').then((res) => {
            return res.json();
        }).then((data) => {

            this.setState({
                ongoing: data.result.ongoing
            })

            this.setState({
                upcoming: data.result.upcoming
            })
        })
    }
    handleContest = (e) => {
        console.log(e.target.name);
        if (e.target.name.toUpperCase() == "HACKEREARTH") {
            let check = this.state.hacker ? false : true;
            console.log(check);

            this.setState({
                hacker: check
            });

        }
        if (e.target.name.toUpperCase() == "HACKERRANK") {
            let check = this.state.rank ? false : true;
            console.log(check);
            this.setState({
                rank: check
            });
        }
        if (e.target.name.toUpperCase() == "CODECHEF") {
            let check = this.state.chef ? false : true;
            console.log(check);
            this.setState({
                chef: check
            });
        }
        if (e.target.name.toUpperCase() == "CODEFORCES") {
            let check = this.state.cforces ? false : true;
            console.log(check);
            this.setState({
                cforces: check
            });
        }

    }

    checkPlatform = (name) => {
        if (name == 'HACKEREARTH') {
            return this.state.hacker;
        }
        if (name == 'HACKERRANK') {
            return this.state.rank;
        }
        if (name == 'CODECHEF') {
            return this.state.chef;
        }
        if (name == 'CODEFORCES') {
            return this.state.cforces;
        }
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />

                        <marquee><h4> this website is under process .You can take a test on four platform HACKERANK HACKEREARTH CODECHEF AND CODEFORCES easy to use here.Click on url link and directly go on Origional website</h4></marquee>
                    </header>
                </div>
                <div className="mainbtn">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="HACKEREARTH" id="customCheck1" onChange={this.handleContest} defaultChecked="true" />
                        <label className="custom-control-label" htmlFor="customCheck1">HACKEREARTH</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="HACKERRANK" id="customCheck2" onChange={this.handleContest} defaultChecked="true" />
                        <label className="custom-control-label" htmlFor="customCheck2">HACKERRANK</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="CODECHEF" id="customCheck3" onChange={this.handleContest} defaultChecked="true" />
                        <label className="custom-control-label" htmlFor="customCheck3">CODECHEF</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="CODEFORCES" id="customCheck4" onChange={this.handleContest} defaultChecked="true" />
                        <label className="custom-control-label" htmlFor="customCheck4">CODEFORCES</label>
                    </div>
                </div>
                <div className="hack">
                    <div className="upcmng">
                        <h2>ONGOING CONTEST</h2>
                    </div>

                    {this.state.ongoing.map((data, index) => {


                        let isValid = this.checkPlatform(data.Platform);
                        if (!isValid) {
                            return <></>;
                        }

                        return (
                            <Ongoing 
                                index = {index} 
                                data = {data}
                            />
                        )
                    })}

                </div>
                <div className="hack">
                    <div className="upcmng">
                        <h2>UPCOMING CONTEST</h2>
                    </div>
                    {this.state.upcoming.map((data, index) => {
                        let isConfirm = this.checkPlatform(data.Platform);
                        if (!isConfirm) {
                            return <></>
                        }
                        return (
                           <Ongoing 
                            index={index+999}
                            data={data}
                           />
                        )
                    })}
                </div>

            </div>
        );
    }
}
export default CodeCalender;
