import Image from 'next/image'
import { Inter } from 'next/font/google'
import {EduCup} from "../../components/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
  <EduCup></EduCup>
</>
  )
}
