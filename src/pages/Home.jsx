import React from 'react'
import About from './About'
import Contact from './Contact'
import Velkommen from './Velkommen'
import Ydelser from './Ydelser'
import Galleri from './Galleri'

const Home = () => {
    return (
        <section className="container p-5">
            <Velkommen />
            <Ydelser />
            <Galleri />
            <About />
            <Contact />
        </section>
    )
}

export default Home