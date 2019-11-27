import React from 'react';

class bannerPrincipal extends React.Component {
    render(props) {
        return (
            <div className="bannerPrincipal">
                <img src={props.src} alt=""/>
            </div>
        )
    }
}

export default bannerPrincipal;