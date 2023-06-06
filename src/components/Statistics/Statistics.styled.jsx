import styled from '@emotion/styled'

export const StatsSection = styled.section`
  margin: 8px;
  width: 264px;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const StatsTitle = styled.h2`
  padding: 24px 0;  
  font-size: 20px;
  font-weight: 700;
  line-height: 1.12;
  text-transform: uppercase;
  text-align: center;
  color: #8E8F99;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid #8E8F99;
  background-color: #b4afaf;
`;

export const StatsItem = styled.li`
  display: flex;  
  flex-direction: column;
  width: 66px;
  padding: 16px 0;
  align-items: center;
  border: 1px solid #8E8F99;
  background-color: #b4afaf;
`;

export const StatsLabel = styled.span`
  font-size: 12px;
  color: #E7E9FC;
  line-height: 1.12;
  margin-bottom: 4px;
`;

export const Percentage = styled.span`
  font-size: 20px;  
  color: #E7E9FC;
`;