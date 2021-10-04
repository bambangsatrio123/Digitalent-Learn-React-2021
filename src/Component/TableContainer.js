import React from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';
import { axiosInstace } from "../shared/AxiosInstance";
import TableGif from './TableGif';

const columns = [
  {
    title: "Gif Name",
    dataIndex: "title",
    key: "gifname",
    width: 400,
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
    render: (username) => (username ? <p>{username}</p> : <p style={{ color: "red" }}>Unknown Username</p>),
  },
  {
    title: "Image",
    dataIndex: "images",
    key: "image",
    render: (image) => <img src={image.downsized.url} alt="test" height={100} width={100} />,
  },
];

export default function TableContainer() {  
    const [dataSource, setDataSource] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const history = useHistory();
    const location = useLocation();
    const [page, setPage] = React.useState(1);
    const onPageChange = (page) => {
      setPage(page);
      history.push({pathname:'/', search: `?page=${page}`})
    };

    useEffect(() => {
        // extract query from location
        // set state for page
        console.log(location);
    })

    useEffect(() => {
      const getTrendingGifs = async () => {
        setIsLoading(true);
        const { data } = await axiosInstace.get("/trending", {
          params: { limit: 10, offset: page * 10 },
        });
        setDataSource(data);
        setIsLoading(false);
      };

      getTrendingGifs();
    }, [page]);

    return <TableGif columns={columns} dataSource={dataSource} isLoading={isLoading} page={page} onPageChange={onPageChange} />;
}
