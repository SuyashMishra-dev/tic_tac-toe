import styled from 'styled-components';

export const Para = styled.div`
  font-size: ${(props) => props.theme.fonts.font_size[props.fontSize] || '14px'};
  position: relative;
  margin: 0;
  text-align: ${(props) => props.align || 'left'};
  padding: ${(props) => props.p || 0}px;
  font-weight: ${(props) => props.theme.fonts.font_weight[props.weight] || 400};
  font-weight: ${(props) => props.theme.fonts.font_weight[props.fontWeight]};
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-right: ${(props) => props.pr}px;
  padding-left: ${(props) => props.pl}px;
  line-height: ${(props) => props.lineHeight || '16'}px;
  color: ${(props) => props.theme.colors[props.color] || '#000000'}${(props) => props.colorOpacity || ''};
`;

const colWidth = {
  12: (100 / 12) * 12,
  11: (100 / 12) * 11,
  10: (100 / 12) * 10,
  9: (100 / 12) * 9,
  8: (100 / 12) * 8,
  7: (100 / 12) * 7,
  6: (100 / 12) * 6,
  5: (100 / 12) * 5,
  4: (100 / 12) * 4,
  3: (100 / 12) * 3,
  2: (100 / 12) * 2,
  1: (100 / 12) * 1,
};

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  position: relative;
  border-radius: ${(props) => props.borderRadius};
  margin-top: .5rem;
`;

export const Col = styled.div`
  width: ${(props) => (props.width ? props.width : `${colWidth[props.col]}%` || '100%')};
  position: relative;
  box-sizing: border-box;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.theme.fonts.font_size[props.fontSize] || '12px'};
  width: ${(props) => props.width};
  color: ${(props) => props.theme.colors[props.color] || '#000000'}${(props) => props.colorOpacity || ''};
  background: ${(props) => props.theme.colors[props.background] || 'transparent'}${(props) => props.backgroundOpacity || ''};
  display: ${(props) => props.display || 'inline-block'};
  padding: ${(props) => props.p || 0};
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-right: ${(props) => props.pr}px;
  padding-left: ${(props) => props.pl}px;
  margin: ${(props) => props.m || 0};
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-right: ${(props) => props.mr}px;
  margin-left: ${(props) => props.ml}px;
  border: ${(props) => (props.borderColor ? `${props.borderWidth ? props.borderWidth : '1px'} ${props.borderStyle ? props.borderStyle : 'solid'} ${props.borderColor ? props.theme.colors[props.borderColor] : '#333333'}` : 'none')};
  border-radius: ${(props) => props.borderRadius || '0px'};
  outline: ${(props) => props.outline || 'none'};
  font-weight: ${(props) => props.fontWeight};
  &.active_page {
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.light_blue} !important;
  }
`;

