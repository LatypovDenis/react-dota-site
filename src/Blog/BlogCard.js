import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import './BlogCard.css'
import { useLinkClickHandler } from 'react-router-dom'
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";   
export const BlogCard = ({
    title,
    description,
    liked, 
    likePost,
    deletePost, 
 
}) =>{
    const heardFill = liked? 'crimson' : 'black'
    
    return(
        <div className='post'>
        <div className='posthead'>
        <h2>{title}</h2> 
       
        </div>
        <div className='desc'>
        {description}
        </div>
        <div className='button'>
        <span className='favoriteButton' onClick={likePost}>
        <AiTwotoneLike style = {{fill:heardFill}}/> 
        </span> 
        <span className='deleteForeverButton' onClick={deletePost}>
        <AiTwotoneDelete />
          
        </span>
        </div>
        </div>
)
}