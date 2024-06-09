import { sleep } from '$lib/utils';
import type { PageLoad } from './$types';

const mockResponse = [
	{
		cluster: 'aks-australiaeast-prod-bogong',
		name: 'aks-australiaeast-prod-bogong',
		user: 'clusterUser_aks-australiaeast-prod-bogong_aks-australiaeast-prod-bogong',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-brazilsouth-prod-1',
		name: 'aks-brazilsouth-prod-1',
		user: 'clusterUser_aks-brazilsouth-prod-1_aks-brazilsouth-prod-1',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-canadacentral-prod-logan',
		name: 'aks-canadacentral-prod-logan',
		user: 'clusterUser_aks-canadacentral-prod-logan_aks-canadacentral-prod-logan',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-eastus-prod-kilauea',
		name: 'aks-eastus-prod-kilauea',
		user: 'clusterUser_aks-eastus-prod-kilauea_aks-eastus-prod-kilauea',
		namespace: 'catalog-matching'
	},
	{
		cluster: 'aks-germanywestcentral-prod-watzmann',
		name: 'aks-germanywestcentral-prod-watzmann',
		user: 'clusterUser_aks-germanywestcentral-prod-watzmann_aks-germanywestcentral-prod-watzmann',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-switzerlandnorth-prod-matterhorn',
		name: 'aks-switzerlandnorth-prod-matterhorn',
		user: 'clusterUser_aks-switzerlandnorth-prod-matterhorn_aks-switzerlandnorth-prod-matterhorn',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-uaenorth-prod-1',
		name: 'aks-uaenorth-prod-1',
		user: 'clusterUser_aks-uaenorth-prod-1_aks-uaenorth-prod-1',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-uksouth-prod-1',
		name: 'aks-uksouth-prod-1',
		user: 'clusterUser_aks-uksouth-prod-1_aks-uksouth-prod-1',
		namespace: 'catalog-matching'
	},
	{
		cluster: 'aks-westeurope-prod-grossglockner',
		name: 'aks-westeurope-prod-grossglockner',
		user: 'clusterUser_aks-westeurope-prod-grossglockner_aks-westeurope-prod-grossglockner',
		namespace: 'technolot'
	},
	{
		cluster: 'aks-westeurope-test-dufourspitze',
		name: 'aks-westeurope-test-dufourspitze',
		user: 'clusterUser_aks-westeurope-test-dufourspitze_aks-westeurope-test-dufourspitze',
		namespace: 'technolot'
	},
	{
		cluster: 'kind-kind',
		name: 'kind-kind',
		user: 'kind-kind'
	}
];

export const load = (async () => {
	// const response = await fetch('/api/context');
	// const contexts = response.json();
	await sleep(200);
	return { contexts: mockResponse };
}) satisfies PageLoad;
