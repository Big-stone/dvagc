import { Menu, Dropdown, Icon, message } from 'antd';

function DropdownB() {
const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
  return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>
  )
}

export default connect()(DropdownB)