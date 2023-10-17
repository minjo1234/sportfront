import styled from "styled-components";

export default function SearchBar() {
  return (
    <SearchContainer>
      <Search>
        <SearchInput type="search" placeholder="기사 제목을 입력하세요" />
      </Search>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Search = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input``;
//block w-full   text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none
