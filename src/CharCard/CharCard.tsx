import "./style.css"
import pic from "./img/Character_Silver_Wolf_Splash_Art.webp";
import cone from "./img/Light_Cone_An_Instant_Before_A_Gaze.webp";
import item from "./img/Item_Rutilant_Arena.webp";
import { data, Bild, Relics, PlanarOrbs } from "../Data/data";


interface Iprops {
    myKey:string,
    bild: Bild,
    remover: (name: string)=> void    
}
export const CharCard: React.FC<Iprops> = ({myKey, bild, remover}) => {

    return (

        <div className="char_card" key={myKey}>

            <div className="pic card" >
                <img src={data.Arts[`${bild.character}_Splash_Art`]} alt={bild.character} width={400} />
                <h4>{bild.character}</h4>
                <p>{bild.name}</p>
            </div>

            <div className="text card">
                <p>{bild.textInformation}</p>
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
                <div className="item card">
                    <img src={data.Relics[bild.relic1]} width={100} />
                </div>
                <div className="item card">
                    <img src={data.Relics[bild.relic2]} width={100} />
                </div>
                <div className="item card">
                    <img src={data.PlanarOrbs[bild.planar]} width={100} />

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