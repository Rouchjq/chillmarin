import { ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { colors } from 'components/utils';
import * as React from 'react';
import { PaginaSelectedProps } from './dataSelect';

interface IListItemPageProps {
	pagina: PaginaSelectedProps;
	setSeleccionado(value: PaginaSelectedProps): void;
	seleccionado: PaginaSelectedProps;
}

const ListItemPage: React.FunctionComponent<IListItemPageProps> = props => {
	const handleClick = () => {
		props.setSeleccionado(props.pagina);
	};
	return (
		<ListItem>
			<ListItemButton style={{ width: '100%' }} onClick={handleClick}>
				<ListItemText>
					<Typography
						fontWeight={
							props.pagina === props.seleccionado
								? 800
								: 500
						}
						color={colors.darkcyan}
						style={{ cursor: 'pointer' }}
					>
						{props.pagina.titulo}
					</Typography>
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};

export default ListItemPage;
