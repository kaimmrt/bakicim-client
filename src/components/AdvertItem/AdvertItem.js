import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Divider } from 'antd';
import { deleteAdvert, showAdvert } from '../../appRedux/actions';
import { EditIcon, DeleteIcon, EyeIcon, EyeInvisibleOutline } from '../Icons'

const WorkTypePriceItem = ({ value }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <Card
            className="advert"
            actions={[
                <DeleteIcon onClick={() => dispatch(deleteAdvert(value.advert_id))} key="setting" />,
                <EditIcon
                    onClick={() => history.push({
                        pathname: `./ilan_duzenle/${value.advert_id}`,
                    })}
                    key="edit" />,
                value.status == 2
                    ?
                    <EyeIcon key="ellipsis" onClick={() => dispatch(showAdvert(value.advert_id))} />
                    :
                    <EyeInvisibleOutline key="ellipsis" onClick={() => dispatch(showAdvert(value.advert_id))} />
            ]}
        >
            <div className="advert_item_header">
                {
                    value.status == 2
                        ?
                        <div className="not-active">aktif değil</div>
                        : null
                }

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
