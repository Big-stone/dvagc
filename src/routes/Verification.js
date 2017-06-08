import React from 'react';
import { connect } from 'dva';
import veri from './Verification.css';
import { Radio, Button, Input} from 'antd';
import fetch from 'dva/fetch';

function Verification() {
    return (
        <div>
            <div className={veri.container}>
                {/*主体部分*/}
                <div className={veri.container_main}>
                    <div className={veri.main}>
                        {/*头部*/}
                        <div className={veri.header}>
                            <h4>请先加入高校,高品质实践课等你来~</h4>
                            {/*学生*/}
                            <div className={veri.header_left}>
                                <span className={veri.icon}></span>
                                <span>
                                    <input type="radio" id="student" name="myradio"/>我是学生
                                </span>
                            </div>
                            {/*老师*/}
                            <div className={veri.header_right}>
                                <span className={veri.icon}></span>
                                <span>
                                    <input type="radio" id="teacher" name="myradio"/>我是老师
                                </span>
                            </div>
                        </div>
                        {/*内容部分*/}
                        <div className={veri.content} id="content">
                            <Input type="large" placeholder="请选择你的学校" id="getSchool" onClick={getSchool}/>
                            <Input size="large" placeholder="请输入你的学号" />
                            <Input size="large" placeholder="请输入你的姓名" />
                        </div>
                        {/*内容部分*/}
                        <div className={veri.btn}>
                            <Button type="primary" id="btn">立即注册</Button>
                            <a href="javascript:;">稍后认证</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const request = (url, options) => {
    return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => ({ err }));
}

// let content = document.getElementById('content');
//     console.log(content) //null

const getSchool = () => {
    request('/api/schools.courseManagement.get').
    then(data => {
        let school = data.schools;
        let resData = school.map((value) => {
            return value.schoolName;
        })
        console.log(resData.join(','))
    })
    
}


export default connect()(Verification);