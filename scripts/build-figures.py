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
    def __init__(self, number, title, subtitle, height=940):
        self.height = height
        self.parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="{height}" viewBox="0 0 1440 {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(subtitle)}. Proposed research design, not measured results.</desc>
<defs>''']
        for name, color in [('ink', INK), ('teal', TEAL), ('blue', BLUE), ('purple', PURPLE), ('amber', AMBER)]:
            self.parts.append(f'<marker id="arrow-{name}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="{color}"/></marker>')
        self.parts.append('</defs><g font-family="Arial, Helvetica, sans-serif"><rect width="1440" height="100%" fill="white"/>')
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
        self.path(f'M44 {self.height-49} H1396', LINE, 1, False)
        self.text(44, self.height-22, 'AirSpark  ·  A Simulated Academy for Self-Improving Aerial Manipulation', 16, MUTED)
        self.text(1396, self.height-22, 'SCHEMATIC / NOT TO SCALE', 14, MUTED, anchor='end')
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

# 4. Keep the collection feedback loop separate from final testing.
f = Figure(4,'Test the facility, the learning gain, and real transfer',
           'Predefine task groups and protocols; all branches share student interfaces and matched controls.', 1120)
f.box(44,170,315,166,'Native AM-Bench', ['Reproduce parent θ₀', 'Lock task / robot / scoring', 'Record original performance'], '#eef4fd', BLUE)
f.rect(409,170,590,462,'#eaf6f3',TEAL)
f.text(433,212,'AirSpark: collection pool C',26,INK,700)
f.text(433,248,'Shared expert, reset, prefix tools and QC',22,MUTED)
for y,title,sub in [(278,'B1  Coverage','Cover permitted visual and physical factors'),(379,'B2  Terminal feedback','Allocate by task / condition terminal failure'),(480,'B3  Process conditions','Allocate by transition evidence and cost')]:
    f.rect(433,y,542,87,'white',LINE,10)
    f.text(451,y+33,title,23,INK,700)
    f.text(451,y+64,sub,21,MUTED)
f.text(433,604,'Matched acquisition budget + training recipe',22,TEAL,600)
f.path('M359 278 H409',BLUE)
f.box(44,397,315,235,'B0  Frozen parent',['No new collection or training', 'Reference capability only', '', 'Not an equal-cost', 'training arm'], '#f6f8fb',BLUE,23)
f.path('M201 336 V397',BLUE)
f.box(409,682,590,133,'Development pool V', ['Predefined acceptance → next collection round', 'Allowed summaries only; no V trajectories in training'], '#f1eef8', PURPLE)
f.path('M703 632 V682',PURPLE)
f.path('M409 752 H383 V360 H409',PURPLE)
f.rect(1049,170,347,645,'#fbf7ef',AMBER,14,True)
f.text(1073,213,'Sealed evaluation T',25,INK,700)
f.lines(1073,260,['Freeze research configuration', 'and saved student checkpoints.'],21,MUTED,31)
f.box(1071,356,303,169,'Native return test',['Original task + controller', 'Original success rules', 'Held-out initial conditions'],'white',AMBER,22)
f.box(1071,559,303,169,'Frozen real execution',['Parent / baseline / B3', 'Shared calibration + control', 'Paired task conditions'],'white',AMBER,22)
f.text(1073,776,'No test-to-practice feedback',21,AMBER,600)
f.path('M999 731 H1049',PURPLE)
f.path('M201 632 V658 H70 V838 H1024 V313 H1071',BLUE,2.5,True,True)
f.text(100,738,'Frozen-parent route',20,BLUE)
f.text(100,772,'Independent final testing',19,MUTED)
f.rect(44,872,1352,151,'#f6f8fb')
f.text(68,910,'Real-scene preparation',24,INK,700)
f.text(68,949,'Scene capture → 3DGS appearance + physical assets → matched simulation practice',23,TEAL)
f.text(68,988,'Separate scene-matched transfer from held-out layouts / objects; real test feedback is excluded.',21,MUTED)
f.text(44,1053,'Report: facility reliability & cost   |   full-task success & uncertainty   |   real failures, drops & interventions',21,INK)
f.save('fig04-evaluation-protocol')

print(f'Built 4 SVG figures in {OUT}')
