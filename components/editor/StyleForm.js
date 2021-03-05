function StyleForm ({ fields, onUpdate }) {

	const inputs = fields.map((field) => (
		<div>
			<label for="{field}">{field}</label>
			<input type="color" onChange={(e) => {
				let update = {}
				update[field] = e.target.value
				onUpdate(update)
			} } />
		</div>
	))

	return inputs
}

export default StyleForm