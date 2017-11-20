import React, { Component } from 'react';
import '../../stylesheets/markdown.less';
import showdown from 'showdown';

const converter = new showdown.Converter();

class MarkDown extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            html: 'loading',
        };
    }

    componentDidMount() {
        this.mdElement.focus();
        this.html = 'loading...';

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(...args) {
        console.log(this.mdElement.value);
        this.setState({
            html: converter.makeHtml(this.mdElement.value),
        });
    }

    render() {
        const { html } = this.state;
        return (
            <div className="markdown-page">
                <div className="markdown-textarea">
                    <textarea
                        name="content"
                        id="markdown-content"
                        onChange={this.handleChange}
                        ref={el => (this.mdElement = el)}
                    />
                </div>
                <div className="markdown-preview-container">
                    <div
                        id="markdown-preview"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        );
    }
}

export default MarkDown;
