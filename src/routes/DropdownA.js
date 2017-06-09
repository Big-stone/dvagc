import React from 'react';
import { connect } from 'dva';

function Drop() {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default connect()(Drop);