import { redirect } from 'next/navigation'

export default function Home() {
  // เข้าเว็บแล้วพาไปคอร์ส Vibe Code โดยตรง
  redirect('/c/vibe-code')
}
