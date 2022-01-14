import {Card, CardContent, CardHeader} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import {PinForm} from './components/PinForm';

export const AddPinDialog = (props: { cluster: Cluster }) => {
	const addPin = (pin: any) => {
		props.cluster.pin(pin.cid, {
			name: pin.name,
		})
			.then(r => {
				//yay
				console.log('pinned', pin.cid);
			})
			.catch(alert);
	};

	return <Card>
		<CardHeader title={'Add new pin'}/>
		<CardContent>
			<PinForm onSubmit={addPin}/>
		</CardContent>
	</Card>;
};
