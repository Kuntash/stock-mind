import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

export const TAILWIND_THEME = resolveConfig(tailwindConfig);
