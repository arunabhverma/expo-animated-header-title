export type ListItem = {
  id: string;
  title: string;
  count: number | null;
  color: string;
};

export const listData = [
    {
      id: "1",
      title: "Issues",
      count: 0,
      color: "#40D363",
    },
    {
      id: "2",
      title: "Pull Requests",
      count: 0,
      color: "#2D8FFF",
    },
    {
      id: "3",
      title: "Actions",
      count: null,
      color: "#FDD64C",
    },
    {
      id: "4",
      title: "Contributors",
      count: 1,
      color: "#F86D0D",
    },
    {
      id: "5",
      title: "Watchers",
      count: 2,
      color: "#FED74D",
    },
  ];
  