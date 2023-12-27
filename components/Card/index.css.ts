import { style, createVar } from '@vanilla-extract/css';

// CSS 변수를 만들고 공유 사용처 모르겠음 ... Global로 전부 지정해 놓고 사용하는게 편할 것 같다는 생각
const widthVar = createVar();

const cardContainer = style({
  'vars': {
    [widthVar]: '384px',
  },

  'display': 'flex',
  'flexDirection': 'column',
  'position': 'relative',
  'width': widthVar,
  'borderRadius': '16px',
  'boxShadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  'backgroundColor': 'hsl(210, 16%, 96%)',

  ':hover': {
    translate: '0px -5px',
    transition: 'all 0.5s ease-in',
  },

  '@media': {
    // 해당 조건문 자동완성 기능 찾아봐야 함
    'screen and (min-width: 768px)': {
      padding: '0px 10px',
    },
  },
});

const imgWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  overflow: 'hidden',
  borderStartStartRadius: 'inherit',
  borderStartEndRadius: 'inherit',
});

const cardBody = style({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  padding: 16,
  gap: 8,
  margin: 0,
});

const cardTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 20,
  lineHeight: '28px',
  fontWeight: 600,
  margin: 0,
});

export { cardContainer, imgWrapper, cardTitle, cardBody };
