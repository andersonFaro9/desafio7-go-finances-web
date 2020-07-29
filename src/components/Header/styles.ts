import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 50px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 500px) {
    header {
      width: 420px;
      margin-left: 31px;
      padding: ${({ size }) => (size === 'small' ? '0px ' : '0 20px 10px')};
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      nav {
        a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          transition: opacity 0.2s;

          & + a {
            margin-left: 8px;
          }

          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;
