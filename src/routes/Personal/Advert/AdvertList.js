import React, { useEffect } from 'react'
import { List, Avatar, Button, Card, Modal, Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import moment from 'moment';

import { allAdverts, createOffer, createOrDeleteFavorite, fetchFavorites } from '../../../appRedux/actions';
import CircularProgress from '../../../components/CircularProgress/CircularProgress'

const AdvertList = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [price, setPrice] = React.useState(1)

    const { adverts } = useSelector(({ advert }) => advert);
    const { favorites } = useSelector(({ favorite }) => favorite);

    const { loading } = useSelector(({ common }) => common);

    const data = adverts.map((_, i) => ({
        favorite:_.favorite,
        advert_id: _.advert_id,
        href: 'https://ant.design',
        title: `${_.user.username} - ${_.user.gender.gender}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            `${_.advert_type.advert_type} -  ${_.advert_time.advert_time} - ${moment(_.createdAt).format('YYYY-MM-DD')}`,
        content:
            `${_.note}`
    }));

    useEffect(() => {
        batch(() => {
            dispatch(allAdverts())
            dispatch(fetchFavorites())
        })
    }, [dispatch])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (id) => {
        dispatch(createOffer({ price, advert_id: id }))
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card className="card-container">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={data}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={(item) => (
                        <List.Item
                            key={item.advert_id}
                            actions={[
                                <HeartOutlined
                                    style={item.favorite ? { background: 'red' } : {}}
                                    onClick={() => dispatch(createOrDeleteFavorite({ advert_id: item.advert_id }))}
                                />,
                                <>
                                    <Button onClick={showModal}>Teklif Ver</Button>
                                    <Modal title="Basic Modal" visible={isModalVisible} onOk={() => handleOk(item.advert_id)} onCancel={handleCancel}>
                                        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </Modal>
                                </>
                            ]}
                            extra={
                                <img
                                    width={150}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </Card>

        </div>
    )
}

export default AdvertList
