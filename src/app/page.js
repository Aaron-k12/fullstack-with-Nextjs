'use client'
import addData from "@/firebase/firestore/addData";
import styles from "./page.module.css";

export default function Home() {
  const handleForm = async () => {
    const data = {
      name: 'John snow',
      house: 'Stark'
    }
    const { result, error } = await addData('users', 'user-id', data)

    if (error) {
      return console.log(error)
    }
  }
  return (
    //Home page
    <main>
     {}
    </main>
  );
}
