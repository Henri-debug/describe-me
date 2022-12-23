import './style.css'

export function Repository(props){
    return (
        <div className='repo-container'>
            <p><a href={props.src} target='_blank'>{props.name}</a></p>
        </div>
    );
}