import React, {Component, useState} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marked: false,
            like: false
        }
        this.markPost = this.markPost.bind(this)
        this.likePost = this.likePost.bind(this)
    }

    markPost() {
        this.setState(({marked}) => ({
            marked: !marked
        }))
    }

    likePost() {
        this.setState(({like}) => ({
            like: !like
        }))
    }



    render() {
        const {label} = this.props
        const {marked, like} = this.state

        let classNames = 'app-list-item d-flex justify-content-between'

        if (like) {
            classNames += 'like'
        }

        return (
            <div className={classNames}>

                <span className="app-list-item-label" onClick={this.likePost}>
                    {label}
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    {marked ?
                        <button className="btn-star btn-sm" onClick={this.markPost} >
                            <i className="far fa-star" />
                        </button>
                        :
                        <button className="btn-star btn-sm" onClick={this.markPost}>
                            <i className="fas fa-star"/>
                        </button>
                    }
                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash-alt" />
                    </button>
                    <i className="fas fa-heart" />
                </div>
            </div>
        )
    }
}



