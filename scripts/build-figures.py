"""Editable vector figures for the AirSpark research design (standard library only)."""
from pathlib import Path
from html import escape

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'figures'
OUT.mkdir(exist_ok=True)
INK = '#183255'
MUTED = '#52657b'
TEAL = '#087f75'
BLUE = '#215cce'
PURPLE = '#7552a5'
AMBER = '#94601b'
LINE = '#d2dde8'


class Figure:
    def __init__(self, number, title, subtitle, height=940, paper=False):
        self.height = height
        self.paper = paper
        self.parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="{height}" viewBox="0 0 1440 {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(subtitle)}. Proposed research design, not measured results.</desc>
<defs>''']
        for name, color in [('ink', INK), ('teal', TEAL), ('blue', BLUE), ('purple', PURPLE), ('amber', AMBER)]:
            self.parts.append(f'<marker id="arrow-{name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="{color}"/></marker>')
        self.parts.append('</defs><g font-family="Arial, Helvetica, sans-serif"><rect width="1440" height="100%" fill="white"/>')
        if paper:
            self.text(44, 45, title, 29, INK, 700)
            self.text(44, 82, subtitle, 21, MUTED)
            return
        self.text(44, 39, f'AIRSPARK   /   FIGURE {number:02}', 17, TEAL, 700)
        self.text(1396, 39, 'RESEARCH DESIGN  ·  v0.16', 16, MUTED, anchor='end')
        self.text(44, 81, title, 31, INK, 700)
        self.text(44, 112, subtitle, 20, MUTED)
        self.path('M44 130 H1396', LINE, 1, arrow=False)

    def text(self, x, y, value, size=23, color=INK, weight=400, anchor='start'):
        self.parts.append(f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}">{escape(value)}</text>')

    def lines(self, x, y, values, size=22, color=MUTED, step=31):
        for i, value in enumerate(values):
            self.text(x, y+i*step, value, size, color)

    def rect(self, x, y, w, h, fill='white', stroke=LINE, radius=14, dashed=False):
        self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="1.7"'+(' stroke-dasharray="8 6"' if dashed else '')+'/>')

    def box(self, x, y, w, h, title, rows=(), fill='#f6f8fb', accent=TEAL, size=24):
        self.rect(x, y, w, h, fill)
        self.parts.append(f'<path d="M{x+18} {y+24} v24" stroke="{accent}" stroke-width="4"/>')
        self.text(x+32, y+44, title, size, INK, 700)
        self.lines(x+24, y+83, rows)

    def path(self, d, color=INK, width=2.5, arrow=True, dashed=False):
        names = {INK:'ink',TEAL:'teal',BLUE:'blue',PURPLE:'purple',AMBER:'amber'}
        end = f' marker-end="url(#arrow-{names.get(color,"ink")})"' if arrow else ''
        self.parts.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linejoin="round" stroke-linecap="round"'+end+(' stroke-dasharray="8 6"' if dashed else '')+'/>')

    def dot(self, x, y, color=TEAL, r=7):
        self.parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="white" stroke="{color}" stroke-width="3"/>')

    def save(self, name):
        if not self.paper:
            self.path(f'M44 {self.height-49} H1396', LINE, 1, False)
        if not self.paper: self.text(44, self.height-22, 'AirSpark  ·  A Simulated Academy for Self-Improving Aerial Manipulation', 16, MUTED)
        if not self.paper: self.text(1396, self.height-22, 'SCHEMATIC / NOT TO SCALE', 14, MUTED, anchor='end')
        self.parts.append('</g></svg>')
        (OUT / f'{name}.svg').write_text('\n'.join(self.parts), encoding='utf-8')


# 1. An academy, a replaceable decision rule, and a trainable student.
f = Figure(1, 'An academy for persistent policy improvement',
           'Shared facilities support different practice methods; learned capability is retained in the student.', 1000)
f.box(44,158,354,158,'Practice methods', ['Coverage / terminal feedback', 'Process-condition allocation'], '#f1eef8', PURPLE)
f.box(450,158,560,158,'SparkMentor', ['Diagnose → plan → invoke tools → record', 'Budgeted rounds and restartable execution'], '#eaf6f3', TEAL)
f.box(1062,158,334,158,'Experiment memory', ['Evidence, costs, data lineage', 'Models and validation logs'], '#f6f8fb', TEAL, 23)
f.path('M398 231 H450',PURPLE)
f.path('M1010 218 H1062',TEAL)
f.path('M1062 257 H1010',TEAL)
f.rect(44,357,1352,61,'#183255',INK,9)
f.text(720,396,'SHARED TOOL CONTRACT   ·   task → rollout → practice plan → dataset → checkpoint → report',22,'white',600,'middle')
f.path('M730 316 V357',TEAL)
f.path('M790 357 V316',TEAL)
for x in [202,548,894,1240]:
    f.path(f'M{x} 418 V471',TEAL)
f.box(44,471,316,199,'Simulate & execute', ['UE visuals + MuJoCo', 'Tasks, reset and control', 'Student / expert rollouts'], '#eef4fd', BLUE)
f.box(390,471,316,199,'Capture & qualify', ['Synchronized observations', 'Expert action labels', 'Quality and cost records'], '#eef4fd', BLUE)
f.box(736,471,316,199,'Train the student', ['ACT / DP / VLA backend', 'Qualified data + replay', 'Candidate parameters θ′'], '#eef4fd', BLUE)
f.box(1082,471,314,199,'Validate on V', ['Fixed acceptance rules', 'Accept / retain incumbent', 'Record every candidate'], '#f1eef8', PURPLE)
for a,b in [(360,390),(706,736),(1052,1082)]:
    f.path(f'M{a} 570 H{b}', BLUE)
f.path('M1240 670 V728 H202 V670',TEAL)
f.rect(430,704,586,44,'white','white',5)
f.text(723,733,'Accepted student θ → next collection round in C',22,TEAL,600,'middle')
f.path('M1360 670 V795',PURPLE)
f.box(44,795,1352,128,'Independent evaluation after the research configuration is frozen',
      ['Saved students → native AM-Bench and real tasks · no teacher intervention · no test feedback to practice'], '#fbf7ef', AMBER, 25)
f.text(57,764,'C: collection pool   ·   V: development acceptance pool   ·   T: sealed evaluation pool',19,MUTED)
f.save('fig01-academy-overview')

# 2. Visual and physical worlds have explicit, distinct responsibilities.
f = Figure(2,'One execution, aligned visual and physical evidence',
           'Appearance, collision geometry and control share entity identities, coordinates and time.', 1020)
f.box(44,160,304,216,'Scene appearance', ['Multi-view scene capture', '3DGS static appearance', 'Camera calibration'], '#eaf6f3', TEAL)
f.box(44,448,304,231,'Physical assets', ['Collision geometry', 'Movable objects + joints', 'Mass, friction and actuation', 'Task semantics'], '#f1eef8', PURPLE)
f.box(407,160,420,216,'Unreal Engine', ['Render model-facing RGB', 'Calibrated camera and occlusion', 'Place dynamic assets from poses'], '#eef4fd', BLUE)
f.box(407,448,420,231,'MuJoCo', ['Floating base + arm dynamics', 'Contact, slip and load transfer', 'Controller and actuator state', 'Explicit task reset'], '#f1eef8', PURPLE)
f.box(906,160,490,216,'Observation adapter', ['Coordinate, entity and time alignment', 'RGB history + permitted proprioception', 'Deployment-matched input whitelist'], '#eef4fd', BLUE)
f.box(906,448,490,231,'Policy and execution adapter', ['Student πθ  OR  fixed collection expert', 'Reference frame, units and control rate', 'Low-level controller → actuation', 'Mark action source and takeover time'], '#eaf6f3', TEAL)
f.path('M348 266 H407',TEAL)
f.path('M348 554 H407',PURPLE)
f.path('M827 266 H906',BLUE)
f.path('M906 554 H827',TEAL)
f.path('M620 448 V376',PURPLE)
f.text(635,416,'object poses',18,PURPLE)
f.path('M827 489 H865 V340 H906',PURPLE)
f.text(875,432,'state',17,PURPLE)
f.path('M1151 376 V448',BLUE)
f.text(1170,417,'observations',18,BLUE)
f.box(44,750,1352,191,'A synchronized execution record',
      ['RGB · issued actions · realized motion · contact events · action provenance · task outcome · actual cost',
       'Privileged diagnostics and expert labels stay on the collection / evaluation side.',
       'Export only permitted student inputs; 3DGS appearance does not replace contact physics.'], '#f6f8fb', TEAL, 26)
for x in [202,620,1151]:
    f.path(f'M{x} 679 V750',INK,dashed=True)
f.save('fig02-visual-physical-contract')

# 3. Intermediate practice is produced by real physics and expert execution.
f = Figure(3,'From execution gaps to trainable experience',
           'A reference practice method on shared academy tools; the learning benefit remains an experimental question.', 1030)
f.rect(44,162,330,649,'#f6f8fb')
f.rect(414,162,596,649,'#f6f8fb')
f.rect(1050,162,346,649,'#f6f8fb')
f.text(68,204,'A  Select a condition',25,INK,700)
f.text(438,204,'B  Reach it, then collect continuations',25,INK,700)
f.text(1074,204,'C  Qualify & learn',25,INK,700)
f.box(64,233,290,162,'Execution evidence',['Reached-stage counts', 'Transition failures', 'Qualified experience cost'],'white',TEAL,22)
f.text(73,443,'Reference allocation',22,TEAL,700)
f.text(73,482,'q(z) ∝ frequency × failure',21,INK)
f.text(130,514,'/ experience cost',21,INK)
f.lines(73,565,['Check before practice:', '• student-observable cues', '• reachable physical state', '• available expert continuation'],19, MUTED,31)
f.lines(73,731,['Sparse evidence → bounded', 'exploration, not zero risk.'],20, MUTED,30)
f.path('M374 445 H414',TEAL)
f.text(438,256,'Legal initial state → physical prefix',22,INK,600)
f.path('M454 330 H668',BLUE,4)
for x in [454,510,566,622]: f.dot(x,330,BLUE,6)
f.dot(668,330,TEAL,9)
f.text(438,365,'Physical prefix',19,BLUE)
f.text(642,298,'Condition z',20,TEAL,600)
f.path('M668 330 H956',AMBER,2.5,True,True)
f.text(771,304,'Observed failure',19,AMBER)
f.text(944,362,'×',31,AMBER,700)
for d,y in [('M668 330 C718 330 736 435 812 435 H963',435),('M668 330 C716 330 729 515 812 515 H963',515),('M668 330 C711 330 724 595 812 595 H963',595)]:
    f.path(d,TEAL,3)
    f.dot(970,y,TEAL,7)
f.text(804,410,'Expert continuation 1',18,TEAL)
f.text(804,490,'Expert continuation 2',18,TEAL)
f.text(804,570,'Expert continuation k',18,TEAL)
f.lines(438,666,['Each branch is a separate physical rollout.', 'Re-execute the prefix from a valid initial state;', 'use snapshots only after restoration checks.', 'Successful continuation is not proof of learning.'],20,MUTED,31)
f.path('M1010 445 H1050',TEAL)
f.box(1070,233,306,195,'Quality gate', ['Condition hit + valid timing', 'Expert action provenance', 'Complete expert success', 'Log rejected attempts'],'white',TEAL,22)
f.path('M1223 428 V465',TEAL)
f.box(1070,465,306,145,'Supervised dataset',['Prefix → history only', 'Expert → action targets'],'#eaf6f3',TEAL,22)
f.path('M1223 610 V660',BLUE)
f.box(1070,660,306,126,'Student update',['New experience + replay', 'Fixed training recipe'],'#eef4fd',BLUE,22)
f.rect(44,849,1352,103,'#fbf7ef')
f.text(68,885,'Supervision boundary',23,AMBER,700)
f.text(356,885,'Expert action chunks must stay within the accepted expert-control interval.',22,INK)
f.text(68,924,'Count prefix misses, failed continuations, reset and quality checks in the collection budget.',22,MUTED)
f.save('fig03-process-experience')

# 4. Standard experimental pipeline: initialize, improve, evaluate.
f = Figure(4, 'Experimental pipeline',
           'Initialize a policy, improve it in AirSpark, and evaluate the initial and updated policies.', 740, paper=True)
f.text(44,135,'(a) Policy initialization',24,INK,700)
f.text(365,135,'(b) Improvement in AirSpark',24,INK,700)
f.text(1080,135,'(c) Evaluation',24,INK,700)

def node(x,y,w,h,title,subtitle=None,fill='white',accent=LINE):
    f.rect(x,y,w,h,fill,accent,5)
    f.text(x+w/2,y+39,title,21,INK,600,'middle')
    if subtitle: f.text(x+w/2,y+73,subtitle,18,MUTED,anchor='middle')

node(44,185,256,112,'AM-Bench data','Original training recipe')
f.path('M172 297 V345',INK)
node(44,345,256,80,'Initial policy π₀',fill='#eef4fd',accent=BLUE)
f.rect(355,164,650,360,'#f9fafb',LINE,5)
node(375,205,255,100,'Policy rollout','Execute the current policy')
node(710,205,275,100,'Practice selection','Analyze execution feedback')
node(710,390,275,100,'Expert data collection','Generate demonstrations')
node(375,390,255,100,'Policy training','New data + replay',fill='#eaf6f3',accent=TEAL)
f.path('M300 385 H330 V255 H375',INK)
f.path('M630 255 H710',INK)
f.text(670,237,'feedback',17,MUTED,anchor='middle')
f.path('M848 305 V390',INK)
f.text(868,353,'plan',17,MUTED)
f.path('M710 440 H630',INK)
f.text(670,422,'data',17,MUTED,anchor='middle')
f.path('M503 390 V305',TEAL)
f.text(484,353,'πᵣ₊₁',20,TEAL,anchor='end')
node(500,570,475,100,'Freeze policies for evaluation','Initial π₀ and updated πᴿ',fill='#eef4fd',accent=BLUE)
f.path('M330 385 V620 H500',INK,2.5,True,True)
f.path('M503 490 V544 H738 V570',TEAL)
f.text(757,552,'updated policy',18,TEAL)
node(1080,205,316,120,'AM-Bench evaluation','Original tasks and scoring')
node(1080,410,316,120,'Real-world evaluation','Corresponding physical tasks')
f.path('M975 620 H1040 V265 H1080',BLUE)
f.path('M1040 470 H1080',BLUE)
f.text(44,710,'Compare complete-task success before and after improvement under the same evaluation conditions.',21,MUTED)
f.save('fig04-evaluation-protocol')

print(f'Built 4 SVG figures in {OUT}')
