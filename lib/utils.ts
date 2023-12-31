import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat('bg-BG', {
	style: 'currency',
	currency: 'BGN',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
