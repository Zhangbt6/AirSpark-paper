from pathlib import Path
from html import escape
R=Path(__file__).resolve().parents[1]
# This script is copied into the canonical project's scripts directory before use.
F=R/'figures'
BG='#ffffff'; INK='#172c47'; MUTED='#506781'; BLUE='#eaf3ff'; TEAL='#e9f7f2'; GOLD='#fff5e5'; EDGE='#adbdcf'
def begin(title,h):
    return [f'<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="{h}" viewBox="0 0 1440 {h}" role="img"><title>{escape(title)}</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#426281"/></marker></defs><rect width="1440" height="{h}" fill="white"/><style>text{{font-family:"Microsoft YaHei","Noto Sans CJK SC",Arial,sans-serif;fill:{INK}}}.title{{font-size:28px;font-weight:700}}.head{{font-size:23px;font-weight:650}}.body{{font-size:20px}}.small{{font-size:18px;fill:{MUTED}}}</style>']
def text(a,x,y,s,cl='body',anchor='start'): a.append(f'<text x="{x}" y="{y}" class="{cl}" text-anchor="{anchor}">{escape(s)}</text>')
def box(a,x,y,w,h,title,lines,fill=BLUE):
    a.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="{EDGE}" stroke-width="1.5"/>')
    text(a,x+20,y+35,title,'head')
    for i,l in enumerate(lines): text(a,x+20,y+70+i*29,l)
