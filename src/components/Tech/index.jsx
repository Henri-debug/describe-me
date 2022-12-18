import './style.css'

export function Tech(props){
    return(
        <div id='tech-container'>
            <img src={props.img} alt="tech logo" />
        </div>
    );
}