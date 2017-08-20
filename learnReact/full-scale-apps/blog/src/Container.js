import React, { Component } from 'react';
import ContainerPostPreview from './ContainerPostPreview'

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                        <ContainerPostPreview
                            postTitle='Man must explore, and this is exploration at its greatest'
                            postSubTitle="Problems look mighty small from 150 miles up"
                            postBy="Start Bootstrap"
                            postDate="September 24, 2014"
                            />
                        <hr />
                        <ContainerPostPreview
                            postTitle="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                            postBy="Start Bootstrap"
                            postDate='September 18, 2014'
                            />
                        <hr />


                        <ContainerPostPreview
                            postTitle="Man must explore, and this is exploration at its greatest"
                            postSubTitle="We predict too much for the next year and yet far too little for the next ten."
                            postBy="Start Bootstrap"
                            postDate="August 24, 2014"
                            />
                        <hr />

                          <ContainerPostPreview
                            postTitle="Science has not yet mastered prophecy"
                            postSubTitle="Problems look mighty small from 150 miles up"
                            postBy="Start Bootstrap"
                            postDate="September 24, 2014"
                            />
                        <hr />

                          <ContainerPostPreview
                            postTitle="Failure is not an option"
                            postSubTitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
                            postBy="Start Bootstrap"
                            postDate="July 8, 2014"
                            />
                        <hr />


                        <ul className="pager">
                            <li className="next">
                                <a href="#">Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;