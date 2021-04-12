import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onClick }) => {
	return (
		<header className="header">
			{/* for inline styling */}
			{/* <h1 style={headingStyle}>{title}</h1> */}
			<h1>{title}</h1>
			<Button color="green" text="Add" onClick={onClick} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'blue',
// }

export default Header
