import React, { useState, useEffect } from 'react';
import { Arrow, PageButton, PaginationContainer } from './Pagination.styled';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // кількість сусідніх сторінок до та після активної
}

type PageType = number | '...'; // Використовуємо тип об'єднання для сторінок і трикрапок

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  siblingCount = 1,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [visiblePages, setVisiblePages] = useState<PageType[]>([]);

  useEffect(() => {
    const generatePages = (): PageType[] => {
      const pages: PageType[] = [];
      const startPage = Math.max(currentPage - siblingCount, 1);
      const endPage = Math.min(currentPage + siblingCount, totalPages);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 2) {
        pages.unshift('...');
      }
      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      if (startPage > 1) {
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        pages.push(totalPages);
      }

      return pages;
    };

    setVisiblePages(generatePages());
  }, [currentPage, totalPages, siblingCount]);

  if (totalPages === 1) return null;

  return (
    <PaginationContainer>
      <Arrow onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        &laquo;
      </Arrow>
      <Arrow
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </Arrow>
      {visiblePages.map((page, index) =>
        typeof page === 'number' ? (
          <PageButton
            key={index}
            $active={currentPage === page ? 'true' : 'false'}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ) : (
          <span key={index}>...</span>
        )
      )}
      <Arrow
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </Arrow>
      <Arrow
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </Arrow>
    </PaginationContainer>
  );
};
