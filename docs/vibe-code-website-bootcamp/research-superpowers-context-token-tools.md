# Research: Superpowers Plugin, Context Management และ Token Saving Tools

อัปเดตข้อมูล: 2026-06-13

เอกสารนี้สรุปข้อมูลสำหรับนำไปใช้ในคอร์ส Vibe Code Website Bootcamp โดยเน้น 2 เรื่อง:

1. Superpowers plugin คืออะไร ใช้งานอย่างไร และควรสอนอย่างไร
2. เครื่องมือ/แนวทางที่ช่วยเรื่อง context management และประหยัด token

---

## 1. Superpowers คืออะไร

Superpowers คือ plugin / skills framework สำหรับ AI coding agents ที่ช่วยบังคับ Workflow การทำงานให้เป็นระบบมากขึ้น เช่น brainstorm ก่อนเขียนโค้ด, แยก branch/worktree, เขียนแผน, execute ตามแผน, review และ verify

Repository หลัก: https://github.com/obra/superpowers

จาก README ของ Superpowers ระบุว่ารองรับหลาย harness/tools เช่น:

- Claude Code
- Codex CLI
- Codex App
- Factory Droid
- Gemini CLI
- OpenCode
- Cursor
- GitHub Copilot CLI

แกนสำคัญของ Superpowers ไม่ใช่ “ทำให้ AI เก่งขึ้นด้วยเวทมนตร์” แต่คือ “ทำให้ AI ทำงานตาม process ที่เข้มขึ้น” เพื่อลดงานหลุด ลดการแก้มั่ว และทำให้โปรเจกต์ใหญ่ขึ้นยังควบคุมได้

## 2. Superpowers เหมาะกับงานแบบไหน

เหมาะกับ:

- งาน feature ที่มีหลายไฟล์
- งาน refactor
- งานที่ต้องตัดสินใจเชิง architecture
- งานที่ต้องเขียน test
- งานที่ต้องทำเป็นแผนยาวหลาย step
- งานที่อยากให้ AI ทำแล้วมี checkpoint/review

ไม่จำเป็นสำหรับ:

- แก้ข้อความเล็ก ๆ
- เพิ่ม CTA 1 ปุ่ม
- เปลี่ยนสีเล็กน้อย
- งานทดลองเร็วที่ยังไม่ต้องมี process หนัก
- ผู้เรียนเริ่มต้นที่ยังไม่เข้าใจ Git/branch/worktree

## 3. Basic Workflow ของ Superpowers

Workflow หลักจากเอกสาร Superpowers:

1. **Brainstorming**
   ใช้ก่อนเขียนโค้ด เพื่อถามคำถาม สำรวจทางเลือก และทำ design document

2. **Using Git Worktrees**
   หลัง design ผ่านแล้ว จะสร้าง workspace แยกบน branch ใหม่ เพื่อลดความเสี่ยงกับ main branch

3. **Writing Plans**
   แปลง design เป็น task เล็ก ๆ ประมาณ 2-5 นาทีต่อ task พร้อม file path, code, command และ verification

4. **Subagent-driven Development / Executing Plans**
   ให้ agent ทำตาม plan ทีละ task และมี review

5. **Test-driven Development**
   บังคับแนว RED-GREEN-REFACTOR: เขียน test ให้ fail ก่อน เขียน code ให้ pass แล้ว refactor

6. **Requesting Code Review**
   Review ตาม plan และรายงาน issue ตาม severity

7. **Finishing a Development Branch**
   ตรวจ test, เสนอ merge/PR/keep/discard และ clean up worktree

## 4. วิธีติดตั้ง Superpowers

### Claude Code

ติดตั้งจาก official marketplace:

```text
/plugin install superpowers@claude-plugins-official
```

หรือใช้ Superpowers marketplace:

