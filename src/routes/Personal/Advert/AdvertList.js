import React, { useEffect } from 'react'
import { List, Avatar, Space, Card } from 'antd';
import { MessageOutlined, HeartOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import moment from 'moment';

import { allAdverts } from '../../../appRedux/actions';
import CircularProgress from '../../../components/CircularProgress/CircularProgress'

const AdvertList = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { adverts } = useSelector(({ advert }) => advert);
    const { loading } = useSelector(({ common }) => common);
    console.log(adverts)
    const data = adverts.map((_, i) => ({
        href: 'https://ant.design',
        title: `${_.user.username}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            `${_.advert_type.advert_type} -  ${_.advert_time.advert_time} - ${moment(_.createdAt).format('YYYY-MM-DD')}`,
        content:
            `${_.note}`
    }));

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    useEffect(() => {
        dispatch(allAdverts())
    }, [dispatch])

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
                            key={item.title}
                            actions={[
                                <IconText icon={HeartOutlined} text="" key="list-vertical-star-o" />,
                                // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
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
