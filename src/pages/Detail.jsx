import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const data = [
    { id: 1, todo: "리액트 배우기" },
    { id: 2, todo: "노드 배우기" },
    { id: 3, todo: "자바스크립트 배우기" },
    { id: 4, todo: "넥스트 배우기" },
    { id: 5, todo: "HTTP 프로토콜 배우기 " },
  ];

  const params = useParams();

  console.log(params);

  return (
      <div>
          {<h1>여기는 {params.id}번 할일 입니다. </h1>}
      {data.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={`/detail/${todo.id}`}>
                    <span>할일 {todo.id} : {todo.todo} 가기</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