```text
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

ถ้า plugin ไม่ขึ้น ให้ refresh marketplace:

```text
/plugin marketplace update claude-plugins-official
```

หรือเพิ่ม official marketplace:

```text
/plugin marketplace add anthropics/claude-plugins-official
```

### Codex CLI

จาก README ของ Superpowers ระบุว่าสามารถติดตั้งผ่าน official Codex plugin marketplace:

```text
/plugins
```

จากนั้นค้นหา:

```text
superpowers
```

แล้วเลือก `Install Plugin`

### Codex App

จาก README ของ Superpowers:

1. เปิด Codex app
2. คลิก Plugins ใน sidebar
3. หา `Superpowers` ในหมวด Coding
4. กด `+` และทำตาม prompt

### Cursor

```text
/add-plugin superpowers
```

หรือค้นหา `superpowers` ใน plugin marketplace

### Gemini CLI

```bash
gemini extensions install https://github.com/obra/superpowers
```

อัปเดตภายหลัง:

```bash
gemini extensions update superpowers
```

## 5. วิธีใช้งาน Superpowers แบบปฏิบัติจริง

หลังติดตั้ง Superpowers แล้ว จุดสำคัญคือไม่ต้องจำ command เยอะเสมอไป เพราะ plugin ใช้ skills ที่ trigger ตามบริบท แต่ในการสอนควรให้ผู้เรียนเข้าใจ workflow แบบนี้:

### Step 1: เริ่มจากโจทย์ ไม่เริ่มจาก code

ตัวอย่าง prompt:

```text
ฉันต้องการเพิ่มระบบ Contact Form ในเว็บ Next.js นี้
ช่วย brainstorm แนวทางก่อน ยังไม่ต้องเขียนโค้ด
เป้าหมายคือเก็บ lead ชื่อ เบอร์ LINE ID และบริการที่สนใจ
```

สิ่งที่ควรได้:

- คำถามที่ต้องตอบก่อนทำ
- ทางเลือก implementation
- ข้อดี/ข้อเสีย
- scope ที่ชัด

### Step 2: ให้ทำ design / spec

ตัวอย่าง prompt:

```text
จากแนวทางที่เลือก ช่วยสรุป design document
ระบุไฟล์ที่จะเกี่ยวข้อง data flow, validation, success state, error state และวิธีทดสอบ
```

สิ่งที่ควรได้:

- design document
- ขอบเขตงาน
- data flow
- acceptance criteria

### Step 3: ขอ plan ก่อน execute

ตัวอย่าง prompt:

```text
ช่วยเขียน implementation plan เป็น task เล็ก ๆ
แต่ละ task ต้องระบุ:
- ไฟล์ที่จะแก้
- สิ่งที่ต้องทำ
- วิธี verify
ยังไม่ต้องลงมือแก้โค้ด
```

สิ่งที่ควรได้:

- task list
- file path
- verification command
- checkpoint

### Step 4: Execute ตาม plan ทีละรอบ

ตัวอย่าง prompt:

```text
เริ่ม execute task 1 ตาม plan
หลังทำเสร็จให้สรุปไฟล์ที่แก้และวิธีตรวจ
```

### Step 5: Review และ verify

ตัวอย่าง prompt:

```text
ช่วย review งานที่ทำเทียบกับ plan
จัด findings ตาม severity
ถ้าไม่มี issue ให้บอก test gap หรือ residual risk
```

## 6. ข้อดีของ Superpowers

- บังคับให้คิดก่อนทำ
- ลดการเขียน code ผิดทิศ
- เหมาะกับงานหลายไฟล์
- มี plan เป็น recovery mechanism ถ้า session หลุด
- สนับสนุน test/review มากกว่างาน vibe coding แบบสุ่ม
- ช่วยสอน mindset การทำงานจริงได้ดี

## 7. ข้อจำกัดและความเสี่ยงของ Superpowers

- อาจหนักเกินไปสำหรับผู้เริ่มต้นถ้ายังไม่เข้าใจ Git/worktree
- งานเล็กอาจช้ากว่าการสั่งตรง ๆ
- ถ้าติดตั้ง plugin เยอะเกินไป context อาจบวม
- ต้องตรวจความน่าเชื่อถือของ marketplace/plugin ก่อนติดตั้ง
- Workflow ที่เข้มขึ้นไม่ได้แทนความเข้าใจของผู้ใช้

ควรสอนผู้เรียนว่า Superpowers เป็น optional advanced workflow ไม่ใช่ requirement หลักของคอร์สเริ่มต้น

## 8. ควรใส่ Superpowers ในคอร์สอย่างไร

แนะนำให้วางเป็นหัวข้อท้ายคอร์สหรือ bonus:

### สำหรับผู้เรียนเริ่มต้น

สอนเป็นแนวคิด:

```text
Brief → Brainstorm → Plan → Execute → Review → Verify
```

ยังไม่จำเป็นต้องติดตั้ง plugin ทุกคน

### สำหรับผู้เรียนที่ใช้ Claude Code / Codex / Cursor อยู่แล้ว

ให้ติดตั้งเป็น optional และทดลองกับ task ขนาดกลาง เช่น:

- เพิ่ม Contact Form
- เชื่อม Supabase
- แยก Component
- ปรับ Responsive ทั้งหน้า
- เพิ่ม Tracking plan

### ประโยคที่ควรใช้ในคอร์ส

> Superpowers ไม่ได้ทำให้ AI รู้โจทย์แทนเรา แต่มันช่วยบังคับให้ AI ทำงานเป็นขั้นตอนมากขึ้น

---

# 9. Context Engineering คืออะไร

Anthropic อธิบายว่า context engineering คือการจัดการและคัดเลือก tokens/information ที่จะเข้าไปอยู่ใน context ของ model เพื่อให้ model ทำงานได้ดีขึ้น ไม่ใช่แค่เขียน prompt ให้สวยขึ้น

แนวคิดสำคัญ:

- Context เป็นทรัพยากรจำกัด
- Context ใหญ่ขึ้นไม่ได้แปลว่าดีขึ้นเสมอ
- ข้อมูลเยอะเกินไปทำให้ model หลุด focus หรือสับสนได้
- ควรใส่เฉพาะข้อมูลที่เกี่ยวกับ task ปัจจุบัน

สำหรับคอร์ส Vibe Code ให้สอนผู้เรียนว่า:

```text
Prompt ที่ดี = คำสั่งชัด
Context ที่ดี = ข้อมูลที่จำเป็นและพอดี
```

---

# 10. เครื่องมือช่วย Context / Token Saving

## 10.1 RTK - Rust Token Killer

Repository: https://github.com/rtk-ai/rtk

RTK เป็น CLI proxy ที่ filter และ compress output ของคำสั่ง terminal ก่อนส่งเข้า context ของ AI coding agent

เหมาะกับ:

- โปรเจกต์ที่ใช้คำสั่ง terminal เยอะ
- output ยาว เช่น `find`, `ls`, `git diff`, `npm test`, log
- คนที่ใช้ Claude Code / Codex / Gemini / Cursor / Windsurf / Cline

จุดเด่น:

- ลด token จาก command output
- เคลมว่าลดได้ 60-90% ใน common dev commands
- เป็น binary เดี่ยว
- ไม่ใช่ memory system แต่เป็น output compression/filtering

ควรใช้เมื่อ:

- ทำงานกับ repo ใหญ่
- log/test output ยาว
- agent ชอบอ่าน terminal output เยอะเกินไป

ไม่จำเป็นสำหรับ:

- คอร์สเริ่มต้นที่ repo เล็ก
- ผู้เรียนที่ยังไม่เข้าใจ shell command

## 10.2 Claude Context

Repository: https://github.com/zilliztech/claude-context

Claude Context เป็น MCP plugin สำหรับ semantic code search ช่วยค้น code ที่เกี่ยวข้องจาก codebase โดยไม่ต้องโหลดทั้ง directory เข้า context

เหมาะกับ:

- codebase ใหญ่
- งานที่ต้องหา logic จากหลายไฟล์
- ทีมที่อยากให้ AI ค้น code จาก semantic meaning

จุดเด่น:

- ใช้ vector database
- ดึงเฉพาะ code ที่เกี่ยวข้องเข้า context
- ลดการ explore codebase ซ้ำ ๆ

ข้อควรระวัง:

- ต้องตั้งค่า vector database
- ต้องใช้ embedding API
- setup หนักกว่าสำหรับผู้เริ่มต้น

## 10.3 Claude-Mem

Repository: https://github.com/thedotmack/claude-mem

Claude-Mem เป็น persistent memory plugin ที่ capture สิ่งที่ agent ทำระหว่าง session แล้วสรุปเป็น memory เพื่อใช้ต่อใน session ถัดไป

เหมาะกับ:

- งานหลายวัน
- โปรเจกต์ใหญ่ที่ต้องจำ decision
- คนที่เปิด session ใหม่บ่อย
- ทีมที่อยากเก็บ project memory

ติดตั้งแบบสั้น:

```bash
npx claude-mem install
```

หรือใน Claude Code marketplace:

```text
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

