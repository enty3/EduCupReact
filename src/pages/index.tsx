import Image from 'next/image'
import { Inter } from 'next/font/google'
import {EduCup} from "../../components/MainPages/Main";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
  <Navbar></Navbar>
  <EduCup></EduCup>
 <Footer></Footer>
</>
  )
}
