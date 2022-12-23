import './style.css'

export function Button(props) {
    return (
        <button
            onClick={props.functor}
        >
            {props.title}
        </button>
    );
}