จุดเด่น:

- context ข้าม session
- สรุป observation จาก tool usage
- มี search memory
- มี privacy control เช่น exclude sensitive content

ข้อควรระวัง:

- ต้องเข้าใจว่ามันเก็บข้อมูลอะไร
- ต้องระวัง secret, token, customer data
- ควรอ่าน privacy/config ก่อนใช้จริง

## 10.4 Context Mode

Repository: https://github.com/mksglu/context-mode

Context Mode เป็นเครื่องมือจัดการ context window โดย sandbox tool output และส่ง summary เข้า context แทน raw output ทั้งก้อน

เหมาะกับ:

- tool output ใหญ่ เช่น Playwright snapshots, GitHub issues, access logs
- งานที่ใช้ MCP tools เยอะ
- คนที่ต้องการดู token savings ต่อ session

ติดตั้งใน Claude Code:

```text
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
/reload-plugins
```

ตรวจ:

```text
/context-mode:ctx-doctor
```

คำสั่งที่น่าสนใจ:

```text
/context-mode:ctx-stats
/context-mode:ctx-index
/context-mode:ctx-search
/context-mode:ctx-insight
```

จุดเด่น:

- routing automatic ผ่าน hooks
- มี MCP tools สำหรับ index/search
- มี stats ดู context savings

