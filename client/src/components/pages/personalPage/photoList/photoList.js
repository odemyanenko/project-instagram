import React from 'react';
import Photo from "../photo/photo";

export default class PhotoList extends React.Component {
    state = {
        photos: [
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0f9RVwiOjzr7nnEOshckmyOB7HRr5He6T4uiO2gvuCWTdPrZg'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0f9RVwiOjzr7nnEOshckmyOB7HRr5He6T4uiO2gvuCWTdPrZg'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0f9RVwiOjzr7nnEOshckmyOB7HRr5He6T4uiO2gvuCWTdPrZg'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0f9RVwiOjzr7nnEOshckmyOB7HRr5He6T4uiO2gvuCWTdPrZg'
            }

        ]
    };
    renderList = (photos)=>{
        return photos.map(photo=><Photo src={photo.src}/>)
    };

    render() {
        return (
            <div className="row">
                {this.renderList(this.state.photos)}
            </div>
        )
    }
}