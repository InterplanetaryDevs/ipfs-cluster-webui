import {Cluster} from '@nftstorage/ipfs-cluster';
import axios from 'axios';
import {useMemo} from 'react';

export interface PinOptions {
	name?: string;
	maxReplication?: number;
	minReplication?: number;
	shardSize?: number;
}

export class PinActions {
	constructor(private cluster: Cluster) {
	}

	getList() {
		return axios.get(this.cluster.url + 'allocations?filter=all')
			.then(r => r.data);
	}

	update(from: string, to: string, options: PinOptions) {
		return axios.post(`${this.cluster.url}pins/ipfs/${to}?mode=recursive&pin-update=${from}&${this.mapOptions(options)}`);
	}

	add(cid: string, options: PinOptions) {
		return axios.post(`${this.cluster.url}pins/ipfs/${cid}?${this.mapOptions(options)}`);
	}

	remove(cid: string) {
		return axios.delete(`${this.cluster.url}pins/${cid}`);
	}

	status(cid: string) {
		return axios.get(`${this.cluster.url}pins/${cid}?local=false`).then(r => r.data)
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

export const usePinActions = (cluster: Cluster) => useMemo(() => new PinActions(cluster), [cluster]);
