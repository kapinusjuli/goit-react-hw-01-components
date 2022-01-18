import styled from "@emotion/styled";

export const FriendListStyle = styled.ul`
  /* width: 300px; */
  margin: auto;
  margin-bottom: 40px;
  padding: 30px;
  display: inline-flex;
  list-style-type: none;

  li {
    margin-right: 30px;
  }
`;

export const Item = styled.div`
  padding: 10px;
  margin: auto;

  display: block;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #6b6b1bbf;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  width: 70px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.isOnline ? "green" : "red")};
`;

export const Status = styled.span``;
