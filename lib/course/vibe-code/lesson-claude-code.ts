import type { Lesson } from '../types'

const lessonClaudeCode: Lesson = {
  title: 'รู้จักและใช้งาน Claude Code',
  sections: [
    {
      title: 'รู้จัก Claude Code & เริ่มต้นใช้งาน',
      blocks: [
        {
          type: 'paragraph',
          text: 'Claude Code คือ AI agent ช่วยเขียนโค้ดอย่างเป็นทางการของ Anthropic ที่อ่านโปรเจกต์ทั้งก้อน แก้ไฟล์ รันคำสั่ง และต่อกับเครื่องมือ dev ได้ จุดต่างจากแชตทั่วไปคือมันลงมือทำในโปรเจกต์จริงของคุณ ไม่ใช่แค่ตอบเป็นข้อความ',
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'วิธีทำงานของ Claude Code',
          text: 'ทำงานเป็นลูป — เก็บ context (อ่านไฟล์) → ลงมือ (แก้โค้ด/รันคำสั่ง) → ตรวจผล → วนแก้จนเสร็จ โดยคุณเป็นคนอนุมัติและตัดสินใจขั้นสุดท้าย',
        },
        { type: 'heading', text: 'ติดตั้งและเริ่มใช้' },
        {
          type: 'code',
          lang: 'bash',
          code: `# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# หรือผ่าน npm
npm install -g @anthropic-ai/claude-code`,
        },
        {
          type: 'paragraph',
          text: 'จากนั้นเปิด Terminal ในโฟลเดอร์โปรเจกต์แล้วพิมพ์ claude เพื่อเริ่ม ครั้งแรกจะให้ login — เลือกได้ 2 แบบ: บัญชี Claude (Pro / Max — แนะนำ) หรือ API key จาก Anthropic Console (จ่ายตามใช้)',
        },
        { type: 'heading', text: 'โมเดล — สลับด้วย /model' },
        {
          type: 'table',
          head: ['Alias', 'เหมาะกับ'],
          rows: [
            ['fable', 'Fable 5 — เก่งสุด งานยาว/ซับซ้อน'],
            ['opus', 'Opus 4.8 — งานคิดเชิงลึก'],
            ['sonnet', 'Sonnet 4.6 — งานเขียนโค้ดประจำวัน'],
            ['haiku', 'Haiku 4.5 — งานเล็ก เน้นเร็ว'],
            ['opusplan', 'วางแผนด้วย Opus แล้วสลับ Sonnet ตอนลงมือ'],
          ],
        },
        { type: 'heading', text: 'โหมดการอนุญาต — กด Shift+Tab วน' },
        {
          type: 'table',
          head: ['โหมด', 'พฤติกรรม'],
          rows: [
            ['Default', 'ถามก่อนแก้ไฟล์และรันคำสั่งทุกครั้ง'],
            ['Auto-accept edits', 'แก้ไฟล์เองไม่ถาม (ยังถามคำสั่งอื่น)'],
            ['Plan mode', 'สำรวจและเสนอแผนก่อน ค่อยลงมือทำ'],
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ย้อนกลับได้เสมอ',
          text: 'ทุกการแก้ไฟล์มี checkpoint — กด Esc สองครั้งเพื่อย้อน (rewind) กลับสถานะก่อนหน้า โดยแยกจาก git ไม่ต้องกลัวว่า AI จะแก้พังแล้วกู้ไม่ได้',
        },
        { type: 'heading', text: 'ความจำ & Context' },
        {
          type: 'definitions',
          items: [
            {
              term: 'CLAUDE.md',
              desc: 'ไฟล์ที่ root โปรเจกต์ เก็บกฎ/มาตรฐาน/สถาปัตยกรรม ที่ Claude อ่านทุกครั้งที่เริ่ม — สร้างด้วยคำสั่ง /init',
            },
            {
              term: 'Context window',
              desc: 'ได้ถึงราว 1 ล้าน token เมื่อเต็มจะบีบอัตโนมัติ ดูการใช้ด้วย /context และบีบเองด้วย /compact',
            },
          ],
        },
        { type: 'heading', text: 'คีย์ลัดที่ใช้บ่อย' },
        {
          type: 'definitions',
          items: [
            { term: 'Esc', desc: 'หยุด Claude ทันที ยกเลิกคำสั่งที่กำลังรัน' },
            { term: '! (นำหน้าข้อความ)', desc: 'รันคำสั่ง bash ตรง ๆ ใน session' },
            { term: '# (นำหน้าข้อความ)', desc: 'เพิ่มข้อความนั้นเข้า CLAUDE.md (memory)' },
            { term: '@ไฟล์', desc: 'อ้างอิงไฟล์/โฟลเดอร์ให้ Claude อ่านเป็น context' },
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ของขั้นสูง (รู้ไว้)',
          text: 'MCP = ต่อเครื่องมือนอก เช่น GitHub, Slack, ฐานข้อมูล (จัดการด้วย /mcp) · Hooks = สั่งรันสคริปต์อัตโนมัติก่อน/หลัง action เช่น format โค้ดหลังแก้ไฟล์',
        },
      ],
    },
    {
      title: 'ใช้ Claude Code ที่ไหนได้บ้าง',
      blocks: [
        {
          type: 'paragraph',
          text: 'Claude Code ใช้ได้หลายช่องทาง และทุกช่องทางใช้ engine เดียวกัน แชร์ไฟล์ CLAUDE.md, settings และ MCP ร่วมกัน เลือกตามสไตล์การทำงานได้เลย',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              meta: 'หลัก',
              title: 'Terminal CLI',
              desc: 'ครบทุกฟีเจอร์ — claude (เปิด session), claude "งาน", claude -p (รันครั้งเดียว), claude --continue (ทำต่อ)',
            },
            {
              meta: 'IDE',
              title: 'VS Code Extension',
              desc: 'รวม Cursor / Windsurf — เห็น diff ในจอ, @ อ้างไฟล์จาก selection, หลายแชทเป็นแท็บ',
            },
            {
              meta: 'IDE',
              title: 'JetBrains Plugin',
              desc: 'IntelliJ / PyCharm / WebStorm ฯลฯ — diff ในตัว IDE, ส่ง error/lint ให้ Claude อัตโนมัติ',
            },
            {
              meta: 'App',
              title: 'Desktop (Mac / Win)',
              desc: 'รีวิว diff ด้วยตา, หลาย session พร้อมกัน, ตั้งเวลางาน, preview เว็บได้',
            },
            {
              meta: 'Cloud',
              title: 'Web / iOS',
              desc: 'claude.ai/code — ไม่ต้องติดตั้ง รันบน cloud, ทำงานขนานกัน, เปิด repo ที่ไม่มีในเครื่อง',
            },
            {
              meta: 'CI',
              title: 'GitHub Actions / GitLab CI',
              desc: 'รีวิว PR อัตโนมัติ, แก้เทสต์ที่ fail, triage issue ในไปป์ไลน์',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'เริ่มจากตรงไหนดี',
          text: 'มือใหม่แนะนำเริ่มที่ Terminal CLI หรือ VS Code Extension เพราะเห็น diff และคุมง่ายสุด ส่วน Web/Desktop เหมาะกับงานยาวหรือทำหลายอย่างขนานกัน',
        },
      ],
    },
    {
      title: 'เขียน CLAUDE.md ให้โปรเจกต์ของคุณ',
      blocks: [
        {
          type: 'paragraph',
          text: 'CLAUDE.md คือไฟล์ที่อยู่ root โปรเจกต์ ซึ่ง Claude อ่านทุกครั้งที่เริ่มทำงาน ใส่คำสั่ง มาตรฐานโค้ด และข้อห้ามไว้ที่นี่ จะได้ไม่ต้องบอกซ้ำทุกรอบ ช่วยให้ได้งานตรงขึ้นและประหยัด token',
        },
        {
          type: 'paragraph',
          text: 'วิธีเริ่มที่ง่ายสุดคือรัน /init ให้ Claude สร้างโครงให้ก่อน แล้วค่อยปรับแต่งให้ตรงกับโปรเจกต์ของคุณ',
        },
        { type: 'heading', text: 'ตัวอย่าง CLAUDE.md สำหรับเว็บ Next.js + Tailwind' },
        {
          type: 'code',
          lang: 'text',
          code: `# My Website Project

## คำสั่งที่ใช้บ่อย
- Dev: npm run dev   (เปิด http://localhost:3000)
- Build: npm run build
- Test: npm test
- Format / Lint: npm run lint

## Code style
- ใช้ Tailwind สำหรับ styling ทั้งหมด ไม่เขียน CSS แยก
- ตั้งชื่อ Component แบบ PascalCase (Hero.tsx, PricingCard.tsx)
- ใช้ const เป็นหลัก ตั้งชื่อ variable แบบ camelCase

## Next.js
- ใช้ App Router (โฟลเดอร์ app/)
- Server Component เป็น default ใส่ "use client" เฉพาะที่ต้องโต้ตอบ
- รูปใช้ next/image ไม่ใช้แท็ก img

## Supabase / Environment
- เก็บค่า config ใน .env.local (ห้าม commit ขึ้น git)
- ห้าม log หรือ commit คีย์ของ Supabase ลงในโค้ด

## Git
- แตก branch ต่อฟีเจอร์: git checkout -b feature/ชื่อฟีเจอร์
- commit บ่อย ๆ ด้วยข้อความที่สื่อความหมาย
- เช็กว่า npm run build ผ่านก่อนส่งงาน`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'อย่าใส่ความลับใน CLAUDE.md',
          text: 'ห้ามเขียน API key, password หรือ secret ลงใน CLAUDE.md เพราะถูกอ่านทุกครั้งและมักถูก commit ขึ้น git — ให้เก็บไว้ใน .env.local เท่านั้น',
        },
        {
          type: 'checklist',
          items: [
            'มีคำสั่งรัน/build/test ที่โปรเจกต์ใช้',
            'มี code style และ convention ที่อยากให้ทำตาม',
            'บอกโครงสร้างโฟลเดอร์/ไฟล์สำคัญ',
            'มีข้อห้าม เช่น “ห้าม commit .env”',
          ],
        },
      ],
    },
    {
      title: 'สั่งงาน Claude ให้ได้ผล',
      blocks: [
        {
          type: 'paragraph',
          text: 'ผลลัพธ์ที่ได้ขึ้นกับความชัดของคำสั่ง หลักง่าย ๆ คือ สั่งทีละงานเล็ก เจาะจงไฟล์/เป้าหมาย และให้ context ให้ครบ',
        },
        {
          type: 'table',
          head: ['❌ คลุมเครือ', '✅ ชัดเจน'],
          rows: [
            [
              'ตั้งค่า authentication',
              'เพิ่มฟอร์ม Sign Up ที่ app/signup/page.tsx มีช่อง email/password, validate แล้วเรียก Supabase signUp ตอน submit',
            ],
            [
              'ทำให้ดูดีขึ้น',
              'ปรับ Hero ให้มีปุ่ม CTA และจัดให้ตรงกับดีไซน์ใน @designs/home.png',
            ],
            [
              'เพิ่ม validation',
              'เพิ่ม validate email ในฟอร์ม Sign Up ถ้าผิดให้ขึ้นข้อความ error ใต้ช่อง แล้วรันเทสต์',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'กฎง่าย ๆ',
          text: 'ถ้าอธิบายสิ่งที่ต้องการได้ใน 1 ประโยค — สั่งทำเลย ถ้าต้องมี 3 ขั้นขึ้นไป — ใช้ Plan mode (กด Shift+Tab) ให้วางแผนก่อน',
        },
        { type: 'heading', text: 'ใช้ Plan mode กับงานใหญ่' },
        {
          type: 'list',
          ordered: true,
          items: [
            'กด Shift+Tab จนถึงโหมด Plan',
            'ให้ Claude สำรวจโค้ดและเสนอแผน (ยังไม่แก้ไฟล์)',
            'อ่านแผน ปรับจนพอใจ',
            'กด Shift+Tab กลับโหมดปกติ แล้วบอกให้ลงมือทำตามแผน',
          ],
        },
      ],
    },
    {
      title: 'ตรวจงานก่อนเชื่อ (Review → Run → Test)',
      blocks: [
        {
          type: 'paragraph',
          text: 'Claude เก่ง แต่ก็ผิดได้แบบดูสมเหตุสมผล อย่ากด accept รวดเดียว ให้ตรวจ 3 ขั้นนี้ทุกครั้งก่อน commit',
        },
        {
          type: 'flow',
          steps: [
            'Review — อ่าน diff ที่ Claude แก้',
            'Run — npm run dev แล้ววาง screenshot เทียบ',
            'Test — npm test ให้ผ่าน',
            'Commit',
          ],
        },
        {
          type: 'list',
          items: [
            'Review: โค้ดอ่านรู้เรื่องไหม มีบั๊กชัด ๆ ไหม ตรง code style ไหม',
            'Run: หน้าเว็บขึ้นจริงไหม ตรงกับที่สั่งและดีไซน์ไหม',
            'Test: เทสต์ผ่านหมดไหม ถ้าไม่ผ่านให้บอก Claude ว่าเทสต์ไหน error อะไร',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'เครื่องมือช่วยตรวจ',
          text: 'ใช้ /code-review ให้ Claude รีวิวโค้ดของตัวเอง · กด Esc เพื่อหยุดดูระหว่างทาง · ถ้าพังให้กด Esc สองครั้งหรือ /rewind ย้อนกลับ checkpoint',
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'ถ้าไม่เข้าใจ อย่าเพิ่งกด Allow',
          text: 'ถ้า Claude ขออนุญาตทำอะไรที่คุณยังไม่เข้าใจ ให้กด Esc แล้วถามก่อนว่ากำลังจะทำอะไรและทำไม',
        },
      ],
    },
    {
      title: 'Git & ความปลอดภัย',
      blocks: [
        {
          type: 'paragraph',
          text: 'commit คือ checkpoint ของงานจริง (แยกจาก /rewind ที่เป็นของ session) ส่วน branch ใช้แยกงานไม่ให้กระทบของเดิม และต้องระวังเรื่องความลับเป็นพิเศษ',
        },
        {
          type: 'code',
          lang: 'bash',
          code: `# เริ่มฟีเจอร์ใหม่
git checkout -b feature/add-pricing

# ทำงานกับ Claude แล้ว commit เมื่อเสร็จก้อนหนึ่ง
git commit -m "Add pricing section with 3 tiers"

# ส่งขึ้น GitHub
git push -u origin feature/add-pricing`,
        },
        {
          type: 'paragraph',
          text: 'หรือจะให้ Claude commit ให้ก็ได้ โดยบอกว่า “commit พร้อมข้อความที่สื่อความหมาย”',
        },
        { type: 'heading', text: 'คำสั่งไหนปลอดภัย / อันตราย' },
        {
          type: 'table',
          head: ['คำสั่ง', 'ปลอดภัย?', 'เพราะ'],
          rows: [
            ['git checkout -b ...', 'ปลอดภัย', 'แยกงาน ไม่กระทบ main'],
            ['git revert', 'ปลอดภัย', 'ย้อนโดยไม่ลบประวัติ'],
            ['npm install <pkg>', 'ระวัง', 'โอเค แต่ดูชื่อ package ให้ดี'],
            ['commit ไฟล์ .env', 'อันตราย', 'ความลับหลุดขึ้น git'],
            ['git reset --hard', 'อันตราย', 'ลบงานที่ยังไม่ commit'],
            ['git push --force', 'อันตราย', 'ทำลายประวัติของทีม'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'ห้าม commit ความลับ',
          text: 'ใส่ .env* ไว้ใน .gitignore เสมอ อย่าใส่ key/password ลงในโค้ดหรือ CLAUDE.md และถ้าคีย์หลุดให้รีบ reset คีย์ใหม่ทันที',
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'ความปลอดภัยของ permission',
          text: 'เริ่มที่โหมด Default (เห็นทุกอย่างก่อนอนุมัติ) อ่านคำสั่งก่อนกด Allow ทุกครั้ง และอย่าใช้โหมด bypass-permissions นอก sandbox',
        },
      ],
    },
    {
      title: 'Slash Commands ที่ควรรู้',
      blocks: [
        {
          type: 'paragraph',
          text: 'ใน session พิมพ์ / เพื่อดูคำสั่งทั้งหมด ด้านล่างคือชุดที่ใช้บ่อยที่สุด',
        },
        { type: 'heading', text: 'ตั้งค่า & บริบทโปรเจกต์' },
        {
          type: 'table',
          head: ['คำสั่ง', 'ใช้ทำอะไร'],
          rows: [
            ['/init', 'สร้างไฟล์ CLAUDE.md ให้โปรเจกต์'],
            ['/memory', 'แก้ CLAUDE.md / เปิด-ปิด-ดู memory'],
            ['/config', 'ตั้งค่า (ธีม โมเดล ฯลฯ)'],
            ['/permissions', 'กำหนดสิทธิ์เครื่องมือที่อนุญาต'],
            ['/mcp', 'จัดการการเชื่อมต่อ MCP server'],
            ['/agents', 'จัดการ subagents'],
          ],
        },
        { type: 'heading', text: 'ระหว่างทำงาน' },
        {
          type: 'table',
          head: ['คำสั่ง', 'ใช้ทำอะไร'],
          rows: [
            ['/model', 'สลับโมเดล'],
            ['/clear', 'เริ่มแชทใหม่ (ล้าง context)'],
            ['/compact', 'บีบสรุป context ให้มีที่ว่าง'],
            ['/context', 'ดูว่าอะไรกิน context อยู่'],
            ['/plan', 'เข้าโหมดวางแผนก่อนลงมือ'],
          ],
        },
        { type: 'heading', text: 'รีวิว & Session' },
        {
          type: 'table',
          head: ['คำสั่ง', 'ใช้ทำอะไร'],
          rows: [
            ['/diff', 'ดู diff ของการแก้ไข'],
            ['/review [PR]', 'รีวิว pull request'],
            ['/code-review', 'หาบั๊ก/จุดที่ควร cleanup (ใส่ --fix ให้แก้ให้)'],
            ['/security-review', 'ตรวจช่องโหว่ความปลอดภัย'],
            ['/resume', 'เปิดงาน (session) เก่ามาทำต่อ'],
            ['/rewind', 'ย้อนโค้ด/บทสนทนาไป checkpoint'],
          ],
        },
        { type: 'heading', text: 'ช่วยเหลือ & สถานะ' },
        {
          type: 'table',
          head: ['คำสั่ง', 'ใช้ทำอะไร'],
          rows: [
            ['/help', 'ดูคำสั่งทั้งหมด'],
            ['/status', 'ดูเวอร์ชัน โมเดล บัญชี การเชื่อมต่อ'],
            ['/usage', 'ดูค่าใช้จ่าย / โควต้าการใช้งาน'],
            ['/doctor', 'ตรวจและซ่อมการติดตั้ง'],
            ['/login · /logout', 'เข้า / ออกจากบัญชี'],
          ],
        },
        { type: 'heading', text: 'สร้างคำสั่งเอง (Custom Commands / Skills)' },
        {
          type: 'paragraph',
          text: 'วางไฟล์ .md ในโฟลเดอร์ .claude/commands/ (เฉพาะโปรเจกต์) หรือ ~/.claude/commands/ (ส่วนตัวทุกโปรเจกต์) ชื่อไฟล์จะกลายเป็นชื่อคำสั่ง เช่น deploy.md → ใช้ /deploy ได้เลย และ Claude เรียกใช้เองได้เมื่อเข้าเรื่อง',
        },
        {
          type: 'code',
          lang: 'text',
          code: `.claude/commands/deploy.md

---
description: Deploy ขึ้น staging
---

ตรวจว่าเทสต์ผ่านก่อน แล้ว deploy ขึ้น staging`,
        },
        { type: 'heading', text: 'เช็กลิสต์: พร้อมเริ่มใช้ Claude Code' },
        {
          type: 'checklist',
          items: [
            'ติดตั้งแล้ว (รัน claude --version แล้วขึ้นเวอร์ชัน)',
            'login เรียบร้อย (บัญชี Claude หรือ API key)',
            'สร้าง CLAUDE.md ด้วย /init แล้ว',
            'รู้วิธีสลับโมเดลด้วย /model',
            'รู้จักโหมดอนุญาต (Shift+Tab) และย้อนด้วย Esc สองครั้ง',
            'ลอง /help เพื่อดูคำสั่งทั้งหมด',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'อ้างอิงทางการ',
          text: 'เอกสารฉบับเต็มอยู่ที่ code.claude.com/docs (ข้อมูลในบทนี้อิงสถานะเดือนมิถุนายน 2026 — Claude Code v2.1+, โมเดล Fable 5 / Opus 4.8 / Sonnet 4.6 / Haiku 4.5)',
        },
      ],
    },
  ],
}

export default lessonClaudeCode
