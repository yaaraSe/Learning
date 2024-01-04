import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import CardItem from './CardItem';
import { PhotoCard } from '../../ApiServices/Interfaces/IPhoto';

const InfiniteScroll_Items = () => {
  const { ref, inView } = useInView();
  console.log(inView);

  const fetchItem = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_limit=10`
    );
    console.log(response);
    return { response: response.data, next: pageParam + 1 };
  };
  const { status, data, fetchNextPage } = useInfiniteQuery(
    ['photo'],
    fetchItem,
    {
      getNextPageParam: (lastPage) => lastPage.next,
    }
  );
  console.log(data?.pages.map((c) => c.response));
  useEffect(() => {
    //when screen reach <div ref={ref} /> ref set inView=true
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
    <h2>useInfiniteQuery + useInView</h2>
      <div className='mainCard'>
        <div className='dataCard'>
          {status === 'loading' ? (
            <p>loading...</p>
          ) : status === 'error' ? (
            <span>שגיאה: {'error.message'}</span>
          ) : (
            <React.Fragment>
              {data?.pages.map((c) => {
                return c.response.map(({ id, title, url }: PhotoCard) => {
                  {
                    id;
                  }
                  return <CardItem id={id} title={title} url={url} />;
                });
              })}
            </React.Fragment>
          )}
        </div>
      </div>
      {/* the load more div */}
      <div ref={ref}>Loading...</div>
    </>
  );
};
export default InfiniteScroll_Items;
