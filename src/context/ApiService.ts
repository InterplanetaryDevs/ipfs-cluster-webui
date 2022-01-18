import axios, {AxiosInstance} from 'axios';
import {PinOptions} from '../types/PinOptions';
import {IApiContext} from './ApiContext';

export class ApiService implements IApiContext {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: 'http://localhost:9094/',
		});
	}

	get apiUrl(): string {
		return this.api.defaults.baseURL ?? '';
	}

	set apiUrl(url: string) {
		this.api = axios.create({
			baseURL: url,
		});
	}

	getList() {
		return this.api.get('/allocations?filter=all')
			.then(r => r.data);
	}

	getId() {
		return this.api.get('/id')
			.then(r => r.data);
	}

	update(from: string, to: string, options: PinOptions) {
		return this.api.post(`/pins/ipfs/${to}?mode=recursive&pin-update=${from}&${this.mapOptions(options)}`).then(r => {
		});
	}

	add(cid: string, options: PinOptions) {
		return this.api.post(`/pins/ipfs/${cid}?${this.mapOptions(options)}`);
	}

	remove(cid: string) {
		return this.api.delete(`/pins/${cid}`).then(r => {
		});
	}

	status(cid: string) {
		return this.api.get(`/pins/${cid}?local=false`).then(r => r.data);
	}

	getPeers(): Promise<any> {
		return this.api.get('/peers').then(r => r.data);
	}

	private mapOptions(o: PinOptions): string {
		const pairs = [];
		if (o.name) pairs.push(`name=${o.name}`);
		if (o.maxReplication) pairs.push(`replication-max=${o.maxReplication}`);
		if (o.minReplication) pairs.push(`replication-min=${o.minReplication}`);
		if (o.shardSize) pairs.push(`shard-size=${o.shardSize}`);
		return pairs.join('&');
	}
}
