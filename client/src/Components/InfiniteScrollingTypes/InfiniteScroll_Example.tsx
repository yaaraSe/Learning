import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
const InfiniteScroll_Example = () => {
  interface item {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const [items, setItems] = useState<item[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async (__page: number) => {
    console.log(__page);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    console.log(response.data);
    setItems([...items, ...response.data]);
    setPage(page + 1);
  };

  return (
    <>
      <h6>InfiniteScroll -example</h6>
      <InfiniteScroll
        style={{ margin: '10px' }}
        pageStart={0}
        loadMore={fetchData}
        hasMore={true}
        loader={
          <div className='loader' key={0}>
            Loading ...
          </div>
        }
      >
        {items?.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};
export default InfiniteScroll_Example;
// interface User {
//     body: string;
//     id: number;
//     title: string;
//     userId: number;
//   }

//     const fetchData = async ({ pageParam = 1 }) => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
//       );

//       const data:User[] = await response.json();
//       console.log('Parsed Data:', data);
//       return { response: data, next: pageParam + 1 };

//     }
