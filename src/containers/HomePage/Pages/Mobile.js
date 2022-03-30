import React from 'react'

const Mobile = () => {
    return (
        <div className="app">
            <img src={require('../../../images/app.png').default} alt='' className="app-img" />
            <div>
                <h1 className="app-header">Yenilenen Uygulamasıyla Google Play'de</h1>
                <p className="app-detail">bakıcım.com'un yenilenen mobil uygulamasını denediniz mi? <br />Bütün bir uygulamayı telefonuna sığdırdık. <br />Kullanıcı dostu arayüzüyle bakıcım.com artık cebinizde.<br /> Android cihazlarla uyumlu uygulamayı hemen deneyin.</p>
                <img src={require('../../../images/google-play.png').default} alt='' className="app-img-google-play" />
            </div>
        </div>
    )
}

export default Mobile
