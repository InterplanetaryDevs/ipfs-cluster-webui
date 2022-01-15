import {Card, CardContent, CardHeader} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import {useSnackbar} from 'notistack';
import {PinForm} from './components/PinForm';

export const AddPinDialog = (props: { cluster: Cluster }) => {
	const {enqueueSnackbar} = useSnackbar();

	const addPin = (pin: any) => {
		props.cluster.pin(pin.cid, {
			name: pin.name,
		})
			.then(r => {
				enqueueSnackbar(`Pin Added`, {variant: 'success'});
			})
			.catch(e => {
				enqueueSnackbar(`Error: ${e}`, {variant: 'error'});
			});
	};

	return <Card>
		<CardHeader title={'Add new pin'}/>
		<CardContent>
			<PinForm onSubmit={addPin}/>
		</CardContent>
	</Card>;
};
