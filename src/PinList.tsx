import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReplayIcon from '@mui/icons-material/Replay';
import {
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CircularProgress,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import {useEffect, useState} from 'react';
import {PeerMap} from './components/PeerMap';
import {PinDialog} from './components/PinDialog';
import {useLoading} from './hooks/UseLoading';
import {usePinActions} from './PinActions';

export const PinList = (props: { cluster: Cluster }) => {
	const [pins, setPins] = useState<any[]>([]);
	const [editing, setEditing] = useState<any>();
	const pinActions = usePinActions(props.cluster);

	const [isLoading, load] = useLoading();

	const reload = () => {
		load(pinActions.getList())
			.then(r => {
				setPins(r);
				console.log(r);
			})
			.catch(alert);
	};

	useEffect(reload, []);

	return <>
		<Card>
			<CardHeader title={'Pins'} subheader={`${isLoading ? '?' : pins.length} pins`}/>
			<CardActions>
				<IconButton onClick={reload}><ReplayIcon/></IconButton>
			</CardActions>
			<CardContent style={{overflow: 'auto'}}>
				<Table width={'100%'}>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Cid</TableCell>
							<TableCell>Peers</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{isLoading ? <CircularProgress/> : pins.map((pin, k) => <TableRow key={k}>
							<TableCell align={'center'}>{pin.name && pin.name !== '' ? pin.name : '-'}</TableCell>
							<TableCell>{pin.cid['/']}</TableCell>
							<TableCell>
								{/*{JSON.stringify(pin)}*/}
								<PeerMap cid={pin.cid['/']} cluster={props.cluster}/>
							</TableCell>
							<TableCell>
								<ButtonGroup variant={'outlined'}>
									<IconButton
										color={'error'}
										onClick={() => {
											load(pinActions.remove(pin.cid['/']))
												.then(() => {
													console.log('deleted');
													return reload();
												})
												.catch(console.error);
										}}
									><DeleteIcon/></IconButton>
									<IconButton
										onClick={() => {
											setEditing(pin);
										}}
									><EditIcon/></IconButton>
								</ButtonGroup>
							</TableCell>
						</TableRow>)}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
		<PinDialog
			onClose={() => setEditing(undefined)}
			pin={editing}
			cluster={props.cluster}
		/>
	</>;
};
