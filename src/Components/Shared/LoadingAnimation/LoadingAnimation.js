import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div>
            <div className='flex justify-center h-[500px] items-center'><SyncLoader
            color="hsla(86, 0%, 100%, 1)"
            size={15}
        /></div>
        </div>
    );
};

export default LoadingAnimation;