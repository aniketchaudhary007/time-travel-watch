import styled from 'styled-components';

const SubtitleWrapper = styled.p`
  color: #4F4F4F;
  ${({ isPast }) => isPast && 'color: #FFCC07'};
  ${({ isFuture }) => isFuture && 'color: #FFFFFF'};
  font-weight: 600;
  font-size: 14px;
`;

export default SubtitleWrapper;
