import { createThemeContract, createTheme, style } from '@vanilla-extract/css';

// 추상화 기능 다양한 인스턴스를 만들 때 좋은거 같음
// 간단한 CSS 변수들을 여러개 만들어야할 때 사용할 것 같음
const vars = createThemeContract({
  color: {
    primary: null,
  },
});

const themeA = createTheme(vars, {
  color: {
    primary: 'blue',
  },
});

const themeB = createTheme(vars, {
  color: {
    primary: 'pink',
  },
});

export { themeA, themeB };
