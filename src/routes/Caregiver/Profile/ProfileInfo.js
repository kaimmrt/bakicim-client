import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Divider } from 'antd'
import moment from 'moment'
import '../../../style/Profile.css'

const ProfileInfo = () => {
    const { authUser } = useSelector(({ auth }) => auth);

    return (
        <div className="app-container">
            <Card className="profile-card-container">
                <img src={"https://picsum.photos/200"} className="profile-img" />
                <h2 className="profile-username">{authUser.username}</h2>
                <p>{authUser.user_type.user_type}</p>
                <Divider className="divider" />
                <div className="profile-createdAt">
                    <p>Üyelik Tarihi:</p>
                    <p>{moment(authUser.createdAt).format('YYYY-MM-DD')}</p>
                </div>
            </Card>
        </div>
    )
}

export default ProfileInfo
