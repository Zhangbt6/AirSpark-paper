document.querySelector('#content').insertAdjacentHTML('beforeend',`
<section id="introduction" data-title="引言" data-number="1">
<div class="eyebrow">INTRODUCTION</div><h2>1. 引言</h2>
<p>空中操作使机器人能够在不同高度和受限空间中执行抓取、运输与接触作业。与固定基座操作相比，飞行运动、机械臂动作和环境反作用共同影响末端执行；接触与载荷转换还会改变后续运动的条件。空中机器人综述与实体基准已将运动精度、交互响应和执行能力确立为重要评价维度。<cite data-ref="aerial-survey aerial-bench"></cite> 学习型接触控制、视觉动作策略与空中操作基准进一步推动了自主执行，也使学习所需的动态交互经验成为关键问题。<cite data-ref="aerial-sliding ambench airvla"></cite></p>
<p>空中操作的学习不仅需要数据，还需要将场景构造、物理执行、任务复位、监督生成与训练评价连接起来。数据需求随学生能力变化：DAgger 和部署中学习研究利用策略自身访问的状态及纠正经验进行后续更新；自主采集研究也指出，复位、成功判断和数据质量可能限制学习收益。<cite data-ref="dagger sirius autonomous-cost"></cite> 因此，支持持续学习的设施需要同时保证经验可生成、过程可追溯和收益可检验。空中接触与载荷变化提供了具体研究情境：几何位置相近的状态可能需要不同后续动作，而这些差异还须能由学生实际使用的观测辨识。<cite data-ref="aerial-sliding contact-survey"></cite></p>
<p>自动示范扩展和数字孪生为持续提供练习建立了基础。MimicGen 与 RoboTwin 支持生成操作示范，RialTo 研究重建环境中的策略改进与真实迁移。<cite data-ref="mimicgen robotwin rialto"></cite> 反馈驱动学习也已有明确先例：CorrectNav 将导航错误转化为纠正数据并迭代训练，近期 EmbodiRSI 将执行监测、中途纠正和自适应采集连接到操作策略更新。<cite data-ref="correctnav embodirsi"></cite> RPG 进一步将数据集引导的仿真练习、共享技能改进与真实部署连接起来。<cite data-ref="rpg"></cite> 本文在这些基础上研究面向空中操作的模拟学院：如何以一致的执行、监督与评价协议组织完整学习过程，使不同练习方法能够复用同一设施，并检验其对学生独立任务表现的作用？</p>
<p>为此，本文提出 <b>AirSpark：面向空中操作策略自进化的模拟学院</b>。平台基础设施连接 UE 视觉、MuJoCo 物理、场景与任务、自动采集与标注、训练和评测；SparkMentor 依据执行证据与跨轮记录组织学习；练习决策方法在统一工具和预算约束下选择采集内容。本文采用过程条件分配作为参考实现，从合法初态执行物理前缀并获取专家延续。平台的任务与产物协议保持稳定，练习方法可以替换，学习结果通过学生参数更新保留。在多轮运行中，执行反馈用于定位能力缺口，训练后的学习反馈用于检查干预效果，并支持在限定范围内调整后续练习方案。</p>
<p>本文将策略自进化限定为执行反馈影响后续学习、学生权重跨轮更新并接受独立评价的过程。跨轮记忆同时保留学习干预及其结果，使后续决策能够利用已有证据。验证分为平台、学习与迁移三个层面：先检查视觉—动作时序、复位、监督质量与运行恢复，再以共享工具的等预算实验比较练习方法，最后将更新后的模型返回原生 AM-Bench 并在对应真实场景中冻结执行。平台支持能力与具体方法收益分别报告，共同检验模拟学院能否持续服务于空中操作策略的学习。</p>
<h3 id="contributions">本文的主要贡献</h3>
<ol class="contribution-list">
<li><b>面向空中操作策略学习的模拟学院平台。</b>以统一的任务、观测动作和运行产物协议连接视觉—物理仿真、自动经验生成、训练与评价，为可重复、可追溯的闭环实验提供基础设施，并以执行可靠性、监督产出与运行成本检验其支持能力。</li>
<li><b>基于学院设施的反馈驱动策略自进化框架。</b>通过 SparkMentor 连接执行诊断、实验记忆、练习采集和学生更新，以过程条件分配作为可比较的参考方法，并以学习反馈和跨轮干预记忆支持有限的练习方案调整。框架通过同预算学习对照、原生基准回测与冻结策略的真实执行检验能力保留和迁移。</li>
</ol>
</section>

<section id="related" data-title="相关工作" data-number="2">
<div class="eyebrow">RELATED WORK</div><h2>2. 相关工作</h2>
<h3 id="related-aerial" data-nav="空中交互与学习" data-number="2.1">2.1 空中操作与学习型交互</h3>
<p>空中操作研究已系统讨论平台构型、浮动基座协调与接触控制。T-RO 综述总结该领域的能力与挑战；Suarez 等的实体基准给出精度、耗时和交互响应等评价维度。<cite data-ref="aerial-survey aerial-bench"></cite> Zhang 等在仿真中训练基于本体与触觉信号的可变阻抗策略，并验证真实空中滑动，说明空中接触学习及迁移具有既有基础。<cite data-ref="aerial-sliding"></cite> 本文固定低层控制与专家，研究执行经验如何用于视觉动作学生的后续学习。</p>
<p>近期 AM-Bench 提供空中操作任务、机器人与策略评价接口；AIR-VLA、AirVLA 和 AeroManip-VLA 分别探索空中视觉语言操作、物理引导迁移，以及强化学习专家产生的示范。<cite data-ref="ambench air-vla airvla aeromanip"></cite> AirSpark 复用可验证的任务与策略接口，将当前学生的过程证据连接到下一轮练习，并返回原生协议评价更新后的模型。</p>
<h3 id="related-simulation" data-nav="仿真与经验生成" data-number="2.2">2.2 仿真设施、数字孪生与示范生成</h3>
<p>Aerial Gym 在 Isaac Gym 上集成多旋翼动力学、并行控制、传感器与策略训练，并展示真实迁移；已有物理仿真基准也通过真实记录度量模拟执行的误差。<cite data-ref="aerial-gym sim-benchmark"></cite> 因此，渲染引擎或物理引擎的选择不能单独证明任务保真度。AirSpark 使用 UE、MuJoCo 及 URLab 基础组件，重点组织视觉—动作时序、物理交互、条件重现和监督验收。<cite data-ref="mujoco urlab"></cite></p>
<p>MimicGen 从少量示范扩展新情境的数据，RoboTwin 将生成式数字孪生与专家示范、评价环境连接，MILES 则围绕单次示范自主采集返回示范路径的经验。<cite data-ref="mimicgen robotwin miles"></cite> RialTo 利用数字孪生中的策略学习实现真实任务鲁棒化，RoboSplat 通过编辑三维高斯生成视觉多样的示范。<cite data-ref="rialto robosplat"></cite> AirSpark 中的 3DGS 用于场景外观对应，接触与可动物体由显式物理资产承担；这些设施共同服务于可重复的练习生成和闭环学习，具体采集方法通过统一接口使用它们。<cite data-ref="3dgs"></cite></p>
<h3 id="related-learning" data-nav="交互监督与数据闭环" data-number="2.3">2.3 交互监督、预算分配与数据闭环</h3>
<p>DAgger 聚合学习者所访问状态上的专家监督；DART 利用与学习者误差相关的扰动扩展示范。<cite data-ref="dagger dart"></cite> ThriftyDAgger 根据新颖性与风险在介入预算下请求监督；Sirius 从部署与人工纠正中收集经验，以加权行为克隆持续更新策略。<cite data-ref="thrifty sirius"></cite> 因此，学习者反馈、恢复示范和预算约束均有明确先例。AirSpark 为练习决策提供共享执行与监督接口，本文以过程条件分配作为参考方法，并通过共享前缀执行与专家延续工具区分恢复数据本身与分配机制的作用。</p>
<p>CorrectNav 在导航任务中识别错误轨迹，生成动作与感知纠正数据并多轮训练，是反馈驱动参数更新的正式发表近邻；其任务与监督机制不等同于空中接触操作。<cite data-ref="correctnav"></cite> AHA 提供操作失败检测与解释的方法基础。<cite data-ref="aha"></cite> Mirchandani 等对自主采集的研究则表明，环境复位、成功检测和所采数据的效用需要单独审查。<cite data-ref="autonomous-cost"></cite> 本文据此分别报告诊断证据、合格监督成本与独立学生收益，不将诊断正确或数据量增加直接解释为学习有效。</p>
<h3 id="related-feedback" data-nav="程序改进与策略自进化" data-number="2.4">2.4 主动诊断、程序改进与策略自进化</h3>
<p>Fly-by-Code 通过 View 与 Probe 主动获取视觉及物理诊断证据，用于任务判断和程序修订；修订程序在环境复位后重新执行。其改进对象是表达机器人行为的可执行程序，核心实验检验主动诊断对程序改进的作用。<cite data-ref="fly-by-code"></cite> 程序同样可以表示策略，但这一路线与通过训练更新学生权重具有不同机制。本文将其作为空中主动诊断的近邻，而不把它描述为学生参数训练方法。</p>
<p>RPG 从离线数据构造相关仿真练习，通过执行诊断修订共享技能代码与系统提示，并在跨任务验证后保留修改，再将冻结系统部署到实机；模型权重保持不变。其 Reconstruct 构造能力相关的任务，不要求复原源场景。<cite data-ref="rpg"></cite> 因而，仿真练习、跨轮能力保留与真实部署已有直接先例。AirSpark 的本文方案以可训练学生为改进对象，研究空中操作的经验设施及参数更新收益；更新对象的区别限定比较机制，平台价值仍需由运行与学习证据支撑。</p>
<p>ENPIRE 为真实机器人改进提供环境、执行和验证工具，支持训练方法修订及研究经验复用。EmbodiRSI 是直接的学习型策略近邻：其 CEC 从策略到达的失败状态产生纠正轨迹，ADC 根据弱项安排示范采集，并结合优势条件化学习更新学生。其公开采集规则以失败集中程度作为启发式，不估计配置特定的学习收益。<cite data-ref="enpire embodirsi"></cite> AirSpark 承接这些反馈机制，组织空中操作的环境、经验和训练评价设施，以过程经验分配及有限的方案调整研究学生完整任务表现。平台可靠性、经验成本与学习收益分别提供证据。</p>
<h3 id="related-teaching" data-nav="课程与学习反馈" data-number="2.5">2.5 自适应课程与学习反馈</h3>
<p>Learning to Teach 利用学生反馈优化教学决策；ALP-GMM 根据学习进展生成课程。<cite data-ref="learning-to-teach alp-gmm"></cite> Data-Efficient Multitask DAgger 分别考察任务成功率与模仿损失下降驱动的数据分配，其中损失进展是调度信号，不能等同于完整任务收益。<cite data-ref="multitask-dagger"></cite> Eureka 利用训练反馈迭代奖励代码，说明学习方案本身也可以成为外部搜索的对象。<cite data-ref="eureka"></cite></p>
<p>这些工作构成利用学习反馈调整练习与训练的基础。AirSpark 将这一能力纳入完整的反馈自进化流程，围绕空中交互中的监督起点、经验构成和能力保留考察其作用。本文研究模拟学院如何支持学生策略的持续改进，并在共享设施与预算下分析过程经验、跨轮记忆和方案调整的具体作用。</p>
</section>

<section id="method" data-title="方法" data-number="3">
<div class="eyebrow">METHOD</div><h2>3. AirSpark 模拟学院</h2>
<p>AirSpark 的系统设计将平台基础设施、学习编排和练习决策方法分层组织。基础设施提供可执行的环境与学习工具；SparkMentor 维护实验状态并编排闭环；练习方法决定下一轮采集什么，跨轮记录支持检查学习效果并调整经验生成与使用方案。学生策略参数保留最终学习能力。图 1 描述学院提供的公共设施，图 2 描述基于这些设施的策略自进化方法，图 3 给出实验流程。视觉—物理执行链路和专家延续细节见附录图 A1–A2。</p>
<figure class="paper-figure diagram-figure" id="figure-1">
<div class="diagram-heading"><b>图 1 · 学院平台架构</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.18" data-figure-title="图 1 · 学院平台架构" aria-label="放大图 1：学院平台架构"><img src="figures/fig01-academy-overview-zh.svg?v=0.18" alt="图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。" width="1440" height="870" loading="lazy"></button>
<figcaption>图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.18" data-figure-title="图 1 · 学院平台架构">放大查看</button><a href="figures/fig01-academy-overview-zh.svg?v=0.18" download>中文 SVG</a><a href="figures/fig01-academy-overview-zh.png?v=0.18" download>中文 PNG</a><a href="figures/fig01-academy-overview.svg?v=0.18" download>英文 SVG</a><a href="figures/fig01-academy-overview.png?v=0.18" download>英文 PNG</a></div>
</figure>

<h3 id="scope" data-nav="问题定义" data-number="3.1">3.1 问题定义</h3>
<p>设任务条件为 ξ，其中包含场景、目标、初始状态和物理参数。策略 π<sub>θ</sub> 根据观测历史 h<sub>t</sub>、可用本体状态 p<sub>t</sub> 及语言指令 ℓ 生成动作 u<sub>t</sub>，低层控制器 K 将动作转换为机器人执行。任务专用策略可省略语言输入。给定初始策略 θ<sub>0</sub> 和总预算 B，我们研究如何通过 R 轮数据采集与更新，提高策略在独立任务分布上的完整成功率。</p>
<div class="equation" aria-label="策略更新目标">u<sub>t</sub> = π<sub>θ</sub>(h<sub>t</sub>, p<sub>t</sub>, ℓ)<br>最大化 J<sub>test</sub>(θ<sub>R</sub>)，满足 ∑<sub>r=0</sub><sup>R−1</sup> Cost<sub>r</sub> ≤ B</div>
<p>测试表现 J<sub>test</sub> 是最终评价目标。任务组预先划分为采集池 C、开发验收池 V 和封存测试池 T；诊断与专家延续来自 C，V 用于预定的模型验收，并向方案调整提供预先允许的汇总反馈；其轨迹及由轨迹派生的训练样本不进入学生训练。T 在研究配置冻结后统一评价，不向闭环提供反馈。闭环选择仅读取 C 的过程证据及预先允许的开发验收摘要。目标位置、接触真值及专家信息用于诊断、采集和标注，学生输入由部署协议固定。我们将“策略自进化”定义为执行与学习反馈影响后续练习、训练更新跨轮次保留的有界过程，不要求各轮性能单调提高。过程条件分配构成基础闭环；有限的方案调整补充跨轮适应能力，二者的实验效果分别评价。正式评价冻结学生参数，不使用教师临场纠错或测试时程序修订；评价中的人工接管单独记录。该定义区分学习阶段的反馈闭环与执行阶段的任务求解。</p>

<h3 id="platform" data-nav="平台与共享接口" data-number="3.2">3.2 模拟学院基础设施与共享接口</h3>
<p>学院以 UE 的视觉渲染和 MuJoCo 的动力学与接触仿真为基础，复用 URLab 等基础组件，通过统一坐标、时间戳及实体标识连接机器人、相机和物体状态。<cite data-ref="mujoco urlab"></cite> 一次执行同时记录模型观测、策略命令、实际运动和物理事件，使动作偏差与其视觉后果能够在同一时间线上分析（附录图 A1）。任务参数化接口控制对象、布局、初态及合法物理条件，复位接口用于重新构造可比较的试验。</p>
<p>监督由专家在选定任务条件下实际执行产生。数据记录包含 RGB、策略所需的本体与动作序列，以及用于质检和诊断的语义、接触与阶段标注。质量检查验证时间顺序、动作语义、完整终态和异常终止。训练导出仅保留学生协议允许的字段，并通过父任务标识维持划分与数据谱系。</p>
<p>跨仿真对应不仅是场景外观的重建，还包括机器人形态、动作参考系、控制周期、执行器限制及接触规则。物理对齐以配对控制响应和任务事件检验，不假定两个求解器产生逐位相同的轨迹。抓取中的附着或约束须与原生任务定义一致并单独披露；非任务定义的吸附辅助不能用于证明真实接触抓取、抗滑落或载荷稳定能力。</p>
<p>针对真实场景，学院采用 3DGS 表示静态外观，并将显式碰撞几何、可交互对象和语义实体配准到相同坐标系。<cite data-ref="3dgs"></cite> 可动物体由独立物理资产表示，以维持操作过程中的接触和遮挡关系。场景重建与机器人标定共同定义真实任务对应的训练环境；动力学和接触参数通过任务相关检查确定。</p>

<p><b>共享学习接口。</b>系统围绕任务定义、执行记录、练习计划、训练数据、模型版本和评价报告组织运行产物。练习方法输出条件、预算与监督请求；采集工具返回实际轨迹、质检和成本；训练与评价工具接收明确的数据及模型版本。不同方法共用这些产物与工具，便于替换选择规则并复用运行记录。具体观测、动作与评分协议在一组实验中冻结。</p>



<h3 id="practice" data-nav="RSI 策略方法" data-number="3.3">3.3 RSI 策略：执行诊断与主动练习生成</h3>
<p>在学院设施之上，本文以执行反馈驱动后续经验采集，并通过训练更新学生策略（图 2）。一次学习迭代包含执行、能力缺口诊断、练习决策、经验生成、参数更新和开发验收。SparkMentor 利用当前证据和跨轮记录组织这些步骤；学生参数保留学习结果，实验记忆保留已尝试的练习、成本及验收结果。下文以过程条件分配作为练习决策的参考实现。充分覆盖、终态反馈和过程条件方法共用采集、专家、训练与验收工具，仅改变选择依据。第 3.4 节进一步描述学习反馈与有限的方案调整，其作用在代表任务上单独分析。</p>
<figure class="paper-figure diagram-figure" id="figure-2">
<div class="diagram-heading"><b>图 2 · RSI 策略方法</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.18" data-figure-title="图 2 · RSI 策略方法" aria-label="放大图 2：RSI 策略方法"><img src="figures/fig02-rsi-method-zh.svg?v=0.18" alt="图 2. 反馈驱动的策略自进化方法。执行反馈 Eᵣ 引导能力诊断与主动采集；学院通过物理前缀、专家延续与质检产生数据，再训练并验收学生。学习反馈 Fᵣ 将任务表现变化、能力保留和成本写入跨轮记忆 Mᵣ。虚线支路表示在预设范围内比较和调整练习方案 ηᵣ，作为基础闭环的补充分析；B1–B3 保持各自既定规则与训练配方。最终测试在闭环之外进行。" width="1440" height="900" loading="lazy"></button>
<figcaption>图 2. 反馈驱动的策略自进化方法。执行反馈 Eᵣ 引导能力诊断与主动采集；学院通过物理前缀、专家延续与质检产生数据，再训练并验收学生。学习反馈 Fᵣ 将任务表现变化、能力保留和成本写入跨轮记忆 Mᵣ。虚线支路表示在预设范围内比较和调整练习方案 ηᵣ，作为基础闭环的补充分析；B1–B3 保持各自既定规则与训练配方。最终测试在闭环之外进行。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.18" data-figure-title="图 2 · RSI 策略方法">放大查看</button><a href="figures/fig02-rsi-method-zh.svg?v=0.18" download>中文 SVG</a><a href="figures/fig02-rsi-method-zh.png?v=0.18" download>中文 PNG</a><a href="figures/fig02-rsi-method.svg?v=0.18" download>英文 SVG</a><a href="figures/fig02-rsi-method.png?v=0.18" download>英文 PNG</a></div>
</figure>
<p><b>过程条件。</b>我们以事件转换及少量可控变量组成条件 z，例如接近接触时的相对速度、抓持中的滑移和离开支撑面时的载荷变化。阶段边界依据相对位姿、接触、抓持和释放事件确定。条件描述当前仍成立的状态；到达次数与到达后的失败率分别统计，未到达下游阶段视为证据不足。表 1 中的条件是待验证的练习假设。</p>
<div class="table-wrap"><table><caption>表 1. 候选过程条件、执行证据与专家延续。</caption><thead><tr><th>交互转换</th><th>需要辨识的差异</th><th>候选训练经历</th></tr></thead><tbody>
<tr><td>接近 → 接触</td><td>相近位姿下的相对速度、目标图像运动及动作时刻。</td><td>按当前运动条件减速、对齐并完成接触。</td></tr>
<tr><td>接触 → 稳定抓持</td><td>闭爪后的接触持续性、相对滑移和约束稳定性。</td><td>调整抓持、稳定保持或再次接近。</td></tr>
<tr><td>支撑 → 承载运动</td><td>离面前后的物体运动、载荷接管及机体跟随偏差。</td><td>稳定抬升并完成运输与放置。</td></tr>
</tbody></table></div>
<p><b>练习可行性检查。</b>候选条件按三项依据检查：在匹配任务几何的试采中是否对应不同的后续动作需求；学生的实际输入历史中是否存在可利用线索；合法物理前缀与固定专家能否产生可验收的延续。仅由专家真值区分的条件、不可达状态和控制故障分别记录，不直接当作可由新增监督修复的策略缺口。这些检查形成可检验的练习假设，最终学习价值仍由独立评价决定。</p>
<p><b>诊断与分配。</b>每轮在 C 中使用预定的诊断分布执行当前学生，估计条件出现频率 ρ̂<sub>z</sub> 及进入条件后的转换失败率 f̂<sub>z</sub>。每条轨迹对同一条件按预定事件规则计数，避免驻留时间或帧率放大频率。定向采集得到的命中分布不用于估计 ρ̂<sub>z</sub>。对已有足够证据且通过可行性检查的条件，采用风险与成本启发式分配优先级：</p>
<div class="equation" aria-label="过程经验采集优先级">q(z) = ρ̂<sub>z</sub> · f̂<sub>z</sub> / ĉ<sub>z</sub></div>
<p>ĉ<sub>z</sub> 表示获得一份合格经验的实测平均成本，包含前缀执行、未命中、专家失败、复位和质检。主成本口径为固定硬件与并行设置下采集工作进程的占用时间，另报告仿真时间、GPU 用量及代理调用。初始成本由共享试采获得；零合格样本和稀疏条件进入有界探索，不以零分母计算优先级。平滑、最小计数和探索比例在先导实验后固定。该规则用于分配资源，不将失败率解释为确定原因或预期学习收益。</p>
<p><b>物理前缀与专家延续。</b>学院从合法初态出发，使用当前学生或预先规定的扰动前缀实际进入目标条件，再由固定专家继续执行。前缀未命中、接管失败及完整终态失败均记录并计费。重执行保留速度、控制器、接触及观测历史；使用状态快照须先验证这些状态的恢复一致性。附录图 A2 展开这一经验生成步骤。全过程承接学习者状态监督与扰动专家示范的思想。<cite data-ref="dagger dart"></cite></p>
<p><b>监督起点的候选调整。</b>对于接触失稳、滑移或载荷转换相关的失败，可在少量预定事件时刻重执行物理前缀，并使用同一专家检查延续产出。这里得到的是给定专家、约束与预算下可产生有效监督的候选时刻，不是系统的绝对可恢复域；不假定越早接管越好或恢复能力随时间单调变化。起点调整作为第 3.4 节的可选经验生成方式，与固定接管规则比较，全部试探计入成本。最终价值由学生完整任务表现检验。</p>
<p><b>监督可用性。</b>专家可使用真值诊断，但学生输入由部署协议固定。候选条件需要在学生的视觉历史、本体状态或允许的动作历史中具有相关线索；仅对专家可见的差异单独标记。专家延续成功只说明该次执行可行，学生能否吸收由独立训练评价决定。动作来源按时间标注：学生前缀可以提供观测历史，不能作为专家标签；对 DP 等动作块策略，监督块完整落在通过质检的专家控制区间，跨越接管边界的样本剔除或按预定掩码处理。</p>



<h3 id="evolution" data-nav="多轮更新与记忆" data-number="3.4">3.4 多轮策略更新、学习反馈与实验记忆</h3>
<p>图 2 中，第 r 轮在采集池 C 执行当前学生，形成过程证据 E<sub>r</sub>。SparkMentor 结合记忆 M<sub>r</sub>、剩余预算 B<sub>r</sub> 和当前练习方案 η<sub>r</sub> 提出计划 A<sub>r</sub>。计划包含经验生成请求与数据使用配置；学院生成通过质检的数据，训练工具更新候选学生，再由 V 池按固定规则验收。基础 B1–B3 对照固定各自的分配规则、监督生成约定和训练配方。方案 η 的调整在补充实验中启用，不改变基础对照的解释。</p>
<div class="equation" aria-label="闭环更新与学习反馈">A<sub>r</sub> = Select(E<sub>r</sub>, M<sub>r</sub>, B<sub>r</sub>; η<sub>r</sub>)<br>D<sub>r</sub> = QC(Collect(A<sub>r</sub><sup>gen</sup>))<br>θ′<sub>r+1</sub> = Train(θ<sub>r</sub>, D<sub>r</sub>, D<sub>replay</sub>; A<sub>r</sub><sup>use</sup>)<br>F<sub>r</sub> = Evaluate<sub>V</sub>(θ′<sub>r+1</sub>, θ<sub>r</sub>)<br>(θ<sub>r+1</sub>, M<sub>r+1</sub>) = ValidateAndRecord(θ′<sub>r+1</sub>, θ<sub>r</sub>, M<sub>r</sub>, A<sub>r</sub>, F<sub>r</sub>)</div>
<p><b>两类反馈。</b>E<sub>r</sub> 描述学生在何种过程条件下失败；F<sub>r</sub> 描述干预前后的完整任务与阶段表现、已有能力保留及估计不确定性。训练损失和专家延续成功率用于辅助诊断，不能代替学生执行评价。采集、训练及验证的实际成本与 F<sub>r</sub> 共同记录，使后续计划能够检查哪些投入尚未转化为能力。</p>
<p><b>干预记忆。</b>每条记录关联父模型与训练状态、任务条件和证据、方案版本与实际改动、数据和模型产物、学习响应及各项成本。无效或有副作用的候选同样保留；经验附带学生版本、适用条件及预定重测规则。混合条件训练的总收益只归属于该次整体干预，不重复分摊给每个条件。审计日志保证可追溯，决策模块是否读取历史效果则由记忆对照决定。</p>
<p id="practice-adaptation"><b>有限的方案调整。</b>在预定检查点，或符合预定样本量与不确定性要求的停滞、退化信号出现时，SparkMentor 可提出下一版方案。允许的修改限于候选监督起点、完整示范与局部延续的构成，以及预设的新旧数据混合选项。过程条件分配保留为初始参考规则，方案版本 η 是配置与决策约定，不要求新增教师网络。关键候选从相同父模型、优化器状态及已有数据出发，按匹配预算比较；未获支持的修改不自动推广。基础学习算法、学生接口和评价标准保持固定。</p>
<div class="table-wrap"><table><caption>多轮反馈与候选调整。下列关联是待检验的教学假设。</caption><thead><tr><th>跨轮观察</th><th>需要检查的解释</th><th>允许比较的调整</th></tr></thead><tbody>
<tr><td>专家延续产出低，重复补采收益有限。</td><td>起点是否过晚，或当前专家难以完成该条件。</td><td>比较预定事件前后的监督起点。</td></tr>
<tr><td>局部恢复改善，完整任务表现不变。</td><td>前置行为或阶段衔接是否仍有缺口。</td><td>增加衔接过程与完整任务经验。</td></tr>
<tr><td>新条件改善，原有能力退步。</td><td>经验集中或更新干扰是否导致能力损失。</td><td>比较预设的回放覆盖与混合比例。</td></tr>
</tbody></table></div>
<p>连续数轮无提升仅触发检查；评价噪声、专家不足、观测缺失和控制限制都可能产生相似现象。语言反思用于提出候选解释，实际比较决定是否保留修改。历史条件化选择、方案修订与可迁移的教学能力是不同强度的主张；本文将前两者作为闭环机制分析，跨学生或跨任务的教学能力提升留待独立验证。</p>

<h3 id="harness" data-nav="研究工具与验证" data-number="3.5">3.5 研究工具与独立验证</h3>
<p>研究 harness 将环境配置、执行、采集、质检、训练和评价暴露为结构化工具。SparkMentor 负责提出和调度有预算约束的实验，工具负责实际执行与产物检查，验证模块依据固定标准接纳或拒绝更新。这一组织方式借鉴自主机器人研究中的工具化反馈流程。<cite data-ref="enpire"></cite> 每次运行记录输入配置、状态、输出与失败原因，使中断恢复和重放依赖可核查的产物，而非代理的文字总结。</p>
<p>方法区分候选筛选、实际执行和学习验证：可行性预测帮助选择值得尝试的条件，执行记录提供监督来源，训练后的独立评价衡量数据价值。学生架构、观测历史、动作语义、归一化方案、专家、低层控制和评分器在比较中固定；学生权重随各轮训练更新。正式测试与代理记忆隔离，在全部闭环结束后统一回测保存的模型。</p>
<p>B1–B3 的可变决策限定为条件和预算分配，学生训练配方固定。补充分析进一步开放预定的经验生成与使用配置，但固定学生架构、输入历史、动作接口、专家、低层控制、主要损失、优化器及总训练预算；候选方案及其比较次数有预设上限。SparkMentor 将决策连接到采集、训练与验收工具，不修改成功标准或封存测试。一个可恢复的执行器连接各阶段，以同一轮的配置、数据、模型和评价记录恢复中断工作；不为不同策略复制调度链。确定性计划器提供可运行的参考，代理决策的额外价值由独立消融检验，而非由聊天或工具调用次数推断。</p>
</section>

<section id="experiments" data-title="实验" data-number="4">
<div class="eyebrow">EXPERIMENTS</div><h2>4. 实验</h2>
<p class="experiment-status">本节给出预定实验协议。各实验的定量结果将在完成后补充。</p>
<p>实验分别回答三个层面的问题：平台是否提供可靠且可复用的学习设施；基于这些设施的反馈闭环是否改善同预算下的策略表现；学院内获得的能力是否迁移到原生基准和真实环境。平台实验检查执行、监督和运行管理，学习实验比较共享设施上的练习方法，外部实验检验冻结学生。三类证据共同支撑学院定位，具体过程条件承担参考方法的机制验证；学习反馈与方案调整在代表任务上作补充分析。</p>

<h3 id="benchmark" data-nav="实验设置" data-number="4.1">4.1 实验设置</h3>
<p><b>任务与环境。</b>仿真评价采用 AM-Bench 原生任务。<cite data-ref="ambench"></cite> 从能够在两种仿真环境中建立对应执行的任务中预先固定子集，覆盖接触和物体运输；Cabinet Pick-and-Place 与 Lemon Harvesting 为当前候选。AirSpark 的 C 池用于练习生成，隔离的 V 池用于开发验收，正式成绩由原生完整终态计算。任务专用的接近、抓持和抬升指标用于诊断，保留完整任务结果。</p>
<p><b>策略与训练。</b>复用 AM-Bench 支持的 ACT、Diffusion Policy 和 OpenPI 路径。<cite data-ref="act dp openpi ambench-docs"></cite> 一个可训练后端承担主矩阵，第二架构在代表任务上检验数据收益的适用性。任务专用 ACT / DP 用于视觉动作学习；语言能力评价采用实际语言条件化的策略，并在相同场景中配对改变指令。B1–B3 共享初始父代、学生输入、训练步数、优化器和 replay 配方。第 4.6 节的方案调整分析仅放开预定的数据构成与使用选项，并匹配总采集及训练预算。</p>
<p><b>初始实施范围。</b>先复现官方 Diffusion Policy 路径，以 PressButton 验证具有飞行动力学的仿真机器人上的专家采集、训练、保存重载和原生评价，再以一个“接近接触时的相对速度”条件完成一轮机制实验，通过后展开完整抓取运输、多轮和真实对应任务。浮动末端模式只用于排查环境和任务逻辑，不计作飞行操作能力。该顺序是实施计划，不表示当前已有基线成绩；正式任务子集及训练配方在对照实验开始前冻结。</p>
<p><b>划分与指标。</b>C、V、T 按原始任务组、物体实例及布局划分，派生轨迹继承父任务归属。主指标为统一初态下的完整成功率，辅以阶段到达数、条件成功率、掉落、碰撞、耗时和人工干预。所有终止均保留记录。独立训练 seed 和任务组作为统计单位报告不确定性。</p>

<h3 id="platform-evaluation" data-nav="平台支持能力" data-number="4.2">4.2 平台支持能力与运行可靠性</h3>
<p><b>执行与经验设施。</b>在与主实验相同的任务上，检查观测—动作时序、复位偏差、专家执行成功与标注一致性，并报告合格监督产出、运行时间和全部失败尝试。视觉与物理对应通过相机配准、运动响应、接触及负载误差评价，参考实体空中操作和真实记录驱动的仿真基准。<cite data-ref="aerial-bench sim-benchmark"></cite> 参数、容差与测试次数在评价前固定。</p>
<p><b>接口复用与研究连续性。</b>充分覆盖、终态反馈和过程条件分配通过同一任务协议及工具链运行，记录方法切换需要修改的配置与接口适配。选取一项代表任务，在采集或训练产物提交后中断编排，检查恢复后的数据与模型版本、重复执行成本及评价记录是否一致。运行恢复率、人工干预和无效数据进入训练的比例用于衡量闭环工程可靠性；这些指标与策略成功率分别报告。</p>
<p><b>评价范围。</b>本节复用后续学习实验的任务与运行记录，并以小规模检查补充时序、复位和中断恢复证据。平台提供方法替换的接口并不等于已验证任意算法或机器人；本文的复用结论限定在实际接入的方法与学生后端。</p>

<h3 id="comparison" data-nav="闭环学习对照" data-number="4.3">4.3 等预算闭环学习</h3>
<p>我们以冻结父代作为初始能力参照，比较三条增量训练路线。覆盖采集检验常规增加多样化数据的效果，终态条件分配检验结果反馈的价值，B3 则利用过程条件分配预算。三组共享合法条件范围、前缀策略与扰动工具、固定专家、历史记录设施及质检标准；分配规则分别使用覆盖目标、终态结果与过程证据。成本和数据合法性记录对各组一致，B2 的分配器不读取阶段失败统计。B2 是本文构造的终态信息对照，不代表对 EmbodiRSI 的复现。</p>
<div class="table-wrap"><table><caption>表 2. 闭环学习的比较设置。</caption><thead><tr><th>设置</th><th>新增数据来源</th><th>更新方式</th></tr></thead><tbody>
<tr><td>B0 · 冻结父代</td><td>无新增采集。</td><td>保持初始权重。</td></tr>
<tr><td>B1 · 充分覆盖</td><td>联合覆盖视觉与物理因素；同样支持当前学生到达状态的专家延续与共享扰动。</td><td>固定训练配方，多轮更新。</td></tr>
<tr><td>B2 · 终态条件分配</td><td>按任务 / 条件的终态失败率分配采集预算。</td><td>与 B1 相同。</td></tr>
<tr><td>B3 · 过程条件分配</td><td>按转换条件的频率、失败率和经验成本安排练习。</td><td>与 B1 相同。</td></tr>
</tbody></table></div>
<p>覆盖基线包含学习者状态上的恢复监督，而非仅在理想专家轨迹周围增加数据；这一设置承接交互式监督和部署中学习的思想。<cite data-ref="dagger dart sirius"></cite> B1–B3 是共享协议下的机制对照，不等同于对这些论文完整算法的复现。对已有方法的优越性结论需要另行适配原方法，不能由终态信息对照替代。</p>
<p>主实验采用相同总采集预算及每轮训练步数，计入诊断、前缀、未命中、专家失败、复位、质检和代理推理，并同时报告合格轨迹数、专家监督时长与训练动作块数。在代表任务上另作等有效数据量比较，区分轨迹质量与采集效率。多轮曲线由研究配置冻结后对保存模型统一回测得到，分别展示相对于父代和同预算采集基线的收益。</p>
<p>等预算约束施加于 B1、B2 与 B3 三条更新路线，冻结父代 B0 的零新增训练成本单独列出。成本来自实际运行记录，分别报告仿真时间、墙钟时间和计算资源；配置中的预估耗时不作为测量结果。未执行的评价记为缺失而非零分，只有实际完成的失败任务才进入失败统计。</p>

<h3 id="external" data-nav="AM-Bench 原生回测" data-number="4.4">4.4 AM-Bench 原生回测</h3>
<p>我们将更新后的策略返回原生 AM-Bench，评价 AirSpark 中采集的数据能否改善模型在原基准上的表现。实验先按公开配置训练或载入初始策略，在 AirSpark 中采集新增示范并训练，再将初始模型与各组更新模型冻结后统一测试（图 3）。原生测试保留相同的任务、机器人、控制器、扰动、观测和成功阈值。<cite data-ref="ambench-docs"></cite></p>
<figure class="paper-figure diagram-figure" id="figure-3"><span id="figure-4" aria-hidden="true"></span>
<div class="diagram-heading"><b>图 3 · 实验流程</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.18" data-figure-title="图 3 · 实验流程" aria-label="放大图 3：实验流程"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.18" alt="图 3. 实验流程。首先使用 AM-Bench 的示范数据与训练配置建立初始策略，再在 AirSpark 中根据执行反馈采集专家数据并更新策略。最后冻结模型，在原生 AM-Bench 和对应的真实任务中比较改进前后的表现。各采集方法的对照设置见表 2。" width="1440" height="740" loading="lazy"></button>
<figcaption>图 3. 实验流程。首先使用 AM-Bench 的示范数据与训练配置建立初始策略，再在 AirSpark 中根据执行反馈采集专家数据并更新策略。最后冻结模型，在原生 AM-Bench 和对应的真实任务中比较改进前后的表现。各采集方法的对照设置见表 2。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.18" data-figure-title="图 3 · 实验流程">放大查看</button><a href="figures/fig04-evaluation-protocol-zh.svg?v=0.18" download>中文 SVG</a><a href="figures/fig04-evaluation-protocol-zh.png?v=0.18" download>中文 PNG</a><a href="figures/fig04-evaluation-protocol.svg?v=0.18" download>英文 SVG</a><a href="figures/fig04-evaluation-protocol.png?v=0.18" download>英文 PNG</a></div>
</figure>
<p>代表任务同时比较使用同一选择器在原生 AM-Bench 和 AirSpark 中补采的结果，以分析新增数据来源的作用。该比较匹配任务因素、专家能力与预算，并与闭环选择对照分别报告。跨模拟器结果首先解释为整套数据来源的差异，不单独归因于渲染引擎或物理求解器；无法匹配的控制、专家与观测差异必须披露。主表注明所用任务子集；改变机器人、观测或评分条件的实验独立列为衍生设置。</p>

<h3 id="realworld" data-nav="真实场景迁移" data-number="4.5">4.5 真实场景迁移</h3>
<p>真实实验采用可重复布置的场地，通过多视角采集建立 3DGS 外观，并配准碰撞几何、可交互物体、相机和机器人。策略在对应的学院环境中完成更新后冻结，返回真实场景执行相同任务目标。比较包含父代、按开发指标预先选定的最强采集基线子代，以及 SparkMentor 子代，三者使用相同标定、观测和低层控制。</p>
<p>评价分别覆盖已重建场景内的对应任务，以及预留物体或布局条件。前者衡量场景适应后的迁移，后者衡量未见条件表现。测试采用配对初态与随机化执行顺序，报告完整成功、阶段结果、接管、掉落和耗时。正式测试影像与反馈不进入训练；真实示范或微调如被使用，其预算在所有组间一致并单独报告。</p>
<p>实机目标与仿真任务按语义和交互阶段对应。机器人形态不一致时，实机线使用匹配本体的初始策略，各组共享适配过程。抓取—抬升子任务与完整运输—放置分别报告；跨场景泛化由独立于重建和开发的新场地评价。</p>

<h3 id="ablation" data-nav="机制与系统分析" data-number="4.6">4.6 机制与系统分析</h3>
<p><b>从条件到学习的证据链。</b>机制实验分别报告：匹配几何后不同运动条件的转换风险；目标条件命中数 / 全部前缀尝试数；合格专家延续数 / 命中数及每份经验成本；固定训练后在独立完整任务上的成功率变化。前三项衡量经验设施，第四项检验学习价值。风险差异是条件关联，只有预定的随机化干预才用于因果解释。所有分母与失败尝试均保留。</p>
<p><b>必要对照。</b>在一个代表任务上匹配扰动幅度与成本，对比通用扰动和过程条件采集；固定减速或等待策略同时报告成功率与耗时。学生可观测性检查使用其实际输入的时间窗口，在保持当前观测近似一致时检验历史线索是否支持不同后续动作。历史窗口长度作为单独消融，各主比较组使用相同输入。</p>
<p id="teaching-analysis"><b>学习反馈、记忆与方案调整。</b>核心 B1–B3 对照完成后，在一个代表任务和学生后端上补充比较：先导阶段确定的固定方案；可调整方案但仅使用当前执行与学习反馈；可调整方案并读取历史干预结果。可调整组共享候选起点、经验构成、回放选项和预算上限；无历史组每轮不读取此前干预效果与方案修订记录，但保留完整审计日志。主指标为完整任务表现随累计资源投入的变化，辅以旧能力保留、有效监督产出和无效尝试成本。</p>
<p>关键调整采用同父模型的小规模分支比较；试探、被拒绝方案、额外训练和开发验证均计入总预算。若进一步主张 Agent 推理具有独立收益，增加共享动作空间的简单学习进展选择器，规则借鉴课程学习，但不称为原算法复现。<cite data-ref="alp-gmm multitask-dagger"></cite> 方案调整和记忆的对照只在代表任务展开，不与任务、学生架构及实机设置全面交叉。</p>
<p>开发池 V 的重复反馈用于方法开发，其最佳成绩不能作为泛化结论；最终结论来自冻结后的 T 池评价。只有另行比较初始方案与历史经验支持的方案从相同新学生起点开始的学习效果，才能主张教学能力可复用提升；该扩展须单列形成历史经验的成本，不作为当前主实验的完成前提。</p>
<p><b>3DGS 外观作用。</b>平台可靠性由第 4.2 节检验。3DGS 默认用于真实场景外观对应；若进一步主张其独立学习贡献，则在代表任务上保持几何、物理与预算一致，仅改变外观表示进行对照。跨模拟器数据来源比较不能替代这一归因实验。</p>
</section>

<section id="discussion" data-title="讨论与局限" data-number="5">
<div class="eyebrow">DISCUSSION</div><h2>5. 讨论与局限</h2>
<p>AirSpark 的平台贡献在于连接空中操作的环境执行、经验生成和训练评价，使反馈驱动学习能够在统一协议下运行与检验。SparkMentor 维护实验连续性，练习方法决定设施如何服务于当前学生。过程条件分配是本文的参考实现，学习反馈支持在预定范围内调整练习方案。两者共同服务于学生策略改进，但相应收益分别检验；平台可靠性、方法收益与迁移表现分别提供证据。</p>
<p>框架依赖可用的专家、足够的学生观测以及任务相关的仿真准确性。控制故障与不可达动作不能仅靠新增示范解决；视觉不可辨识的隐藏状态也可能限制监督的有效性。过程证据提供练习假设，不能替代因果识别；成本优先级也不保证最大化学习收益。仅由真值区分、学生输入无法辨识的条件可能无法通过监督学习修复。接触、负载和相机时延的误差仍可能影响真实迁移。</p>
<p>本文以单一空中机器人平台、固定任务子集和有限轮次建立证据。共享接口为后续诊断方法、练习策略和训练后端的接入提供设计基础；更长时间的持续改进、其他机器人形态和开放场景作为未来扩展，需重新验证观测动作及物理协议。本文不据接口设计宣称这些扩展已完成。3DGS 对应场景迁移与未见场景泛化分别评价；教师算法自修改不属于本版实验。</p>
<p>教学自适应、反思与经验复用均有已有研究基础。本方案的研究范围是固定学习接口下的有界调整，其适用性取决于专家、学生观测、任务条件及评价样本。有限轮次的改进不能推出长期持续收益；原生回测和真实迁移仍是学院中所学能力的独立检验。</p>
</section>

<section id="conclusion" data-title="结论" data-number="6">
<div class="eyebrow">CONCLUSION</div><h2>6. 结论</h2>
<p>本文提出 AirSpark，一套面向空中操作策略自进化的模拟学院。平台通过共享任务与运行产物协议连接视觉—物理仿真、自动经验生成、训练和评价，SparkMentor 利用执行反馈、学习效果与干预记忆组织跨轮学习，并支持有界的练习方案调整。本文以过程条件分配作为参考方法，在共同设施上检验策略改进，并通过原生 AM-Bench 和对应真实任务评价学习结果。平台支持能力、闭环收益与真实迁移构成相互衔接的验证目标；具体效果及适用范围由后续实验确定。</p>
</section>

<section id="references" data-title="参考文献" data-number="R">
<div class="eyebrow">REFERENCES</div><h2>参考文献</h2>
<p class="caption">按作者姓氏或机构名称排序，使用方括号数字引用；条目包含作者、题名、出版物与年份。来源类型与核查备注可展开查看；正式出版、作者报告的录用、预印本和软件文档分别记录。基础文献核查：2026.10.18；RPG、学习反馈与课程文献补充核查：2026.10.19。</p>
<p class="reference-tools"><a href="references.bib" download>下载 BibTeX 文献库</a> · <a href="#literature-map">文献证据与阅读路线</a> · <a href="#citation-protocol">引用规范与核查记录</a></p>
<ol class="ref-list" id="reference-list"></ol>
</section>

<section id="appendix" data-title="附录" data-number="A">
<div class="eyebrow">APPENDIX</div><h2>附录：实现与复现</h2>
<h3 id="models">A.1 策略与接口</h3>
<p>AM-Bench 官方文档提供 ACT、DP 与 OpenPI 的训练及评价入口，数据和权重须按实际发布资产核验。<cite data-ref="ambench-docs"></cite> 复用记录包含源码版本、机器人、环境 ID、相机、本体字段、动作语义、归一化、训练数据与 checkpoint 哈希。当前资源核查起点为 AM-Bench commit <code>60bf5b73041df4eab571f7d9f0a297aeecbf2e0d</code>；正式实验使用冻结的运行清单。</p>
<p>跨平台适配明确坐标系、单位、四元数顺序、相对动作锚点、夹爪范围及采样频率。末端动作接口仍需验证形态可达性，关节空间数据按机器人结构分别处理。LightNav 保留为目标搜索和接近的固定导航扩展，其局部 SE(2) 输出与接触操作接口独立。<cite data-ref="lightnav"></cite></p>
<h3 id="resources">A.2 运行产物与预算</h3>
<p>每次闭环归档环境配置、任务组、专家和学生轨迹、质检结果、数据版本、训练配方、开发接纳记录及模型谱系。物理与任务真值保留在采集和评价侧；学生训练导出依据固定字段白名单生成。正式测试在研究冻结后执行。</p>
<p>先导机制实验采用一个条件、一轮更新，三条训练路线与三个 seed 共 9 次增量训练，另计父代。机制证据成立后，再扩展至三轮、共 27 次增量训练。这是单个任务专用策略的计算量，多任务分别训练时按任务数增加。数据来源对照、第二架构和记忆分析在代表任务展开。上述 9 / 27 次仅为基础矩阵；方案调整分析另设预算上限，候选比较产生的训练次数和历史经验成本另行报告，不计作免费步骤。有效监督时长与总采集成本分别核算，诊断、未命中、失败尝试及代理计算均进入账本。</p>
<h3 id="reproduction-plan" data-nav="复现路线与入口" data-number="A.3">A.3 最小复现路线与实现边界</h3>
<p>研究实现使用 <code>codex/am-bench-research-v1</code> 分支的 <code>research/</code> 入口，与既有导航实验分开组织。目录划分不等于运行环境或平台裁剪已经完成。工程指南中的安装命令和完成声明须经实际核查，论文网页不以文件数量、脚本帮助页或占位产物作为阶段完成证据。</p>
<div class="table-wrap"><table><caption>表 A1. 分阶段验证路线。各项均为进入后续研究的证据要求，不是已完成结果。</caption><thead><tr><th>阶段</th><th>交付范围</th><th>验收依据</th></tr></thead><tbody>
<tr><td>准备</td><td>隔离环境与原生启动。</td><td>官方依赖链、源码版本和真实环境运行记录。</td></tr>
<tr><td>原生基线</td><td>AM-Bench 专家数据、DP 训练与评价。</td><td>有效数据、真实 checkpoint、重载和完整 rollout 结果。</td></tr>
<tr><td>物理对齐</td><td>单任务机器人、观测、动作、接触与复位对应。</td><td>预定义容差下的配对响应、接触和任务事件。</td></tr>
<tr><td>数据往返</td><td>AirSpark 采集更新，返回原生环境。</td><td>同一冻结模型接口、原生评分及实际成本。</td></tr>
<tr><td>研究对照</td><td>等预算更新、多 seed 与机制消融。</td><td>密封测试、区间估计和完整负结果。</td></tr>
</tbody></table></div>
<p>原生安装以 AM-Bench 官方维护路径为准，目前为 Linux、Isaac Sim 5.1 与 Python 3.11。<cite data-ref="ambench-install"></cite> 不直接套用旧导航环境或未验证的 Python 3.9 依赖模板。环境、模型与数据分别锁定版本；模拟器 timestep、控制周期、策略周期和数据采样率分别记录。</p>
<p>2026-10-13 的工程核查已建立分支和文档入口；后续修订将未实现的采集、训练、评价阶段改为显式拒绝执行，不生成占位成绩。原生环境、完整训练评测和跨仿真收益仍待验收。该实现状态不改变本文“提出的方法与预定实验”的性质；实机与 3DGS 研究线在原生复现、物理对齐及数据往返验证后展开。</p>
<p>工程资料：<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/docs/wiki/Research-Branch-AM-Bench-v1.md">研究入口与核查</a>、<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/research/docs/PAPER_HYPOTHESIS.md">实验协议</a>、<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/research/docs/PHYSICS_VALIDATION.md">物理对齐清单</a>（工程仓库可能需要访问权限）。这些资料是复现导航，不是已发布的数据或模型。</p>
<h3 id="experience-record">A.4 过程经验与划分记录</h3>
<p>经验记录包含父任务组与 C/V/T 归属、条件定义版本、事件时间、前缀策略与随机种子、速度和控制器状态、学生观测历史、接管边界、动作来源掩码、条件命中、专家终态、质量检查、各类成本以及数据—模型谱系。恢复与追加采集均继承父任务划分。标注字段可以多于学生输入，但训练导出必须保持部署输入白名单。</p>
<p>跨轮干预记录另含方案版本、选择依据、生成与使用配置、父模型及优化器状态、前后开发评价与不确定性、候选接受结果和完整成本。V 池仅返回预先允许的摘要，T 池结果不写回决策记忆；“无历史”分析屏蔽决策读取，保留审计记录。</p>
<h3 id="figure-library" data-nav="论文框图与下载" data-number="A.5">A.5 论文框图与汇报素材</h3>
<p>正文以两张方法主图组织平台与算法：图 1 展示学院设施，图 2 展示 RSI 的反馈、决策与参数更新；图 3 描述实验流程。附录图 A1–A2 分别展开执行接口和专家延续。网页默认使用中文，下载提供中英文 SVG 与高清 PNG。</p>
<p class="reference-tools"><a href="figures/AirSpark-Figures-v0.18.zip" download>下载中英文框图与绘图源文件</a> · <a href="figures/FIGURE-NOTES.txt?v=0.18">图注与使用说明</a></p>
<div class="figure-gallery"><a href="#figure-1"><img src="figures/fig01-academy-overview-zh.svg?v=0.18" alt="图 1：学院平台架构" width="1440" height="870" loading="lazy"><b>图 1 · 学院平台架构</b><span>跳转正文与下载</span></a><a href="#figure-2"><img src="figures/fig02-rsi-method-zh.svg?v=0.18" alt="图 2：RSI 策略方法" width="1440" height="900" loading="lazy"><b>图 2 · RSI 策略方法</b><span>跳转正文与下载</span></a><a href="#figure-3"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.18" alt="图 3：实验流程" width="1440" height="740" loading="lazy"><b>图 3 · 实验流程</b><span>跳转正文与下载</span></a><a href="#figure-a1"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.18" alt="图 A1：视觉与物理执行链路" width="1440" height="1020" loading="lazy"><b>图 A1 · 视觉与物理执行链路</b><span>跳转正文与下载</span></a><a href="#figure-a2"><img src="figures/fig03-process-experience-zh.svg?v=0.18" alt="图 A2：过程条件与专家延续" width="1440" height="1030" loading="lazy"><b>图 A2 · 过程条件与专家延续</b><span>跳转正文与下载</span></a></div><p class="caption">组会主讲使用图 1、图 2 和图 3；执行链路及专家监督细节作为备份材料。所有图均为当前研究设计，不代表实现和实验已经完成。</p>
<details class="editorial-note" id="implementation-figures"><summary>平台执行与经验生成细节（附录图 A1–A2）</summary><figure class="paper-figure diagram-figure" id="figure-a1">
<div class="diagram-heading"><b>图 A1 · 视觉与物理执行链路</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.18" data-figure-title="图 A1 · 视觉与物理执行链路" aria-label="放大图 A1：视觉与物理执行链路"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.18" alt="图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。" width="1440" height="1020" loading="lazy"></button>
<figcaption>图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.18" data-figure-title="图 A1 · 视觉与物理执行链路">放大查看</button><a href="figures/fig02-visual-physical-contract-zh.svg?v=0.18" download>中文 SVG</a><a href="figures/fig02-visual-physical-contract-zh.png?v=0.18" download>中文 PNG</a><a href="figures/fig02-visual-physical-contract.svg?v=0.18" download>英文 SVG</a><a href="figures/fig02-visual-physical-contract.png?v=0.18" download>英文 PNG</a></div>
</figure><figure class="paper-figure diagram-figure" id="figure-a2">
<div class="diagram-heading"><b>图 A2 · 过程条件与专家延续</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.18" data-figure-title="图 A2 · 过程条件与专家延续" aria-label="放大图 A2：过程条件与专家延续"><img src="figures/fig03-process-experience-zh.svg?v=0.18" alt="图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。" width="1440" height="1030" loading="lazy"></button>
<figcaption>图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.18" data-figure-title="图 A2 · 过程条件与专家延续">放大查看</button><a href="figures/fig03-process-experience-zh.svg?v=0.18" download>中文 SVG</a><a href="figures/fig03-process-experience-zh.png?v=0.18" download>中文 PNG</a><a href="figures/fig03-process-experience.svg?v=0.18" download>英文 SVG</a><a href="figures/fig03-process-experience.png?v=0.18" download>英文 PNG</a></div>
</figure></details>

<details class="editorial-note" id="literature-map"><summary>文献证据与阅读路线（研究核查，不属于论文主文）</summary>
<p>筛选依据为研究问题直接相关、方法与实验可核查、原始来源可定位。正式发表记录优先支撑基础论点；直接影响本文的近期预印本仍需引用，但不以作者机构、热度或会议简称代替证据。不因未发表判定低质量，也不将正式发表视为实验已被独立复现。本轮核查覆盖出版记录、摘要及相关方法段落，不是对所有论文的独立复现或系统综述。</p>
<div class="table-wrap"><table><caption>表 A2. 核心阅读与引用用途，基础核查于 2026-10-18，补充核查于 2026-10-19。</caption><thead><tr><th>文献与发表记录</th><th>与本文的关系</th><th>阅读与实验用途</th></tr></thead><tbody>
<tr><td>空中机器人综述 · T-RO 2022<cite data-ref="aerial-survey"></cite></td><td>空中操作的领域基础。</td><td>支撑浮动基座、载荷与接触挑战；不用于证明新平台优越。</td></tr>
<tr><td>Benchmarks for Aerial Manipulation · RA-L 2020<cite data-ref="aerial-bench"></cite></td><td>实体任务与交互能力评价。</td><td>为精度、耗时与交互响应设计提供基础。</td></tr>
<tr><td>Learning Variable Impedance Control… · RA-L 2022<cite data-ref="aerial-sliding"></cite></td><td>空中接触学习与真实迁移。</td><td>区分低层交互控制与本研究的学生数据闭环。</td></tr>
<tr><td>Aerial Gym Simulator · RA-L 2025<cite data-ref="aerial-gym"></cite></td><td>物理、渲染、控制及训练基础设施。</td><td>平台讨论应比较具体能力和成本，不能声称现有仿真没有物理。</td></tr>
<tr><td>真实数据驱动的仿真基准 · RA-L 2020<cite data-ref="sim-benchmark"></cite></td><td>真实记录与模拟结果的误差评价。</td><td>借鉴验证思路；本轮不是复现其完整数据集。</td></tr>
<tr><td>Sirius · RSS 2023；ThriftyDAgger · CoRL 2021 / PMLR 2022<cite data-ref="sirius thrifty"></cite></td><td>部署反馈学习、介入与预算约束。</td><td>必读；建立强恢复监督基线，避免把已有思想重新命名为创新。</td></tr>
<tr><td>MimicGen · CoRL 2023；MILES · CoRL 2024 / PMLR 2025<cite data-ref="mimicgen miles"></cite></td><td>自动扩展示范与自主采集。</td><td>明确种子示范、环境复位和监督来源的假设。</td></tr>
<tr><td>So You Think You Can Scale Up Autonomous Robot Data Collection? · CoRL 2024 / PMLR 2025<cite data-ref="autonomous-cost"></cite></td><td>自主采集的限制与成本。</td><td>必读；将环境维护、成功判断和学习收益分别计量。</td></tr>
<tr><td>RoboTwin · CVPR 2025；RialTo · RSS 2024；RoboSplat · RSS 2025<cite data-ref="robotwin rialto robosplat"></cite></td><td>数字孪生、示范生成、视觉增强与真实迁移。</td><td>必读平台近邻；区分外观扩充、物理执行和策略学习。</td></tr>
<tr><td>CorrectNav · AAAI 2026 主会<cite data-ref="correctnav"></cite></td><td>纠正数据驱动的多轮参数训练。</td><td>必读飞轮近邻；导航的轨迹纠正不能直接充当接触专家。</td></tr>
<tr><td>RPG · arXiv v1（2026-10-01）<cite data-ref="rpg"></cite></td><td>仿真练习与真实部署的直接系统近邻；持续改进共享技能与提示。</td><td>组会重点对比。固定权重的执行系统改进与学生参数训练分别讨论，不把两者的绝对成绩直接比较。</td></tr>
<tr><td>EmbodiRSI · arXiv v3；Fly-by-Code · arXiv v1<cite data-ref="embodirsi fly-by-code"></cite></td><td>分别对应学生参数更新与主动诊断、程序修订。</td><td>保留直接近邻；不把 B2 称为 EmbodiRSI，也不混同程序与参数更新。</td></tr>
<tr><td>Learning to Teach · ICLR 2018；ALP-GMM · CoRL 2019 / PMLR 2020<cite data-ref="learning-to-teach alp-gmm"></cite></td><td>学生反馈驱动教学决策与课程调整。</td><td>作为学习反馈机制的基础，不能将“教师调整教学”本身宣称为首创。</td></tr>
<tr><td>Eureka · ICLR 2024<cite data-ref="eureka"></cite></td><td>根据训练反馈搜索奖励代码。</td><td>说明改进学习信号已有先例；本文不因此新增奖励搜索实验。</td></tr>
<tr><td>Data-Efficient Multitask DAgger · arXiv v1<cite data-ref="multitask-dagger"></cite></td><td>任务需求和模仿损失进展驱动数据调度。</td><td>直接方法近邻；PG 是损失下降信号，不等同于独立完整任务收益；未核得正式会录。</td></tr>
<tr><td>AM-Bench / ENPIRE<cite data-ref="ambench enpire"></cite></td><td>原生基准与研究工具。</td><td>作者实验室公开列为 CoRL 2026；本轮未核得正式会录条目，保留可查 arXiv 版本并记录作者声明。</td></tr>
</tbody></table></div>
<p><b>RPG 的证据边界。</b>原文第 III–IV 节与附录说明：报告的 15 轮曲线来自一次改进运行，各轮并非等计算预算；封存的是评价初态，部分不产生直接改进反馈的任务仍参与开发回归验证。实机定量结果为三任务共 30 次，不能由此推出广泛真实场景泛化。<cite data-ref="rpg"></cite> AirSpark 保留自己的 C/V/T 分组、成本记录与多 seed 评价。RPG 提供协议借鉴；是否加入定量基线取决于代码发布及任务接口、观测和预算能否匹配。</p>
<p><b>保留但降低叙事权重。</b>FSC 与因素化预算选择相关，RSI-Anything 与通用研究编排相关；二者保留为扩展阅读，当前主文不依靠它们证明学院或教学机制的新颖性。<cite data-ref="fsc rsi-anything"></cite> AIR-VLA、AirVLA、AeroManip-VLA 作为直接空中模型近邻保留，按当前核得的预印本记录引用。</p>
<p><b>本轮检索储备。</b><a href="https://github.com/InternRobotics/Re3Sim">Re3Sim 官方项目</a>标注 ICRA 2026，涉及 3DGS、物理仿真及示范生成；本轮未取得正式出版条目，列为后续精读，不补造 DOI。<a href="https://ojs.aaai.org/index.php/AAAI/article/view/28897">DexFuncGrasp（AAAI 2024）</a>的抓取标注系统可供工具设计参考，但与本文闭环主问题较远，不为补齐会议名称而加入主文。<a href="https://ira.lib.polyu.edu.hk/handle/10397/120405?mode=simple">Aerial-Balance-Bench（RA-L 2026）</a>有受约束无人机—球平衡任务及模型接口，列为动态交互评价储备，不替代原生 AM-Bench 主实验。<a href="https://jiang-yufei.github.io/">Aerial Manipulation in the Wild with Onboard Perception…</a>的作者页标注 IROS 2026 MoMA workshop，不能写成 IROS 主会论文。</p>
<p><b>取舍原则。</b>正文使用与论断对应的最少充分引用。近期工作按公开版本讨论；作者报告录用与正式论文集分开标识。无需为每篇引用增加一组实验：基础文献用于说明假设，直接方法近邻用于限定主张；只有实际适配且信息、预算可匹配的方法才作为定量基线。</p>
</details>

<details class="editorial-note" id="citation-protocol"><summary>引用规范与本轮核查记录（非论文主文）</summary>
<p>网页采用数字引用、作者排序和完整作者信息，便于迁入 LaTeX。当前公开的 CVPR author-kit 使用 <code>ieeenat_fullname</code>，所检查模板仍标为 2026；正式投稿须使用届时 CVPR 2027 指定版本，由 BibTeX 生成排序、编号和格式，不手工锁定网页编号。<a href="https://github.com/cvpr-org/author-kit">官方 author-kit</a>。</p>
<p>正式发表条目优先引用论文集或期刊，预印本记录 arXiv 版本；软件与安装说明使用机构作者、版本或访问日期。arXiv 元数据中的会议备注与正式录用记录分开核验；本页不把下载量、项目页或作者声明当作独立复现证据。BibTeX 与网页共享同一元数据源。</p>
<div class="table-wrap"><table><caption>表 A3. 影响叙事与引用的主要修订，基础核查于 2026-10-18，补充核查于 2026-10-19。</caption><thead><tr><th>来源</th><th>核查结果</th><th>论文中的处理</th></tr></thead><tbody>
<tr><td>EmbodiRSI</td><td>v3 包含过程监测、CEC、ADC 及优势条件化训练；采集优先级采用失败集中启发式。</td><td>按预印本引用；不简化为普通行为克隆，B2 不标为其复现。</td></tr>
<tr><td>Fly-by-Code</td><td>v1 研究空中操作的主动视觉与物理诊断及程序改进。</td><td>补为直接近邻；区分程序修订和学生权重学习。</td></tr>
<tr><td>RialTo / MimicGen</td><td>分别可在 RSS 2024 / CoRL 2023 正式论文集中核验。</td><td>补充真实迁移与自动示范的已有基础。</td></tr>
<tr><td>RSI-Anything</td><td>已有 arXiv:2610.13912v1。</td><td>由旧技术报告链接升级为论文版本，补全作者。</td></tr>
<tr><td>AIR-VLA / AirVLA</td><td>分别有独立论文题名与作者。</td><td>用论文题名代替仓库名或项目简称。</td></tr>
<tr><td>AM-Bench / ENPIRE</td><td>作者实验室页面列 CoRL 2026；本轮未取得正式会录条目。</td><td>保留 arXiv 记录和作者来源，不将声明当作独立复现。</td></tr>
<tr><td>学习反馈文献（2026-10-19）</td><td>Learning to Teach、ALP-GMM、Eureka 有正式会议来源；Multitask DAgger 按可核查预印本记录。</td><td>支撑方案调整的已有基础；正文、数字引用和 BibTeX 同步。</td></tr>
<tr><td>接触模仿学习综述</td><td>Crossref 登记 IJRR 于 2026-03-14 在线发表。</td><td>引用期刊 DOI；未编造尚缺的卷期页码。</td></tr>
</tbody></table></div>
<p>CVPR 2027 当前 CFP 将 2026-09-15 之后上线的工作一般视为同期工作，但仍要求引用讨论并在可行范围内比较；影响本文的工作须作为已有工作说明。预印本与正式论文都适用该规则。<a href="https://cvpr.thecvf.com/Conferences/2027/CallForPapers">CVPR 2027 官方政策</a>。这里记录投稿规范，不将政策页面混入技术参考文献。</p>
</details>

<details class="editorial-note" id="group-meeting"><summary>2026-10-20 周二组会：汇报结构与材料准备（非论文主文）</summary>
<p>汇报围绕“模拟学院提供什么、闭环如何运行、用什么证据验证”展开。建议主讲 10 页，方法公式、完整文献表和协议细节作为备份页。下表是制作提纲，不表示 PPT 或对应实验已经完成。</p>
<div class="table-wrap"><table><thead><tr><th>页次与主题</th><th>核心表达</th><th>展示材料</th></tr></thead><tbody>
<tr><td>1 · 研究定位</td><td>面向空中操作策略自进化的模拟学院。</td><td>平台主视觉与一句研究目标。</td></tr>
<tr><td>2 · 问题与动机</td><td>持续学习需要环境、复位、监督和评价共同支持。</td><td>一个空中操作任务及数据获取流程。</td></tr>
<tr><td>3 · 相关工作与增量</td><td>承接空中操作、数字孪生和反馈学习；明确平台与参考方法的关系。</td><td>以 RPG、EmbodiRSI、Fly-by-Code 对比持久改进对象、平台作用与评价边界；标注发表状态。</td></tr>
<tr><td>4 · 学院全貌</td><td>基础设施、SparkMentor、可替换练习方法共同服务于学生。</td><td><a href="#figure-1">图 1：学院平台架构</a>。</td></tr>
<tr><td>5 · 平台与工程证据</td><td>视觉物理、任务复位、采集标注、训练评测如何连接。</td><td><a href="#figure-a1">图 A1：视觉—物理执行链路</a>，配合带日期的实际画面与能力清单；已实现、待验收、规划分别标注。</td></tr>
<tr><td>6 · 参考闭环</td><td>执行反馈 → 练习计划 → 经验 → 学生更新 → 独立评价。</td><td><a href="#figure-2">图 2：RSI 策略方法</a>；示意与实测明确区分。</td></tr>
<tr><td>7 · 平台及学习实验</td><td>运行可靠性与同预算策略收益分别检验。</td><td>平台指标与 B0–B3 对照设计，不绘制虚构成绩。</td></tr>
<tr><td>8 · 外部与真实验证</td><td>返回 AM-Bench；对应 3DGS 场景中的冻结策略实测。</td><td><a href="#figure-3">图 3：实验流程</a>，划清训练测试边界。</td></tr>
<tr><td>9 · 当前进展与下一步</td><td>按实际证据汇报原生基线、对齐、数据往返与训练进度。</td><td>会前更新状态与验收产物；历史导航演示不充当操作闭环结果。</td></tr>
<tr><td>10 · 组内讨论</td><td>确定首个操作任务、真实场地和数据采集分工。</td><td>最小实验路径、资源需求与待决事项。</td></tr>
</tbody></table></div>
<p>制作前集中核对现有平台截图或视频、最新运行记录、实际机器人与场地材料；缺失证据保留为明确的实验计划。论文现阶段的主张与实现边界以本页正文及复现记录为准。</p>
</details>

<details class="editorial-note" id="version-history"><summary>版本记录与叙事演进</summary>
<p>此记录用于保留研究稿的演进过程，不属于论文主文。</p>
<div class="table-wrap"><table><thead><tr><th>版本</th><th>叙事中心</th><th>与当前稿的关系</th></tr></thead><tbody>
<tr><td><a href="versions/v0.6/index.html">v0.6</a></td><td>自主教学与学生—教师双层改进。</td><td>保留环境、练习与评价的学院概念；教师自修改作为独立扩展。</td></tr>
<tr><td><a href="versions/v0.7/index.html">v0.7</a></td><td>通用模拟学院、持续学习、研究记忆和 harness。</td><td>保留完整工具链与跨轮连续性。</td></tr>
<tr><td><a href="versions/v0.8/index.html">v0.8</a></td><td>空中操作的数据需求、高保真仿真与真实迁移。</td><td>确立具体研究对象和已有平台积累。</td></tr>
<tr><td><a href="versions/v0.9.1/index.html">v0.9.1</a></td><td>面向策略自进化的模拟学院，加入 AM-Bench 复用。</td><td>保留学院定位、策略改进目标与原生回测。</td></tr>
<tr><td><a href="versions/v0.10/index.html">v0.10</a></td><td>阶段证据、等预算闭环、原生与真实评价及编号引用。</td><td>成为当前方法与实验协议的基础。</td></tr>
<tr><td><a href="versions/v0.11/index.html">v0.11</a></td><td>空中学习需求 → 持续反馈 → 模拟学院 → 策略更新 → 外部验证。</td><td>按论文主文重组；实现安排与版本讨论移入附录。</td></tr>
<tr><td><a href="versions/v0.12/index.html">v0.12</a></td><td>事件阶段、物理对应、受限数据决策与原生复现。</td><td>纳入研究分支核查，区分拟议方法、实施路线与真实验收；未新增实验成绩。</td></tr>
<tr><td><a href="versions/v0.13/index.html">v0.13</a></td><td>过程条件 → 物理重现 → 有效监督 → 独立学生收益。</td><td>保留学院主线；明确条件选择、C/V/T、监督边界与同成本对照，补全近邻文献和标准引用。</td></tr>
<tr><td><a href="versions/v0.14/index.html">v0.14</a></td><td>空中交互学习设施 → 反馈驱动策略更新 → 独立能力验证。</td><td>统一 SparkMentor；补充正式发表的基础与直接近邻，区分程序和参数改进，保留两项贡献并加强恢复监督基线。</td></tr>
<tr><td><a href="versions/v0.15/index.html">v0.15</a></td><td>模拟学院平台 → 共享学习工具与编排 → 参考练习方法 → 独立验证。</td><td>突出平台定位，明确方法可替换；单列平台支持能力评价，保留现有学习对照与真实验证，补充组会提纲。</td></tr>
<tr><td><a href="versions/v0.15.1/index.html">v0.15.1</a></td><td>保持学院平台定位，补充仿真练习与真实部署的直接近邻。</td><td>加入 RPG 正文引用、书目与组会比较；区分技能和提示修订、学生参数更新及场景重建，未扩展主实验矩阵。</td></tr>
<tr><td>v0.16</td><td>保持学院主线，形成架构、执行、经验与验证四张论文框图。</td><td>新增可放大的矢量图、高清导出、绘图源文件与汇报索引；保持现有方法和实验矩阵，未新增结果。</td></tr>
<tr><td>v0.16.1</td><td>网页默认使用中文框图。</td><td>保留英文原图，新增中英文 SVG / PNG 下载及双语素材包；研究内容不变。</td></tr>
<tr><td>v0.16.2</td><td>以常规论文流程图呈现实验设计。</td><td>图 4 简化为初始策略、闭环改进与仿真 / 实机评价；图注和正文同步改写。</td></tr>
<tr><td><a href="versions/v0.17/index.html">v0.17</a></td><td>学院平台架构与 RSI 策略方法分别作为主图。</td><td>重绘图 1，新增完整 RSI 方法图 2，实验流程编号为图 3；原执行链路与专家延续图移入附录。</td></tr>
<tr><td>v0.18 · 当前</td><td>保持模拟学院与反馈自进化主线，补充学习反馈及跨轮方案调整。</td><td>保留两项贡献和 B0–B3；扩充干预记忆、有限调整、图 2 与代表任务分析；新增四篇课程与学习反馈文献。</td></tr>
</tbody></table></div>
<p>v0.14 起统一论文中的 SparkMentor 命名，工程中的旧 sparkclaw 路径暂作兼容名称。v0.15 完善平台、编排与方法的层次；v0.15.1 补充 2026-10-19 的 RPG 核查，保留其他文献原核查日期。v0.18 的逐项变更见<a href="#revision-v018">本轮修改对照</a>。本轮未迁移工程接口，也未新增实验结果。</p>
</details>

<details class="editorial-note" id="revision-v018"><summary>v0.18 修改对照：保留主线，补充闭环机制</summary>
<p>本轮依据讨论补充自进化机制，不将论文改写为教学算法搜索。下表记录相对 <a href="versions/v0.17/index.html">v0.17</a> 的变化，便于核查。</p>
<div class="table-wrap"><table><thead><tr><th>位置</th><th>保留内容</th><th>本轮修改</th></tr></thead><tbody>
<tr><td>标题、摘要与贡献</td><td>空中操作模拟学院；平台与反馈驱动策略自进化两项贡献。</td><td>补充学习反馈和有限调整，不更换第二项贡献名称。</td></tr>
<tr><td>§2 相关工作</td><td>已有空中、仿真、数据闭环、程序和参数改进脉络。</td><td>补充课程与学习反馈；细化 ENPIRE、EmbodiRSI 边界；新增四条参考文献。</td></tr>
<tr><td>§3.3 主动练习</td><td>过程条件分配、物理前缀、专家延续、监督边界。</td><td>“练习准入”改为“练习可行性检查”；新增监督起点调整的候选机制及适用范围。</td></tr>
<tr><td>§3.4–3.5 多轮闭环</td><td>学生参数更新、固定评价、工具编排、C/V/T 划分。</td><td>区分执行反馈 E 与学习反馈 F；记忆关联干预及结果；有限开放生成与使用配置，关键修改作同父模型比较。</td></tr>
<tr><td>图 1–3 与附录图</td><td>平台、RSI、实验三张主图及执行细节。</td><td>只更新图 2 的学习反馈、干预记忆及虚线调整支路；其余图内容保留。</td></tr>
<tr><td>§4 实验</td><td>B0–B3、平台可靠性、AM-Bench 原生回测、3DGS 对应实机。</td><td>代表任务补充固定方案／当前反馈／历史反馈分析；候选成本单列，不扩成全面交叉矩阵。</td></tr>
<tr><td>主张与工作量</td><td>学生独立执行的收益为核心结果，定量结果待完成。</td><td>不宣称教学自适应首创；跨任务教学迁移为后续验证，不新增教师网络、奖励搜索或控制器修改要求。</td></tr>
</tbody></table></div>
</details>
</section>
`);
