import SaveIcon from '@mui/icons-material/Save';
import {IconButton} from '@mui/material';
import {useCallback, useState} from 'react';

export interface PinFormProps {
	onSubmit: (pin: any) => void;
	values?: any;
}

export const PinForm = (props: PinFormProps) => {
	const [cid, setCid] = useState(props.values?.cid['/'] ?? '');
	const [name, setName] = useState(props.values?.name ?? '');

	const submit = useCallback(() => {
		props.onSubmit({
			cid: cid,
			name: name,
		});
	}, [props.onSubmit]);


	return <div>
		Cid*:
		<input onChange={(e) => setCid(e.target.value)} value={cid}/>
		<br/>
		Name:
		<input onChange={(e) => setName(e.target.value)} value={name}/>
		<br/>
		<IconButton onClick={submit}><SaveIcon/></IconButton>
	</div>;
};
