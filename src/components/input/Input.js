import classes from './Input.module.css';
import InputMask from 'react-input-mask';

const Input = ({ mask, type, label, inputIsError, value, inputChange, inputBlur, errorMessage, placeholder }) => {
    return (
        <div className={classes['input-group']}>
            <label>{label}</label>
            <InputMask
                mask={mask}
                maskChar={null}
                type={type}
                className={`${inputIsError ? 'border-danger' : ''}`}
                value={value}
                onChange={inputChange}
                onBlur={inputBlur}
                placeholder={placeholder}
                valueIsNumericString={true}
            />
            {inputIsError && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}

export default Input;