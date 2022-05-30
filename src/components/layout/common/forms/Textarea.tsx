import { useFormikContext, getIn } from 'formik';
import * as React from 'react';
import { FormControl, TextField } from '@mui/material';

interface ITextareaProps {
	label: string;
	name: string;
	placeholder?: string;
	rows?: number;
	initialValue?: string;
}
export const Textarea: React.FunctionComponent<ITextareaProps> = props => {
	const { label, name, placeholder = '', rows = 5 } = props;
	const { values, errors, touched, setFieldValue, setTouched } = useFormikContext();
	const value = getIn(values, name);
	const error = getIn(errors, name);
	const touchedInput = getIn(touched, name);

	React.useEffect(() => {
		if (props.initialValue) {
			setFieldValue(name, props.initialValue);
		}
	}, []);
	return (
		<FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
			<TextField
				variant="filled"
				label={label}
				name={name}
				placeholder={placeholder}
				multiline
				rows={rows}
				value={value}
				onChange={e => setFieldValue(name, e.target.value)}
				onClick={() => setTouched({ ...touched, [name]: true })}
				onTouchStart={() => setTouched({ ...touched, [name]: true })}
				color={'dark'}
			/>

			{error && touchedInput && <small className="required">{error}</small>}
		</FormControl>
	);
};
