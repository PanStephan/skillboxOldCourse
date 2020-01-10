import React, {Component} from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';



export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: [],
        loading: true
        
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {src, alt} = item;

            return (
                <img src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;
        const override = css`
            display: block;
            margin: 0 auto;
            border-color: #ebbeda;
        `;
        if (loading) {
            return  <div className='sweet-loading'>
            <ClipLoader
              css={override}
              sizeUnit={"px"}
              size={50}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div> 
        }
        if (error) {
            return <ErrorMessage />
        }
        

        const items = this.renderItems(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}