import React from 'react'
class CommentList extends React.Component {
    render(){
        return(
            <div className="list-group">
                <div className="list-group-item">张三:你好</div>
                <div className="list-group-item">李四:你也好</div>
            </div>
        )
    }
}

export {CommentList as default}