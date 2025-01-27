import React, { useState, useEffect } from 'react';
import {
  PageButton,
  PaginationContainer,
  ArrowButton,
  Icon,
  IconTwo,
} from './Pagination.styled';

interface PaginationProps {
  // itemsPerPage: number; // Ліміт новин на сторінку
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  totalPages: number;
}

type PageType = number | '...';

export const Pagination: React.FC<PaginationProps> = ({
  // itemsPerPage,
  currentPage,
  onPageChange,
  siblingCount = 1,
  totalPages,
}) => {
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
      <ArrowButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <IconTwo iconName="leftTwo" isDisabled={currentPage === 1} />
      </ArrowButton>

      <ArrowButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon iconName="left" isDisabled={currentPage === 1} />
      </ArrowButton>

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

      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon iconName="right" isDisabled={currentPage === totalPages} />
      </ArrowButton>

      <ArrowButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <IconTwo iconName="rightTwo" isDisabled={currentPage === totalPages} />
      </ArrowButton>
    </PaginationContainer>
  );
};
/**==============проба json ======================*/

// import React, { useState, useEffect } from 'react';
// import {
//   PageButton,
//   PaginationContainer,
//   ArrowButton,
//   Icon,
//   IconTwo,
// } from './Pagination.styled';

// interface PaginationProps {
//   totalItems: number;
//   itemsPerPage: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
//   siblingCount?: number;
//   totalPages: number;
// }

// type PageType = number | '...';

// export const Pagination: React.FC<PaginationProps> = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
//   siblingCount = 1,
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const [visiblePages, setVisiblePages] = useState<PageType[]>([]);

//   useEffect(() => {
//     const generatePages = (): PageType[] => {
//       const pages: PageType[] = [];
//       const startPage = Math.max(currentPage - siblingCount, 1);
//       const endPage = Math.min(currentPage + siblingCount, totalPages);

//       // Додаємо номери сторінок поруч із поточною
//       for (let i = startPage; i <= endPage; i++) {
//         pages.push(i);
//       }

//       // Додаємо '...' якщо є пропуски між сторінками
//       if (startPage > 2) {
//         pages.unshift('...');
//       }
//       if (endPage < totalPages - 1) {
//         pages.push('...');
//       }

//       // Додаємо першу та останню сторінку до списку
//       if (startPage > 1) {
//         pages.unshift(1);
//       }
//       if (endPage < totalPages) {
//         pages.push(totalPages);
//       }

//       return pages;
//     };

//     setVisiblePages(generatePages());
//   }, [currentPage, totalPages, siblingCount]);

//   // Приховуємо пагінацію, якщо тільки одна сторінка
//   if (totalPages === 1) return null;

//   return (
//     <PaginationContainer>
//       {/* Кнопка на першу сторінку */}
//       <ArrowButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
//         <IconTwo iconName="leftTwo" isDisabled={currentPage === 1} />
//       </ArrowButton>

//       {/* Кнопка на попередню сторінку */}
//       <ArrowButton
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <Icon iconName="left" isDisabled={currentPage === 1} />
//       </ArrowButton>

//       {/* Номери сторінок */}
//       {visiblePages.map((page, index) =>
//         typeof page === 'number' ? (
//           <PageButton
//             key={index}
//             $active={currentPage === page ? 'true' : 'false'}
//             onClick={() => onPageChange(page)}
//           >
//             {page}
//           </PageButton>
//         ) : (
//           <span key={index}>...</span>
//         )
//       )}

//       {/* Кнопка на наступну сторінку */}
//       <ArrowButton
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         <Icon iconName="right" isDisabled={currentPage === totalPages} />
//       </ArrowButton>

//       {/* Кнопка на останню сторінку */}
//       <ArrowButton
//         onClick={() => onPageChange(totalPages)}
//         disabled={currentPage === totalPages}
//       >
//         <IconTwo iconName="rightTwo" isDisabled={currentPage === totalPages} />
//       </ArrowButton>
//     </PaginationContainer>
//   );
// };
