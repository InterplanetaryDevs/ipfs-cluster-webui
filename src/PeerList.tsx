import ReplayIcon from '@mui/icons-material/Replay';
import {
	Card,
	CardActions,
	CardContent,
	CardHeader, CircularProgress,
	IconButton,
	Table, TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useLoading} from './hooks/UseLoading';

export const PeerList = (props: { cluster: Cluster }) => {
	const [peers, setPeers] = useState<any[]>([]);
	const [isLoading, load] = useLoading();

	const reload = () => {
		load(axios.get(props.cluster.url + 'peers'))
			.then(r => {
				setPeers(r.data);
			})
			.catch(alert);
	};

	useEffect(reload, []);

	return <Card>
		<CardHeader title={'Peers'} subheader={`${isLoading ? '?' : peers.length} peers`}/>
		<CardActions>
			<IconButton onClick={reload}><ReplayIcon/></IconButton>
		</CardActions>
		<CardContent>
			<Table width={'100%'}>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>ID</TableCell>
						<TableCell>IPFS ID</TableCell>
						<TableCell>Version</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{isLoading ? <CircularProgress/> : peers.map((peer, k) => <TableRow key={k}>
						<TableCell>{peer.peername}</TableCell>
						<TableCell>{peer.id}</TableCell>
						<TableCell>{peer.ipfs.id}</TableCell>
						<TableCell>{peer.version}</TableCell>
					</TableRow>)}
				</TableBody>
			</Table>
		</CardContent>
	</Card>;
	return <div>
		<button onClick={() => reload()}>Refresh</button>
		<ul>
			{peers.map(p => <li>
				<p>{p.peername}</p>
				<ul>
					<li>ID: {p.id}</li>
					<li>IPFS ID: {p.ipfs.id}</li>
					<li>Version: {p.version}</li>
				</ul>
			</li>)}
		</ul>
		{/*<pre>{JSON.stringify(peers, null, 2)}</pre>*/}
	</div>;
	;
};
