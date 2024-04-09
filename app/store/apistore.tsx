import { create } from "zustand";
import { useQuery } from "react-query";

type UserProp = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

type state = {
  posts: UserProp[];
};

type action = {
  getPost: () => Promise<void>;
};

const usrPostStore = create<state & action>()((set) => ({
  posts: [],
  getPost: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    set({ posts: data });
  },
}));

export const useGlobalData = () => {
  const { posts, getPost } = usrPostStore();
  const { isLoading } = useQuery(["alldata"], getPost);
  return { isLoading, posts };
};
