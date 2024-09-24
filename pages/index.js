import Editor from "@/components/Editor";
import Header from "@/components/Header";
import List from "@/components/List";
import useLocalStorage from "@/hooks/useLocalStorage";
import Head from "next/head";

export default function Home() {
  const [datas, setDatas] = useLocalStorage("datas");
  return (
    <>
      <Head>
        <title>투두리스트</title>
        <link rel="icon" href="/day.ico" />
      </Head>

      <Header />
      <Editor setDatas={setDatas} />
      <List datas={datas} setDatas={setDatas} />
    </>
  );
}
