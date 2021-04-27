import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, like, important} = this.props

        let classNames = 'app-list-item d-flex justify-content-between'

        if (like) {
            classNames +=' like';
        }

        return (
            <div className={classNames}>

                <span className="app-list-item-label" onClick={onToggleLiked}>
                    {label}
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    {important ?
                        <button className="btn-star btn-sm" onClick={onToggleImportant} >
                            <i className="fas fa-star " />
                        </button>
                        :
                        <button className="btn-star btn-sm" onClick={onToggleImportant}>
                            <i className="far fa-star"/>
                        </button>
                    }
                    <button className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fas fa-trash-alt" />
                    </button>
                    <i className="fas fa-heart" />
                </div>
            </div>
        )
    }
}