def arrow(a,pts): a.append(f'<polyline points="{pts}" fill="none" stroke="#426281" stroke-width="2.5" marker-end="url(#arrow)"/>')
def save(name,a): (F/name).write_text('\n'.join(a)+ '</svg>\n',encoding='utf-8')
for zh in [False,True]:
    def t(c,e): return c if zh else e
    suf='-zh' if zh else ''
    a=begin(t('反馈驱动的策略自进化方法','Feedback-driven policy self-improvement'),900)
    text(a,40,47,t('反馈驱动的策略自进化','Feedback-driven policy self-improvement'),'title')
    text(a,40,82,t('学生参数更新与有界练习计划修订；两种反馈进入同一闭环','Student updates and bounded plan revision use two feedback streams'),'small')
    box(a,40,120,390,165,t('当前学生执行','Current student execution'),[t('固定采集池 C 与部署输入','Fixed collection pool C and inputs'),t('命令、运动、阶段事件与失败','Commands, motion, events, failures'),t('Eᵣ：当前执行诊断','Eᵣ: current execution diagnosis')])
    box(a,490,120,910,165,t('SparkMentor · 有界练习决策','SparkMentor: bounded practice decisions'),[t('输入：Eᵣ、允许的学习反馈／记忆、当前方案 ηᵣ 与剩余预算','Inputs: Eᵣ, permitted feedback/memory, current plan ηᵣ, remaining budget'),t('动作：监督起点、局部／完整经验构成、预设回放选项','Actions: takeover event, local/full demonstration mix, preset replay'),t('固定 B3 ｜规则修订｜当前反馈 Agent｜历史反馈 Agent','Fixed B3 | Rule revision | Current agent | History agent')],TEAL)
    arrow(a,'430,201 480,201')
    box(a,40,350,390,165,t('学院：实际经验生成','Academy: execute practice'),[t('合法物理前缀 → 固定专家延续','Legal physical prefix → fixed expert'),t('时间／动作／完整终态质检','Timing, action and outcome checks'),t('输出：合格数据与实际成本','Outputs: qualified data and cost')])
    box(a,490,350,390,165,t('候选学生训练','Train candidate students'),[t('同一父状态与已接纳数据','Same parent state and accepted data'),t('共享优化算法与候选步数','Shared optimizer and training steps'),t('候选分支隔离并全部计费','Isolate and charge every branch')])
    box(a,940,350,460,165,t('开发评价与接纳','Development evaluation and gate'),[t('V：完整任务收益、能力保留','V: full-task gains and retention'),t('配对初态、固定评分与经验门槛','Paired starts, fixed scoring and gate'),t('Fᵣ：学习反馈，不回流 V 训练样本','Fᵣ: learning feedback; no V samples')],GOLD)
    arrow(a,'940,285 940,317 235,317 235,340');arrow(a,'430,430 480,430');arrow(a,'880,430 930,430')
    box(a,40,580,840,155,t('跨轮干预记忆 Mᵣ₊₁','Intervention memory Mᵣ₊₁'),[t('父代 → 方案 → 数据 → 候选 → 评价 → 接纳／拒绝 → 成本','Parent → plan → data → candidate → evaluation → decision → cost'),t('规则组与历史 Agent 同证据；当前组仅最近一次 F','Rule and history agent share evidence; current agent sees latest F'),t('拒绝仍保留失败证据与支出；下次检查可提出新方案','Rejection preserves evidence and spend for the next allowed check')],TEAL)
    box(a,940,580,460,155,t('下一轮保留状态','Retained state for next round'),[t('接纳：提交 θ、训练状态、数据和 η','Accept: commit θ, training state, data, η'),t('拒绝：保留父代与当前方案','Reject: keep parent and current plan'),t('尝试轮次、成本与采集随机流推进','Attempts, spend and collection RNG advance')])
    arrow(a,'1170,515 1170,570');arrow(a,'940,657 890,657');arrow(a,'460,580 460,303 675,303 675,295')
    text(a,475,560,t('Fᵣ 与全部尝试写入记忆','Write Fᵣ and all attempts to memory'),'small')
    arrow(a,'1400,655 1420,655 1420,105 235,105 235,110')
    text(a,40,800,t('固定约束：学生接口、专家、低层控制、优化算法、任务权重与验收标准','Fixed: student interface, expert, low-level control, optimizer, task weights and acceptance'),'small')
    text(a,40,836,t('所有诊断、失败、候选训练与复验计入相同资源上限；反思文本不等于学习收益','Every diagnosis, failure, branch and retest is charged; reflection text is not a learning gain'),'small')
    text(a,40,872,t('封存测试 T 与真实最终测试在闭环外执行，反馈不得进入修订决策','Sealed T and final physical-real tests are outside the loop and never guide revision'),'small')
    save('fig02-rsi-method'+suf+'.svg',a)
    a=begin(t('实验流程与独立验证','Study design and independent evaluation'),1000)
    text(a,40,47,t('实验流程与独立验证','Study design and independent evaluation'),'title')
    box(a,40,85,1360,130,t('先导门：冻结任务、本体、父代与统计方案','Pilot gate: freeze task, embodiment, parent and statistical design'),[t('原生环境 ID／控制器／动作／观测／成功判据；B0 数据、训练状态与模型哈希','Native environment / controller / action / observation / success; B0 provenance and hash'),t('核验跨环境对应与真实本体；确定实际效应、seed、回合数、预算与候选选项','Audit simulator and real-robot correspondence; fix effect size, seeds, episodes, budget and options')],GOLD)
    arrow(a,'720,215 720,245')
    box(a,40,255,1360,170,t('主比较：至少两个不同任务 · 一个学生后端 · 至少三次有序干预','Main study: ≥2 distinct tasks · one student backend · ≥3 ordered interventions'),[t('B0 冻结父代（零增量成本参照）','B0 frozen parent (zero incremental cost reference)'),t('B3 固定方案 ｜ B3+adapt-rule ｜ B3+adapt-current ｜ B3+adapt-history','B3 fixed | B3+adapt-rule | B3+adapt-current | B3+adapt-history'),t('同动作空间、工具、验收与资源上限；被拒候选与额外训练全部计费','Same actions, tools, gate and resource caps; charge rejected candidates and extra training')],BLUE)
    box(a,40,465,1360,140,t('来源对照：至少一个主任务的 2 × 2，复用学院主方法','Source control: 2 × 2 on ≥1 main task; reuse the academy main method'),[t('原生 AM-Bench / AirSpark  ×  B1 覆盖 / B3+adapt-history 历史修订','Native AM-Bench / AirSpark  ×  B1 coverage / B3+adapt-history revision'),t('同一 B0、匹配部署合同与采集预算；差异解释为完整数据来源的作用','Same B0, matched deployment contract and collection budget; source effect is a bundle')],TEAL)
    arrow(a,'720,425 720,455')
    arrow(a,'720,605 720,635 350,635 350,665');arrow(a,'720,635 1090,635 1090,665')
    box(a,40,675,650,200,t('冻结学生：AM-Bench 原生回测','Frozen student: native AM-Bench'),[t('未修改的任务、机器人与评分合同','Unmodified task, robot and scoring contract'),t('封存初态 T；禁止反馈进入闭环','Sealed starts T; no feedback to learning'),t('不匹配设置单列为衍生实验','Contract mismatches → derived setting'),t('相对 B0 变化 + 同源／跨源差值','Change from B0 + within/cross-source contrasts')])
    box(a,750,675,650,200,t('冻结学生：物理实机执行','Frozen student: physical robot'),[t('3DGS 外观 + 显式物理／机器人配准','3DGS appearance + explicit physics/robot registration'),t('B0 / 最强固定或规则基线 / 历史方法','B0 / strongest fixed or rule / history method'),t('本体不同须匹配父代并单列重跑成本','Different body: matched parent and explicit loop cost'),t('对应场景与预留物体／布局分别报告','Separate corresponding scene and held-out layouts')],GOLD)
    text(a,40,926,t('H1：可靠监督与成本　　H2：同预算修订收益　　H3：原生与真实检验分别成立','H1: reliable supervision and cost    H2: matched-budget revision gains    H3: native and physical-real evidence'),'small')
    text(a,40,967,t('示意图为预定研究协议；任务对应、统计规模与定量结果仍待先导验证','Proposed protocol; task correspondence, statistical scale and quantitative results remain pilot-dependent'),'small')
    save('fig04-evaluation-protocol'+suf+'.svg',a)
print('Generated bilingual method and study-design SVGs.')
