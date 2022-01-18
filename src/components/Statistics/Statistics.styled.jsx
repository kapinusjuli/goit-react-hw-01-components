import styled from "@emotion/styled";

export const Statistic = styled.div`
  margin: 30px auto;
  width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  border: 1px solid seagreen;
`;

export const Title = styled.h2`
  display: block;
  flex-basis: 100%;
  text-transform: uppercase;
  text-align: center;
  background-color: #fff;
  color: #475965;
  font-size: 16px;
  margin: 0;
  padding: 30px 0;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  list-style: none;
`;

export const Iten = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 65px;
  height: 60px;

  background-color: ${"#" +
  (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()};
`;

export const Label = styled.span`
  margin: 0px;
  padding: 0;
  /* padding-left: -50px; */
  display: block;
  flex-basis: 100%;

  height: 30px;
  color: #fff;

  font-size: 12px;
  line-height: 40px;
`;

export const Percentage = styled.span`
  margin: 0;
  padding: 0;
  display: block;
  flex-basis: 100%;
  height: 30px;
  color: #fff;
  font-size: 18px;
`;
