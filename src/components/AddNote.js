import { useState } from 'react';

const AddNote = () => {
	// const [noteText, setNoteText] = useState('');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const characterLimit = 200;

	const titleLimit = 50

	const handleChangeTitle = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setTitle(event.target.value);
		}
	};

	const handleChangeBody = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setBody(event.target.value);
		}
	};

	const handleSaveClick = async (e) => {
		 e.preventDefault();
		let res = await fetch("https://nootbook.onrender.com/api/savenote", {
			method: "POST",
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
   			},
			body: JSON.stringify({
			title: title,
			body: body
			}),
		});
		let resJson = await res.json();
		console.log(resJson);
	};
	return (
		<form className='note new' onSubmit={handleSaveClick}>
			<input
				className='title_input'
				type="text"
				placeholder='Title ...' 
				value={title}
				onChange={handleChangeTitle}
				/>
			<textarea
				className='body_input'
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={body}
				onChange={handleChangeBody}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - body.length} Remaining
				</small>
				<button type="submit" className='save' >
					Save
				</button>
			</div>
		</form>
	);
};
// onClick={handleSaveClick}

export default AddNote;
