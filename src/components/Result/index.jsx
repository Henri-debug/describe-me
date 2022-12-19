import './style.css'

export function Result(props){
    return (
        <div className='result-container'>
            <img src={props.img} alt="perfil-photo" />
            <p>{props.name}</p>
        </div>
    );
}