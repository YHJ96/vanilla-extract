import { style } from '@vanilla-extract/css';

const padding = style({ padding: '0px 16px' });

const button = style([
  padding,
  {
    display: 'inline-flex',
    flexShrink: 0,
    cursor: 'pointer',
    // 유저가 글씨를 드래그할 수 없도록 방지하는 CSS
    userSelect: 'none',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    textAlign: 'center',
    borderRadius: 8,
    height: 48,
    fontSize: '14px',
    lineHeight: '1em',
    fontWeight: '600',
    borderWidth: 1,
  },
]);

export { button };
