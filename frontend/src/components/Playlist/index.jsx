import lentes from "../../assets/lentes.jpg";
import hearth from "../../assets/hearth-liked.svg"

const musics = [
    {
        bora: "bill"
    },
    {
        bora: "bill"
    },
    {
        bora: "bill"
    },
    {
        bora: "bill"
    },
    {
        bora: "bill"
    }
];

export default function Playlist(props) {
    if (props.showMusics) {
        return null;
    }

    return (
    <section>
        {/* Cada música é uma div dessa */}
        {musics.map((music) => {
            return <div>
                <div>
                    <img className="h-20" src={lentes} alt="Imagem da música" />
                    <div>
                        <h3>Título</h3>
                        <h4>Artistas</h4>
                    </div>
                </div>
                <img src={hearth} alt="Ícone de curtido" />
            </div>
        })
        }
    </section>
    )
}