from pathlib import Path
from html import escape
R=Path(__file__).resolve().parents[1]
F=R/'figures'
def text(a,x,y,s,cl='body'):
    a.append(f'<text x="{x}" y="{y}" class="{cl}">{escape(s)}</text>')
def box(a,x,y,w,h,title,lines,color):
    a.append(f'<g><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{color}" stroke="#aabbd0" stroke-width="1.5"/>')
    text(a,x+22,y+35,title,'head')
    for i,line in enumerate(lines):text(a,x+22,y+71+30*i,line)
    a.append('</g>')
def arrow(a,points):a.append(f'<polyline points="{points}" fill="none" stroke="#426281" stroke-width="2.5" marker-end="url(#arrow)"/>')
for zh in [False,True]:
    def t(c,e):return c if zh else e
    a=['''<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1000" viewBox="0 0 1440 1000" role="img"><title>'''+t('学院、闭环学习与外部检验','Academy, feedback learning, and external evaluation')+'''</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#426281"/></marker></defs><rect width="1440" height="1000" fill="white"/><style>text{font-family:"Microsoft YaHei","Noto Sans CJK SC",Arial,sans-serif;fill:#172c47}.title{font-size:28px;font-weight:700}.head{font-size:23px;font-weight:650}.body{font-size:20px}.small{font-size:18px;fill:#506781}</style>''']
    text(a,40,46,t('学院、反馈学习与外部检验','Academy, feedback learning, and external evaluation'),'title')
    box(a,40,82,1360,135,t('先导：核验任务与部署合同，冻结学习协议','Pilot: verify task/deployment contracts and freeze the learning protocol'),[
      t('至少两个任务，一个学生后端；记录 B0 数据、训练配方与 checkpoint','At least two tasks, one student backend; record B0 data, training recipe and checkpoint'),
      t('核验专家、真实本体与配准；根据实测成本确定轮次、独立学习链和预算','Verify expert, real embodiment and registration; pilot costs determine rounds, chains and budgets')],'#fff5e5')
    box(a,40,250,1360,145,t('E1 · 学院设施：可控练习、可靠监督与实际成本','E1 · Academy facilities: controllable practice, supervision reliability and cost'),[
      t('复用主实验日志：时序、跟踪、复位、专家产出、标签一致性与恢复','Reuse main-study logs: timing, tracking, resets, expert yield, label consistency and recovery'),
      t('一个任务：原生 AM-Bench B1 vs 学院 B1，固定流程与预算一致','One task: native AM-Bench B1 vs academy B1, with matched fixed workflow and budget')],'#e9f7f2')
    box(a,40,430,1360,200,t('E2 · 多轮反馈学习：完整闭环是否优于固定流程？','E2 · Multi-round feedback learning: does the complete loop beat a fixed workflow?'),[
      t('主表：B0 冻结初始策略 ｜ B1 固定覆盖采集训练 ｜ AirSpark 完整反馈闭环','Main: B0 frozen initial policy | B1 fixed coverage collection/training | AirSpark complete loop'),
      t('共用设施、专家、训练配方与验收；同干预调度、资源上限和配对随机种子','Shared facilities, expert, training and gate; same intervention schedule, caps and paired seeds'),
      t('一次决策选一个方案，采集训练一次，再与父代比较；按完整学习链统计','Select one plan, collect/train once, then compare with the parent; analyze complete learning chains'),
      t('代表任务归因：固定过程方案、规则修订、当前反馈与历史反馈','Representative-task attribution: fixed process plan, rule revision, current and historical feedback')],'#eaf3ff')
    arrow(a,'720,630 720,675 365,675 365,705');arrow(a,'720,675 1075,675 1075,705')
    box(a,40,715,650,200,t('E3 · 冻结学生：AM-Bench 原生任务','E3 · Frozen student: native AM-Bench'),[
      t('未修改的任务、本体、动作与评分合同','Unmodified task, robot, action and scoring'),
      t('B0 / B1 / 完整 AirSpark','B0 / B1 / complete AirSpark'),
      t('相对初始策略的变化与同预算组间差值','Change from B0 and matched-budget contrasts'),
      t('合同不匹配则单列衍生设置','Contract mismatch: report a derived setting')],'#eaf3ff')
    box(a,750,715,650,200,t('E3 · 冻结学生：物理实机任务','E3 · Frozen student: physical robot'),[
      t('真实扫描、3DGS 外观与显式物理配准','Real scan, 3DGS and explicit physics registration'),
      t('先核验本体与部署兼容，再定比较范围','Audit embodiment/deployment before fixing scope'),
      t('对应场景与预留物体／布局分别报告','Separate corresponding and held-out conditions'),
      t('不使用 Mentor 临场纠错','No runtime Mentor correction')],'#fff5e5')
    text(a,40,958,t('封存测试与正式实机测试不向闭环回流；图示为研究设计，具体规模与结果待验证','Sealed and final physical tests never feed back; study scale and quantitative outcomes remain unverified'),'small')
    (F/('fig04-evaluation-protocol'+('-zh' if zh else '')+'.svg')).write_text('\n'.join(a)+'</svg>\n',encoding='utf-8')
print('Generated Figure 3 only. Figure 2 remains unchanged.')
