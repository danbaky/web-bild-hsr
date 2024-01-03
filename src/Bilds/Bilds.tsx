import { CharCard } from "../CharCard/CharCard";
// import { Overlay } from './../OverLay/Overlay';
import React, { Fragment } from 'react';

import { Bild } from "../Data/data";


interface Iprops {
    bilds: Bild[],
    remover: (name: string) => void 
}
export const Bilds : React.FC<Iprops> = ({bilds, remover}) => {
    console.log(bilds)
    return (
        <div id="content">
            {
            bilds.length>0 
            ?
            bilds.map(bild => 
            <Fragment key={bild.id}> 
                <CharCard myKey={bild.id} bild={bild} remover={remover}/>
            </Fragment>) 
            : 
            <h2>{ "Билдов пока нет :(" }</h2> 
            }
        </div>)
}