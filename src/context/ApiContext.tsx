import {createContext, useContext, useMemo} from 'react';
import {PinOptions} from '../types/PinOptions';
import {ApiService} from './ApiService';

const ApiContext = createContext({} as IApiContext);

export interface IApiContext {
	getId(): Promise<any>;

	getList(): Promise<any>

	update(from: string, to: string, options: PinOptions): Promise<void>

	status(cid: string): Promise<any>

	add(cid: string, options: PinOptions): Promise<any>

	remove(cid: string): Promise<void>

	getPeers(): Promise<any>

	set apiUrl(url: string);

	get apiUrl();
}

export const ApiContextProvider = (props: any) => {
	const context = useMemo(() => new ApiService(), [])

	return <ApiContext.Provider
		value={context}
	>
		{props.children}
	</ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
