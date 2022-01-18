import styled from "@emotion/styled";

export const TransactionHistor = styled.table`
  margin: 30px auto;
  width: 872px;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 800;
  line-height: 30px;
  background-color: #00bcd4;
`;

export const Ttype = styled.th`
  text-align: left;
  padding-left: 112px;
  text-transform: capitalize;
`;

export const Tbody = styled.tbody`
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
  text-transform: capitalize;
`;

export const BodyItem = styled.tr`
  background-color: #fff;

  .bodyItem:nth-of-type(even) {
    background-color: #ecf2f3;
  }
`;

export const Amount = styled.td`
  border-left: 2px solid #e0e6e7;
  border-right: 2px solid #e0e6e7;
`;
