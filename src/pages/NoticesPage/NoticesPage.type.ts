export interface Notice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  user: string;
  popularity: number;
  // createdAt: string;
  // updatedAt?: string;
}

export interface NoticeCardProps {
  notice: Notice;
}
