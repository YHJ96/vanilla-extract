import { createThemeContract, assignVars, style } from '@vanilla-extract/css';

const vars = createThemeContract({
  color: {
    red: 'red',
    blue: 'blue',
  },
  space: {
    px: '10px',
    py: '16px',
  },
});

// CSS 변수를 미디어 쿼리 등등 한 스타일에서 다양하게 제어할 때 사용
const responsiveTheme = style({
  'vars': assignVars(vars, { color: { red: 'red', blue: 'blue' }, space: { px: '10px', py: '16px' } }),
  '@media': {
    'screen and (min-width: 1024px)': {
      vars: assignVars(vars, {
        color: {
          red: 'crimson',
          blue: 'cornflowerblue',
        },
        space: { px: '16px', py: '20px' },
      }),
    },
  },
});

export { responsiveTheme };
