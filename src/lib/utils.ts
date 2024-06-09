import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import _ from 'lodash';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export const SEARCH_THRESHOLD = 1;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export const addDots = (element: HTMLElement, length: number) => {
	if (element.innerText.length > length) {
		element.innerText = element.innerText.slice(0, length) + '...';
	}
};

export function filterItemListBySearchString(
	items: unknown[],
	searchString: string,
	selector: string
): unknown[] {
	if (searchString.length >= SEARCH_THRESHOLD) {
		const searchTerm = searchString.toLocaleLowerCase();
		return items.filter((item: unknown) =>
			_.get(item, selector).toLowerCase().includes(searchTerm)
		);
	}
	return items;
}

export const scrollToBottom = (node: HTMLElement) => {
	const scroll = () =>
		node.scroll({
			top: Number(node.scrollHeight),
			behavior: 'smooth'
		});
	scroll();

	return { update: scroll };
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
