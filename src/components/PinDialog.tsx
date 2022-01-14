import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import {usePinActions} from '../PinActions';
import {PinType} from '../types/PinType';
import {PinForm} from './PinForm';

export interface PinDialogProps {
	pin?: PinType;
	onClose?: () => void;
	cluster: Cluster;
}

export const PinDialog = (props: PinDialogProps) => {
	const pinActions = usePinActions(props.cluster);

	const updatePin = (pin: any) => {
		const {cid, ...pinOptions} = pin;
		pinActions.update(props.pin?.cid['/'], cid, pinOptions)
			.then(r => {
				//yay
				console.log('pinned', pin.cid);
				props.onClose && props.onClose();
			})
			.catch(alert);
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
