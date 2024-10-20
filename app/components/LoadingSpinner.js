// components/LoadingSpinner.js
import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <Spin size="large" />
        </div>
    );
};

export default LoadingSpinner;
