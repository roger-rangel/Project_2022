/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { produceWithPatches } from 'immer';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../Controllers/Redux/bugSlice';

export default (props) => {
    const { name, priority, version } = props.bug;
    function Clicked() {
        props.clicked(props.name);
    }
    
    return (
        <div className='bug-card' onClick={Clicked}>
            <h2 className='name'>{name}</h2>
            <h4 className='priority'>{priority}</h4>
            <h5 className='version'>{version}</h5>
        </div>
    )  
}
