import React, { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { NoticesList } from '../../components/NoticesList/NoticesList';
import {
  NoticesPageContainer,
  NoticesSearchWrapper,
  NoticesTitle,
  PaginationWrapper,
} from './NoticesPage.styled';

import NoticesData from './NoticesData.json';

export const NoticesPage: React.FC = () => {
  const [noticesData, setNoticesData] = useState(NoticesData.results);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const lastNoticesIndex = currentPage * itemsPerPage;
  const firstNoticesIndex = lastNoticesIndex - itemsPerPage;
  const currentNotices = noticesData
    .slice(firstNoticesIndex, lastNoticesIndex)
    .map(notice => ({
      ...notice,
      id: notice._id,
    }));

  useEffect(() => {
    setNoticesData(NoticesData.results);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <NoticesPageContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <NoticesSearchWrapper>
        <NoticesFilters />
      </NoticesSearchWrapper>
      <NoticesList notices={currentNotices} />
      <PaginationWrapper>
        <Pagination
          totalItems={noticesData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </NoticesPageContainer>
  );
};
