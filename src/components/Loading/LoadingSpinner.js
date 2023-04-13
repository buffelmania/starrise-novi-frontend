import React from 'react';
import { BeatLoader } from 'react-spinners';

function LoadingSpinner({ loading }) {
    return (
        <div className="loading-spinner">
            <BeatLoader color="#36D7B7" loading={loading} size={20} />
        </div>
    );
}

export default LoadingSpinner;
