import React from 'react';

import logo from '../images/cloudcsp_logo.png'
import banner1 from '../images/VSBanner.jpg'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="home__header" >
                    <img src={logo} alt=""/>
                </header>

                <main>
                    <section className="home__banner" >
                        <div className="home_banner_carrousel">
                            <img src={banner1} alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Home;