import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Common/Container';
import Pagination from '../../components/Pagination/Pagination';
// import { Link } from 'react-router-dom';
// import { Iconsvg } from '../../components/Common/Icons';

export const NewsPageContainer = styled(Container)``;
export const NewsSearchWrapper = styled.div``;
export const NewsSearchUL = styled.ul``;
export const PaginationWrapper = styled.div``;
export const NewsPage: React.FC = () => {
  return (
    <NewsPageContainer>
      <NewsSearchWrapper></NewsSearchWrapper>
      <NewsSearchUL></NewsSearchUL>
      <PaginationWrapper>
        <Pagination
          totalItems={100} // Загальна кількість елементів
          itemsPerPage={10} // Кількість елементів на сторінці
          currentPage={1} // Поточна сторінка
          onPageChange={page => console.log('Нова сторінка:', page)} // Функція для зміни сторінки
        />
      </PaginationWrapper>
    </NewsPageContainer>
  );
};

