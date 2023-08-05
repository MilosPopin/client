import { PageChangedEvent } from "ngx-bootstrap/pagination";

export interface Pagination {
pageChanged($event: PageChangedEvent): unknown;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> {
result: T;
pagination: Pagination;
}