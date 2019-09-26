import React, { Component } from 'react'
import { Input, Menu, Icon, Row, Col, Button } from 'antd'
import Logo from '../../static/logo.png'
import Bi from '../../static/yumaobi.png'
import 'antd/dist/antd.css';
import './style.css'

export default class Header extends Component {
    render() {
        return (
            <div className="abody">

                <div>

                    <Menu className="menu left" mode="horizontal">
                        <Row>
                            <Col span={1}> </Col>
                            <Col span={2} >
                                <Menu.Item >
                                    <a href="/">< img className="Logo" src={Logo} alt="aa" /></a>
                                </Menu.Item>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={2}>
                                <Menu.Item >
                                    <a href="/" className=" active">首页</a>
                                </Menu.Item>
                            </Col>
                            <Col span={2}>
                                <Menu.Item >
                                    <a href="/">下载App</a>
                                </Menu.Item>
                            </Col>
                            <Col span={4} >
                                <Menu.Item >
                                    <Input placeholder="搜索" />
                                    <Icon type="search" className="" />
                                </Menu.Item>
                            </Col>
                            <Col span={2} offset={4}>
                                <Menu.Item >
                                    <a href="/">Aa</a>
                                </Menu.Item>
                            </Col>
                            <Col span={2}>
                                <Menu.Item >
                                    <a href="/">登陆</a>
                                </Menu.Item>
                            </Col>
                            <Col span={2}>
                                <Menu.Item >
                                    <Button > 注册 </Button>
                                </Menu.Item>
                            </Col>
                            <Col span={2}>
                                <Menu.Item >
                                    <Button className="reg"><img src={Bi} alt='.' className="Addition Button" />写文章</Button>
                                </Menu.Item>
                            </Col>
                        </Row>
                    </Menu>

                </div>

            </div >
        )
    }
}