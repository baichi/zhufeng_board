import React from 'react';
class CommentForm extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" ref="author"
                           className="form-control" defaultValue="姓名"
                           name="author"/>
                </div>
                <div className="form-group">
                    <textarea class="form-control" ref="text"
                              name="content" id="text" cols="60" rows="7"
                              defaultValue="留言">
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        发表评论</button>
                </div>
            </form>
        )
    }
}

export {CommentForm as default}