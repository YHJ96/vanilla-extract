import { createTheme } from '@vanilla-extract/css';

// 테마 만들어 사용하기 var 모듈화
const theme = createTheme({
  color: {
    primary: 'blue',
    danger: 'red',
  },
});

const [_, vars] = theme;

// 모든 테마 제공해야함 새로운 ClassName 반환 해당 타입 return string 타입 확인 완료
const variantTheme = createTheme(vars, {
  color: {
    primary: 'skyblue',
    danger: 'red',
  },
});

export { theme, variantTheme };
