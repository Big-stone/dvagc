import { AutoComplete } from 'antd';

const dataSource = ['北京大学', '清华大学', '新道大学'];

function Complete() {
   
  return (
    <AutoComplete
      style={{ 
          width: 330,
       }}
      dataSource={dataSource}
      placeholder="请选择你的学校"
      filterOption={(inputValue, option) => option.props.children.indexOf(inputValue) !== -1}
    />
  );
}

export default (Complete)