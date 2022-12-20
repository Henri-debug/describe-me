import './style.css'

export function Repository(props){
    return (
        <div className='repo-container'>
            <p>{props.name || 'Vazio'}</p>
        </div>
    );
}