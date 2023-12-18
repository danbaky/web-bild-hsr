import { CharCard } from "../CharCard/CharCard";
import { Overlay } from './../OverLay/Overlay';
import React, { useState } from 'react';
import { Characters,Relics,PlanarOrbs } from "../Data/data";
import { Bild } from "../Data/data";

export const Bilds = () => {

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
    //         name: "Название Билда2",
    //         character: Characters.Dan_Heng__Imbibitor_Lunae,
    //         relic1: Relics.HunterOfGlacialForest,
    //         relic2: Relics.PasserbyOfWanderingCloud,
    //         planar: PlanarOrbs.SprightlyVonwacq,
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

    const [bilds, setBilds] = useState<Bild[]>(JSON.parse(localStorage.getItem("Bilds") || '{}' ))
    
    const addBildToList = (bild:Bild) => {
        setBilds([...bilds, bild])
    }

    return (
            <div id="content">
                {bilds.map(bild => <CharCard key={bild.name} bild={bild} />)}
            </div>
    )
}