import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, Divider, Button, Input, Modal } from 'antd'
import moment from 'moment'

import '../../../style/Profile.css'
import { CalendarIcon, GenderICon, PhoneIcon, } from '../../../components/Icons'
import { updateProfile } from '../../../appRedux/actions'

const ProfileInfo = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { authUser } = useSelector(({ auth }) => auth);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [coverLetter, setCoverLetter] = useState(authUser.cover_letter);

    const handleOk = () => {
        const data = authUser
        data.cover_letter = coverLetter
        dispatch(updateProfile({ user_id: authUser.user_id, data }));
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card style={{ width: '55%', height: 365 }} className="card-container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="profile-info-img-container">
                        <img src={"https://picsum.photos/200"} className="profile-img" />
                        <h2 className="profile-username">{authUser.username}</h2>
                        <h5>{authUser.user_type.user_type}</h5>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', }}>
                        <div className="profile-info-item" style={{ display: 'flex' }}>
                            <div>
                                <GenderICon className="profile-info-item-icon" />
                            </div>
                            <h3 >{authUser.gender.gender}</h3>
                        </div>
                        <div className="profile-info-item" style={{ display: 'flex' }}>
                            <div>
                                <CalendarIcon className="profile-info-item-icon" />
                            </div>
                            <h4>{moment(authUser.birthday).format('YYYY-MM-DD')}</h4>
                        </div>
                        <div className="profile-info-item" style={{ display: 'flex' }}>
                            <div>
                                <PhoneIcon className="profile-info-item-icon" />
                            </div>
                            <h4>{authUser.phone}</h4>
                        </div>
                    </div>
                </div>

                <Divider className="divider" />
                <div className="profile-createdAt">
                    <div style={{ display: 'flex', width: '40%' }}>
                        <p>Üyelik Tarihi:</p>
                        <p style={{ marginLeft: 20 }}>{moment(authUser.createdAt).format('YYYY-MM-DD')}</p>
                    </div>
                    <Button onClick={() => history.push(`../update_profile`)}>Profil Bilgilerimi Düzenle</Button>
                </div>
            </Card>
            <Card style={{ width: '40%', height: 365 }} className="card-container">
                <div style={{ height: 238, overflow: 'scroll' }}>
                    <h2>Ön Yazı</h2>
                    <Divider className="divider" />
                    <p>{authUser.cover_letter}</p>
                </div>
                <Divider className="divider" />
                <div className="profile-createdAt">
                    <Button onClick={() => setIsModalVisible(true)}>Ön Yazı Güncelle</Button>
                </div>

                <Modal
                    okText="Güncelle"
                    cancelText="Vazgeç"
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Input.TextArea onChange={(e) => setCoverLetter(e.target.value)} rows="9" value={coverLetter} />
                </Modal>

            </Card>
        </div >
    )
}

export default ProfileInfo
