import styled from 'styled-components';

const InnerWrapper = styled.div`
  background: #FFFFFF;
  ${({ isPast }) => isPast && 'background: radial-gradient(97.9% 129.11% at 10.76% 7.69%, #8C75F3 0%, #2ABDB5 100%)'};
  ${({ isFuture }) => isFuture && 'background: radial-gradient(97.9% 129.11% at 10.76% 7.69%, #F3B554 0%, #F77558 100%)'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 23px;
  color: ${({ isPast, isFuture }) => ((isPast || isFuture) ? '#fff' : '#000')};
  line-height: 38px;
  padding: 16px 8px;
  text-align: center;
`;

export default InnerWrapper;
