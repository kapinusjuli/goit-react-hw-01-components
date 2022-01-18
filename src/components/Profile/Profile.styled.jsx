import styled from "@emotion/styled";

export const ProfileStyle = styled.div`
  margin: 30px auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  width: 250px;
  height: 330px;
`;

export const Description = styled.div`
  margin: 30px auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  width: 200px;
  height: 200px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  display: list-item;
  border-radius: 75%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  line-height: 32px;
  text-align: center;

  font-size: 18px;
  color: #122236;
  font-weight: 800;
`;

export const Tag = styled.p`
  margin: 0;
  padding: 0;
  line-height: 32px;
  text-align: center;

  font-size: 14px;
  color: #768696;
  font-weight: 400;
`;

export const Location = styled.p`
  margin: 0;
  margin-bottom: 0;
  padding: 0;
  line-height: 32px;
  text-align: center;

  font-size: 14px;
  color: #768696;
  font-weight: 400;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    flex-basis: 33.33%;
    display: flex;
    flex-wrap: wrap;
    height: 73px;
    border: 1px solid #e4e9f0;
    background-color: #f3f6f9;
  }
`;

export const Label = styled.span`
  flex-basis: 100%;
  text-align: center;
  line-height: 20px;

  font-weight: 400;
  font-size: 12px;
  color: #768696;
  margin-top: auto;
`;

export const Quantity = styled.span`
  flex-basis: 100%;
  text-align: center;
  line-height: 20px;

  font-weight: 400;
  font-size: 12px;
  color: #768696;
  margin-top: auto;

  font-weight: 900;
  font-size: 14px;
  color: #1f3349;
  margin-bottom: auto;
`;
