export default interface Post {
  id?: string;
  userEmail?: string;
  title: string;
  content: string;
  createdAt?: Date;
  slug?: string;
}
