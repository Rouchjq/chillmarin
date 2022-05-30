import { useFormikContext } from 'formik';
import { Button as ButtonMu } from '@mui/material';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { toast, ToastContainer } from 'react-toastify';

interface IButtonProps {
	children?: React.ReactNode;
}

export const ButtonSubmit: React.FunctionComponent<IButtonProps> = ({ children }) => {
	const { errors, isSubmitting } = useFormikContext();
	const handleClick = () => {
		if (errors && Object.keys(errors).length) {
			for (const key in errors) {
				//@ts-ignore
				toast.error(errors[key]);
			}
		}
	};
	return (
		<ButtonMu
			disabled={isSubmitting}
			fullWidth
			type="submit"
			color="primary"
			variant="contained"
			style={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
			}}
			onClick={handleClick}
		>
			{isSubmitting ? <CgSpinnerTwoAlt className="spin" size={20} /> : children}
		</ButtonMu>
	);
};
