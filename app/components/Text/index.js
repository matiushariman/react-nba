/**
 *
 * Text
 *
 */

import styled from 'styled-components';
import * as fonts from 'utils/styles/fonts';

const Text = styled.span`
  display: block;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;

Text.defaultProps = {
  fontFamily: fonts.fontFamily.primary,
  fontSize: fonts.fontSize.regular,
  fontWeight: 'normal',
};

export default Text;
