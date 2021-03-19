import styled from "styled-components";
import { Input } from "../atoms/button/input/Input";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `SHAMO${val}`,
    image: "https://source.unsplash.com/w1JE5duY62M",
    email: "ooo222@mail.com",
    phone: "090-8888-8888",
    company: {
      name: "カンパニー株式会社",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <Input />
      <SUserArea>
      {users.map((user) => (
        <UserCard key={users.id} user={user} />
      ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SUserArea = styled.div`
  padding-top:40px;
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
