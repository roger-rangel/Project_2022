/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../../Controllers/Redux/bugSlice';
import BugCard from '../BugCard/BugCard';

export default () => {
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getBugs());
    }, [dispatch]);
    
    console.log(bugs);
    console.log(bugs.length);
    return (
        <div className='page-container'>
            <h1>all bugs</h1>
            {bugs.map((bug, key) => (
                <BugCard key={key} bug={bug} />
            ))}
        </div>
    )
};



