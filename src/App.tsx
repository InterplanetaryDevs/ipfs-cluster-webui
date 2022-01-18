import {AppBar, Container, Tab, Tabs, Toolbar} from '@mui/material';
import React, {useState} from 'react';
import {AddPinDialog} from './components/AddPinDialog';
import {IdentityDisplay} from './components/IdentityDisplay';
import {PeerList} from './components/PeerList';
import {PinList} from './components/PinList';

function App() {
	const [tab, setTab] = useState(0);

	return <div>
		<AppBar>
			<Container>
				<Toolbar>
					<Tabs value={tab} onChange={(e, v) => setTab(v)}>
						<Tab label={'Pins'}/>
						<Tab label={'Peers'}/>
						<Tab label={'Identity'}/>
					</Tabs>
				</Toolbar>
			</Container>
		</AppBar>
		<div style={{height: 80}} />
		<Container>
			<TabPanel index={0} value={tab}>
				<AddPinDialog/>
				<div style={{height: 15}} />
				<PinList/>
			</TabPanel>
			<TabPanel index={1} value={tab}>
				<PeerList/>
			</TabPanel>
			<TabPanel index={2} value={tab}>
				<IdentityDisplay/>
			</TabPanel>
		</Container>
		<div style={{height: 15}} />
	</div>;
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
