import type { Lesson } from '../types'

const lesson07: Lesson = {
  title: 'AI Coding Skills & Context Management',
  sections: [
    {
      title: 'Skill คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'การใช้ AI ทำเว็บให้ได้ผลไม่ได้อยู่ที่ Prompt เดียว แต่อยู่ที่ Workflow ที่ทำซ้ำได้',
        },
        {
          type: 'paragraph',
          text: 'คุณควรรู้วิธีแบ่งงานให้เล็กลง ใช้ชุดคำสั่งเฉพาะทาง และจัดการ Context ไม่ให้ AI อ่านข้อมูลเกินจำเป็น',
        },
        {
          type: 'paragraph',
          text: 'ในบริบทของ AI Coding คำว่า Skill หมายถึงชุดคำสั่ง Workflow หรือ Checklist ที่ทำซ้ำได้ เพื่อให้ AI ทำงานอย่างมีระบบมากขึ้น',
        },
        {
          type: 'paragraph',
          text: 'ถ้าคุณต้องทำงานเดิมซ้ำหลายครั้ง เช่น รีวิว Landing Page, Debug Error หรือสร้าง Component ใหม่ การมี Skill หรือ Prompt Workflow ช่วยให้คุณไม่ต้องเริ่มเขียนคำสั่งใหม่ทุกครั้ง และทำให้ผลลัพธ์จาก AI สม่ำเสมอขึ้น',
        },
        {
          type: 'paragraph',
          text: 'จำง่าย ๆ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Skill = วิธีทำงานซ้ำที่ทำให้ AI เข้าใจและช่วยเราได้เร็วขึ้น',
        },
        {
          type: 'paragraph',
          text: 'Skill ที่ควรใช้ในคอร์สนี้:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Project Brief Skill',
            'Landing Page Review Skill',
            'Component Builder Skill',
            'Debug Skill',
            'Deploy Checklist Skill',
            'Token Saving / Context Management Skill',
          ],
        },
        {
          type: 'table',
          head: ['Skill', 'ใช้เมื่อไร', 'ผลลัพธ์ที่ควรได้'],
          rows: [
            ['Project Brief Skill', 'ตอนมีไอเดียแต่ยังไม่เป็นโจทย์ชัด', 'Brief ที่มีเป้าหมาย กลุ่มเป้าหมาย Pain Point และ CTA'],
            ['Landing Page Review Skill', 'หลังมี Preview หรือหน้าเว็บแล้ว', 'รายการจุดแข็ง จุดที่ควรแก้ และ Priority Fix'],
            ['Component Builder Skill', 'เมื่อต้องสร้างหรือแก้ Section เดียว', 'Component ที่อ่านง่าย Responsive และไม่กระทบไฟล์อื่น'],
            ['Debug Skill', 'เมื่อเจอ Error', 'สาเหตุ วิธีแก้ ไฟล์ที่เกี่ยวข้อง และคำสั่งตรวจผล'],
            ['Deploy Checklist Skill', 'ก่อนหรือหลัง Deploy', 'รายการ pass/fail และสิ่งที่ต้องแก้ก่อนขึ้นออนไลน์'],
            ['Context Management Skill', 'เมื่อ Chat ยาวหรือโปรเจกต์เริ่มมีหลายไฟล์', 'สรุปสถานะและไฟล์สำคัญสำหรับทำงานต่อ'],
          ],
        },
      ],
    },
    {
      title: 'Token คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'Token คือหน่วยที่ AI ใช้อ่านและเขียนข้อมูล ยิ่งเราใส่ข้อมูลเยอะ AI ก็ต้องอ่านเยอะ และยิ่ง AI ตอบยาวก็ใช้ Token มากขึ้น',
        },
        {
          type: 'paragraph',
          text: 'ในการทำเว็บจริง Token มักหมดไปกับการแปะโค้ดทั้งไฟล์ แปะ Error Log ยาว ๆ หรือคุยใน Chat เดิมหลายเรื่องปนกัน การจัด Context จึงช่วยประหยัดเวลาและลดความสับสนของ AI',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'Token = งบประมาณความจำของ AI ในแต่ละรอบ',
        },
        {
          type: 'paragraph',
          text: 'สิ่งที่ทำให้ Token หมดเร็ว:',
        },
        {
          type: 'list',
          items: [
            'แปะโค้ดทั้งไฟล์ ทั้งที่แก้แค่ส่วนเดียว',
            'ให้ AI อ่านทั้งโปรเจกต์โดยไม่จำเป็น',
            'คุยใน Chat เดิมยาวเกินไป',
            'ส่ง Error Log ยาวเกินไป',
            'แปะ Requirement เดิมซ้ำทุกครั้ง',
            'สั่ง AI แก้หลายเรื่องในรอบเดียว',
            'ให้ AI Rewrite ทั้งหน้า ทั้งที่ควรแก้แค่ Component เดียว',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'สัญญาณว่า Context เริ่มบวม',
          text: 'AI เริ่มจำ requirement ผิด แก้ไฟล์ที่ไม่เกี่ยวข้อง ตอบยาวเกินจำเป็น หรือแนะนำเรื่องที่เคยตกลงว่าไม่ทำแล้ว',
        },
      ],
    },
    {
      title: 'หลัก Context Hygiene',
      blocks: [
        {
          type: 'paragraph',
          text: 'ก่อนสั่ง AI ทุกครั้ง ให้ถามตัวเอง 4 ข้อ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'AI จำเป็นต้องรู้อะไรบ้างเพื่อทำงานนี้?\nAI ไม่จำเป็นต้องรู้อะไร?\nควรให้ AI ดูไฟล์ไหนเท่านั้น?\nอยากให้ AI แก้อะไรแบบเฉพาะเจาะจง?',
        },
        {
          type: 'paragraph',
          text: 'หลักนี้สำคัญมากตอนโปรเจกต์เริ่มมีหลาย Component เพราะ AI ไม่จำเป็นต้องอ่านทั้งโปรเจกต์ถ้าคุณต้องแก้แค่ปุ่ม CTA ใน Hero การให้ context พอดีทำให้ AI ตอบตรงและตรวจงานง่ายกว่า',
        },
        {
          type: 'heading',
          text: 'Prompt ที่กว้างเกินไป',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยดูโปรเจกต์ทั้งหมดแล้วแก้หน้าเว็บให้ดูดีขึ้น',
        },
        {
          type: 'heading',
          text: 'Prompt ที่ดีกว่า',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยแก้เฉพาะ Hero Section ในไฟล์ components/Hero.tsx\nเป้าหมายคือปรับข้อความให้ขายคอร์ส Vibe Code Website Bootcamp ได้ชัดขึ้น\nยังไม่ต้องแก้ไฟล์อื่น\nตอบกลับเฉพาะ code ที่ต้องเปลี่ยนและเหตุผลสั้น ๆ',
        },
        {
          type: 'table',
          head: ['งาน', 'Context ที่ควรให้', 'Context ที่ไม่จำเป็น'],
          rows: [
            ['แก้ Hero', 'Brief, กลุ่มเป้าหมาย, ข้อความ Hero เดิม', 'โค้ด FAQ หรือ Footer ทั้งไฟล์'],
            ['แก้ Pricing', 'Offer, ราคา, กลุ่มเป้าหมาย, Component Pricing', 'ประวัติการคุยตั้งแต่เริ่มโปรเจกต์'],
            ['Debug Build', 'คำสั่งที่รัน, Error หลัก, ไฟล์ที่เพิ่งแก้', 'Log ทั้งหมดหลายร้อยบรรทัด'],
            ['Deploy', 'Vercel error, env ที่ใช้, build command', 'โค้ดทุก Component ถ้า Error ชี้ที่ config'],
          ],
        },
      ],
    },
    {
      title: 'แยก Task ให้เล็กลง',
      blocks: [
        {
          type: 'paragraph',
          text: 'แบ่งงานเป็นรอบเล็ก ๆ:',
        },
        {
          type: 'code',
          lang: 'text',
          code: 'รอบที่ 1: วาง Section\nรอบที่ 2: ทำ Hero\nรอบที่ 3: ทำ Course Outline\nรอบที่ 4: ทำ Pricing\nรอบที่ 5: ทำ FAQ\nรอบที่ 6: ตรวจ Responsive\nรอบที่ 7: เชื่อม Form\nรอบที่ 8: Deploy',
        },
        {
          type: 'callout',
          variant: 'key',
          text: 'งานเล็กลง = AI เข้าใจง่ายขึ้น = ใช้ Token น้อยลง = แก้ผิดน้อยลง',
        },
        {
          type: 'paragraph',
          text: 'เมื่อทำทีละรอบ คุณจะตรวจผลลัพธ์ได้ชัด เช่น หลังแก้ Hero ก็เปิดเว็บดู Hero ก่อน อย่าเพิ่งให้ AI แก้ Pricing, FAQ และ Footer พร้อมกัน เพราะถ้ามีปัญหาจะไม่รู้ว่าเกิดจากจุดไหน',
        },
        {
          type: 'checklist',
          items: [
            'กำหนดงานรอบนี้ให้เล็กพอ เช่น แก้ 1 Component',
            'บอกไฟล์ที่เกี่ยวข้องให้ชัด',
            'บอกสิ่งที่ห้ามแก้ถ้าจำเป็น',
            'ตรวจผลลัพธ์ก่อนสั่งงานรอบถัดไป',
            'Commit เมื่อแก้สำเร็จเป็นจุดสำคัญ',
          ],
        },
      ],
    },
    {
      title: 'Superpowers Plugin คืออะไร',
      blocks: [
        {
          type: 'paragraph',
          text: 'Superpowers คือ plugin / skills framework สำหรับ AI coding agents ที่ช่วยบังคับ Workflow การทำงานให้เป็นระบบมากขึ้น เช่น brainstorm ก่อนเขียนโค้ด เขียน design/spec เขียน plan แยก branch หรือ worktree execute ตามแผน review และ verify',
        },
        {
          type: 'paragraph',
          text: 'แกนสำคัญของ Superpowers ไม่ใช่การทำให้ AI เก่งขึ้นแบบอัตโนมัติ แต่คือการบังคับให้ AI ทำงานแบบมีวินัยมากขึ้น ลดการเขียนโค้ดผิดทิศ ลดการแก้หลายไฟล์มั่ว ๆ และทำให้งานใหญ่มี checkpoint ที่ตรวจสอบได้',
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'จำง่าย ๆ',
          text: 'Superpowers = Brief → Brainstorm → Design → Plan → Execute → Review → Verify',
        },
        {
          type: 'table',
          head: ['เหมาะกับ', 'ยังไม่จำเป็น'],
          rows: [
            ['เพิ่ม feature ที่มีหลายไฟล์', 'แก้ข้อความเล็ก ๆ'],
            ['เชื่อม Contact Form กับฐานข้อมูล', 'เปลี่ยนสีปุ่ม 1 จุด'],
            ['Refactor โครง Component', 'เพิ่ม bullet ใน Section เดิม'],
            ['แก้ระบบที่ต้องมี test/review', 'ทดลอง prompt สั้น ๆ'],
            ['งานที่ต้องวาง architecture', 'งานที่ยังเป็นไอเดียดิบมาก ๆ'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'อย่าใช้เป็นข้อบังคับสำหรับทุกคน',
          text: 'สำหรับคอร์สเริ่มต้น ควรสอน Superpowers เป็น optional / advanced workflow เพราะผู้เรียนบางคนยังไม่เข้าใจ Git, branch หรือ worktree มากพอ',
        },
      ],
    },
    {
      title: 'Workflow และการติดตั้ง Superpowers',
      blocks: [
        {
          type: 'flow',
          steps: [
            'Brainstorm',
            'Design / Spec',
            'Git Worktree หรือ Branch แยก',
            'Write Plan',
            'Execute Plan',
            'Code Review',
            'Verify',
            'Finish Branch',
          ],
        },
        {
          type: 'definitions',
          items: [
            { term: 'Brainstorm', desc: 'คุยโจทย์ สำรวจทางเลือก และตัดสินใจแนวทางก่อนเขียนโค้ด' },
            { term: 'Design / Spec', desc: 'เอกสารสรุปขอบเขต งานที่ต้องทำ data flow และ acceptance criteria' },
            { term: 'Git Worktree / Branch', desc: 'พื้นที่ทำงานแยกจาก main เพื่อไม่ให้โค้ดหลักเสียหาย' },
            { term: 'Write Plan', desc: 'แตกงานเป็น task เล็ก ๆ พร้อมไฟล์ที่จะเปลี่ยนและวิธี verify' },
            { term: 'Execute Plan', desc: 'ทำตามแผนทีละ task ไม่กระโดดไปแก้สิ่งอื่นก่อน' },
            { term: 'Review', desc: 'ตรวจว่าโค้ดตรงกับ spec และไม่มีปัญหาคุณภาพสำคัญ' },
            { term: 'Verify', desc: 'รัน test, build หรือเปิดเว็บตรวจว่าการแก้ไขทำงานจริง' },
          ],
        },
        { type: 'heading', text: 'Claude Code' },
        {
          type: 'code',
          lang: 'text',
          code: '/plugin install superpowers@claude-plugins-official',
        },
        {
          type: 'paragraph',
          text: 'ถ้าต้องการใช้ Superpowers marketplace โดยตรง:',
        },
        {
          type: 'code',
          lang: 'text',
          code: '/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace',
        },
        { type: 'heading', text: 'Codex / Cursor / Gemini CLI' },
        {
          type: 'list',
          items: [
            'Codex CLI / Codex App: เปิด plugin marketplace หรือหน้า Plugins แล้วค้นหา `superpowers`',
            'Cursor: ใช้ `/add-plugin superpowers` หรือค้นหาใน plugin marketplace',
            'Gemini CLI: ใช้ `gemini extensions install https://github.com/obra/superpowers`',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'ความปลอดภัยก่อนติดตั้ง',
          text: 'ติดตั้ง plugin จาก marketplace หรือ repository ที่ตรวจสอบได้เท่านั้น และอ่านว่า plugin มี skills, hooks, MCP servers หรือ permissions อะไรบ้างก่อนใช้กับโปรเจกต์จริง',
        },
      ],
    },
    {
      title: 'ใช้ Superpowers กับงานทำเว็บ',
      blocks: [
        {
          type: 'paragraph',
          text: 'ตัวอย่างนี้ใช้กับงานเพิ่ม Contact Form ในเว็บ Next.js ซึ่งเป็นงานที่มีหลายส่วน เช่น UI, validation, state, database และ verification',
        },
        { type: 'heading', text: 'Step 1: Brainstorm ก่อนเขียนโค้ด' },
        {
          type: 'code',
          lang: 'text',
          code: 'ฉันต้องการเพิ่มระบบ Contact Form ในเว็บ Next.js นี้\nช่วย brainstorm แนวทางก่อน ยังไม่ต้องเขียนโค้ด\nเป้าหมายคือเก็บ lead ชื่อ เบอร์ LINE ID และบริการที่สนใจ',
        },
        { type: 'heading', text: 'Step 2: ทำ Design / Spec' },
        {
          type: 'code',
          lang: 'text',
          code: 'จากแนวทางที่เลือก ช่วยสรุป design document\nระบุไฟล์ที่จะเกี่ยวข้อง data flow, validation, success state, error state และวิธีทดสอบ',
        },
        { type: 'heading', text: 'Step 3: ขอ Plan ก่อน Execute' },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วยเขียน implementation plan เป็น task เล็ก ๆ\nแต่ละ task ต้องระบุ:\n- ไฟล์ที่จะแก้\n- สิ่งที่ต้องทำ\n- วิธี verify\nยังไม่ต้องลงมือแก้โค้ด',
        },
        { type: 'heading', text: 'Step 4: Execute ทีละ task' },
        {
          type: 'code',
          lang: 'text',
          code: 'เริ่ม execute task 1 ตาม plan\nหลังทำเสร็จให้สรุปไฟล์ที่แก้และวิธีตรวจ',
        },
        { type: 'heading', text: 'Step 5: Review และ Verify' },
        {
          type: 'code',
          lang: 'text',
          code: 'ช่วย review งานที่ทำเทียบกับ plan\nจัด findings ตาม severity\nถ้าไม่มี issue ให้บอก test gap หรือ residual risk',
        },
        {
          type: 'checklist',
          items: [
            'เข้าใจว่า Superpowers คือ workflow ไม่ใช่ shortcut',
            'รู้ว่าเมื่อไรควรใช้และเมื่อไรไม่จำเป็น',
            'ติดตั้งจากแหล่งที่เชื่อถือได้',
            'ใช้ Brainstorm และ Plan ก่อนแก้หลายไฟล์',
            'Review และ Verify ทุกครั้งก่อนถือว่างานเสร็จ',
          ],
        },
      ],
    },
    {
      title: 'Context Engineering และ Token Saving',
      blocks: [
        {
          type: 'paragraph',
          text: 'Context Engineering คือการจัดการข้อมูลที่ส่งเข้าไปให้ AI ในแต่ละรอบ ไม่ใช่แค่เขียน Prompt ให้สวย แต่คือการเลือกว่าข้อมูลอะไรควรเข้า context และข้อมูลอะไรควรถูกตัดออก',
        },
        {
          type: 'paragraph',
          text: 'Context เป็นทรัพยากรจำกัด ยิ่งใส่ข้อมูลเยอะ AI ยิ่งต้องอ่านเยอะ ใช้ token มากขึ้น และบางครั้งอาจสับสนเพราะมีข้อมูลที่ไม่เกี่ยวกับงานปัจจุบันปนอยู่',
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'จำง่าย ๆ',
          text: 'Prompt ที่ดีคือคำสั่งชัด ส่วน Context ที่ดีคือข้อมูลที่จำเป็นและพอดี',
        },
        {
          type: 'table',
          head: ['Context ที่ดี', 'Context ที่ไม่ดี'],
          rows: [
            ['Brief เฉพาะงานนี้', 'ประวัติแชทยาว ๆ ที่ไม่เกี่ยว'],
            ['ไฟล์ Component ที่ต้องแก้', 'ทั้ง repo โดยไม่จำเป็น'],
            ['Error หลัก 20-40 บรรทัด', 'log ทั้งหมดหลายร้อยบรรทัด'],
            ['ข้อจำกัดที่ต้องทำตาม', 'requirement เก่าที่เลิกใช้แล้ว'],
          ],
        },
      ],
    },
    {
      title: 'เครื่องมือช่วยประหยัด Token / จัดการ Context',
      blocks: [
        {
          type: 'paragraph',
          text: 'เครื่องมือเหล่านี้เป็น optional สำหรับผู้เรียนที่ใช้ AI coding tool จริงจัง ไม่จำเป็นต้องติดตั้งทุกตัวในคอร์สเริ่มต้น ให้เลือกตามปัญหาที่เจอจริง',
        },
        {
          type: 'table',
          head: ['เครื่องมือ', 'แก้ปัญหาอะไร', 'เหมาะกับใคร'],
          rows: [
            ['RTK', 'บีบ/กรอง terminal output ก่อนเข้า context', 'คนที่รัน command/log เยอะ'],
            ['Claude Context', 'ค้น code ที่เกี่ยวข้องด้วย semantic search', 'repo ใหญ่ที่ไม่อยากโหลดทั้ง codebase'],
            ['Claude-Mem', 'เก็บ memory ข้าม session', 'งานหลายวันหรือเปิด session ใหม่บ่อย'],
            ['Context Mode', 'sandbox/summarize tool output และมี stats', 'งานที่ใช้ MCP/tools output ใหญ่'],
            ['claude-token-optimizer', 'จัด docs/prompt ให้ lazy-load และประหยัด token', 'ทีมที่มี docs หรือ AGENTS.md ยาว'],
          ],
        },
        { type: 'heading', text: 'Claude-Mem' },
        {
          type: 'paragraph',
          text: 'Claude-Mem เป็น persistent memory plugin ที่จับ observation ระหว่าง session สรุปเป็น memory และ inject context ที่เกี่ยวข้องกลับมาใน session ถัดไป',
        },
        {
          type: 'code',
          lang: 'bash',
          code: 'npx claude-mem install',
        },
        {
          type: 'paragraph',
          text: 'หรือถ้าใช้ Claude Code marketplace:',
        },
        {
          type: 'code',
          lang: 'text',
          code: '/plugin marketplace add thedotmack/claude-mem\n/plugin install claude-mem',
        },
        { type: 'heading', text: 'Context Mode' },
        {
          type: 'paragraph',
          text: 'Context Mode ช่วยจัดการ tool output ขนาดใหญ่โดย sandbox และสรุป output ก่อนเข้า context เหมาะกับงานที่มี Playwright snapshots, GitHub issues, access logs หรือ MCP output จำนวนมาก',
        },
        {
          type: 'code',
          lang: 'text',
          code: '/plugin marketplace add mksglu/context-mode\n/plugin install context-mode@context-mode\n/reload-plugins',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'ระวังข้อมูลส่วนตัวและ secret',
          text: 'เครื่องมือ memory หรือ context plugin อาจเก็บบริบทจาก session จึงต้องอ่าน config/privacy และหลีกเลี่ยงการให้มันเก็บ API keys, customer data หรือข้อมูลลับ',
        },
      ],
    },
    {
      title: 'เลือกใช้เครื่องมือให้เหมาะกับปัญหา',
      blocks: [
        {
          type: 'paragraph',
          text: 'สำหรับคอร์สนี้ ไม่ควรบังคับผู้เรียนติดตั้งเครื่องมือ context/token ทุกตัว ให้เริ่มจากหลักการก่อน แล้วค่อยเลือกเครื่องมือเมื่อเจอปัญหาจริง',
        },
        {
          type: 'table',
          head: ['ถ้าคุณเจอปัญหา...', 'ให้เริ่มจาก...'],
          rows: [
            ['AI อ่านโค้ดเยอะเกินไป', 'แก้ prompt ให้ชี้ไฟล์เฉพาะก่อน แล้วค่อยดู Claude Context'],
            ['Terminal output ยาวมาก', 'ส่ง error เฉพาะส่วนสำคัญก่อน แล้วค่อยพิจารณา RTK'],
            ['เปิด session ใหม่แล้วต้องเล่าใหม่หมด', 'ใช้ handoff summary ก่อน แล้วค่อยดู Claude-Mem'],
            ['MCP/tool output ใหญ่มาก', 'ลดขอบเขต tool call ก่อน แล้วค่อยดู Context Mode'],
            ['AGENTS.md ยาวเกินไป', 'แยก docs เป็นไฟล์เฉพาะเรื่อง'],
          ],
        },
        {
          type: 'checklist',
          items: [
            'แยก task ให้เล็กก่อนหา plugin',
            'ส่ง context เฉพาะที่จำเป็น',
            'สรุป handoff เมื่อเปลี่ยน milestone',
            'อ่านสิทธิ์และ privacy ของ plugin ก่อนติดตั้ง',
            'อย่าให้ plugin เก็บ secret หรือข้อมูลลูกค้าโดยไม่เข้าใจ config',
          ],
        },
      ],
    },
  ],
}

export default lesson07
