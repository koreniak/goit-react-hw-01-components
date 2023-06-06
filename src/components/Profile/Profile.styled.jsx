import styled from '@emotion/styled'

export const ProfileCard = styled.div`
  margin: 8px;
  width: 264px;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 24px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid #b4afaf;
  object-fit: cover;
  width: 128px;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;
`;

export const Tag = styled.p`
  line-height: 1.12;
  margin-bottom: 4px;
  color: #b4afaf;
`;

export const Location = styled.p`
  line-height: 1.12;
  color: #b4afaf;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid #8E8F99;
  background-color: #b4afaf;
`;

export const StatsItem = styled.li`
  display: flex;  
  flex-direction: column;
  width: 88px;
  padding: 16px 0;
  align-items: center;
  border: 1px solid #8E8F99;
  background-color: #b4afaf;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #434455;
  line-height: 1.12;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;