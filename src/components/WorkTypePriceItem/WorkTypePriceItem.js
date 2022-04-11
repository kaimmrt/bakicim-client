import React from 'react'
import { Card, Divider } from 'antd'
import { TrashIcon, PencilIcon } from '../Icons'
const WorkTypePriceItem = ({ img, username, work_type, price, note }) => {
    return (
        <Card className="work_type_price_container">
            <div className="work_type_price_bar">
                <TrashIcon className="work_type_price_bar_icon" />
                <PencilIcon className="work_type_price_bar_icon" />
            </div>
            <div className="work_type_price_item_header">

                <img className="work_type_price_item_image" src={"https://picsum.photos/id/237/200/200"} />
                <h3 className="work_type_price_username">{username}</h3>
                <div className="work_type_price_price_container">
                    <p className="work_type_price_price">{price} ₺</p>
                    <h5 >{work_type}</h5>
                </div>
            </div>
            <Divider style={{ marginTop: 10, marginBottom: 15 }} />
            <p className="work_type_price_note">{note}</p>
        </Card>
    )
}

export default WorkTypePriceItem
