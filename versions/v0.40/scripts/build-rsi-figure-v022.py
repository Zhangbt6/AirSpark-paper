"""Figure 2: six-stage learning cycle with a separate cross-round feedback path.

Run after the older figure builders. Outputs editable English/Chinese SVGs;
the manuscript's export-figures.cjs renders PNGs without changing geometry.
"""
from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'figures'
INK = '#183255'
MUTED = '#52657b'
TEAL = '#087f75'
PURPLE = '#7552a5'
LINE = '#c9d5e2'


def render(zh):
    def t(c, e): return c if zh else e
    p = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1640" height="950" viewBox="0 0 1640 950" role="img" aria-labelledby="title desc">
<title id="title">{t('执行与学习反馈驱动的策略自进化','Policy self-improvement through execution and learning feedback')}</title>
<desc id="desc">{t('六步主循环：策略执行、交互过程诊断、反馈驱动练习规划、专家监督生成、学生策略更新、学习评估与接纳。执行证据进入规划，学习结果写入干预记忆供后续轮次读取。','Six stages: policy rollout, interaction diagnosis, feedback-guided practice planning, expert supervision generation, student policy update, learning evaluation and acceptance. Learning feedback enters intervention memory for subsequent planning.')}</desc>
<defs>''']
    for name, col in [('main', INK), ('exec', TEAL), ('memory', PURPLE)]:
        p.append(f'<marker id="arrow-{name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="{col}"/></marker>')
    p.append(f'''</defs><rect width="1640" height="950" fill="white"/>
