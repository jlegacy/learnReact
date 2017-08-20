import React, { Component } from 'react';

class ContainerPostPreview extends Component {
    render() {
        return (
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {this.props.postTitle}
                    </h2>
                    <h3 className="post-subtitle">
                        {this.props.postSubTitle}
                    </h3>
                </a>
                <p className="post-meta">Posted by <a href="#">{this.props.postBy}</a> on {this.props.postDate}</p>
            </div>
        );
    }
}

export default ContainerPostPreview;