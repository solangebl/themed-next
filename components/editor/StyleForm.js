function StyleForm (props) {
	const { fields, onUpdate } = props;

	const inputs = fields.map((field) => (
		<div>
			<label for="{field}">{field}</label>
			<input type="color" onChange={(e) => console.log(e.target.value)} />
		</div>
	))

	return inputs
}

export default StyleForm