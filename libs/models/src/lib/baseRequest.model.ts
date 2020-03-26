
export class BaseRequestModel {
  public sort?: string;
  public sortBy?: string;
  public query?: string;
  public from?: string;
  public to?: string;
  public page?: number;
  public count?: number;
  public totalPages?: number;
  public totalItems?: number;

  constructor() {
    this.page = 1;
    this.count = 20;
    this.sortBy = 'asc';
    this.query = '';
  }

}
