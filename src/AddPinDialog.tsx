import AddIcon from '@mui/icons-material/Add';
import {Card, IconButton} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import {useState} from 'react';

export const AddPinDialog = (props: { cluster: Cluster }) => {
	const [cid, setCid] = useState('');
	const [name, setName] = useState('');

	const addPin = () => {
		props.cluster.pin(cid, {
			name: name,
		})
			.then(r => {
				//yay
				console.log('pinned', cid);
			})
			.catch(alert);
	};

	return <Card>
		Cid*:
		<input onChange={(e) => setCid(e.target.value)} value={cid}/>
		<br/>
		Name:
		<input onChange={(e) => setName(e.target.value)} value={name}/>
		<br/>
		<IconButton onClick={() => addPin()}><AddIcon/></IconButton>
	</Card>;
};
