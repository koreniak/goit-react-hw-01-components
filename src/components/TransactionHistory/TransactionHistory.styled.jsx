import styled from '@emotion/styled'

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  width: 792px;
`;

export const TransactionsTableHead = styled.tr`
  text-align: center;
  background-color: #04AA6D;
  color: white;

`;

export const TransactionsItems = styled.tr`
  :nth-of-type(even){
    background-color: #f2f2f2;
  }
  text-align: center;
`;

export const TransactionsHeadsItems = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid white;
`;

export const TransactionsBodyItems = styled.td`
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid white;
`;