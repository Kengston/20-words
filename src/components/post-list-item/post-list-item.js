import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom'
import './post-list-item.css';

const PostListItem = (props) => {

        let [marked, setStar] = useState(true)

        const markPost = () => {
            setStar(true)
        }

        const unmarkPost = () => {
            setStar(false)
        }

        return (
            <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    Hello World
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    {marked ?
                        <button className="btn-star btn-sm" onClick={markPost}>
                            <i className="far fa-star" />
                        </button>
                        :
                        <button className="btn-star btn-sm" onClick={unmarkPost}>
                            <i className="fas fa-star"/>
                        </button>
                    }
                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash-alt" />
                    </button>
                    <i className="fas fa-heart" />
                </div>
            </li>
        )
}

export default PostListItem;
