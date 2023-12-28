import { createTheme } from '@vanilla-extract/css';

// 기본 CSS 변수를 따로 관리
const defaultVars = {
  color: {
    primary: 'blue',
    danger: 'red',
  },
};

// 테마 만들어 사용하기 var 모듈화
const theme = createTheme(defaultVars);

const [_, vars] = theme;

// 모든 테마 제공해야함 새로운 ClassName 반환 해당 타입 return string 타입 확인 완료
// 스프레드를 사용하여 유용하게 대처할 수 있도록 하면 좋은거 같음
const variantTheme = createTheme(vars, {
  color: {
    ...defaultVars.color,
    primary: 'skyblue',
  },
});

export { theme, variantTheme };
