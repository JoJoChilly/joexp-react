import '../../stylesheets/home.less';
import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        };
    }

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs() {
        fetch('/api/getBlogs', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(blogs => {
                this.setState({
                    blogs,
                });
            });
    }

    render() {
        const { blogs } = this.state;
        return (
            <div>
                <div className="App-header">
                    <img src="../images/logo.svg" className="App-logo" alt="logo" />
                    <h2>Welcome to JoExp</h2>
                </div>
                <div className="app-content">
                    {
                        <ul>
                            {blogs.map(el => (
                                <li>
                                    <div className="blog-title">{el.title}</div>
                                    <div className="blog-publish-time">
                                        发布时间：{el.publishTime}
                                    </div>
                                    <div
                                        className="blog-content"
                                        dangerouslySetInnerHTML={{
                                            __html: el.content,
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}
