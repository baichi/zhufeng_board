'use strict'

import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import 'bootstrap/dist/css/bootstrap.css';
class CommentBox extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div class="page-header">
                        <h1>评论</h1>
                    </div>
                    <CommentList data={this.props.data}/>
                </div>
                <div className="col-xs-12">
                    <CommentForm/>
                </div>
            </div>
        )
    }
}

export {CommentBox as default}