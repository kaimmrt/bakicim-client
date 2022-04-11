import React from 'react'
import '../../style/MainApp.css'
import { MdFavoriteBorder, MdLocalPhone, MdOutlineInfo, MdHelpOutline, MdDone, MdLocalOffer } from 'react-icons/md';
import { CgProfile, CgList } from 'react-icons/cg';
import { IoWalletSharp } from 'react-icons/io5';
import { Divider } from 'antd';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

const Sidebar = () => {

    const { authUser } = useSelector(({ auth }) => auth);
    const history = useHistory()

    const DefaultItem = () => {
        return (
            <>
                <Divider />
                <li className="sidebar_list_item">
                    <MdOutlineInfo className="sidebar_list_item_icon" />
                    <h1 className="sidebar_list_item_text">Hakkımızda</h1>
                </li>
                <li className="sidebar_list_item">
                    <MdHelpOutline className="sidebar_list_item_icon" />
                    <h1 className="sidebar_list_item_text">Destek</h1>
                </li>
                <li className="sidebar_list_item">
                    <MdLocalPhone className="sidebar_list_item_icon" />
                    <h1 className="sidebar_list_item_text">İletişim</h1>
                </li>
            </>
        )
    }

    return (
        <div className="sidebar-container" >
            <ul className="sidebar_list">

                {
                    authUser.user_type_id == 2
                        ?
                        <>
                            <li className="sidebar_list_item">
                                <img src={require('../../images/logo.png').default} alt='' className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">bakıcım.com</h1>
                            </li>
                            <li className="sidebar_list_item">
                                <MdFavoriteBorder className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">Favorilerim</h1>
                            </li>
                            <li className="sidebar_list_item">
                                <MdDone className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">Anlaştıklarım</h1>
                            </li>
                            <li className="sidebar_list_item">
                                <MdLocalOffer className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">Teklifler</h1>
                            </li>
                            {DefaultItem()}
                        </>
                        :
                        <>
                            <li className="sidebar_list_item">
                                <Link className="sidebar_link" to="/profile">
                                    <CgProfile className="sidebar_list_item_icon" />
                                    <h1 className="sidebar_list_item_text">Profilim</h1>
                                </Link>
                            </li>
                            <li className="sidebar_list_item" onClick={() => history.push('../ilanlarım')}>
                                <CgList className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">İlanlarım</h1>
                            </li>
                            <li className="sidebar_list_item">
                                <MdDone className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">Anlaştıklarım</h1>
                            </li>
                            <li className="sidebar_list_item">
                                <IoWalletSharp className="sidebar_list_item_icon" />
                                <h1 className="sidebar_list_item_text">Cüzdanım</h1>
                            </li>
                            {DefaultItem()}
                        </>
                }
            </ul>

            <Divider />
            <p style={{ textAlign: 'center', marginTop: -10, color: 'gray' }}>bakıcım.com © 2021</p>
        </div>
    )
}

export default Sidebar
