import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgba(21, 0, 155, 0.75);
  color: white;
  padding: 10px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
`;
export const Footer = styled.footer`
  background-color: rgba(21, 0, 155, 0.75);
  display: fixed;
  color: white;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 20px;
  bottom: 0;
  left: 0;
  width: 100%;
`;
export const LayoutItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgAvatar = styled.img`
  width: 10%;
  height: 10%;
  border: none;
  margin-top: 1%;
  margin-left: 45%;
  object-fit: contain;
`;

export const ImgFriend = styled.img`
  width: 80%;
  height: 50%;
  border: none;
  object-fit: contain;
  margin-left: -20%;
  margin-top: 5%;
`;

export const TableStyle = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 300px;
  overflow-x: auto;
`;

export const TextColorRed = styled.p`
  color: red;
`;

export const TextCenter = styled.p`
  text-align: center;
`;

export const ButtonStyled = styled.div`
  margin-left: 30%;
`;
