import React, { useState } from 'react';
import './App.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onClick = (e) => {
      console.log('click ', e);
    };
    return (
      <Layout>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="demo-logo-vertical" />
                        <Menu
                          onClick={onClick}
                          theme="dark"
                          mode="inline"
                          defaultSelectedKeys={['1']}
                          // defaultOpenKeys={['sub1']}
                          items={[
                            {
                              key: '1',
                              icon: <UserOutlined />,
                              label: 'nav 1',
                            },
                            {
                              key: '2',
                              icon: <VideoCameraOutlined />,
                              label: 'nav 2',
                            },
                            {
                              key: '3',
                              icon: <UploadOutlined />,
                              label: 'nav 3',
                            },
                            {
                              type: 'divider',
                            },
                            {
                              key: 'sub4',
                              label: 'Navigation Three',
                              icon: <SettingOutlined />,
                              children: [
                                { key: '9', label: 'Option 9' },
                                { key: '10', label: 'Option 10' },
                                { key: '11', label: 'Option 11' },
                                { key: '12', label: 'Option 12' },
                              ],
                            },
                          ]}
                        />
              </Sider>
              <Layout>
                        <Header style={{ padding: 0, background: colorBgContainer }}>
                                  <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                      fontSize: '16px',
                                      width: 64,
                                      height: 64,
                                    }}
                                  />
                        </Header>
                        <Content
                          style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                          }}
                        >
                          Content
                        </Content>
              </Layout>
      </Layout>
    );
};

export default App;