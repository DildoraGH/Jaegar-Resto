import classes from './index.module.css';

const Button = ({ title, type, handleClick }) => {
    return (
        <button className={`${classes.btn} btn`} type={type} onClick={handleClick}>{title}</button>
    )
}

export default Button