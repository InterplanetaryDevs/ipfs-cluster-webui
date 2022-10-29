import {AppBar, ButtonGroup, Container, CssBaseline, IconButton, Tab, Tabs, TextField, Toolbar} from '@mui/material';
import React, {useState} from 'react';
import {AddPinDialog} from './components/AddPinDialog';
import {IdentityDisplay} from './components/IdentityDisplay';
import {PeerList} from './components/PeerList';
import {PinList} from './components/PinList';
import {useApi} from './context/ApiContext';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function App() {
	const api = useApi();

	const [tab, setTab] = useState(0);
	const [apiUrl, setApiUrl] = useState(api.url);

	return <>
		<CssBaseline/>
		<AppBar>
			<Container>
				<Toolbar>
					<Tabs value={tab} onChange={(e, v) => setTab(v)}>
						<Tab label={'Pins'}/>
						<Tab label={'Peers'}/>
						<Tab label={'Identity'}/>
					</Tabs>
					<div style={{flexGrow: 1}}/>
					<div>
						<TextField
							value={apiUrl}
							onChange={(e) => setApiUrl(e.target.value)}
							label={'Api url'}
							size={'small'}
						/>
						{api.url !== apiUrl && <ButtonGroup>
                            <IconButton
                                onClick={() => setApiUrl(api.url)}
                            ><CloseIcon/></IconButton>
                            <IconButton
                                onClick={() => {
									api.setUrl(apiUrl);
									//set state twice to reload
									setApiUrl('')
									setTimeout(() => setApiUrl(api.url), 0)
								}}
                            ><CheckIcon/></IconButton>
                        </ButtonGroup>}
					</div>
				</Toolbar>
			</Container>
		</AppBar>
		<div style={{height: 80}}/>
		<Container>
			<TabPanel index={0} value={tab}>
				<AddPinDialog/>
				<div style={{height: 15}}/>
				<PinList/>
			</TabPanel>
			<TabPanel index={1} value={tab}>
				<PeerList/>
			</TabPanel>
			<TabPanel index={2} value={tab}>
				<IdentityDisplay/>
			</TabPanel>
		</Container>
		<div style={{height: 15}}/>
	</>;
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
