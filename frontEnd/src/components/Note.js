// import { MdDeleteForever } from 'react-icons/md';
import delect_svg from '../assets/img/delect.svg'

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<img className='delete-icon' onClick={() => handleDeleteNote(id)} src={delect_svg} alt="delect_icon" aria-details='delect note' title='delect' />
			</div>
		</div>
	);
};

export default Note;
