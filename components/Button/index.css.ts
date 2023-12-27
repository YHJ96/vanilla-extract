import { style, styleVariants } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';

const responsiveStyle = ({ tablet, desktop }: { tablet: StyleRule; desktop: StyleRule }) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

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
    color: '#FDFDFD',
  },

  // merge
  responsiveStyle({
    tablet: {
      ':hover': {
        backgroundColor: 'red',
      },
    },
    desktop: {
      ':hover': {
        backgroundColor: 'blue',
      },
    },
  }),

  {
    '@media': {
      'screen and (min-width: 768px)': {
        padding: '10px 50px',
      },
    },
  },
]);

const variant = {
  primary: 'blue',
  secondary: 'aqua',
};

// 함수 변형으로 사용하면 variant 객체가 추가되더라도 유연하게 관리는 가능함, 이전 맵핑보다 가독성은 떨어지는 느낌
const buttonMapping = styleVariants(variant, (background) => [button, { background }]);

export { buttonMapping };
