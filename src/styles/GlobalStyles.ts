import { createGlobalStyle } from 'styled-components';
import { Reset } from './Reset';
import { Variables } from './variables';
import { Fonts } from './Fonts';

export const GlobalStyles = createGlobalStyle`
${Fonts}
${Variables}
${Reset}
`;
