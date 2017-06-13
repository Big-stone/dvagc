import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

function Complete({ onHandleChange, schools }) {

  return (
    <AutoComplete
      style={{
          width: 370,
       }}
      dataSource={schools}
      placeholder="请选择你的学校"
      filterOption={(inputValue, option) => option.props.children.indexOf(inputValue) !== -1}
      onChange={onHandleChange}
    />
  );
}

Complete.propTypes = {
    onHandleChange: PropTypes.func,
    
}

export default Complete;
