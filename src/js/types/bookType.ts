export type BookType = {
  url: string;
  full_url: string;
  type: string;
  title: string;
  last_update: string;
  work_count: number;
  edition_count: number;
  ebook_count: number;
  picture: {
    url: string;
  };
  covers: string[];
  description?: string
}