function Field(props) {
  return (
    <label className="block my-2">
      <span className="block text-sm text-gray">{props.label}</span>
      {props.children}
    </label>
  );
}

export default Field;
