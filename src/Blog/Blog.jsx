import './Blog.css';
import axios from "axios";
import React from 'react';
import { useState } from "react"
import {Component} from "react"
import { BlogCard } from './BlogCard';
// import {AddPostForm} from './Components/AddPostForm';

export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false,
        blogArr: []
    };
    likePost = (pos) => {
        console.log("liked")
        const temp = [...this.state.blogArr];
        temp[pos].liked = !temp[pos].loked;
        this.setState({
            blogArr: temp
        })
    };
    deletePost = (pos) =>{
        console.log("delete")
         
        if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)){
            const temp = [...this.state.blogArr];
            temp.splice(pos, 1);
            this.setState({
                blogArr: temp
            })
        }
    };
    componentDidMount(){
        axios.get('https://67274a46302d03037e707253.mockapi.io/app')
        .then((Response) => {
            this.setState({
                blogArr: Response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
        window.addEventListener("keyup", this.handleEscape)
    }
    render() {
        const blogPosts = this.state.blogArr.map((item, pos) => {
            return(
                <BlogCard
                description = {item.description}
                key = {item.id}
                title = {item.title}

                liked = {item.liked}
                likePost = {() => this.likePost(pos)}
                 deletePost = {() => this.deletePost(pos)}
                />
            )
        });

        return(
        <div className = "blog_container">
            {blogPosts}
        </div>)
    }
}