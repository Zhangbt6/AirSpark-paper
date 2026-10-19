"""Bilingual, editable feedback-role figure; proposed design, not a stability proof."""
from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
INK, MUTED, TEAL, BLUE, PURPLE, LINE = '#183255', '#52657b', '#087f75', '#215cce', '#7552a5', '#d2dde8'

STRINGS = {
    'title': ('Learning as a feedback process', '学习过程的闭环反馈表述'),
    'subtitle': ('Fixed objectives, measured capabilities, bounded interventions and verified updates.', '固定目标、能力测量、有限干预与更新验证。'),
    'goal': ('Reference objectives', '参考目标'),
    'goal1': ('Capability targets c*', '能力目标 c*'),
    'goal2': ('Task groups and retention', '固定任务分组与能力保留'),
    'goal3': ('Resource budget', '资源预算'),
    'decision': ('SparkMentor  μ', 'SparkMentor  μ'),
    'decision1': ('Gaps eᵣ + evidence Eᵣ', '能力差距 eᵣ 与证据 Eᵣ'),
    'decision2': ('Intervention memory Mᵣ', '跨轮干预记忆 Mᵣ'),
    'decision3': ('Choose a practice plan Aᵣ', '选择练习计划 Aᵣ'),
    'process': ('Academy execution and student learning  U', '学院执行与学生学习 U'),
    'process1': ('Physical prefix → expert data → quality checks', '物理前缀 → 专家经验 → 质量检查'),
    'process2': ('Train the student: xᵣ → candidate x′ᵣ₊₁', '训练学生：xᵣ → 候选状态 x′ᵣ₊₁'),
    'process3': ('ACT / DP / VLA; fixed deployment interface', 'ACT / DP / VLA；部署接口固定'),
    'process4': ('Actual execution, with sampling and optimization variability', '实际执行，包含采样与优化的随机性'),
    'measure': ('Development measurement  Hᵥ', '开发测量 Hᵥ'),
    'measure1': ('Fixed tasks and scoring protocol', '固定任务与评分协议'),
    'measure2': ('Capability estimates and uncertainty', '能力估计与不确定性'),
    'measure3': ('Task gains, retention and cost', '完整任务收益、能力保留与成本'),
    'accept': ('Compare and retain', '比较与接纳'),
    'accept1': ('Candidate versus parent', '候选与父模型比较'),
    'accept2': ('Validate or keep current student', '验收更新或保留当前学生'),
    'accept3': ('Predefined stopping rules', '预先规定停止条件'),
    'memory': ('Feedback memory', '反馈与版本记忆'),
    'memory1': ('Eᵣ: current rollout evidence (C)', 'Eᵣ：当前执行证据（采集池 C）'),
    'memory2': ('Fᵣ: learning response (V)', 'Fᵣ：学习后的变化（开发池 V）'),
    'memory3': ('Plans, outcomes and costs', '干预方案、结果与成本'),
    'plan': ('Aᵣ', 'Aᵣ'),
    'return': ('feedback + memory', '反馈与记忆'),
    'state': ('next learning state', '下一轮学习状态'),
    'response': ('readout', '实测响应'),
    'record': ('Fᵣ + decision', 'Fᵣ 与接纳结果'),
    'caption': ('U is an executed learning process; H is a measurement, not an outcome predictor.', 'U 是实际学习过程；H 是执行后的测量，未引入学习收益预测器。'),
    'test': ('Sealed testing T: freeze the student → native benchmark and real tasks; no feedback to this loop.', '封存测试 T：冻结学生 → 原生基准与真实任务；结果不回流当前闭环。'),
    'scope': ('Diagram A3 explains the feedback roles in Figure 2; it does not establish convergence or stability.', '图 A3 解释图 2 的反馈关系，不代表已证明收敛或稳定性。'),
}

def draw(zh=False):
    idx = int(zh)
    val = lambda key: STRINGS[key][idx]
    font = 'Microsoft YaHei, Noto Sans CJK SC, Arial, sans-serif' if zh else 'Arial, Helvetica, sans-serif'
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810" viewBox="0 0 1440 810" role="img" aria-labelledby="title desc"><title id="title">{escape(val("title"))}</title><desc id="desc">{escape(val("scope"))}</desc><defs>']
    for name, col in [('ink',INK),('teal',TEAL),('purple',PURPLE)]:
        out.append(f'<marker id="a-{name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="{col}"/></marker>')
    out.append(f'</defs><g font-family="{font}"><rect width="1440" height="810" fill="white"/>')
    def text(x,y,key,size=20,col=MUTED,weight=400,anchor='start'):
        v=val(key) if key in STRINGS else key
        out.append(f'<text x="{x}" y="{y}" fill="{col}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}">{escape(v)}</text>')
    def rect(x,y,w,h,fill,stroke=LINE):
        out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="5" fill="{fill}" stroke="{stroke}" stroke-width="1.7"/>')
    def box(x,y,w,h,title,rows,fill='#f7f9fc',stroke=LINE):
        rect(x,y,w,h,fill,stroke)
        text(x+18,y+37,title,23,INK,600)
        for i,row in enumerate(rows):text(x+18,y+75+i*31,row,19)
    def path(d,col=INK,dashed=False):
        name={INK:'ink',TEAL:'teal',PURPLE:'purple'}[col]
        out.append(f'<path d="{d}" fill="none" stroke="{col}" stroke-width="2.5" stroke-linejoin="round" marker-end="url(#a-{name})"'+(' stroke-dasharray="7 5"' if dashed else '')+'/>')
    text(44,46,'title',29,INK,700)
    text(44,83,'subtitle',21)
    box(44,150,270,180,'goal',['goal1','goal2','goal3'],'#eef4fd',BLUE)
    box(374,150,290,180,'decision',['decision1','decision2','decision3'],'#eaf6f3',TEAL)
    box(724,150,672,225,'process',['process1','process2','process3','process4'],'#f7f9fc')
    path('M314 235H374')
    path('M664 235H724',TEAL)
    text(694,218,'plan',20,TEAL,500,'middle')
    box(44,475,350,175,'memory',['memory1','memory2','memory3'],'#f1eef8',PURPLE)
    box(520,475,350,175,'accept',['accept1','accept2','accept3'])
    box(970,475,426,175,'measure',['measure1','measure2','measure3'],'#eef4fd',BLUE)
    path('M1183 375V475')
    path('M970 560H870')
    text(920,540,'response',16,MUTED,400,'middle')
    path('M520 560H394',PURPLE)
    text(457,540,'record',16,PURPLE,400,'middle')
    path('M219 475V405H519V330',PURPLE)
    text(300,394,'return',19,PURPLE)
    path('M695 475V420H900V375',TEAL)
    text(730,409,'state',18,TEAL)
    text(44,693,'caption',20)
    rect(44,722,1352,48,'#f7f9fc')
    text(62,753,'test',20,INK)
    text(44,799,'scope',16)
    out.append('</g></svg>')
    name='fig05-learning-feedback'+('-zh' if zh else '')+'.svg'
    (ROOT/'figures'/name).write_text('\n'.join(out),encoding='utf-8')
    print(name)

draw(False)
draw(True)
