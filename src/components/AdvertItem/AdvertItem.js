import React from 'react'
import { useDispatch } from 'react-redux';
import { Card, Divider } from 'antd';
import { deleteAdvert } from '../../appRedux/actions';
import { EditIcon, DeleteIcon, EyeIcon } from '../Icons'

const WorkTypePriceItem = ({ value }) => {
    const dispatch = useDispatch()

    return (
        <Card
            className="advert"
            actions={[
                <DeleteIcon onClick={() => dispatch(deleteAdvert(value.advert_id))} key="setting" />,
                <EditIcon key="edit" />,
                <EyeIcon key="ellipsis" />,
            ]}
        >
            <div className="advert_item_header">

                <img className="advert_item_image" src={"https://picsum.photos/id/237/200/200"} />
                <h3 className="advertUsername">{value.user.username}</h3>
                <div className="advertPrice_container">
                    <p className="advertPrice">{value.price} ₺</p>
                    <h5 >{value.advert_type.advert_type}</h5>
                </div>
            </div>
            <Divider style={{ marginTop: 10, marginBottom: 15 }} />
            <p className="advertNote">{value.note}</p>
        </Card>
    )
}

export default WorkTypePriceItem
