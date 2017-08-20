import React, { Component } from 'react';
import axios from 'axios';

const API = 'AIzaSyCPTaiTKFDN0KX7DuxPn0YzFQqURC1P-oM';
const channelID = 'UC-Zt7GPzlrPPQexkG9-shPg';
const results = 10;
const maxResults = 10;
const linkSrc = `https://www.youtube.com/embed/`; 

var finalURL = `https://content.googleapis.com/youtube/v3/search?q=surfing&part=snippet`
    + `&key=` + API
    + `&maxResults=` + maxResults
    + `&channelID=` + channelID;

class YouTube extends Component {
    selectLink = (imageId) => {
        let linkSrcVideo = "";
        linkSrcVideo = linkSrc + imageId;
        this.setState({linkSrcVideo});
    }

    getVideo = () => {
        axios.get(finalURL)
            .then((response) => {
                let resultyt = response.data.items.map(obj => obj.id.videoId);
                this.setState({ resultyt: resultyt });
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            resultyt: [],
            linkSrcVideo : linkSrc + "gi1qrlYDopw"
        };

        this.getVideo = this.getVideo.bind(this);
        this.selectLink = this.selectLink.bind(this);
    }

    render() {
        console.log(finalURL);
        return (
            <div>
                <div>
                    <button onClick={this.getVideo} >Get Youtube Videos</button>
                </div>
                <div>
                    <iframe width="560" height="315" src={this.state.linkSrcVideo} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div>
                    {this.state.resultyt.map((item, index) => {
                        return <h1 className="links" key={index} onClick={() => this.selectLink(item)}>{item}</h1>
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getVideo();
    }
    
}

export default YouTube;