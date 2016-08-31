import React from 'react'
class CommentList extends React.Component {
    render() {
        return (
            <div className="list-group">
                <Comment author="张三" date="10分前">你好</Comment>
                <Comment author="李四" date="5分前">你也好啊</Comment>
            </div>
        )
    }
}

export {CommentList as default}