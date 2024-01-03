import React, { useState } from "react";
import { Overlay } from "../OverLay/Overlay";

import cone from "./../CharCard/img/Light_Cone_An_Instant_Before_A_Gaze.webp";
import { data, Characters, PlanarOrbs, Relics, allPlanarOrbs, allRelics, Hero, allHeros, Bild } from "./../Data/data";

interface Iprops {
    setBildsList: React.Dispatch<React.SetStateAction<Bild[]>>
}

function makeRandomID() : string{
    return Math.floor(Date.now() + Math.random()*1000000000001).toString()
}
export const AddBild = ({ setBildsList }: Iprops) => {


    //Стейты для модальных окон
    const [isOpenRelic, setOpenRelic] = useState(false);
    const [isOpenRelic2, setOpenRelic2] = useState(false);
    const [isOpenPlanar, setOpenPlanar] = useState(false);
    const [isHero, setOpenHero] = useState(false);


    //состояние предметов + дефолтные значения
    const defaultBild: Bild = {
        id: makeRandomID(),
        name: "",
        character: Characters.Dan_Heng__Imbibitor_Lunae,
        relic1: Relics.HunterOfGlacialForest,
        relic2: Relics.PasserbyOfWanderingCloud,
        planar: PlanarOrbs.SprightlyVonwacq,
        cone1: "cone1",
        cone2: "cone2",
        textInformation: ""
    }
    const [bild, setBild] = useState<Bild>(defaultBild)
    const [firstRelic, setFirstRelic] = useState<Relics>(bild.relic1)
    const [secondRelic, setSecondRelic] = useState<Relics>(bild.relic2)
    const [planar, setPlanar] = useState<PlanarOrbs>(bild.planar)
    const [hero, setHero] = useState<Hero>({
        name: bild.character,
        art: data.Arts[`${bild.character}_Splash_Art`]
    })

    const [textArea, setTextArea] = useState(bild.textInformation)
    const [textInput, setTextInput] = useState(bild.name)

    const addBildInList = () => {
        console.log('Добавилю в список')
        console.log(bild)

        setBildsList((cur) => {
            console.log(typeof Object.values([bild, ...cur]))
            return Object.values([bild, ...cur])})
        setBild(defaultBild)
    }
    //Связываю все стейты с одинм. Видимо лучше было завести один bild без стейтов 
    React.useEffect(() => {
        setFirstRelic(bild.relic1)
        setSecondRelic(bild.relic2)
        setHero({
            name: bild.character,
            art: data.Arts[`${bild.character}_Splash_Art`]
        })
        setPlanar(bild.planar)
        setFirstRelic(bild.relic1)
        setTextArea(bild.textInformation)

        setTextInput(bild.name)
    }, [bild])

    const pickHero = (char: Hero) => {
        setHero(char)
        setOpenHero(false)
    }

    const pickPlanar = (planar: PlanarOrbs) => {
        setPlanar(planar)
        setOpenPlanar(false)
    }
    const pickFirstRelic = (rel: Relics) => {
        setFirstRelic(rel)
        setOpenRelic(false)
    }
    const pickSecondRelic = (rel: Relics) => {
        setSecondRelic(rel)
        setOpenRelic2(false)
    }
    React.useEffect(() => {
        setBild({
            id: makeRandomID(),
            name: textInput,
            character: hero.name,
            relic1: firstRelic,
            relic2: secondRelic,
            planar: planar,
            cone1: "cone1",
            cone2: "cone2",
            textInformation: textArea
        })
    }, [textArea, textInput, firstRelic, secondRelic, planar, hero.name])

    return (
        <div className="content">
            <div className="char_card" >

                <div className="pic card">
                    <img alt={hero.name} src={hero.art} width={400} onClick={() => setOpenHero(true)} />
                    <h4>{hero.name}</h4>
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Имя билда" />
                </div>

                <div className="text card">
                    <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} placeholder="Описание билда" />
                </div>

                <div className="cones">
                    <div className="item card">
                        <img alt={cone} src={cone} width={150} />

                    </div>
                    <div className="item card">
                        <img alt={cone} src={cone} width={150} />

                    </div>
                </div>
                <div className="items">
                    <div className="item card" onClick={() => setOpenRelic(true)}>
                        <img alt={bild.relic1} src={data.Relics[firstRelic]} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenRelic2(true)}>
                        <img alt={bild.relic2} src={data.Relics[secondRelic]} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenPlanar(true)}>
                        <img alt={bild.planar} src={data.PlanarOrbs[planar]} width={100} />
                    </div>
                </div>
            </div >
            <button className="btm" onClick={addBildInList}>
                Добавить
            </button>


            <Overlay modalOpen={isHero} setOpen={setOpenHero} >
                {
                    allHeros.map((key) => {
                        return (
                            <div key={key.name} className="card" onClick={() => { pickHero(key) }}>
                                <img alt={key.name} src={key.art} width={100} />
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
                                <img alt={key} src={data.PlanarOrbs[key]} width={100} />
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
                                <img alt={key} src={data.Relics[key]} width={100} />
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
                                <img alt={key} src={data.Relics[key]} width={100} />
                            </div>
                        )
                    })
                }
            </Overlay>
        </div>
    )
}