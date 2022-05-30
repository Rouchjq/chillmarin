import { Form, Formik } from 'formik';
import { ButtonSubmit, Input, Textarea } from 'components/layout/common/forms';
import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { colors } from 'components/utils';
import { FaPhoneAlt } from 'react-icons/fa';
import useWindowSize from 'hooks/useWindowSize';
import validarFormContacto from './validations/validarFormContacto';
import clienteAxios from 'config/axios';
import { endpoints } from 'components/utils/endpoints';
import { toast } from 'react-toastify';
import { useModalContext } from 'context/modal/ModalState';

interface IFormReunionProps {
	titulo: string;
	initialValueTextArea: string;
}

export const INITIAL_VALUES_CONTACT_FORM = {
	mensaje: '',
	nombre: '',
	email: '',
	phone: '',
};

const FormReunion: React.FunctionComponent<IFormReunionProps> = props => {
	const WindowSize = useWindowSize();
	const { handleCloseModal } = useModalContext();

	const handleSubmit = async (values: typeof INITIAL_VALUES_CONTACT_FORM) => {
		try {
			const req = await clienteAxios.post(endpoints.contacto.send, values);
			window.open(
				'https://api.whatsapp.com/send?phone=584129964043&text=ChillMarin%20-%20Desarrolladores%20web',
				'_blank'
			);
			toast.success(req.data.msg);
			handleCloseModal();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES_CONTACT_FORM}
			onSubmit={handleSubmit}
			validate={validarFormContacto}
		>
			<Form>
				<Grid container spacing={6}>
					{WindowSize.width > 1200 ? (
						<Grid item lg={6} xs={12}>
							<img
								src={'imagenIsotipo.jpg'}
								alt={
									'Imagen chillmarin con Isotipo'
								}
								width={'100%'}
								style={{ borderRadius: '10px' }}
							/>
						</Grid>
					) : null}

					<Grid item lg={6} xs={12} marginBottom={3}>
						<Typography
							color={colors.darkBlue}
							variant={'h5'}
							fontWeight={600}
						>
							{props.titulo}
						</Typography>

						<Typography
							color={colors.darkBlue}
							variant={'subtitle2'}
							fontWeight={500}
							marginBottom={4}
						>
							Para solicitar una reunión por favor llena
							el siguiente formulario y envia los datos
						</Typography>
						<Input
							placeholder="Ingrese su nombre"
							label="Nombre"
							name="nombre"
							autoFocus
						/>

						<Input
							placeholder="Ingrese su correo"
							label="Correo"
							name="email"
						/>

						<Input
							placeholder="Ingrese su teléfono"
							label="Teléfono"
							name="phone"
						/>

						<Textarea
							label={'Mensaje a enviar'}
							name={'mensaje'}
							placeholder={'Por favor coloque su mensaje'}
							initialValue={props.initialValueTextArea}
						/>

						<Typography
							color={colors.darkBlue}
							variant={'subtitle2'}
							fontWeight={500}
							marginBottom={4}
						>
							<b>Nota:</b> Te contactarás con el líder de
							proyecto para canalizar el presupuesto y
							solventar dudas
						</Typography>

						<ButtonSubmit>
							Contáctanos
							<FaPhoneAlt style={{ marginLeft: '5px' }} />
						</ButtonSubmit>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default FormReunion;
