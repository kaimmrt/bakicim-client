import React, { useEffect } from 'react'
import { Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { myWorkTypePrices } from '../../appRedux/actions'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import WorkTypePriceItem from '../../components/WorkTypePriceItem/WorkTypePriceItem'

const MyWorkTypes = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { my_work_type_prices, loading } = useSelector(({ workType }) => workType);

    useEffect(() => {
        dispatch(myWorkTypePrices())
    }, [])

    if (loading) return <CircularProgress />
    return (
        <div className="app-container">
            <Card className="card-container">
                <Button onClick={() => history.push('../ilan_ekle')}>İlan Ekle</Button>
                <div className="my_work_type_container" >
                    {
                        my_work_type_prices.map((value, index) => (
                            <div key={index}>
                                <WorkTypePriceItem
                                    username={value.user.username}
                                    note={value.note}
                                    price={value.price}
                                    work_type={value.work_type.work_type}
                                />

                            </div>
                        ))
                    }
                </div>

            </Card>
        </div>
    )
}

export default MyWorkTypes
