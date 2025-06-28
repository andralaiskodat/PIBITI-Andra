    function Button(props) {
    return (
        <button onClick={props.onClick} style={props.style}>
        {props.label}
        </button>
    );
    }

export default Button;
