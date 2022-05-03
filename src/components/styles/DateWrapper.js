import styled from 'styled-components';

const DateWrapper = styled.p`
  color: ${({ isPast, isFuture }) => ((isPast || isFuture) ? '#fff' : '#4F4F4F')};
  font-weight: 600;
  font-size: 14px;
`;

export default DateWrapper;
