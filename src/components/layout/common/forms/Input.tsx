import { getIn, useFormikContext } from 'formik';
import { FormControl, TextField } from '@mui/material';

interface IInputProps {
	label: string;
	name: string;
	placeholder?: string;
	type?: React.InputHTMLAttributes<unknown>['type'];
	disabled?: boolean;
	autoFocus?: boolean;
}
export const Input: React.FunctionComponent<IInputProps> = props => {
	const { label, name, placeholder, type = 'text', disabled, autoFocus } = props;
	const { values, errors, touched, setFieldValue, setTouched } = useFormikContext();
	const value = getIn(values, name);
	const error = getIn(errors, name);
	const touchedInput = getIn(touched, name);

	return (
		<FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
			<TextField
				size="medium"
				variant="filled"
				label={label}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={e => setFieldValue(name, e.target.value)}
				onClick={() => setTouched({ ...touched, [name]: true })}
				onTouchStart={() => setTouched({ ...touched, [name]: true })}
				disabled={disabled}
				autoFocus={autoFocus}
			/>
			{error && touchedInput && <small className="required">{error}</small>}
		</FormControl>
	);
};
