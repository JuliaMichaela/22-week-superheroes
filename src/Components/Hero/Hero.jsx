import "./hero.scss";


export default function Hero(props) {
    return (
        <div className="hero">
            <h2>{props.name}</h2>
            <p>
                <span>Вселенная: </span>{props.universe}
            </p>
            <p>
                <span>Альтер эго: </span>{props.alterego}
            </p>
            <p>
                <span>Род деятельности: </span>{props.occupation}
            </p>
            <p>
                <span>Друзья: </span>{props.friends}
            </p>
            <p>
                <span>Суперсилы: </span>{props.superpowers}
            </p>
            <img src={props.url} alt={props.name} />
            <p>
                <span>Подробнее: </span>{props.info}
            </p>
        </div>
    )
}
