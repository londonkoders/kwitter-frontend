import styled from 'styled-components';

export const KwitterPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KwitterTextArea = styled.textarea`
  background: none;
  border: 0;
  outline: none;
  width: 100%;
  min-height: 70px;
  font-size: 1em;
  color: ${(props) => props.theme.colors.black};
  resize: none;
`;

export const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  border-radius: 50%;
`;

export const KwitterButton = styled.button`
  flex: 0 0 auto;
  padding: 5px 18px;
  width: auto;
  line-height: 28px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  border: 0;
  font-size: 1em;
  font-weight: bold;
  margin-left: 100%;
`;
