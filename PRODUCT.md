# Product

## Register

product

## Users

นักพัฒนาไทยที่มีพื้นฐาน Front-End / Back-End / Database อยู่แล้ว และกำลังเรียน/ทบทวนคอร์ส
"API Integration for Web & Mobile App" ด้วยตัวเอง ใช้ทั้งบนเดสก์ท็อป (ตอนลงมือโค้ด) และมือถือ
(ตอนอ่านทบทวน) งานหลักคือ "อ่านทำความเข้าใจทีละหัวข้อย่อย แล้วไล่ไปเรื่อย ๆ" — เนื้อหามีโค้ด,
flow, checklist, ตาราง เยอะ ต้องอ่านสบายตาและสแกนหาได้เร็ว

## Product Purpose

สื่อการสอนแบบเว็บ แยกเป็น 11 บท / ~38 หัวข้อย่อย (หัวข้อย่อยละหน้า) ที่ทำให้ผู้เรียนทบทวนเนื้อหา
ได้เป็นระบบ มีสารบัญ ค้นหา ปุ่มก่อนหน้า/ถัดไป และความคืบหน้า ความสำเร็จ = ผู้เรียนเปิดอ่านแล้ว
"อยู่กับเนื้อหาได้" ไม่สะดุดกับ UI, สแกนโค้ด/flow/checklist ได้เร็ว, และรู้สึกว่าเป็นเครื่องมือที่
น่าเชื่อถือเหมือน docs ของเครื่องมือ dev ระดับมือโปร

## Brand Personality

โมเดิร์น มีพลัง แม่นยำ (modern, energetic, precise) — โทนเสียงแบบ technical docs ที่มั่นใจ
ไม่เล่นมุก ไม่ตกแต่งเกินจำเป็น ใช้ accent สีจัดอย่างมีจังหวะเพื่อสร้างพลังงานโดยไม่รบกวนการอ่าน

## Anti-references

- การ์ดสี่เหลี่ยมเหมือนกันเรียงเป็นพรืด (identical card grids) — โดยเฉพาะหน้าแรก
- เส้นขอบสีหนาด้านข้างการ์ด/callout (side-stripe borders) — ตัว slop ที่ detector จับได้
- หน้าตา generic AI/SaaS template
- โทนพื้นหลัง cream / beige / parchment (warm near-white)
- gradient เยอะ ๆ และ gradient text

## Design Principles

1. **Earned familiarity** — ให้รู้สึกคุ้นและไว้ใจได้เหมือน Linear / Vercel / Stripe docs; UI ต้อง
   "หายไป" กับงานอ่าน ไม่ประดิษฐ์ affordance แปลก ๆ
2. **Content first** — ลำดับชั้นชัด เนื้อหาคือพระเอก; chrome (sidebar/nav) เงียบกว่าเนื้อหาเสมอ
3. **Energy in moments, not pages** — accent สีจัดใช้กับ action/หน้าปัจจุบัน/สถานะเท่านั้น ไม่ใช่ตกแต่ง
4. **Scannability** — โค้ด/flow/checklist/ตาราง ต้องแยกแยะด้วยตาได้เร็ว มี rhythm ของ spacing
5. **No decoration for decoration** — ทุก element มีหน้าที่ ถ้าตัดออกแล้วไม่เสียความหมาย ให้ตัด

## Accessibility & Inclusion

- WCAG AA: body text ≥ 4.5:1, large/UI ≥ 3:1 (ห้ามเทาจางบนพื้นขาว)
- อ่านภาษาไทยสบาย: line-height โปร่ง, ฟอนต์ไทยที่อ่านง่ายในขนาดเล็ก
- รองรับ `prefers-reduced-motion` ทุก animation
- คีย์บอร์ดใช้งานได้ครบ (focus-visible ชัด), aria-current/labels บน nav
