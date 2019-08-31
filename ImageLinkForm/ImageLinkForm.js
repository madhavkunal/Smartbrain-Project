import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
       <div>
           <p className='f6'>
                {'This Magic Brain will detect faces in your pictures!'}
           </p>
           <div className = 'center'>
               <div className='form center pa3 br3 shadow-5'>
                <input className='f6 pa1 w-70 center' type='text' onChange={onInputChange}/>    {/*Wiring up onInputChange Event Handler with onChange*/}
               <button 
                    className='w-30 grow f6 link ph3 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect</button>
               </div>
           </div>
       </div>
    )
}

export default ImageLinkForm;