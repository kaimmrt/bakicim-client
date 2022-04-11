import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { myAdverts } from '../../appRedux/actions'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import AdvertItem from '../../components/AdvertItem/AdvertItem'

const MyAdverts = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { my_adverts, loading } = useSelector(({ advert }) => advert);

    useEffect(() => {
        dispatch(myAdverts())
    }, [])

    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card className="card-container">
                <Button onClick={() => history.push('../ilan_ekle')}>İlan Ekle</Button>
                <div className="my_advert_container" >
                    {
                        my_adverts.map((value, index) => (
                            <div key={index}>
                                <AdvertItem value={value} />
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
    )
}

export default MyAdverts
