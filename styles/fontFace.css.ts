import { createGlobalTheme } from '@vanilla-extract/css';

// Next에서 폰트를 사용하기 위해서 글로벌 변수를 생성한다.
const vars = createGlobalTheme(':root', {
  font: {
    noto: 'var(--font-noto-sans)',
  },
});

export { vars };
