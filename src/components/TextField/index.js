//Styles
import styles from './styles.module.css';

function TextField(props) {
	const { title, placeholder, type } = props;
	return (
		<div className={styles.textField}>
			<label className={styles.label}>{title}</label>
			<input type={type} className={styles.input} placeholder={placeholder} />
		</div>
	);
}

export default TextField;
