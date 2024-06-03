import {
	Sun,
	FileClock,
	Github,
	Database,
	Home,
	Telescope,
	CircleHelp,
	SquareTerminal
} from 'lucide-svelte';

export const navbarItemSections = [
	[
		{
			name: 'Home',
			icon: Home,
			link: '/',
			hover: 'hover:text-zinc-900 hover:bg-fuchsia-200',
			color: 'text-zinc-900 bg-fuchsia-200'
		},
		{
			name: 'K8sX',
			icon: Telescope,
			link: '/k8sx',
			hover: 'hover:text-zinc-900 hover:bg-blue-200',
			color: 'text-zinc-900 bg-blue-200'
		},
		{
			name: 'K8sU',
			icon: SquareTerminal,
			link: '/k8su',
			hover: 'hover:text-zinc-900 hover:bg-orange-200',
			color: 'text-zinc-900 bg-orange-200'
		},
		{
			name: 'Database',
			icon: Database,
			link: '/db',
			hover: 'hover:text-zinc-900 hover:bg-green-200',
			color: 'text-zinc-900 bg-green-200'
		},
		{
			name: 'Logs',
			icon: FileClock,
			link: '/logs',
			hover: 'hover:text-zinc-900 hover:bg-yellow-200',
			color: 'text-zinc-900 bg-yellow-200'
		}
	],
	[
		{
			name: 'Help',
			icon: CircleHelp,
			link: '/help',
			hover: 'hover:text-zinc-900 hover:bg-purple-200',
			color: 'text-zinc-900 bg-purple-200'
		},
		{
			name: 'Github',
			icon: Github,
			link: 'https://github.com/aritra1999/k8su',
			hover: 'hover:text-zinc-900 hover:bg-indigo-200',
			color: 'text-zinc-900 bg-indigo-200'
		},
		{
			name: 'Theme Toggle',
			icon: Sun,
			link: ''
		}
	]
];

export const navItems: Record<string, { title: string; description: string }> = {
	k8su: {
		title: 'k8su',
		description: 'A collection of k8s utilities'
	},
	k8sx: {
		title: 'k8sx',
		description: 'K8s explorer'
	},
	db: {
		title: 'pgU',
		description: 'multi regional postgresql management'
	},
	logs: {
		title: 'logs',
		description: 'Action log streaming and management'
	}
};
