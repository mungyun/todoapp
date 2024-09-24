import Editor from "@/components/Editor";
import Header from "@/components/Header";
import List from "@/components/List";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
  const [datas, setDatas] = useLocalStorage("datas");
  return (
    <>
      <Header />
      <Editor setDatas={setDatas} />
      <List datas={datas} setDatas={setDatas} />
    </>
  );
}
