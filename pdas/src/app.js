import "bulma/css/bulma.css"
import {ProfileCard} from "./profile.card"
import KenobiImg from "./images/kenobi.jpg"
import CodyImg from "./images/cody.jpg"
import GreviousImg from "./images/grevious.jpg"

export const App = ()=>(
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Profiles</p>
            </div>
        </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3"><ProfileCard title= "General Kenobi" handle="@kenobiObi" img={KenobiImg} description="Hello there" /></div>
                    <div className="column is-3"><ProfileCard title= "Commander Cody" handle="@cody66" img={CodyImg} description="Everyone is doing great except CODY"/></div>
                    <div className="column is-3"><ProfileCard title= "General Grevious" handle="@4doorsMoreSwords" img={GreviousImg} description="One of the siths, who started rebelion" /></div>
                </div>
            </section>
        </div>
    </div>
)