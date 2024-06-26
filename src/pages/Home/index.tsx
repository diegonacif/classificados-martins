import { AdsList } from "../../components/AdsList";
import { CategoryNav } from "../../components/CategoryNav";
import { Header } from "../../components/Header";
import { NewAdButton } from "../../components/NewAdButton";
import { SearchBar } from "../../components/SearchBar";

export function Home() {
  return (
    <>
      <Header />
      <CategoryNav />
      <SearchBar />
      <AdsList />
      <NewAdButton />
    </>
  )
}