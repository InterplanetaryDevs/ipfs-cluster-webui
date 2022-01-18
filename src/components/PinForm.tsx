import SaveIcon from '@mui/icons-material/Save';
import {IconButton, TextField} from '@mui/material';
import {useState} from 'react';

export interface PinFormProps {
	onSubmit: (pin: any) => void;
	values?: any;
}

export const PinForm = (props: PinFormProps) => {
	const [cid, setCid] = useState(props.values?.cid['/'] ?? '');
	const [name, setName] = useState(props.values?.name ?? '');

	const submit = () => {
		props.onSubmit({
			cid: cid,
			name: name,
		});
	};


	return <div>
		<TextField
			value={cid}
			onChange={(e) => setCid(e.target.value)}
			label={'Cid*'}
		/>
		<br/>
		<TextField
			value={name}
			onChange={(e) => setName(e.target.value)}
			label={'Name'}
		/>
		<br/>
		<IconButton onClick={submit}><SaveIcon/></IconButton>
	</div>;
};
