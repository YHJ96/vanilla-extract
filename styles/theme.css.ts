import { createTheme } from '@vanilla-extract/css';

// 테마 만들어 사용하기 var 모듈화
const theme = createTheme({
  color: {
    primary: 'blue',
    danger: 'red',
  },
});

export default theme;
