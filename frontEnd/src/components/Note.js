import { useState } from 'react';
import edit_img from '../assets/img/edit.png'
import delect_svg from '../assets/img/delect.svg'

const Note = ({ id, body,title, date, handleDeleteNote }) => {
	const [edit, setEdit] = useState(false)

	const needEdit=()=>{
		setEdit(true)
	}
	const [post_title, setPost_title] = useState(title);
	const [post_body, setPost_body] = useState(body);
	const characterLimit = 200;

	const titleLimit = 50

	const handleChangeTitle = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setPost_title(event.target.value);
		}
	};

	const handleChangeBody = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setPost_body(event.target.value);
		}
	};

	const handleSaveClick = async (note_id) => {
		let res = await fetch(`https://nootbook.onrender.com/api/update/${note_id}`, {
			method: "PATCH",
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
   			},
			body: JSON.stringify({
			title: post_title,
			body: post_body
			}),
		});
		let resJson = await res.json();
		console.log(resJson);
	};
	return (
		<>
		{edit === true?
		<form className='note new' onSubmit={handleSaveClick(id)}>
			<input
				className='title_input'
				type="text"
				placeholder='Title ...' 
				value={post_title}
				onChange={handleChangeTitle}
				/>
			<textarea
				className='body_input'
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={post_body}
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
		</form>:
		<div className='note'>
			<img className='edit' src={edit_img} alt="edit" onClick={needEdit} />
			<h1 id='title'>{title}</h1>
			<span id='body'>{body}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<img className='delete-icon' onClick={() => handleDeleteNote(id)} src={delect_svg} alt="delect_icon" aria-details='delect note' title='delect' />
			</div>
		</div> }
		</>
		// <div className='note'>
		// 	<img className='edit' src={edit_img} alt="edit" onClick={needEdit} />
		// 	<h1 id='title'>{title}</h1>
		// 	<span id='body'>{body}</span>
		// 	<div className='note-footer'>
		// 		<small>{date}</small>
		// 		<img className='delete-icon' onClick={() => handleDeleteNote(id)} src={delect_svg} alt="delect_icon" aria-details='delect note' title='delect' />
		// 	</div>
		// </div>
	);
};

export default Note;
