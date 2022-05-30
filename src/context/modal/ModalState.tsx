import Modal, { SizeModalProps } from './Modal';
import { Box } from '@mui/system';
import * as React from 'react';

interface IModalStateProps {
	children?: React.ReactNode;
}

interface SetModalProps {
	titulo: string;
	size?: SizeModalProps;
	content?: React.ReactNode;
}

interface ModalContextValues {
	isopen?: boolean;
	setContent?(value: React.ReactNode): void;
	handleOpenModal?(): void;
	handleCloseModal?(): void;
	setModal?(data: SetModalProps): void;
}

const ModalContext = React.createContext<ModalContextValues>({});
const ModalState: React.FunctionComponent<IModalStateProps> = props => {
	const [isopen, setOpen] = React.useState(false);
	const [content, setContent] = React.useState<React.ReactNode>();
	const [titulo, setTitulo] = React.useState('');
	const [size, setSize] = React.useState<SizeModalProps>('md');

	const handleOpenModal = React.useCallback(() => setOpen(true), []);
	const handleCloseModal = React.useCallback(() => setOpen(false), []);

	const setModal = React.useCallback((data: SetModalProps) => {
		setTitulo(data.titulo);
		setSize(data.size ? data.size : 'md');
		setContent(data.content);
		setOpen(true);
	}, []);

	const valuesProvider = { isopen, setContent, handleOpenModal, handleCloseModal, setModal };

	return (
		<ModalContext.Provider value={valuesProvider}>
			<Modal
				isopen={isopen}
				onClose={handleCloseModal}
				size={size}
				titulo={titulo}
			>
				{content}
			</Modal>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalState;

export const useModalContext = () => React.useContext(ModalContext);
