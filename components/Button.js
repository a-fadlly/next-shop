function Button(props) {
    return (
        <button type={props.type}
            className="bg-green-800 text-gray-100 rounded px-4 py-2 my-2 hover:bg-green-700">
            {props.children}
        </button>
    );
}

export default Button;