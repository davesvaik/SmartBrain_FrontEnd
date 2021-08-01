import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Ape will detect faces in your pictures. Give it a try! All you need to do is paste an URL of a picture, that has a human face!'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' 
                        type='text' 
                        onChange={onInputChange} 
                    />
                    <button 
                        className='w-30 grow f4 br2 link ph3 pv2 dib red bg-light-yellow'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;