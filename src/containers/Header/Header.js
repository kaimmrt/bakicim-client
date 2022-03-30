import React from 'react'
import { useSelector } from 'react-redux';

import Logo from '../../components/Logo'
import '../../style/MainApp.css'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { BiChat } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import HeaderProfile from './HeaderProfile';

const Header = () => {

    const { authUser } = useSelector(({ auth }) => auth);

    return (
        <div className={authUser.user_type_id == 2 ? "header_container" : "header_container_other"}>
            <div className="header_top">
                <Logo to="/sample" />
                <Input placeholder="Search..." prefix={<SearchOutlined />} className="header_search_input" />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BiChat className="header_icon" />
                    <IoMdNotificationsOutline className="header_icon" />
                    <div className="header_top_divider" />

                    <HeaderProfile />
                </div>

            </div>

            {
                authUser.user_type_id == 2
                    ?
                    <>
                        <div className="header_divider" />
                        <div className="header_bottom">
                            <ul className="header_bottom_list">
                                <li className="header_bottom_list_item"><p>Hasta Bakımı</p></li>
                                <li className="header_bottom_list_item"><p>Yaşlı Bakımı</p></li>
                                <li className="header_bottom_list_item"><p>Yaşlı Bakımı</p></li>
                            </ul>
                        </div>
                    </>
                    : null
            }

        </div>
    )
}

export default Header
