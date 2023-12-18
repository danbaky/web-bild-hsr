import { CharCard } from "../CharCard/CharCard";
import { useState } from "react";
import { Overlay } from "../OverLay/Overlay";

import cone from "./../CharCard/img/Light_Cone_An_Instant_Before_A_Gaze.webp";
import { data, Characters, PlanarOrbs, Relics, allPlanarOrbs, allRelics, Hero, allHeros } from "./../Data/data";


export const AddBild = () => {

    const [isOpenRelic, setOpenRelic] = useState(false);
    const [isOpenRelic2, setOpenRelic2] = useState(false);
    const [isOpenPlanar, setOpenPlanar] = useState(false);
    const [isHero, setOpenHero] = useState(false);


    const [firstRelic, setFirstRelic] = useState(data.Relics["Band_of_Sizzling_Thunder"])
    const [secondRelic, setSecondRelic] = useState(data.Relics.Champion_of_Streetwise_Boxing)
    const [planar, setPlanar] = useState(data.PlanarOrbs.Broken_Keel)



    const [hero, setHero] = useState<Hero>({
        name: Characters.Bailu,
        art: data.Arts[`${Characters.Bailu}_Splash_Art`]
    })


    const pickHero = (char: Hero) => {
        setHero(char)
        setOpenHero(false)
    }

    const pickPlanar = (planar: PlanarOrbs) => {
        setPlanar(data.PlanarOrbs[planar])
        setOpenPlanar(false)
    }
    const pickFirstRelic = (rel: Relics) => {
        setFirstRelic(data.Relics[rel])
        setOpenRelic(false)
    }
    const pickSecondRelic = (rel: Relics) => {
        setSecondRelic(data.Relics[rel])
        setOpenRelic2(false)
    }
    return (
        <>
            <div className="char_card" >

                <div className="pic card">
                    <img src={hero.art} width={400} onClick={() => setOpenHero(true)}/>
                    <h4>{hero.name}</h4>
                    <input>
                    </input>
                </div>

                <div className="text card">
                    <textarea>
                        Тут введи описание билда
                    </textarea>
                </div>

                <div className="cones">
                    <div className="item card">
                        <select>

                        </select>

                    </div>
                    <div className="item card">
                        <img src={cone} width={150} />

                    </div>
                </div>
                <div className="items">
                    <div className="item card" onClick={() => setOpenRelic(true)}>
                        <img src={firstRelic} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenRelic2(true)}>
                        <img src={secondRelic} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenPlanar(true)}>
                        <img src={planar} width={100} />
                    </div>
                </div>
            </div >


            <Overlay modalOpen={isHero} setOpen={setOpenHero} >
                {
                    allHeros.map((key) => {
                        return (
                            <div key={key.name} className="card" onClick={() => { pickHero(key) }}>
                                <img src={key.art} width={100} />
                            </div>
                        )
                    })
                }
            </Overlay>

            <Overlay modalOpen={isOpenPlanar} setOpen={setOpenPlanar} >
                {
                    allPlanarOrbs.map((key) => {
                        return (
                            <div key={key} className="card" onClick={() => { pickPlanar(key) }}>
                                <img src={data.PlanarOrbs[key]} width={100} />
                            </div>
                        )
                    })
                }
            </Overlay>

            <Overlay modalOpen={isOpenRelic} setOpen={setOpenRelic} >
                {
                    allRelics.map((key) => {
                        return (
                            <div key={key} className="card" onClick={() => { pickFirstRelic(key) }}>
                                <img src={data.Relics[key]} width={100} />
                            </div>
                        )
                    })
                }
            </Overlay>
            <Overlay modalOpen={isOpenRelic2} setOpen={setOpenRelic2} >
                {
                    allRelics.map((key) => {
                        return (
                            <div key={key} className="card" onClick={() => { pickSecondRelic(key) }}>
                                <img src={data.Relics[key]} width={100} />
                            </div>
                        )
                    })
                }
            </Overlay>
        </>
    )
}