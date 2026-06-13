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
