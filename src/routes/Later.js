import React from 'react';
import { connect } from 'dva';
import { Radio, Button, Input, Rate} from 'antd';
import fetch from 'dva/fetch';

function Later() {
    return (
        <div>
            <Rate />
        </div>
    )
}

export default connect()(Later);