import {Card, CardContent, CardHeader} from '@mui/material';
import {useSnackbar} from 'notistack';
import {useApi} from '../context/ApiContext';
import {PinForm} from './PinForm';

export const AddPinDialog = (props: any) => {
	const {enqueueSnackbar} = useSnackbar();
	const api = useApi();

	const addPin = ({cid, ...pin}: any) => {
		api.add(cid, pin)
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
