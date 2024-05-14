export type Post = {
  id: string;
  imageSrc: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: Date;
  category: Category;
};

export type Work = {
  id: string;
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
};

export type Category = {
  id: string;
  label: string;
  slug: string;
  description: string;
};
