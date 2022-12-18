import './style.css'


export function Card(props){
    return (
        <div id='card-container'>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    );
}