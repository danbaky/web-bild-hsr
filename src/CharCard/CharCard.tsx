import "./style.css"

import cone from "./img/Light_Cone_An_Instant_Before_A_Gaze.webp";
import React from  'react'
import { data, Bild } from "../Data/data";


interface Iprops {
    myKey:string,
    bild: Bild,
    remover: (name: string) => void    
}
export const CharCard: React.FC<Iprops> = ({myKey, bild, remover}) => {
    return (
        <div className="char_card">
            <div className="pic card" >
                <img src={data.Arts[`${bild.character}_Splash_Art`]} alt={bild.character} width={400}/>
                <h4 >{bild.character}</h4>
                <p >{bild.name}</p>
            </div>
            <div className="text card">
                <p>{bild.textInformation}</p>
            </div>
            <div className="cones" >
                <div className="item card" >
                    <img alt={cone} src={cone} width={150}/>
                </div>
                <div className="item card">
                    <img alt={cone} src={cone} width={150} />
                </div>
            </div>
            <div className="items">
                <div className="item card" >
                    <img alt={bild.relic1} src={data.Relics[bild.relic1]} width={100} />
                </div>
                <div className="item card" >
                    <img alt={bild.relic2} src={data.Relics[bild.relic2]} width={100} />
                </div>
                <div className="item card" >
                    <img alt={bild.planar} src={data.PlanarOrbs[bild.planar]} width={100} />
                </div>
            </div>
            <div className="controls card">
            <button className="btm" onClick={()=>remover(myKey)}>
                Удалить билд
            </button>
            <button className="btm">
                Редактировать(Пока в разработке)
            </button>
            </div>
        </div>
    )
}