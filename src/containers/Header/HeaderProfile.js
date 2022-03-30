import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { Menu, Dropdown } from 'antd';

const HeaderProfile = () => {

    const SignOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">Profil</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">Ayarlar</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={() => SignOut()}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <FaSignOutAlt style={{ marginRight: '10', color: '#810606', marginTop: '-8' }} />
                    <h3> Çıkış Yap </h3>
                </div>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <div className="header_img_container">
                <img src={"https://picsum.photos/id/237/200/200"} className="header_img" />

                <Dropdown overlay={menu} trigger={['click']}>
                    <MdKeyboardArrowDown onClick={e => e.preventDefault()} className="header_icon" />
                </Dropdown>

            </div>
        </div>
    )
}

export default HeaderProfile
