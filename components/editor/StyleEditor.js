import { useState } from 'react';
import ReactModal from 'react-modal';
import StyleForm from './StyleForm';

function StyleEditor(props) {

	const {cssProps, onUpdate} = props
	
	const [open, setOpen] = useState(false)

	const handleCloseModal = () => {
		setOpen(false)
	}

	return (
		<>
			<ReactModal isOpen={open} onRequestClose={handleCloseModal} ariaHideApp={false}>
				<StyleForm fields={cssProps} onUpdate={onUpdate} />
			</ReactModal>
			<button onClick={(e) => setOpen(true)}>Open Editor</button>
		</>
	)
	
}

export default StyleEditor;