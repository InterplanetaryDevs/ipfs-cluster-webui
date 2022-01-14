import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CircularProgress,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import axios from 'axios';
import {useEffect, useState} from 'react';
import ReplayIcon from '@mui/icons-material/Replay';

export const IdentityDisplay = (props: { cluster: Cluster }) => {
	const [identity, setIdentity] = useState<any>();

	const reload = () => {
		axios.get(props.cluster.url + 'id')
			.then(r => {
				setIdentity(r.data);
			})
			.catch(e => {
				alert(e);
			});
	};
	useEffect(reload, []);

	return identity ? <Card>
		<CardHeader title={identity.id}/>
		<CardActions>
			<IconButton onClick={reload}><ReplayIcon/></IconButton>
		</CardActions>
		<CardContent>
			<List>
				<ListItem>
					<ListItemText
						primary={'Addresses'}
						secondary={<List>
							{identity.addresses.map((v: string, k: number) => <ListItem key={k}>{v}</ListItem>)}
						</List>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={'Peers'}
						secondary={<List>
							{identity.cluster_peers.map((v: string, k: number) => <ListItem key={k}>{v}</ListItem>)}
						</List>}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={'IPFS ID'}
						secondary={identity.ipfs.id}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={'IPFS addresses'}
						secondary={<List>
							{identity.ipfs.addresses.map((v: string, k: number) => <ListItem key={k}>{v}</ListItem>)}
						</List>}
					/>
				</ListItem>
			</List>
			{/*<pre>{JSON.stringify(identity, null, 2)}</pre>*/}
		</CardContent>
	</Card> : <CircularProgress/>;
};
