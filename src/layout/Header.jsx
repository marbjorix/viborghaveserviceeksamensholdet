import React from 'react'


const Header = () => {
    return (
        <header id="header" className="container py-5 text-light">
            <div className="row justify-content-md-center py-5">
                <div className="col-md-auto text-center">
                    <h1 className="text-uppercase my-5">Kvalitet og service</h1>
                    <p className="my-5">Hos Viborg Haveservice bliver kvalitet og service sat i højsædet.<br />
                        Vi sætter stor ære og pris på at tilbyde professionel haveservice til både private og erhverv</p>
                    <a href="#about" className="btn btn-vh-green btn-lg text-light">Læs mere</a> </div>
            </div>
        </header>
    )
}

export default Header