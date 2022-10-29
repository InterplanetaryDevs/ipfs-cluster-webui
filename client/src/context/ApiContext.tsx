import {createContext, useContext, useMemo, useState} from 'react';
import {IpfsClusterApi} from 'ipfs-cluster-api';


const ApiContext = createContext({} as IApiContext);

export interface IApiContext {
	setUrl(url: string): void;

	url: string;
	api: IpfsClusterApi;
}

export const ApiContextProvider = (props: any) => {
	const [url, setUrl] = useState('http://localhost:9094');
	const api = useMemo(() => new IpfsClusterApi(url), [url]);

	return <ApiContext.Provider
		value={{
			setUrl,
			url,
			api,
		}}
	>
		{props.children}
	</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
