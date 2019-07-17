import React from 'react';
import Comments from '../Comments/Comments';

import './commentlist.css';

const Commentlist = (props) => { 
    let datacomment=props.data;
    return (
        <div className="comment-list-container">
            <div className="header-comment">
                <span>Dynamic</span>
            </div>
            <div className="comment-list">
        {
            datacomment.map(comment=>{
               return <Comments props={comment} key={comment.id}/>
               
            })
            
        }
        
            </div>
        </div>
    );
}

export default Commentlist;