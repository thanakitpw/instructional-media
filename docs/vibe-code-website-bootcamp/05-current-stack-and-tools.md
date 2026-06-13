# 05 - Current Stack & Tools

## บทนี้ใช้สอนเพื่ออะไร

หัวข้อนี้ช่วยให้ผู้เรียนเข้าใจว่าในการทำงานจริงไม่ได้มีแค่เครื่องมือเดียวหรือ Stack เดียว การเลือก Stack ควรดูจากเป้าหมายของโปรเจกต์ ความเร็วในการทำงาน ความสามารถของทีม และการดูแลหลังส่งมอบ

หลักที่ควรย้ำ:

> Stack ที่ดีไม่ใช่ Stack ที่ใหม่ที่สุด แต่คือ Stack ที่ทำให้งานเสร็จจริง ดูแลต่อได้ และเหมาะกับขนาดโปรเจกต์

## แนวคิดในการเลือก Stack

การเลือก Stack ควรดูจาก 5 เรื่องหลัก:

1. ประเภทงานที่ต้องทำ เช่น Landing Page, Web App, Mobile App, Dashboard, Internal Tool
2. ความเร็วในการพัฒนา เช่น ต้องทำ Demo เร็วหรือทำระบบยาว ๆ
3. ความสามารถของทีม เช่น ทีมถนัด JavaScript, TypeScript, Python หรือ Dart
4. ระบบที่ต้องเชื่อมต่อ เช่น Database, Payment, CRM, API, LINE, Facebook
5. การดูแลหลังส่งมอบ เช่น Deploy ง่ายไหม แก้ไขต่อได้ไหม มีเอกสารชัดไหม

## Stack สำหรับ Modern Website / Landing Page / Portfolio

Stack ที่เหมาะกับคอร์สนี้:

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Vercel
```

ใช้สำหรับ:

- Landing Page
- Portfolio Website
- เว็บธุรกิจ
- เว็บคอร์สเรียน
- เว็บรับ Lead
- เว็บสำหรับยิงแอด
- เว็บที่ต้องการ SEO และโหลดเร็ว

เหตุผลที่แนะนำ:

- Next.js เหมาะกับเว็บที่ต้องการทั้งหน้าเว็บและฟังก์ชันฝั่ง Server เบื้องต้น
- TypeScript ช่วยลด Error และทำให้ AI แก้โค้ดแม่นขึ้น
- Tailwind CSS ช่วยจัด UI เร็ว เหมาะกับการทำงานร่วมกับ AI
- shadcn/ui ช่วยให้มี Component คุณภาพดี โดยไม่ต้องสร้างทุกอย่างจากศูนย์
- Vercel Deploy ง่ายสำหรับ Next.js

คำสั่งเริ่มต้นตัวอย่าง:

```bash
npx create-next-app@latest my-website
cd my-website
npm run dev
```

## Stack สำหรับ Web App / Dashboard / Internal Tool

```text
Next.js + TypeScript + Tailwind CSS + Supabase + Vercel
```

ใช้สำหรับ:

- Dashboard ดูข้อมูลลูกค้า
- ระบบรับ Lead
- ระบบจัดการรายการสินค้า
- ระบบจองคิวเบื้องต้น
- ระบบสมาชิกแบบง่าย
- Internal Tool สำหรับทีม

เหตุผลที่แนะนำ:

- ใช้ Next.js เป็นทั้งหน้าเว็บและ API เบื้องต้นได้
- Supabase มี PostgreSQL, Auth, Storage และ API ให้ใช้ง่าย
- เหมาะกับผู้เรียนที่อยากเข้าใจการเชื่อม Front-End กับ Database โดยไม่ต้องตั้ง Server เองตั้งแต่แรก

คำสั่งติดตั้งตัวอย่าง:

```bash
npm install @supabase/supabase-js
```

## Stack สำหรับ API / Backend ที่จริงจังขึ้น

ถ้าโปรเจกต์โตขึ้น อาจเริ่มแยก Backend ออกมาเป็นระบบเฉพาะ

ตัวเลือก JavaScript / TypeScript:

```text
Node.js + Express หรือ NestJS + PostgreSQL + Prisma
```

ตัวเลือก Python:

```text
FastAPI + PostgreSQL
```

ใช้สำหรับ:

- REST API
- ระบบหลังบ้านที่แยกจาก Front-End
- ระบบที่มี Mobile App เรียก API เดียวกัน
- ระบบที่ต้องมี Data Interface ระหว่างหลายระบบ

หมายเหตุสำหรับคอร์สหลัก:

คอร์ส Vibe Code Website Bootcamp ไม่จำเป็นต้องสอน Backend Stack เต็มรูปแบบตั้งแต่ต้น แต่ควรอธิบายให้ผู้เรียนรู้ว่า ถ้าโปรเจกต์โตขึ้น จะเริ่มแยก API / Backend ออกมาได้

## Stack สำหรับ Mobile App

### React Native + Expo

เหมาะกับผู้เรียนที่มาจากสายเว็บ เพราะใช้ JavaScript / TypeScript และ React concept ใกล้กับ Next.js

```text
React Native + Expo + TypeScript
```

ใช้สำหรับ:

- Mobile App iOS / Android
- App ตัวอย่างที่เรียก API จากระบบเดียวกับ Web App
- MVP ที่ต้องทำเร็ว
- App ที่อยากทดสอบบนมือถือจริงผ่าน Expo Go

### Flutter

```text
Flutter + Dart
```

เหมาะกับงาน Mobile App ที่ต้องการ UI คุมเองเยอะ หรือทีมถนัด Dart

ข้อสังเกต:

- Flutter เป็น Stack ที่ดี แต่สำหรับคอร์สนี้ไม่ควรใช้เป็น Stack หลัก
- ถ้าต้องสอนตัวอย่าง Mobile App แบบเร็ว React Native + Expo จะต่อเนื่องกับคอร์สหลักมากกว่า

## Stack ที่แนะนำสำหรับคอร์สนี้

```text
Next.js + TypeScript + Tailwind CSS + shadcn/ui + Supabase + Vercel + GitHub
```

เหตุผล:

1. เหมาะกับการทำเว็บจริงในเวลาจำกัด
2. AI ช่วยเขียนและแก้โค้ด Stack นี้ได้ดี เพราะมีตัวอย่างเยอะ
3. ผู้เรียนต่อยอดได้ทั้ง Landing Page, Portfolio, Lead Form และ Web App
4. Deploy ง่ายด้วย Vercel
5. ถ้าต่อยอดเป็น Mobile App สามารถใช้ React Native + Expo และเรียก API ชุดเดียวกันได้

## เครื่องมือที่ผู้เรียนควรติดตั้ง

### จำเป็นสำหรับคอร์สหลัก

1. Node.js LTS
2. Git
3. VS Code หรือ Cursor
4. GitHub Account
5. Vercel Account
6. Supabase Account
7. Postman หรือ Thunder Client
8. AI Coding Tool อย่างน้อย 1 ตัว เช่น ChatGPT, Claude, Claude Code, Cursor หรือ Codex

### แนะนำเพิ่มเติม แต่ไม่บังคับ

1. Figma
2. Canva
3. Expo Go สำหรับทดลอง Mobile App
4. Flutter SDK ถ้าผู้เรียนอยากต่อยอด Flutter

## ลิงก์สำคัญสำหรับผู้เรียน

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs
- Supabase: https://supabase.com/docs
- Vercel: https://vercel.com/docs
- React Native: https://reactnative.dev/docs/getting-started
- Expo: https://docs.expo.dev
- Flutter: https://docs.flutter.dev