<g font-family="Microsoft YaHei,Noto Sans CJK SC,Arial,sans-serif" fill="{INK}">''')

    def text(x, y, s, size=25, weight=400, col=INK, anchor='start'):
        label=escape(s)
        # Keep policy parameters as a true subscript, rather than a pi-theta product.
        label=label.replace('πθᵣ₊₁','π<tspan baseline-shift="sub" font-size="75%">θᵣ₊₁</tspan>')
        label=label.replace('πθᵣ','π<tspan baseline-shift="sub" font-size="75%">θᵣ</tspan>')
        p.append(f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{col}" text-anchor="{anchor}">{label}</text>')

    def box(x,y,w,h,num,title,lines,tint='white',accent=LINE):
        p.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="7" fill="{tint}" stroke="{accent}" stroke-width="1.8"/>')
        text(x+19,y+43,str(num),25,700,col=TEAL)
        # Two title lines make the English naming equally readable at paper width.
        for j,l in enumerate(title): text(x+51,y+43+j*31,l,27,650)
        for j,l in enumerate(lines): text(x+21,y+119+j*35,l,24,col=MUTED)

    def arrow(d,kind='main'):
        col={'main':INK,'exec':TEAL,'memory':PURPLE}[kind]
        p.append(f'<path d="{d}" fill="none" stroke="{col}" stroke-width="3" stroke-linejoin="round" marker-end="url(#arrow-{kind})"/>')

    text(45,45,t('执行与学习反馈驱动的策略自进化','Policy self-improvement through execution and learning feedback'),31,700)
    text(45,84,t('六步学习循环；跨轮干预记录支持后续练习修订','A six-stage learning cycle; intervention history supports subsequent practice revision'),24,col=MUTED)

    # Clockwise cycle; stage numbering and every main arrow agree.
    box(45,165,335,235,1,[t('策略执行','Policy rollout')],
        [t('采集池 C：学生策略 πθᵣ','Student πθᵣ; task pool C'),t('观测历史与动作命令','Observations and actions'),t('实际运动与任务结果','Motion and task outcomes')], '#eef4fd')
    box(440,165,335,235,2,[t('交互过程诊断','Interaction'),t('','diagnosis')] if not zh else ['交互过程诊断'],
        [t('阶段到达与转换失败','Stage reach / failure'),t('可观测性、可达性检查','Observability / feasibility'),t('频率、失败率与经验成本','Frequency, failure and cost')])
    box(845,165,355,235,3,[t('反馈驱动练习规划','Feedback-guided'),t('SparkMentor','practice planning')],
        [t('条件预算 q(z)','Condition priority q(z)'),t('监督起点与示范构成','Takeover / example mix'),t('经验回放选项','Replay configuration')], '#eaf6f3', TEAL)
    box(845,520,355,235,4,[t('专家监督生成','Expert supervision'),t('','generation')] if not zh else ['专家监督生成'],
        [t('合法物理前缀','Legal physical prefixes'),t('固定专家执行延续','Fixed expert continuation'),t('监督质检与数据导出','Check and export labels')])
    box(440,520,335,235,5,[t('学生策略更新','Student policy'),t('','update')] if not zh else ['学生策略更新'],
        [t('新增数据与接纳回放','Qualified data + replay'),t('固定基础学习算法','Fixed learning algorithm'),t('按计划训练候选学生','Train from the plan')], '#eef4fd')
    box(45,520,335,235,6,[t('学习评估与接纳','Learning evaluation'),t('','and acceptance')] if not zh else ['学习评估与接纳'],
        [t('开发池 V：父代／候选','V: parent / candidate'),t('完整任务收益与能力保留','Task gains / retention'),t('接纳更新或保留父代','Accept or retain parent')], '#f4f7fa')

    # Main path has no crossings. The feedback return stays below/outside it.
    arrow('M380 282 H430')
    arrow('M775 282 H835','exec')
    text(805,255,'Eᵣ',24,600,TEAL,'middle')
    arrow('M1022 400 V510')
    text(1042,459,t('练习计划 Aᵣ','Practice plan Aᵣ'),23,col=TEAL)
    arrow('M845 637 H785')
    text(810,611,'Dᵣ',23,col=MUTED,anchor='middle')
    arrow('M440 637 H390')
    text(412,611,'θ′',24,col=MUTED,anchor='middle')
    arrow('M212 520 V410')
    text(230,453,t('保留策略','Retained policy'),23,col=TEAL)
    text(230,486,'πθᵣ₊₁',24,600,TEAL)

    # Memory is a record used by planning, not another learned teacher network.
    p.append(f'<rect x="1260" y="165" width="335" height="590" rx="7" fill="#f3f0f8" stroke="{PURPLE}" stroke-width="1.8"/>')
    text(1280,208,t('跨轮干预记忆','Intervention memory'),27,650)
    text(1280,251,'Mᵣ → Mᵣ₊₁',28,600,PURPLE)
    for i,l in enumerate([
        t('已尝试的练习方案','Past practice plans'),
        t('生成数据与学生版本','Datasets / model versions'),
        t('学习效果与能力保留','Learning gains / retention'),
        t('实际成本与不确定性','Cost / uncertainty'),
        t('接纳与拒绝均记录','Record every attempt')]):
        text(1280,327+i*49,l,24,col=MUTED)
    text(1280,655,t('学习反馈支持后续修订','Learning feedback guides'),22,600,PURPLE)
    if not zh: text(1280,688,'subsequent plan revision',22,600,PURPLE)
    else: text(1280,691,'供后续轮次读取',23,col=PURPLE)
    arrow('M1260 282 H1210','memory')
    text(1230,255,t('历史','History'),20,col=PURPLE,anchor='middle')
    arrow('M212 755 V815 H1428 V765','memory')
    # Opaque label background keeps long feedback annotation visually separate.
    p.append('<rect x="340" y="790" width="770" height="45" fill="white"/>')
    text(725,821,t('学习反馈 Fᵣ：任务收益、能力保留与实际成本','Learning feedback Fᵣ: task gains, retention and actual cost'),24,500,PURPLE,'middle')
    text(45,888,t('第 r 轮：Eᵣ 与既往 Mᵣ → 练习 Aᵣ → 学生更新 → Fᵣ 写入 Mᵣ₊₁','Round r: Eᵣ and prior Mᵣ → practice Aᵣ → student update → Fᵣ stored in Mᵣ₊₁'),23,col=MUTED)
    text(45,930,t('封存评价位于学习闭环之外：冻结学生 → 原生基准与物理实机；测试反馈不参与修订','Outside the learning loop: frozen student → native benchmark and physical robot; no test feedback'),23,col=MUTED)
    p.append('</g></svg>')
    (OUT/('fig02-rsi-method'+('-zh' if zh else '')+'.svg')).write_text('\n'.join(p)+'\n',encoding='utf-8')


if __name__=='__main__':
    render(False)
    render(True)
    print('Generated Figure 2: six-stage cycle with correctly timed execution / learning feedback.')