ข้อควรระวัง:

- setup ซับซ้อนกว่า RTK
- ต้องตรวจว่า hooks ทำงานถูก
- ยังเป็น third-party plugin

## 10.5 claude-token-optimizer

Repository: https://github.com/nadimtuhin/claude-token-optimizer

เป็นชุด prompt/setup template สำหรับจัดเอกสาร project ให้ประหยัด token เช่น ลดการโหลด docs ยาว ๆ แล้วให้ agent โหลดเฉพาะส่วนที่จำเป็น

เหมาะกับ:

- โปรเจกต์ที่มี docs เยอะ
- ทีมที่ใช้ CLAUDE.md / AGENTS.md หนามาก
- คนที่อยากจัด documentation ให้ lazy-load ได้

ใช้เป็นแนวคิดในคอร์สได้ดี:

- อย่าเอาทุกอย่างใส่ AGENTS.md
- แยก docs เป็นไฟล์เฉพาะเรื่อง
- ให้ AI อ่านเฉพาะไฟล์ที่เกี่ยวกับ task

---

# 11. เปรียบเทียบเครื่องมือ

| เครื่องมือ | แก้ปัญหาอะไร | เหมาะกับใคร | ความเหมาะกับคอร์สเริ่มต้น |
|---|---|---|---|
| Superpowers | Workflow/discipline ในการทำงานกับ AI | คนทำ feature หลาย step | สอนเป็น optional/bonus |
| RTK | ลด token จาก terminal output | คนรัน command/log เยอะ | แนะนำเป็น advanced tool |
| Claude Context | Semantic code search จาก codebase | repo ใหญ่/ทีม dev | ยังหนักไปสำหรับเริ่มต้น |
| Claude-Mem | Memory ข้าม session | งานหลายวัน/โปรเจกต์ใหญ่ | optional, ต้องระวัง privacy |
| Context Mode | Sandbox/summarize tool output | tool/MCP output ใหญ่ | advanced มาก |
| claude-token-optimizer | จัด docs/prompt ให้ประหยัด token | ทีมที่มี docs เยอะ | เอาแนวคิดมาใช้ได้ทันที |

---

# 12. แนวทางที่ควรสอนผู้เรียนในคอร์สนี้

