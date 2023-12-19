import { CharCard } from "../CharCard/CharCard";
import { Overlay } from './../OverLay/Overlay';
import React, { useState } from 'react';
import { Characters,Relics,PlanarOrbs } from "../Data/data";
import { Bild } from "../Data/data";


interface Iprops {
    bilds: Bild[],
    remover: (name: string) => void 
}
export const Bilds : React.FC<Iprops> = ({bilds, remover}) => {
    return (
        <div id="content">
            {bilds.map(bild => <CharCard myKey={bild.name} bild={bild} remover={remover}/>)}
        </div>
)
}

    // const bilds: Bild[] = [
    //     {
    //         name: "Название Билда",
    //         character: Characters.Pela,
    //         relic1: Relics.KnightOfPurityPalace,
    //         relic2: Relics.LongevousDisciple,
    //         planar: PlanarOrbs.BrokenKeel,
    //         cone1: "cone1",
    //         cone2: "cone2",
    //         textInformation: "Описание"
    //     },
    //     {
    //         name: "Название Билда3",
    //         character: Characters.Sushang,
    //         relic1: Relics.MusketeerOfWildWheat,
    //         relic2: Relics.GeniusOfBrilliantStars,
    //         planar: PlanarOrbs.InertSalsotto,
    //         cone1: "cone1",
    //         cone2: "cone2",
    //         textInformation: "Описание"
    //     }];

    // localStorage.setItem("Bilds", JSON.stringify(bilds))
    // console.log(bilds)
