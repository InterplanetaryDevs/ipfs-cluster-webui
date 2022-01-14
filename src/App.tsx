import {Tab, Tabs} from '@mui/material';
import {Cluster} from '@nftstorage/ipfs-cluster';
import React, {useMemo, useState} from 'react';
import {AddPinDialog} from './AddPinDialog';
import {IdentityDisplay} from './IdentityDisplay';
import {PeerList} from './PeerList';
import {PinList} from './PinList';

function App() {
	const cluster = useMemo(() => new Cluster('http://localhost:9094'), []);
	const [tab, setTab] = useState(0);

	return cluster ? <div>
		<Tabs value={tab} onChange={(e, v) => setTab(v)}>
			<Tab label={'Pins'}/>
			<Tab label={'Peers'}/>
			<Tab label={'Identity'}/>
		</Tabs>
		<TabPanel index={0} value={tab}>
			<AddPinDialog cluster={cluster}/>
			<PinList cluster={cluster}/>
		</TabPanel>
		<TabPanel index={1} value={tab}>
			<PeerList cluster={cluster}/>
		</TabPanel>
		<TabPanel index={2} value={tab}>
			<IdentityDisplay cluster={cluster}/>
		</TabPanel>
	</div> : <p>Loading...</p>;
}

export default App;

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			{...other}
		>
			{value === index && children}
		</div>
	);
}
