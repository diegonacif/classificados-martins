import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchBarContainer, SearchBarInput } from "./styles";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <div className="input-wrapper">
        <SearchBarInput type="text" placeholder="Pesquise aqui..." />
        <MagnifyingGlass size={24} weight="duotone" />
      </div>
    </SearchBarContainer>
  )
}