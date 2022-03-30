import React from "react";
import { Spin, Space } from 'antd';

const CircularProgress = () => {
    return (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size="large" />
        </div>
    )
}
export default CircularProgress;
