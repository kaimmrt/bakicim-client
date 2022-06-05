import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { myAdverts } from '../../../appRedux/actions'
import CircularProgress from '../../../components/CircularProgress/CircularProgress'
import AdvertItem from '../../../components/AdvertItem/AdvertItem'
import { PlusIcon } from '../../../components/Icons'

const MyAdverts = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { authUser } = useSelector(({ auth }) => auth);
    const { my_adverts } = useSelector(({ advert }) => advert);
    const { loading } = useSelector(({ common }) => common);

    useEffect(() => {
        dispatch(myAdverts(authUser.user_id))
    }, [dispatch])


    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card className="card-container">
                <Button className="add-button" onClick={() => history.push('../ilan_ekle')}>
                    <div>
                        <PlusIcon style={{ fontSize: 20, marginRight: 20 }} />
                    </div>
                    <h4>İlan Ekle</h4>
                </Button>
                <div className="my_advert_container" >
                    {
                        my_adverts?.map((value, index) => (
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
