import { recipe } from '@vanilla-extract/recipes';

const btn = recipe({
  base: { borderRadius: 6, outline: 'solid', padding: '10px 16px' },
  variants: {
    color: {
      orange: { color: 'orange', outlineColor: 'orange' },
      blue: { color: 'blue', outlineColor: 'blue' },
    },
  },
  defaultVariants: { color: 'blue' },
});

export { btn };
