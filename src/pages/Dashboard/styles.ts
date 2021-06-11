import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 30px auto 0;
  padding: 30px;

  display: flex;
  flex-direction: column;

    h1 {
      margin-bottom: 10px;
      text-align: center;
      color: #233e8b;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 860px;

      input {
        flex: 1;
        background: transparent;
        padding: 10px;
        border-radius: 5px;
        color: #666360;

        ::placeholder {
          color: #233e8b;
        }
      }

      input + input {
        margin-top: 0.2rem;
      }

      button {
        transform: translate(+50%, -20%);

        background: #1eae98;
        height: 30px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        width: 50%;
        font-weight: 800;
        margin-top: 10px;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#1eae99')}
        }
      }
    }
`;

export const Table = styled.table`
  width: 100%;
  table {
    width: 700px;
  }
  table, th, td {
    border: 1px solid black;
  }
  th {
    background-color: #233e8b;
    color: #ffffff;
  }

  th, td {
    padding: 5px;
    text-align: center;
    font-weight: 600;
  }
  td button {
    background: #1eae98;
    border-radius: 10px;
    color: #312e38;
    border: 0;
    margin-left: 5px;
    font-weight: 800;
    padding: 2px 5px;


    &:hover {
          background: ${shade(0.2, '#1eae99')}
    }
  }
`;
