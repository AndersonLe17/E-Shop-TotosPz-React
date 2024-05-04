export interface Pagination {
  totalDocs: number;
  totalPages: number;
  prevPage: number;
  nextPage: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevLink: string;
  nextLink: string;
}
