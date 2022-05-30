import { Modal as MuiModal } from '@mui/material';
import styled from 'styled-components';
import { Box } from '@mui/system';
import * as React from 'react';
import { colors } from 'components/utils';

export type SizeModalProps = 'sm' | 'md' | 'xl';

interface IModalProps {
	isopen: boolean;
	onClose(): void;
	size?: SizeModalProps;
	titulo?: React.ReactNode;
	children?: React.ReactNode;
}

const ModalContent = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${colors.white};
	max-height: 90vh;
	z-index: 1500;
	overflow: auto;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	border-radius: 7px;

	&.sm {
		width: 500px;
	}

	&.md {
		width: 750px;

		@media (max-width: 992px) {
			width: 600px;
		}
	}

	&.xl {
		width: 1300px;

		@media (max-width: 1400px) {
			width: 1200px;
		}

		@media (max-width: 1250px) {
			width: 900px;
		}
	}

	&.md,
	&.xl {
		@media (max-width: 992px) {
			width: 600px;
		}

		@media (max-width: 768px) {
			width: 500px;
		}
	}

	&.sm,
	&.md,
	&.xl {
		@media (max-width: 576px) {
			width: 310px;
		}
	}
`;

const ModalTitulo = styled.h2`
	background: ${colors.darkcyan};
	margin-top: 0px;
	color: ${colors.white};
	.content-titulo {
		padding: 15px 25px;
	}
`;

const ModalContainer = styled.div`
	padding: 0px 30px;

	@media (max-width: 992px) {
		padding: 0px 20px;
	}
`;

const Modal: React.FunctionComponent<IModalProps> = props => {
	const { isopen, onClose, size = 'md', titulo } = props;
	return (
		<MuiModal open={isopen} onClose={onClose} component={'div'}>
			<ModalContent className={`${size}`}>
				{titulo ? (
					<ModalTitulo>
						<div className="content-titulo">{titulo}</div>
					</ModalTitulo>
				) : null}
				<ModalContainer>{props.children}</ModalContainer>
			</ModalContent>
		</MuiModal>
	);
};

export default Modal;
