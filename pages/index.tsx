import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Header from "../components/Header";
import InputArea from "../components/InputArea";
import ToDoItem from "../components/ToDoItem";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const toDoList = useSelector((state: RootState) => state.todos.value);

  return (
    <div className={styles.container}>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="To-Do List created in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />
        <InputArea />
        <div>
          <ul>
            {toDoList.map((toDoItem, index) => {
              return <ToDoItem key={index} index={index} toDoItem={toDoItem} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
