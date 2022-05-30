import { INITIAL_VALUES_CONTACT_FORM } from '../FormReunion';

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const validarFormContacto = (values: typeof INITIAL_VALUES_CONTACT_FORM) => {
	const errors: any = {};

	if (!values.nombre) {
		errors.nombre = 'Por favor, coloque su nombre';
	}

	if (!values.email) {
		errors.email = 'Por favor, coloque su email';
	} else {
		if (!emailRegex.test(values.email)) {
			errors.email = 'Por favor, coloque un correo válido';
		}
	}

	if (!values.phone) {
		errors.phone = 'Por favor, coloque su número de teléfono';
	}

	if (!values.mensaje) {
		errors.mensaje = 'Por favor, coloque un mensaje';
	}

	return errors;
};

export default validarFormContacto;
