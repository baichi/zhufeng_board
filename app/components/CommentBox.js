'use strict'
import $ from 'jquery';
import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import 'bootstrap/dist/css/bootstrap.css';
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments: []};
        this.getComments();
    }

    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({comments: data});
            },
            error: (xhr, status, error)=> {
                console.error(error);
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div class="page-header">
                        <h1>评论</h1>
                    </div>
                    <CommentList data={this.state.comments}/>
                </div>
                <div className="col-xs-12">
                    <CommentForm/>
                </div>
            </div>
        )
    }
}

export {CommentBox as default}