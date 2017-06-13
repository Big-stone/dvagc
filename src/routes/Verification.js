import React from 'react';
import { connect } from 'dva';
import veri from './Verification.css';
import { Radio, Button, Input, AutoComplete, Tooltip, Menu, Dropdown, Icon, message, Alert} from 'antd';
import { Link } from 'react-router';
import Complete from './Auto'
import classnames from 'classnames';

function Verification({ dispatch, school }) {
    const { list } = school;
    // console.log(list)
    const info = () => {
    message.info('请输入正确信息');
};
    function getSchool() {
        dispatch({
            type: 'school/fetch',
            payload: {}
        })
        console.log(list)
    }

    function handleClick() {
        return (
            <div>
                <Alert message="错误" banner />
            </div>
        )
    }
    function handleChange(e) {
        
    }
    
    return (
        <div>
            <div className={veri.container}>
                {/*主体部分*/}
                <div className={veri.container_main}>
                    <div className={veri.main}>
                        {/*头部*/}
                        <div className={veri.header}>
                            {/*学生*/}
                            <div className={veri.header_left}>
                                <span className={veri.icon}></span>
                                <span className={veri.opt}>
                                    <input type="radio" id="student" name="myradio"/>我是学生
                                </span>
                            </div>
                            {/*老师*/}
                            <div className={veri.header_right}>
                                <span className={veri.icon}></span>
                                <span className={veri.opt}>
                                    <input type="radio" id="teacher" name="myradio"/>我是老师
                                </span>
                            </div>
                        </div>
                        {/*内容部分*/}
                        <div className={veri.content} id="content">
                            <Tooltip placement="topLeft" title="学校">
                            <Complete  />
                            </Tooltip>

                            <Tooltip placement="topLeft" title="学号">
                            <Input size="large" placeholder="请输入你的学号" onClick={getSchool}/>
                            </Tooltip>

                            <Tooltip placement="topLeft" title="姓名">
                            <Input size="large" placeholder="请输入你的姓名"/>
                            </Tooltip>
                        </div>
                        
                        {/*按钮部分*/}
                        <div className={veri.btn}>
                            <Button type="primary" onClick={info}>立即认证</Button>
                            <Link to="/later">稍后认证</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


{/*<Input type="large" placeholder="请选择你的学校" id="getSchool" 
onMouseEnter={getSchool}
/>*/}

{/*<span id={veri.warning} >该学校没有你的信息,请联系老师。</span>*/}

// let content = document.getElementById('content');
//     console.log(content) //null

// const getSchool = () => {
//     request('/api/schools.courseManagement.get').
//     then(data => {
//         let school = data.schools;
//         let resData = school.map((value) => {
//             return value.schoolName;
//         })
//         console.log(resData)
//     })
    
// }

function mapStateToProps({ school }) {
    return { school }
}
export default connect(mapStateToProps)(Verification);