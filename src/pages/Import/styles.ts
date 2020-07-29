import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;

  .text-alert-1 {
    display: none;
  }
  .teste-alert-2 {
    display: flex;
  }
  @media (max-width: 500px) {
    .text-alert-1 {
      display: flex;
      color: #a9a9a9;
    }

    .text-alert-2 {
      display: none;
    }
    button {
      background: #ff872c;
      color: #fff;
      width: 100%;
      border-radius: 5px;
      padding: 15px 80px;
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff872c')};
      }
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 26px;
    font-weight: 500;
    line-height: 34px;
    color: #363f5f;
    text-align: left;
  }
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text-alert-2 {
    display: flex;
    color: #a9a9a9;
  }
  @media (max-width: 500px) {
    .text-alert-2 {
      display: none;
    }
  }

  button {
    background: #ff872c;
    color: #fff;

    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
