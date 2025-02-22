import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const UserBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;

  @media (min-width: 1280px) {
    width: 520px;
  }
`;
export const UserBlockHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const UserBlockBox = styled.div`
  border-radius: 30px;
  padding: 10px 14px;
  width: 90px;
  height: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserBlockAvatar = styled.div`
  width: 94px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  border-radius: 50%;
  margin: 0 auto 30px;
  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;
export const UserBlockAvatarImg = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  @media (min-width: 768px) {
    width: 106px;
    height: 106px;
  }
`;
export const AvatarIconDef = styled(Iconsvg)`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.primaryDark};
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const UserBlockBoxIcon = styled(Iconsvg)`
  width: 22px;
  height: 22px;
  fill: ${({ theme }) => theme.white};
`;
export const UserBlockTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.black};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const UserBlockInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input {
    border: 1px solid ${({ theme }) => theme.primaryDark};
    border-radius: 30px;
    padding: 12px;
    width: 100%;
    height: 42px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) and (max-width: 1279px) {
      width: 305px;
      height: 52px;
      font-size: 16px;
      line-height: 1.25;
      padding: 16px;
    }
    @media (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.25;
      height: 52px;
      padding: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
  }
`;
