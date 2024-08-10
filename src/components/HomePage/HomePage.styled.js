import styled from "styled-components";

export const StyledIncomingSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
`;