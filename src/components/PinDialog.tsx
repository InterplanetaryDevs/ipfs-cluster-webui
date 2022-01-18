import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {useSnackbar} from 'notistack';
import {useApi} from '../context/ApiContext';
import {PinType} from '../types/PinType';
import {PinForm} from './PinForm';

export interface PinDialogProps {
	pin?: PinType;
	onClose?: () => void;
}

export const PinDialog = (props: PinDialogProps) => {
	const {enqueueSnackbar} = useSnackbar();
	const api = useApi()

	const updatePin = (pin: any) => {
		const {cid, ...pinOptions} = pin;
		api.update(props.pin?.cid['/'], cid, pinOptions)
			.then(r => {
				props.onClose && props.onClose();
				enqueueSnackbar(`Pin updated`, {variant: 'success'})
			})
			.catch(e => {
				enqueueSnackbar(`Error: ${e}`, {variant: 'error'})
			});
	};

	return <Dialog
		open={!!props.pin}
		onClose={props.onClose}
	>
		<DialogTitle>Edit Pin</DialogTitle>
		<DialogContent>
			Editing {props.pin?.cid['/']}
			<PinForm
				values={props.pin}
				onSubmit={(pin) => {
					updatePin(pin);
				}}
			/>
		</DialogContent>
	</Dialog>;
};
