# Layout blocks — วิธีใช้

เนื้อหาแต่ละหัวข้อย่อยคือ array ของ "block" ในไฟล์ `lib/course/**/lesson-*.ts`
ใส่ block พวกนี้ที่ตำแหน่งไหนของ `blocks: [...]` ก็ได้ เพื่อเปลี่ยน layout เฉพาะหน้านั้น

> ดูตัวอย่างจริงได้ที่: **Vibe Code › บท 2 › "ประเภทเว็บไซต์ที่เลือกทำได้"** (hero + cards)
> และ **API Integration › บท 1 › "ภาพรวมการเดินทางของข้อมูล"** (columns + image)

## บล็อกเนื้อหาเดิม (มีอยู่แล้ว)

`heading` · `paragraph` · `code` · `list` · `checklist` · `flow` · `table` · `callout` · `definitions`

```ts
{ type: 'heading', text: 'หัวข้อย่อย' }
{ type: 'paragraph', text: 'ย่อหน้า' }
{ type: 'code', lang: 'bash', code: 'npm run dev' }
{ type: 'list', ordered: true, items: ['ข้อ 1', 'ข้อ 2'] }
{ type: 'checklist', items: ['เช็ก A', 'เช็ก B'] }
{ type: 'flow', steps: ['User', 'API', 'Database'] }
{ type: 'table', head: ['A', 'B'], rows: [['a1', 'b1']] }
{ type: 'callout', variant: 'key', title: 'จุดที่ต้องย้ำ', text: '...' } // variant: note | warning | key
{ type: 'definitions', items: [{ term: 'API', desc: 'ตัวกลาง' }] }
```

## บล็อก layout ใหม่

### 🖼️ image — รูปภาพ + caption

วางไฟล์รูปไว้ใน `public/` (เช่น `public/course-assets/diagram.svg`) แล้วอ้างด้วย path ที่ขึ้นต้นด้วย `/`

```ts
{
  type: 'image',
  src: '/course-assets/diagram.svg',   // path ใน public/
  alt: 'คำอธิบายรูปสำหรับ screen reader',
  caption: 'คำบรรยายใต้รูป (ใส่หรือไม่ก็ได้)',
}
```

### 🧱 cards — การ์ดหลายใบ

เหมาะกับตัวเลือก / ฟีเจอร์ / แพ็กเกจ (ไม่ควรใช้กับทุกอย่าง) ใส่ `href` เพื่อให้กดได้

```ts
{
  type: 'cards',
  columns: 2,                 // 2 หรือ 3 (ไม่ใส่ = 2)
  items: [
    { meta: 'Option A', title: 'หัวข้อการ์ด', desc: 'คำอธิบายสั้น ๆ' },
    { meta: 'Option B', title: 'อีกใบ', desc: '...', href: '/c/vibe-code/3/1' },
  ],
}
```

### ▦ columns — สองคอลัมน์

แต่ละฝั่งเป็น array ของ block (ใส่ข้อความฝั่งหนึ่ง รูป/flow อีกฝั่ง) — บนมือถือจะเรียงลงมาเอง

```ts
{
  type: 'columns',
  left: [
    { type: 'paragraph', text: 'อธิบายทางซ้าย' },
    { type: 'list', items: ['ข้อ 1', 'ข้อ 2'] },
  ],
  right: [
    { type: 'image', src: '/course-assets/diagram.svg', alt: 'แผนภาพ' },
  ],
}
```

### ⭐ hero — กล่องไฮไลต์

หัวข้อเด่นมีพื้นหลัง accent ใช้เปิดหัวข้อหรือเน้นใจความสำคัญ

```ts
{ type: 'hero', title: 'ใจความสำคัญของหัวข้อนี้', subtitle: 'คำอธิบายรอง (ใส่หรือไม่ก็ได้)' }
```

## เพิ่มชนิด block ใหม่เอง

1. เพิ่ม type ใน union ที่ `lib/course/types.ts`
2. สร้าง component ที่ `components/blocks/<Name>.tsx`
3. เพิ่ม `case` ใน `components/blocks/BlockList.tsx`
