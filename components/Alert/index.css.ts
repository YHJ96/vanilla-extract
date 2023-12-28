import { style } from '@vanilla-extract/css';
import theme from '@/styles/theme.css';

const [themeClass, vars] = theme;

// Class를 삽입후 변수 사용
const container = style([
  themeClass,
  {
    display: 'flex',
    width: '324px',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    color: '#FDFDFD',
    backgroundColor: vars.color.primary,
  },
]);

const stroke = style({
  width: 24,
  height: 24,
  flexShrink: 0,
  stroke: 'currentcolor',
});

export { container, stroke };
