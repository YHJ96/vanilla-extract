import { recipe } from '@vanilla-extract/recipes';

const btn = recipe({
  base: { borderRadius: 6, outline: 'solid', padding: '10px 16px' },
  variants: {
    color: {
      orange: { color: 'orange', outlineColor: 'orange' },
      blue: { color: 'blue', outlineColor: 'blue' },
    },
    fill: {
      true: { color: 'white' },
    },
  },

  // 조건식 가능 variants에 있는 조건이 모두 만족할 때 style이 적용됨
  compoundVariants: [
    { variants: { color: 'orange', fill: true }, style: { backgroundColor: 'orange' } },
    { variants: { color: 'blue', fill: true }, style: { backgroundColor: 'blue' } },
  ],

  defaultVariants: { color: 'blue', fill: false },
});

export { btn };