สำหรับผู้เรียนทั่วไป ไม่ควรบังคับติดตั้ง plugin เยอะ ให้สอนหลักก่อน:

## หลัก 1: แยกงานให้เล็ก

ไม่ควรสั่ง:

```text
ช่วยแก้เว็บทั้งหมดให้ดีขึ้น
```

ควรสั่ง:

```text
ช่วยแก้เฉพาะ Hero Section ใน components/Hero.tsx
เป้าหมายคือทำให้ CTA ชัดขึ้น
ยังไม่ต้องแก้ไฟล์อื่น
```

## หลัก 2: ส่ง context เท่าที่จำเป็น

ส่ง:

- Brief
- ไฟล์ที่เกี่ยวข้อง
- Error หลัก
- สิ่งที่ต้องการให้แก้

ไม่ส่ง:

- ทั้ง repo
- log ยาว ๆ
- docs ทั้งหมด
- requirement เก่า ๆ ที่ไม่เกี่ยวกับ task

## หลัก 3: ใช้ไฟล์กลางให้ดี

ไฟล์ที่ควรมีในโปรเจกต์:

```text
PROJECT_BRIEF.md
DESIGN_GUIDE.md
COPY_GUIDE.md
AGENTS.md หรือ CLAUDE.md
DEBUG_NOTES.md
```

## หลัก 4: ใช้ plan เป็น checkpoint

ก่อนแก้หลายไฟล์ ให้ให้ AI เขียน plan ก่อน:

```text
ช่วยเขียน plan ก่อน ยังไม่ต้องแก้โค้ด
ระบุไฟล์ที่จะเปลี่ยน เหตุผล และวิธีตรวจหลังแก้
```

## หลัก 5: เปิด chat ใหม่เมื่อเปลี่ยน milestone

ตัวอย่าง milestone:

- Brief เสร็จ
- HTML Preview เสร็จ
- Next.js setup เสร็จ
- Deploy เสร็จ

ก่อนเปิด chat ใหม่ ให้ใช้ handoff summary:

```text
ช่วยสรุปสถานะโปรเจกต์นี้เพื่อใช้ต่อใน chat ใหม่
ขอ Project goal, Tech stack, Important files, Completed work, Next task, Known issues, Commands to run
```

---

# 13. คำแนะนำสำหรับใส่ในคอร์ส

## Core lesson

สอนทุกคน:

- Context คือทรัพยากรจำกัด
- Brief ชัดช่วยลด token และลดงานแก้
- แก้ทีละ Component
- อย่าแปะ log/โค้ดยาวเกินจำเป็น
- ใช้ checklist และ handoff summary

## Bonus lesson

สอนเฉพาะคนที่ใช้ AI coding tool จริงจัง:

- Superpowers
- RTK
- Claude-Mem
- Context Mode
- Claude Context

## ไม่ควรทำ

- บังคับผู้เรียนทุกคนติดตั้ง plugin ตั้งแต่ต้น
- สอนว่า Superpowers เป็น requirement
- สอนว่า plugin จะทำให้ไม่ต้องคิด Brief
- ติดตั้ง plugin จาก repo ที่ไม่รู้จักโดยไม่ตรวจ source
- ให้ plugin เก็บ secret หรือ customer data โดยไม่เข้าใจ config

---

# 14. แหล่งอ้างอิง

- Superpowers GitHub: https://github.com/obra/superpowers
- Superpowers Marketplace: https://github.com/obra/superpowers-marketplace
- Claude Code Plugin Marketplace Docs: https://code.claude.com/docs/en/discover-plugins
- Claude Code Plugin Creation Docs: https://code.claude.com/docs/en/plugins
- Claude Code Skills Docs: https://code.claude.com/docs/en/skills
- Claude Code Hooks Docs: https://code.claude.com/docs/en/hooks
- Anthropic Context Engineering: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- RTK: https://github.com/rtk-ai/rtk
- Claude Context: https://github.com/zilliztech/claude-context
- Claude-Mem: https://github.com/thedotmack/claude-mem
- Context Mode: https://github.com/mksglu/context-mode
- claude-token-optimizer: https://github.com/nadimtuhin/claude-token-optimizer

