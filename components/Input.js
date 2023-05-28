function Input(props) {
    return (
        <input type={props.type}
            className="border rounded px-3 py-1 w-80"
            required={props.required}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default Input;