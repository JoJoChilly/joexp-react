import '@stylesheets/markdown.less';
import React, { Component } from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter({ noHeaderId: true });

class MarkDown extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            html: 'Please Edit...',
        };
    }

    componentDidMount() {
        const example = [
            '# hello, This is Markdown Live Preview',
            '',
            '----',
            '## what is Markdown?',
            'see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)',
            '',
            '> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".',
            '',
            '----',
            '## usage',
            '1. Write markdown text in this textarea.',
            "2. Click 'HTML Preview' button.",
            '',
            '----',
            '## markdown quick reference',
            '# headers',
            '',
            '*emphasis*',
            '',
            '**strong**',
            '',
            '* list',
            '',
            '>block quote',
            '',
            '    code (4 spaces indent)',
            '[links](http://wikipedia.org)',
            '',
            '----',
            '## changelog',
            '* 17-Feb-2013 re-design',
            '',
            '----',
            '## thanks',
            '* [markdown-js](https://github.com/evilstreak/markdown-js)',
            '',
        ].join('\n');
        this.mdElement.value = example;
        // this.mdElement.focus();
        this.handleChange();

        // this.autoGrow();
    }

    handleChange() {
        this.setState({
            html: converter.makeHtml(this.mdElement.value),
        });
        this.autoGrow();
    }

    autoGrow() {
        this.mdElement.style.height = '5px';
        this.mdElement.style.height = this.mdElement.scrollHeight + 'px';
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
                        className="markdown-body"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        );
    }
}

export default MarkDown;
