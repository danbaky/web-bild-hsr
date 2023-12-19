import { CharCard } from "../CharCard/CharCard";
import React, { useState } from "react";
import { Overlay } from "../OverLay/Overlay";

import cone from "./../CharCard/img/Light_Cone_An_Instant_Before_A_Gaze.webp";
import { data, Characters, PlanarOrbs, Relics, allPlanarOrbs, allRelics, Hero, allHeros, Bild } from "./../Data/data";

interface Iprops {
    bildList:Bild[],
    setBildsList: React.Dispatch<React.SetStateAction<Bild[]>>
}
export const AddBild = ({bildList, setBildsList}:Iprops) => {

    const addBildInList = () => {
        setBildsList((cur) => [bild, ...cur])
        console.log('Добавил в список', bild)
        setBild(defaultBild)
    }
    //Стейты для модальных окон
    const [isOpenRelic, setOpenRelic] = useState(false);
    const [isOpenRelic2, setOpenRelic2] = useState(false);
    const [isOpenPlanar, setOpenPlanar] = useState(false);
    const [isHero, setOpenHero] = useState(false);
    //состояние предметов + дефолтные значения
    const defaultBild: Bild = {
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

    const saveTextInput = (text:string): void => {
        setTextInput(text)
        console.log(text)
        console.log(textInput)

    }
    const saveTextArea = (text:string): void => {
        setTextArea(text);
        console.log('Поменял текст')
    }

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
    React.useEffect(()=>{
        setBild({
            name: textInput,
            character: hero.name,
            relic1: firstRelic,
            relic2: secondRelic,
            planar: planar,
            cone1: "cone1",
            cone2: "cone2",
            textInformation: textArea
        })
    },[textArea, textInput, firstRelic, secondRelic, planar, hero.name])
    
    return (
        <>
            <div className="char_card" >

                <div className="pic card">
                    <img src={hero.art} width={400} onClick={() => setOpenHero(true)}/>
                    <h4>{hero.name}</h4>
                    <input type="text" defaultValue={textInput} onChange={(e)=>saveTextInput(e.target.value)} placeholder="Имя билда"/>
                </div>

                <div className="text card">
                    <textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)} placeholder="Описание билда"/>
                </div>

                <div className="cones">
                    <div className="item card">
                    <img src={cone} width={150} />

                    </div>
                    <div className="item card">
                        <img src={cone} width={150} />

                    </div>
                </div>
                <div className="items">
                    <div className="item card" onClick={() => setOpenRelic(true)}>
                        <img src={data.Relics[firstRelic]} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenRelic2(true)}>
                        <img src={data.Relics[secondRelic]} width={100} />
                    </div>
                    <div className="item card" onClick={() => setOpenPlanar(true)}>
                        <img src={data.PlanarOrbs[planar]} width={100} />
                    </div>
                </div>
            </div >
            <button onClick={addBildInList}>
                Добавить
            </button>


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