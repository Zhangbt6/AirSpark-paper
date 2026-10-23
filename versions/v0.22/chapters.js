document.querySelector('#content').insertAdjacentHTML('beforeend',`
<section id="introduction" data-title="引言" data-number="1">
<div class="eyebrow">INTRODUCTION</div><h2>1. 引言</h2>
<p>空中操作使机器人能够在不同高度和受限空间中执行抓取、运输与接触作业。视觉动作策略依据机载观测生成动作，而飞行运动、机械臂动作和环境反作用共同影响执行。空中机器人综述、实体基准与学习型接触控制已揭示协调运动与交互响应的挑战。<cite data-ref="aerial-survey aerial-bench aerial-sliding"></cite> 例如，接近目标的几何位姿相近，并不意味着接触动作相同：相对速度、对齐状态与动作时刻会影响后续交互。近期空中操作基准与视觉语言动作模型进一步使这些学习需求具体化。<cite data-ref="ambench airvla"></cite> 可靠的视觉动作策略需要与交互过程相匹配的学习经验。</p>
<p>自动示范生成、数字孪生与 Real-to-Sim-to-Real 学习已拓展经验获取和部署验证的途径；学习者状态监督、部署纠正和近期反馈驱动方法也开始依据当前策略安排后续采集与更新。<cite data-ref="mimicgen robotwin rialto dagger sirius correctnav embodirsi rpg"></cite> 然而，成功生成经验不能直接说明这些经验对当前学生有用，失败反馈也不能直接确定应从哪段过程开始监督、如何组织局部与完整示范，以及当前训练安排是否有效。自主采集研究进一步指出复位、成功判断与数据效用各自构成限制。<cite data-ref="autonomous-cost"></cite> 本文研究如何在空中操作中，将可重现的交互过程与实际学习响应连接起来，使经验获取持续服务于学生改进。</p>
<p>回答这一问题需要能够反复开展学习实验的设施：从合法初态进入指定运动条件，保留机载视觉和动作历史，生成合格专家监督，再训练学生并比较完整任务表现。为此，本文提出 <b>AirSpark：面向空中操作策略自进化的模拟学院</b>。学院通过 UE 渲染、MuJoCo 动力学、任务复位及统一记录接口支持上述过程，并将真实场景外观与显式物理资产、相机和机器人配准。学院将练习决策落实为可执行、可检查的采集与学习过程。Agentic Robots 综述对模型、数据、环境与 Harness 的功能划分为这种系统组织提供背景。<cite data-ref="agentic-robots-survey"></cite></p>
<p>SparkMentor 是组织这些设施的 Agent Harness。执行反馈定位候选练习，学习反馈检验此前安排是否产生收益；跨轮记忆保存已经尝试的方案、数据、学生版本与评价。在预定选项内，系统修订监督起点、示范构成及经验回放，过程条件分配提供初始参考。例如，接触失败后过晚的专家接管可能产出低；局部延续即使成功，也未必使学生学会正常初态下的减速、对齐与阶段衔接。这些观察形成待检验的练习假设，由实际采集、训练和评价决定其效用。学习结果保留于学生参数，最终测试冻结学生，不依赖 Mentor 临场纠错。</p>
<p>研究分别检验经验设施的可靠性、预算匹配下反馈修订的学习效用，以及冻结学生在原生 AM-Bench 与对应物理实机中的表现。固定经验方案仍按新的执行证据分配条件；其与修订方法的比较检验进一步调整经验生成和使用方式的价值。当前反馈与历史反馈的对照则检验更早的显式干预记录的额外作用。具体对照与统计协议见第 4 节，效果仍由后续实验确定。</p>
<h3 id="contributions">本文的主要贡献</h3><ol class="contribution-list">
<li><b>面向空中操作策略学习的模拟学院。</b>连接真实场景对应、同步视觉—物理执行、动态交互条件重现、专家监督生成与统一训练评价，为可重复的空中操作学习实验提供基础设施。</li>
<li><b>执行与学习反馈驱动的策略自进化框架。</b>由 SparkMentor 将当前执行证据与跨轮干预结果结合，在统一的经验生成和使用空间内修订后续练习，并通过参数更新将学习结果保留于学生策略。</li>
</ol></section>

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
<p>Qin 等从模型、数据、环境和 Harness 四个功能域组织机器人执行与能力发展的研究，为区分学习模型、经验设施和 Agent 编排提供了系统视角。<cite data-ref="agentic-robots-survey"></cite> 本文将 SparkMentor 定位为组织学习工具、运行状态和多轮干预记忆的 Agent Harness；模拟学院提供可执行的空中操作练习，相关作用由学生学习与独立执行结果检验。</p>
<p>Fly-by-Code 通过 View 与 Probe 主动获取视觉及物理诊断证据，用于任务判断和程序修订；修订程序在环境复位后重新执行。其改进对象是表达机器人行为的可执行程序，核心实验检验主动诊断对程序改进的作用。<cite data-ref="fly-by-code"></cite> 程序同样可以表示策略，但这一路线与通过训练更新学生权重具有不同机制。本文将其作为空中主动诊断的近邻，而不把它描述为学生参数训练方法。</p>
<p>RPG 从离线数据构造相关仿真练习，通过执行诊断修订共享技能代码与系统提示，并在跨任务验证后保留修改，再将冻结系统部署到实机；模型权重保持不变。其 Reconstruct 构造能力相关的任务，不要求复原源场景。<cite data-ref="rpg"></cite> 因而，仿真练习、跨轮能力保留与真实部署已有直接先例。AirSpark 的本文方案以可训练学生为改进对象，研究空中操作的经验设施及参数更新收益；更新对象的区别限定比较机制，平台价值仍需由运行与学习证据支撑。</p>
<p>ENPIRE 为真实机器人改进提供环境、执行和验证工具，支持训练方法修订及研究经验复用。EmbodiRSI 是直接的学习型策略近邻：其 CEC 从策略到达的失败状态产生纠正轨迹，ADC 根据弱项安排示范采集，并结合优势条件化学习更新学生。其公开采集规则以失败集中程度作为启发式，不估计配置特定的学习收益。<cite data-ref="enpire embodirsi"></cite> AirSpark 承接这些反馈机制，组织空中操作的环境、经验和训练评价设施，以过程经验分配及有限的方案调整研究学生完整任务表现。平台可靠性、经验成本与学习收益分别提供证据。</p>
<h3 id="related-teaching" data-nav="课程与学习反馈" data-number="2.5">2.5 自适应课程与学习反馈</h3>
<p>Learning to Teach 利用学生反馈优化教学决策；ALP-GMM 根据学习进展生成课程。<cite data-ref="learning-to-teach alp-gmm"></cite> Data-Efficient Multitask DAgger 分别考察任务成功率与模仿损失下降驱动的数据分配，其中损失进展是调度信号，不能等同于完整任务收益。<cite data-ref="multitask-dagger"></cite> Eureka 利用训练反馈迭代奖励代码，说明学习方案本身也可以成为外部搜索的对象。<cite data-ref="eureka"></cite></p>
<p>这些工作构成利用学习反馈调整练习与训练的基础。AirSpark 将这一能力纳入完整的反馈自进化流程，围绕空中交互中的监督起点、经验构成和能力保留考察其作用。本文研究模拟学院如何支持学生策略的持续改进，并在共享设施与预算下分析过程经验、跨轮记忆和方案调整的具体作用。</p>
</section>

<section id="method" data-title="方法" data-number="3">
<div class="eyebrow">METHOD</div><h2>3. AirSpark 模拟学院</h2>
<p>AirSpark 的系统设计将平台基础设施、学习编排和练习决策方法分层组织。基础设施提供可执行的环境与学习工具；SparkMentor 维护实验状态并编排闭环；练习方法决定下一轮采集什么，跨轮记录支持检查学习效果并调整经验生成与使用方案。学生策略参数保留最终学习能力。图 1 描述学院提供的公共设施，图 2 以六步学习循环描述基于这些设施的策略自进化方法，图 3 给出实验流程。视觉—物理执行链路和专家延续细节见附录图 A1–A2。</p>
<figure class="paper-figure diagram-figure" id="figure-1">
<div class="diagram-heading"><b>图 1 · 学院平台架构</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.22" data-figure-title="图 1 · 学院平台架构" aria-label="放大图 1：学院平台架构"><img src="figures/fig01-academy-overview-zh.svg?v=0.22" alt="图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。" width="1440" height="870" loading="lazy"></button>
<figcaption>图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.22" data-figure-title="图 1 · 学院平台架构">放大查看</button><a href="figures/fig01-academy-overview-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig01-academy-overview-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig01-academy-overview.svg?v=0.22" download>英文 SVG</a><a href="figures/fig01-academy-overview.png?v=0.22" download>英文 PNG</a></div>
</figure>

<h3 id="scope" data-nav="问题定义" data-number="3.1">3.1 问题定义</h3>
<p>设任务条件为 ξ，其中包含场景、目标、初始状态和物理参数。策略 π<sub>θ</sub> 根据观测历史 h<sub>t</sub>、可用本体状态 p<sub>t</sub> 及语言指令 ℓ 生成动作 u<sub>t</sub>，低层控制器 K 将动作转换为机器人执行。任务专用策略可省略语言输入。给定初始策略 θ<sub>0</sub> 和总预算 B，我们研究如何通过 R 轮数据采集与更新，提高策略在独立任务分布上的完整成功率。</p>
<div class="equation" aria-label="目标任务分布上的策略性能">u<sub>t</sub> = π<sub>θ</sub>(h<sub>t</sub>, p<sub>t</sub>, ℓ)<br>J<sub>𝒟</sub>(θ) = 𝔼<sub>ξ∼𝒟</sub>[Success(π<sub>θ</sub>, ξ)]<br>最大化 J<sub>𝒟</sub>(θ<sub>R</sub>)，满足 ∑<sub>r</sub> Cost<sub>r</sub> ≤ B</div>
<p>𝒟 是目标任务分布，封存测试 T 用于估计最终策略的 J<sub>𝒟</sub>，不参与干预选择。预算按预先指定的资源分量分别检查。任务组预先划分为采集池 C、开发验收池 V 和封存测试池 T；诊断与专家延续来自 C，V 用于预定的模型验收，并向方案调整提供预先允许的汇总反馈；其轨迹及由轨迹派生的训练样本不进入学生训练。T 在研究配置冻结后统一评价，不向闭环提供反馈。闭环选择仅读取 C 的过程证据及预先允许的开发验收摘要。目标位置、接触真值及专家信息用于诊断、采集和标注，学生输入由部署协议固定。我们将“策略自进化”定义为执行与学习反馈影响后续练习、训练更新跨轮次保留的有界过程，不要求各轮性能单调提高。过程条件分配是初始参考规则；基于学习反馈的有界计划修订与学生参数更新共同构成本文研究的跨轮闭环。正式评价冻结学生参数，不使用教师临场纠错或测试时程序修订；评价中的人工接管单独记录。该定义区分学习阶段的反馈闭环与执行阶段的任务求解。</p>

<h4 id="feedback-principle">闭环学习建模与设计依据</h4>
<p>AirSpark 将跨轮学习表示为具有随机性与更新滞后的反馈过程。学习状态 x<sub>r</sub> = (θ<sub>r</sub>, ψ<sub>r</sub>, D<sub>r</sub><sup>acc</sup>) 包含学生参数、可恢复训练状态与已接纳训练数据清单；ψ 包含优化器、学习率调度、适用时的混合精度状态及训练采样随机状态。评价器 H<sub>V</sub> 测量表现，决策器 μ<sub>g</sub> 选择采集和数据使用配置，g 表示实验中固定的决策规则及信息权限，学院执行实际更新 U。机器人低层控制 K 在执行周期内工作，μ 在训练轮次间工作。该划分采用反馈系统中目标、测量、决策与被调节过程的基本关系。<cite data-ref="feedback-systems"></cite></p>
<p><b>能力画像与目标的用途。</b>ĉ<sub>r</sub> 汇总固定任务组的完整成功率；c* 是预先指定的报告目标，差距 e 用于能力报告，并在预定检查点定位需要复查的任务组。基础 B1–B3 的任务组预算比例固定，组内分别按覆盖、终态或过程证据分配；不额外乘入 e 或临时改变组间权重。阶段到达率与转换结果用于解释画像，未到达阶段记为证据不足。</p>
<div class="equation" aria-label="闭环学习状态、测量与更新">ĉ<sub>r</sub> = H<sub>V</sub>(x<sub>r</sub>)，e<sub>r</sub> = [c* − ĉ<sub>r</sub>]<sub>+</sub><br>A<sub>r</sub> = μ<sub>g</sub>(E<sub>r</sub>, M<sub>r</sub>, η<sub>r</sub>, B<sub>r</sub>)<br>x′<sub>r+1</sub> = U(x<sub>r</sub>, A<sub>r</sub>; ω<sub>r</sub>)</div>
<p>E 来自采集池 C 的执行诊断，F 来自开发池 V 的父代—候选比较，并写入记忆 M。ω 表示采样和优化随机性；ĉ 是带有限样本误差的测量摘要。A 是本轮提出的可执行练习计划，包含条件与采集分配、监督起点、示范构成和回放选项；η 是此前已接纳、允许延续使用的配置版本，不是另一个可训练教师的参数。算法 1 及状态处理表定义候选如何进入下一轮，图 A3 说明各角色的关系。</p>
<p><b>设计依据。</b>执行反馈覆盖当前学生访问的状态，学习反馈检验新增经验是否转化为完整任务收益。DAgger 的学习者状态监督与 ALP-GMM 的学习进展课程分别提供相关基础。<cite data-ref="dagger alp-gmm"></cite> H 是执行后的测量，U 是实际采集和训练；RSI-Anything 所用的行动结果预测器属于另一种明确建模的模块。<cite data-ref="rsi-anything"></cite> 本文的适用条件与接纳说明集中于<a href="#feedback-assumptions">附录 A.6</a>。</p>

<h3 id="platform" data-nav="平台与共享接口" data-number="3.2">3.2 模拟学院基础设施与共享接口</h3>
<p>学院以 UE 的视觉渲染和 MuJoCo 的动力学与接触仿真为基础，复用 URLab 等基础组件，通过统一坐标、时间戳及实体标识连接机器人、相机和物体状态。<cite data-ref="mujoco urlab"></cite> 一次执行同时记录模型观测、策略命令、实际运动和物理事件，使动作偏差与其视觉后果能够在同一时间线上分析（附录图 A1）。任务参数化接口控制对象、布局、初态及合法物理条件，复位接口用于重新构造可比较的试验。</p>
<p>监督由专家在选定任务条件下实际执行产生。数据记录包含 RGB、策略所需的本体与动作序列，以及用于质检和诊断的语义、接触与阶段标注。质量检查验证时间顺序、动作语义、完整终态和异常终止。训练导出仅保留学生协议允许的字段，并通过父任务标识维持划分与数据谱系。</p>
<p>跨仿真对应不仅是场景外观的重建，还包括机器人形态、动作参考系、控制周期、执行器限制及接触规则。物理对齐以配对控制响应和任务事件检验，不假定两个求解器产生逐位相同的轨迹。抓取中的附着或约束须与原生任务定义一致并单独披露；非任务定义的吸附辅助不能用于证明真实接触抓取、抗滑落或载荷稳定能力。</p>
<p>针对真实场景，学院采用 3DGS 表示静态外观，并将显式碰撞几何、可交互对象和语义实体配准到相同坐标系。<cite data-ref="3dgs"></cite> 可动物体由独立物理资产表示，以维持操作过程中的接触和遮挡关系。场景重建与机器人标定共同定义真实任务对应的训练环境；动力学和接触参数通过任务相关检查确定。</p>

<p><b>共享学习接口。</b>系统围绕任务定义、执行记录、练习计划、训练数据、模型版本和评价报告组织运行产物。练习方法输出条件、预算与监督请求；采集工具返回实际轨迹、质检和成本；训练与评价工具接收明确的数据及模型版本。不同方法共用这些产物与工具，便于替换选择规则并复用运行记录。具体观测、动作与评分协议在一组实验中冻结。</p>



<h3 id="practice" data-nav="RSI 策略方法" data-number="3.3">3.3 RSI 策略：执行诊断与主动练习生成</h3>
<p>在学院设施之上，本文以执行反馈驱动后续经验采集，并通过训练更新学生策略（图 2）。一次学习迭代包含执行、能力缺口诊断、练习决策、经验生成、参数更新和开发验收。SparkMentor 利用当前证据和跨轮记录组织这些步骤；学生参数保留学习结果，实验记忆保留已尝试的练习、成本及验收结果。下文以过程条件分配初始化练习决策。第 3.4 节将固定方案、规则式修订与 Agent 的当前／历史反馈修订放入同一执行器；第 4.3 节在至少两个任务上进行主比较。覆盖与终态分配保留为采集机制的辅助对照。</p>
<figure class="paper-figure diagram-figure" id="figure-2">
<div class="diagram-heading"><b>图 2 · RSI 策略方法</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.22" data-figure-title="图 2 · RSI 策略方法" aria-label="放大图 2：RSI 策略方法"><img src="figures/fig02-rsi-method-zh.svg?v=0.22" alt="图 2. 执行与学习反馈驱动的策略自进化。主循环依次为策略执行、交互过程诊断、反馈驱动练习规划、专家监督生成、学生策略更新和学习评估与接纳。第 r 轮根据执行证据 Eᵣ 与既往干预记录 Mᵣ 生成练习计划 Aᵣ；训练后的学习反馈 Fᵣ 写入 Mᵣ₊₁，供后续规划读取。接纳的学生进入下一轮，未接纳时保留父代；两种结果均进入记忆。封存评价与物理实机最终测试位于学习闭环之外。" width="1640" height="950" loading="lazy"></button>
<figcaption>图 2. 执行与学习反馈驱动的策略自进化。主循环依次为策略执行、交互过程诊断、反馈驱动练习规划、专家监督生成、学生策略更新和学习评估与接纳。第 r 轮根据执行证据 Eᵣ 与既往干预记录 Mᵣ 生成练习计划 Aᵣ；训练后的学习反馈 Fᵣ 写入 Mᵣ₊₁，供后续规划读取。接纳的学生进入下一轮，未接纳时保留父代；两种结果均进入记忆。封存评价与物理实机最终测试位于学习闭环之外。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.22" data-figure-title="图 2 · RSI 策略方法">放大查看</button><a href="figures/fig02-rsi-method-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig02-rsi-method-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig02-rsi-method.svg?v=0.22" download>英文 SVG</a><a href="figures/fig02-rsi-method.png?v=0.22" download>英文 PNG</a></div>
</figure>
<p id="rsi-cycle"><b>闭环职责与时序。</b>策略执行产生观测、动作与结果；交互过程诊断将其组织为阶段与条件证据 E；反馈驱动练习规划决定练什么、从何时监督以及如何使用经验；专家监督生成实际执行前缀、延续与质检，输出 D；学生策略更新产生候选；学习评估与接纳测量收益并决定保留哪个学生。只有训练更新学生参数；诊断和反思提出候选解释，不自动识别失败的因果机制。</p>
<p>第 r 轮规划只能读取已存在的 E<sub>r</sub>、M<sub>r</sub>、当前配置 η<sub>r</sub> 和剩余预算。本轮尚未得到的 F<sub>r</sub> 不参与该轮计划生成；评估后，全部干预结果写入 M<sub>r+1</sub>，供下一次允许的决策读取。SparkMentor 编排整个学习流程，图中模块 3 标出其练习决策入口；学院工具承担实际执行、监督、训练与测量。规则式和 Agent 决策器替换同一规划模块，属于实验对照，并非主图中同时运行的四个子模块。计划中的生成配置用于模块 4，回放配置用于模块 5；数据与计划版本通过运行清单关联。</p>
<p><b>过程条件。</b>我们以事件转换及少量可控变量组成条件 z，首选接近接触时的相对速度与对齐状态；滑移和载荷变化仅在已验证任务物理与学生观测支持时使用。阶段边界依据相对位姿、接触、抓持和释放事件确定。条件描述当前仍成立的状态；到达次数与到达后的失败率分别统计，未到达下游阶段视为证据不足。表 1 中的条件是待验证的练习假设。</p>
<div class="table-wrap"><table><caption>表 1. 候选过程条件、执行证据与专家延续。</caption><thead><tr><th>交互转换</th><th>需要辨识的差异</th><th>候选训练经历</th></tr></thead><tbody>
<tr><td>接近 → 接触</td><td>相近位姿下的相对速度、目标图像运动及动作时刻。</td><td>按当前运动条件减速、对齐并完成接触。</td></tr>
<tr><td>接触 → 稳定抓持</td><td>闭爪后的接触持续性、相对滑移和约束稳定性。</td><td>调整抓持、稳定保持或再次接近。</td></tr>
<tr><td>支撑 → 承载运动</td><td>离面前后的物体运动、载荷接管及机体跟随偏差。</td><td>稳定抬升并完成运输与放置。</td></tr>
</tbody></table></div>
<p><b>练习可行性检查。</b>候选条件按三项依据检查：在匹配任务几何的试采中是否对应不同的后续动作需求；学生的实际输入历史中是否存在可利用线索；合法物理前缀与固定专家能否产生可验收的延续。仅由专家真值区分的条件、不可达状态和控制故障分别记录，不直接当作可由新增监督修复的策略缺口。这些检查形成可检验的练习假设，最终学习价值仍由独立评价决定。</p>
<h4 id="failure-routing">失败诊断与干预分流</h4>
<p>系统先检查失败证据支持哪类处理，再安排新增监督。同一次失败可以有多个待检验解释；证据不足时记录未知并进行预算内复验，不强制给出单一原因。下表规定的是检查与处理路径，不将相关现象直接当作因果结论。基础实验采用预定检查顺序，诊断顺序的自适应选择留作后续扩展。</p>
<div class="table-wrap compact-table"><table><caption>从观察到下一步处理。</caption><thead><tr><th>观察</th><th>优先核查与处理</th></tr></thead><tbody>
<tr><td>策略命令与实际运动明显不一致</td><td>检查时序、动作参考系、执行器限制和低层跟踪；平台故障进入修复流程，不归入学生补采收益。</td></tr>
<tr><td>学生无法区分需要不同动作的状态</td><td>检查部署允许的视觉历史与本体线索。若确有观测缺失，另设接口研究；主比较不暗中增加传感器或真值输入。</td></tr>
<tr><td>专家延续产出低</td><td>检查候选起点、可达性与专家适用范围；比较更合适的接管时刻，或暂缓该条件。</td></tr>
<tr><td>监督有效，但学生完整任务仍失败</td><td>检查经验覆盖、标签与阶段衔接，再比较局部延续和完整示范。</td></tr>
<tr><td>新条件改善、原有能力下降</td><td>检查数据集中与训练干扰；在预设范围内比较回放覆盖及混合比例。</td></tr>
<tr><td>跨轮变化小于评价不确定性</td><td>按预定复验预算补充证据或保持当前方案；不将随机波动直接解释为教学失败。</td></tr>
</tbody></table></div>
<p><b>诊断与分配。</b>每轮在 C 的固定诊断分布中执行 N 条轨迹。每条轨迹对条件 z 仅记录首次进入；n<sub>z</sub> 为进入轨迹数，m<sub>z</sub> 为对应转换窗口内未完成预定目标的轨迹数。事件谓词、转换窗口与终止规则在先导后冻结，驻留帧数和定向采集的命中分布不参与频率估计。基础参考规则使用原始计数：</p>
<div class="equation" aria-label="过程经验采集优先级">ρ̂<sub>z</sub> = n<sub>z</sub>/N，f̂<sub>z</sub> = m<sub>z</sub>/n<sub>z</sub><br>q(z) = ρ̂<sub>z</sub> · f̂<sub>z</sub> / κ̂<sub>z</sub> = m<sub>z</sub>/(N · κ̂<sub>z</sub>)</div>
<p>κ̂<sub>z</sub> 是获得一份合格专家经验的实测平均成本，包括前缀、未命中、专家失败、复位与质检；主口径为固定硬件与并行设置下采集工作进程的占用时间，其他资源分别报告。q 优先处理诊断分布中失败发生量较高、合格监督成本较低的条件。条件可以重叠，因此它是排序权重，不是互斥失败概率或学习收益预测。</p>
<p>达到最小诊断计数、通过可行性检查且已有有限正成本估计的条件进入 q 分配。预定探索份额按固定覆盖规则试采稀疏或成本未知条件；剩余预算按归一化 q 分配，所有权重为零时返回覆盖规则。零合格产出记为成本未定义，进入受限试采或暂缓，不以零成本排序。基础规则不使用额外平滑；探索比例、最小计数及试采上限见配置表。</p>
<p><b>物理前缀与专家延续。</b>学院从合法初态出发，使用当前学生或预先规定的扰动前缀实际进入目标条件，再由固定专家继续执行。前缀未命中、接管失败及完整终态失败均记录并计费。重执行保留速度、控制器、接触及观测历史；使用状态快照须先验证这些状态的恢复一致性。附录图 A2 展开这一经验生成步骤。全过程承接学习者状态监督与扰动专家示范的思想。<cite data-ref="dagger dart"></cite></p>
<p><b>监督起点的候选调整。</b>对于接触失败，以及经验证任务物理支持的抓持／载荷失稳，可在少量预定事件时刻重执行物理前缀，并使用同一专家检查延续产出。这里得到的是给定专家、约束与预算下可产生有效监督的候选时刻，不是系统的绝对可恢复域；不假定越早接管越好或恢复能力随时间单调变化。起点调整作为第 3.4 节的可选经验生成方式，与固定接管规则比较，全部试探计入成本。最终价值由学生完整任务表现检验。</p>
<p><b>动作监督边界。</b>学生前缀仅提供部署允许的观测历史，不作为专家动作标签。动作块目标必须完整落在通过质检的专家区间内，或使用冻结的边界掩码规则；特权状态仅供专家、诊断与质检，不进入学生输入。</p>
<h4 id="aerial-case">空中操作案例：接触失败后的练习修订</h4>
<p>考虑学生能够到达目标附近，却因接近速度或动作时刻不合适而接触失败的情形。系统先排除命令与实际运动不一致，再比较接触前不同事件点的专家延续。若接管过晚导致合格监督产出低，可试验更早起点；若局部延续成功但正常初态下的完整任务未改善，则比较包含前置接近的完整示范。两种调整均是候选假设，须经实际采集和训练检验，不能由诊断标签直接推定有效。</p>
<p>若连续多轮出现“产出提高而完整任务无收益”，历史反馈组可检查此前起点与经验构成是否已被重复尝试，并在相同选项中选择另一干预或暂缓。规则式修订组获得相同历史摘要，按冻结的触发规则作决定；由此区分 Agent 决策与预写规则的效果。低层控制器与学生输入保持固定。柠檬抓持、脱离与运输只按已核验的任务机制解释，不将约束辅助或标志位当作真实抗滑落、果梗断裂或载荷稳定的证据。</p>

<h3 id="evolution" data-nav="多轮更新与记忆" data-number="3.4">3.4 多轮策略更新、学习反馈与实验记忆</h3>
<p>图 2 同时包含学生学习与练习计划修订。固定 B3 保持起点、经验构成和回放不变；可修订组在相同选项与总预算内调整这些配置。F 记录完整任务收益、旧能力变化及不确定性；采集成本与专家产出作为辅助诊断。每次干预关联父训练状态、配置、数据、候选模型、评价和资源记录。收益归属于整次干预，不按混合训练中的条件重复分摊。</p>
<figure class="algorithm" id="closed-loop-algorithm" aria-labelledby="algorithm-title">
<figcaption id="algorithm-title"><b>算法 1 · 预算约束下的反馈驱动策略更新</b></figcaption>
<p><b>输入：</b>初始学习状态 x<sub>0</sub>，隔离的 C/V/T，实验组 g，冻结配置 P，资源预算 B。<b>输出：</b>各轮保留状态、全部候选产物及成本记录。</p>
<ol class="algorithm-steps">
<li>检查 P 的必填项、任务划分与版本；参数或跨环境任务合同未冻结时停止主对照。初始化记忆 M 与成本账本。</li>
<li>在轮数和预算允许时，保存当前父状态 x<sub>r</sub>、方案 η<sub>r</sub> 及数据清单。</li>
<li>在 C 执行固定诊断任务并形成 E<sub>r</sub>；记录全部成本。按诊断分流处理，平台错误暂停运行。</li>
<li>按 g 选择条件及预算：B1 使用覆盖规则，B2 使用终态失败统计，B3 使用 q；B2 的分配器不读取阶段统计。</li>
<li>B3 按更新后的 E 分配条件，但固定监督起点、示范构成和回放选项；B3+adapt-rule 按冻结规则修订；B3+adapt-current 读取 E 与最近一次 F；B3+adapt-history 读取 E 与全部既往干预记忆。可修订组在登记检查点最多提出 K<sub>alt</sub> 个替代计划；原方案为保留选项，任何实际采集、训练或复验均计费。</li>
<li>为候选采集、固定步数训练和完整开发评价预留资源，并设置阶段上限；预算不足时停止新比较，执行中达到上限的候选按不完整产物归档。</li>
<li>每个候选从同一父状态与已接纳数据出发，实际执行前缀、专家延续和质检；不足以训练的数据或异常产物记为无效候选。</li>
<li>使用该候选的合格新增数据和既有回放训练 x′；不同分支隔离模型、优化器和新增数据，使用预先登记的随机种子。</li>
<li>在相同的 V 任务初态列表上比较父代与候选，得到 F、差值区间及成本；同一轮可复用完全相同父状态的评价，成本只计一次。</li>
<li>按下述经验接纳规则筛选。若有多个通过者，保留完整任务均值最高者；并列时优先当前方案，再按固定配置 ID 决定。</li>
<li>有通过者则提交其模型、训练状态、数据清单及允许的方案变更；否则恢复父状态。候选数据与失败产物按状态处理表归档。</li>
<li>将所有候选、F、决定及实际成本写入 M 和账本；即使拒绝，本轮计数与全局采集随机流仍推进。到达轮数、资源或固定停止条件后退出。</li>
</ol>
<p class="caption">B0 直接保留初始策略。封存测试 T 在研究配置冻结后统一评价保存模型，反馈不回流。算法为研究协议，工程实现及具体参数须在主实验前验收。</p>
</figure>
<h4 id="candidate-acceptance">开发接纳规则</h4>
<p>本版采用经验接纳：产物有效、规定评价全部完成且成本合规的候选，还须达到开发总体收益门槛，并满足所有预定旧能力组的容差。总体均值按固定任务权重计算；阈值与评价次数在主实验前冻结。</p>
<div class="equation" aria-label="经验接纳规则">Accept = Valid ∧ Complete ∧ WithinBudget<br>∧ (ΔĴ<sub>V</sub> ≥ δ<sub>J</sub>) ∧ (对所有 j：Δĉ<sub>j</sub> ≥ −ε<sub>j</sub>)</div>
<p>Ĵ<sub>V</sub> 是开发评价估计量，区别于总体目标 J<sub>𝒟</sub>。不完整评价记为缺失并暂不接纳；数据质检和候选接纳是两个不同步骤。差值区间通过按任务组配对初态重采样估计，训练 seed 结果分别报告；区间用于不确定性报告，不将经验门槛描述为置信下界保证。</p>
<details class="editorial-note" id="evolution-priorities"><summary>研究实施计划：进化手段与优先级</summary>
<p>学生参数始终是主要更新对象。框架首先开放与现有采集和训练工具直接相连的干预，再逐步研究更广的决策空间。优先级表限定本版实施范围，各层不构成必须同时完成的实验矩阵。</p>
<div class="table-wrap compact-table"><table><caption>优先级与允许的修改。</caption><thead><tr><th>层级</th><th>允许改变的对象与验证范围</th></tr></thead><tbody>
<tr><td>先导：设施与单轮</td><td>过程条件与采集预算；用固定 B3 验证采集—训练—验收，确认接近／接触机制可运行。</td></tr>
<tr><td>主实验：至少两个任务</td><td>少量监督起点、局部／完整示范构成、预设回放比例；比较固定方案、规则式修订、当前反馈与历史反馈；至少三次有序干预机会。</td></tr>
<tr><td>后续扩展</td><td>依据历史证据安排诊断试验与探索预算。可改变检查顺序，不改变成功定义与封存评价。</td></tr>
<tr><td>独立研究路线</td><td>新奖励或损失、策略结构、世界模型、残差控制及执行时规划器；不纳入本版闭环完成条件。</td></tr>
</tbody></table></div>
<p>覆盖与终态分配用于代表任务的机制分析；第二模型架构不是本轮完成前提。采集保留预定的覆盖与探索份额，并保留关键成功经验。反复低产出或无收益的条件可以暂缓，记录其原因及重测条件；学生版本或相关设施改变后再检查。暂停补采是一项资源决策，不代表该条件已解决或永远不可学习。历史反馈用于选择干预，跨学生可复用的教学能力仍需另行验证。</p>
</details>
<div id="practice-adaptation"><h4>有界计划修订与公平对照</h4>
<p>η 记录监督起点、局部／完整示范构成与预设回放选项。SparkMentor 是工具、状态、记忆和决策组成的 Agent Harness；本文不训练一个独立“导师网络”。主比较固定学生结构、输入、动作语义、专家、低层控制、优化算法和评分器，仅在登记选项内修改经验生成与使用方案。任务组预算权重保持固定，不临时改变目标分布。</p>
<div class="table-wrap"><table><caption>计划修订的统一动作空间与规则基线。</caption><thead><tr><th>可观测证据</th><th>可执行选项／规则式修订</th><th>Agent 需要验证的内容</th></tr></thead><tbody>
<tr><td>合格专家产出低</td><td>达到冻结阈值时，试验相邻的更早合法接管点；不可达则暂缓。</td><td>是否已有反例，低产出是否真由起点导致。</td></tr>
<tr><td>局部延续改善，完整任务无收益</td><td>达到触发条件时，选择预定的衔接／完整示范比例。</td><td>哪项前置或衔接假设值得有限预算试验。</td></tr>
<tr><td>新条件改善，保留组退步</td><td>依固定顺序选择下一档回放选项。</td><td>此前哪项数据构成产生干扰，是否应重复尝试。</td></tr>
<tr><td>证据不足或差异小于不确定性</td><td>预算内固定复验或保留原方案。</td><td>是否值得复验；不得将不确定直接解释为策略失败。</td></tr>
</tbody></table></div>
<p>规则组与历史 Agent 组读取相同结构化执行证据、当前及历史学习摘要，调用同一工具并使用相同动作、分支和资源上限。规则的触发阈值、优先级、并列顺序在先导后冻结。当前反馈组仅读取本轮 E 与最近一次 F，不读取更早干预结果，但可读取执行所需的当前方案与资源状态。审计日志对所有组完整保留，日志存在不等于决策可访问。</p>
<p>反思只用于提出待验证的计划。证据链为“执行／学习摘要 → 假设与方案 → 实际采集 → 训练 → 开发比较 → 接纳或拒绝”；最终收益必须体现在冻结学生中。规则与 Agent 共用同父状态的候选比较和固定验收；替代方案及保留方案若实际执行都占用相同总预算。拒绝不提交候选方案，但失败记录与成本继续保留，可供下一次允许的修订使用。</p></div>

<h3 id="harness" data-nav="研究工具与验证" data-number="3.5">3.5 研究工具与独立验证</h3>
<p>研究 harness 将环境配置、执行、采集、质检、训练和评价暴露为结构化工具。SparkMentor 负责提出和调度有预算约束的实验，工具负责实际执行与产物检查，验证模块依据固定标准接纳或拒绝更新。这一组织方式借鉴自主机器人研究中的工具化反馈流程。<cite data-ref="enpire"></cite> 每次运行记录输入配置、状态、输出与失败原因，使中断恢复和重放依赖可核查的产物，而非代理的文字总结。</p>
<p>可行性检查与先导执行筛除不适合当前学生、专家或执行系统的条件；实际采集提供监督，训练后的独立评价检验经验价值。学生架构、观测历史、动作语义、归一化方案、专家、低层控制和评分器在比较中固定；学生权重随各轮训练更新。正式测试与代理记忆隔离，在全部闭环结束后统一回测保存的模型。</p>
<p>一次运行须覆盖证据不足、条件不可行、监督不合格、候选无收益与预算耗尽等退出路径。诊断分流可以暂停采集并提交平台检查；修复环境、观测接口或控制器后建立新的配置版本，重新确认基线，相关收益与策略学习分开报告。各类退出均保留状态、原因与成本，使用同一轮配置和产物清单恢复工作。</p>
<p>固定 B3 保持经验生成与使用配置；规则式和 Agent 修订组开放同一组预定配置，但固定学生架构、输入历史、动作接口、专家、低层控制、主要损失、优化器及总训练预算；候选方案及其比较次数有预设上限。SparkMentor 将决策连接到采集、训练与验收工具，不修改成功标准或封存测试。一个可恢复的执行器连接各阶段，以同一轮的配置、数据、模型和评价记录恢复中断工作；不为不同策略复制调度链。确定性计划器提供可运行的参考，代理决策的额外价值由主实验中的规则式修订和当前／历史反馈比较检验，而非由聊天或工具调用次数推断。</p>
<h4 id="candidate-state">候选接纳、拒绝与中断后的状态处理</h4>
<div class="table-wrap state-table"><table><caption>表 3. 单次干预后的状态归属。</caption><thead><tr><th>对象</th><th>接纳候选</th><th>拒绝、无效或证据不足</th></tr></thead><tbody>
<tr><td>模型与训练状态</td><td>提交 θ′ 与对应 ψ′，用于下一轮。</td><td>继续使用父状态 θ、ψ；不沿用候选优化器动量或训练进度。</td></tr>
<tr><td>训练与回放数据</td><td>仅将被选候选的合格新增数据加入已接纳清单。</td><td>已接纳清单保持不变；候选数据归档，不自动进入后续回放。</td></tr>
<tr><td>方案版本 η</td><td>基础组保持固定版本；可修订组提交通过比较的允许配置。</td><td>保留当前版本，记录未采用的候选及原因。</td></tr>
<tr><td>产物与干预记忆</td><td colspan="2">所有尝试均保存配置、父状态、数据来源、质检、评价和结果；平台异常另标，不伪装为策略任务失败。</td></tr>
<tr><td>成本、轮次与随机流</td><td colspan="2">按实际消耗扣减预算；拒绝也推进尝试轮次、全局采集随机流和任务 ID。父训练随机状态的恢复仅用于隔离训练分支。</td></tr>
<tr><td>运行中断</td><td colspan="2">依据阶段完成标记、产物哈希和账本恢复；完整产物可复用，不完整阶段按登记的重试上限处理。同一实际执行不重复计费，新执行继续计费。</td></tr>
</tbody></table></div>
<p>拒绝后 η 保留当前版本，但下一次检查仍可基于新增失败证据提出不同方案；不可重置成本、轮次或伪造新父代。归档数据的重新使用必须由主实验前冻结的数据规则决定；本版默认不自动重用未被选候选的数据。跨实验复用需单列数据与历史成本。平台修复或观测接口变化建立新配置，重新确认基线。</p>
<details class="editorial-note" id="protocol-configuration"><summary>表 4 · 算法配置与冻结清单</summary>
<p>下表区分已明确的协议与待先导确定的数值。待定项不能当作已运行设置；主对照须填齐对应实验组的必填项、生成配置哈希并冻结。<a href="protocol/closed-loop-config.template.json" download>下载配置模板</a>。</p>
<div class="table-wrap state-table"><table><thead><tr><th>配置项</th><th>固定协议</th><th>待先导冻结／发布值</th></tr></thead><tbody>
<tr><td>任务与版本</td><td>C/V/T 按父任务划分；实例、布局与派生数据继承归属。</td><td>任务子集、环境／专家／学生版本、划分清单及哈希。</td></tr>
<tr><td>任务权重与目标</td><td>任务组预算权重固定；c* 用于报告和预定检查。</td><td>组权重、能力报告目标、旧能力保留组。</td></tr>
<tr><td>诊断与事件</td><td>同轨迹同条件首次进入计一次；原始计数，无额外平滑。</td><td>N、事件谓词、条件区间、转换窗口与超时。</td></tr>
<tr><td>分配与探索</td><td>可行条件按 q；稀疏／未知成本条件走覆盖试采；q 全零则覆盖。</td><td>最小计数、探索份额、覆盖规则参数和确定性排序。</td></tr>
<tr><td>试采、暂缓与重测</td><td>零产出不定义有限成本；达到上限后暂缓，按登记条件重测。</td><td>试采次数上限、暂缓条件、重测检查点。</td></tr>
<tr><td>基础采集配置</td><td>B1–B3 使用相同前缀、专家、监督起点与质检。</td><td>起点、前缀扰动、专家版本与质检阈值。</td></tr>
<tr><td>训练与轮次</td><td>主比较共享优化器、每候选步数与总训练上限；计划至少三次有序干预机会，seed 数由先导方差与功效估计冻结。</td><td>实际步数、回放比例、seed ID、轮次与保存清单。</td></tr>
<tr><td>方案调整</td><td>可修订组共享动作空间、历史权限和分支上限；原方案与候选从同父状态比较。</td><td>检查轮次、K<sub>alt</sub>、监督起点列表、经验构成与回放选项。</td></tr>
<tr><td>开发评价</td><td>父代和候选使用配对初态；任务组权重固定。</td><td>V 初态列表、各组次数、配对重采样次数及区间水平。</td></tr>
<tr><td>候选接纳</td><td>使用经验差值门槛；缺失评价暂不接纳。</td><td>δ<sub>J</sub>、各组 ε<sub>j</sub>、规定评价样本量与候选并列顺序。</td></tr>
<tr><td>预算与恢复</td><td>采集、训练、评价、代理分别记账；重试有上限。</td><td>各资源上限、每轮预留预算、重试次数与停止条件。</td></tr>
</tbody></table></div>
<p>模板记录研究协议，未代表仿真、训练、评价执行器已完成。实际使用参数随结果一并发布；各决策组分别保存配置。</p>
</details>
</section>

<section id="experiments" data-title="实验" data-number="4">
<div class="eyebrow">EXPERIMENTS</div><h2>4. 实验</h2>
<p class="experiment-status">本节为预定实验协议；任务运行对应、统计规模与定量结果仍待先导核验。</p>
<div class="table-wrap" id="hypotheses"><table><caption>研究假设、证据与不支持条件。</caption><thead><tr><th>假设</th><th>检验与位置</th><th>何时不能支持该主张</th></tr></thead><tbody>
<tr><td>H1 · 学院能可靠产生合格经验</td><td>§4.2：时序、复位、命中、专家产出、监督质检与实测成本。</td><td>执行／监督误差超过冻结容差，或产出不足以支持训练；此时先修复设施，不解释为策略缺口。</td></tr>
<tr><td>H2 · 学习反馈修订提高同预算学习效用</td><td>§4.3：至少两个任务，历史反馈对固定与规则式修订；当前反馈用于检验历史作用。</td><td>在预定实际效应与不确定性范围内未获得优势，不能宣称 Agent 或记忆有效；宽区间记为证据不足。</td></tr>
<tr><td>H3 · 收益保留于冻结学生并通过独立检验</td><td>§4.4–4.5：原生回测与物理实机分别评价，报告相对父代和同源对照的差值。</td><td>只有开发池提升、仅胜过退化的对照、或只有重建场景仿真成绩，都不足以证明相应能力提升与真实迁移。</td></tr>
</tbody></table></div>
<h3 id="benchmark" data-nav="实验设置与先导门" data-number="4.1">4.1 实验设置</h3>
<p><b>任务合同与初始策略。</b>候选为 AM-Bench 的 Lemon Harvesting 与 Cabinet Pick-and-Place，目标是至少两个不同任务定义，而非同任务的两个布局。<cite data-ref="ambench ambench-docs"></cite> 每项先核验原生环境 ID、本体、控制器、动作参考系／单位／频率、相机与本体字段、归一化、复位、抓取／附着规则和完整成功判据。源码中存在任务不等于跨环境运行对应已经完成。任一评分或部署合同被修改的实验标为“衍生设置”，不得以原生回测名义合并。</p>
<p>B0 由锁定的官方训练路径与合格原生数据得到，登记数据来源与规模、脚本版本、配置、seed 和 checkpoint 哈希；若采用公开权重，先核验实际资产及对应任务，不假定官方已发布可用 checkpoint。各组从相同父代训练状态出发。一个可训练后端承担主矩阵，优先验证 Diffusion Policy；ACT／OpenPI 为可接入后端，不把第二架构或语言能力扩展列为本轮必做矩阵。<cite data-ref="dp act openpi"></cite></p>
<p><b>划分与统计。</b>C/V/T 按父任务、物体和布局隔离，派生数据跨引擎继承同一归属；T 不参与计划修订。主指标为完整任务成功率，阶段到达数、转换成功、耗时和人工接管用于解释。先导估计任务／训练 seed 方差与配对差异，预先确定有意义差值 Δ<sub>min</sub>、显著性水平 α、目标功效 1−β、独立训练 seed 数、V/T 每组回合数及多重比较规则。三个 seed 仅作先导起点，不自动视为统计充分；增加同一模型 rollout 不能替代独立训练。主分析以训练 seed 与配对初态作分层不确定性估计，同时逐任务报告，不能只汇总最佳成绩。</p>
<details class="editorial-note" id="implementation-order"><summary>先导顺序与范围控制（非论文主文）</summary><p>先验证真实部署本体能否与候选 AM-Bench 配置匹配，再用具有飞行动力学的 PressButton 打通官方采集—训练—重载—评分。PressButton 是功能先导，不冒充柠檬任务完成。随后核验两个主任务与可用专家，实测每候选和每轮成本，完成一轮修订试验，再冻结主矩阵与统计规模。任务替换须发生在冻结前，并同步修改引言、评分与任务合同；同任务两个布局不算两个任务。浮动末端模式只用于排错。</p><p>主矩阵保留一个学生后端、至少两个任务和至少三次有序干预机会；不展开监督起点×比例×模型×任务的全组合。若先导预算不足以支持主张，明确缩小结论或投稿范围，不能以单任务补充分析代替主证据。<a href="#submission-plan">提交前冻结节点</a>。</p></details>
<h3 id="platform-evaluation" data-nav="平台可靠性 H1" data-number="4.2">4.2 学院设施与运行可靠性</h3>
<p>复用主实验记录，检查观测—动作时间偏差、命令与实际运动误差、复位偏差、条件命中率、专家延续产出、标签一致性及每份合格监督成本。相机配准、配对控制响应和任务接触事件检验视觉—物理对应；容差、次数及失败归类在评价前冻结。所有未命中、失败与质检拒绝保留分母。<cite data-ref="aerial-bench sim-benchmark"></cite></p>
<p>各决策器使用同一工具链，记录方法切换的接口改动；在一项主任务的产物提交后中断并恢复，核验模型／数据版本、重复计费和无效数据泄漏。人工干预、恢复率和监督产出与策略成功率分开报告。场景重建包含 3DGS 外观及显式物理资产／机器人配准；仅有逼真图像不能证明交互有效，也不据接口设计宣称任意机器人均已验证。</p>
<h3 id="comparison" data-nav="学习修订主比较 H2" data-number="4.3">4.3 等预算多轮策略改进</h3>
<p>主结果直接检验“学习反馈是否帮助修订后续进化计划”。至少两个任务共享相同 B0、任务分配权重、学生接口、专家、低层控制、优化算法与验收程序；可修订组共享监督起点、经验构成、回放选项及候选上限。B3 仍依据新执行证据按 q 调整条件分配，固定的是监督起点、示范构成和回放选项。比较修订组检验这些额外调整的价值；过程分配本身不能单独证明 Harness 或显式历史的收益。</p>
<div class="table-wrap"><table><caption>表 2. 统一实验组与证据作用。</caption><thead><tr><th>设置／规范 ID</th><th>决策与信息权限</th><th>比较范围</th></tr></thead><tbody>
<tr><td>B0 · 冻结父代</td><td>无新增训练；初始能力与零增量成本参照。</td><td>所有主任务。</td></tr>
<tr><td>B3 · 固定经验方案</td><td>每轮按 q 分配；起点、经验构成和回放选项固定。</td><td>主比较，至少两个任务。</td></tr>
<tr><td>B3+adapt-rule · 规则式修订</td><td>读取与历史 Agent 相同的结构化证据／历史；冻结触发阈值与优先级。</td><td>主比较，至少两个任务。</td></tr>
<tr><td>B3+adapt-current · 当前反馈</td><td>读取本轮 E 和最近一次 F、当前方案及资源；不读取更早干预结果。</td><td>主比较，至少两个任务。</td></tr>
<tr><td>B3+adapt-history · 历史反馈</td><td>SparkMentor 进一步读取全部既往干预记忆，提出并验证修订。</td><td>完整方法，至少两个任务。</td></tr>
<tr><td>B1 · 覆盖；B2 · 终态分配</td><td>分别按覆盖或终态统计分配；同样允许学习者状态上的专家延续。</td><td>B1 至少一个主任务，服务数据来源对照；B2 为代表任务的辅助机制分析。</td></tr>
</tbody></table></div>
<p><b>公平预算。</b>至少三次有序干预机会使早期干预结果能够影响后续决策；拒绝也占用一次机会。采集工作时间、训练计算、评价回合与 Agent 调用分别设相同上限，报告实际使用和学习曲线随累计资源的变化。所有诊断、前缀、失败、复位、质检、候选分支、被拒训练及开发复验均计费；额外分支占用后续训练机会。各候选共享固定步数配方，可调整回放仅限共同选项。B0 不强行匹配新增成本，单列为父代参照。</p>
<p><b>主要比较。</b>预先登记历史反馈相对固定 B3、相对规则修订的差值；历史相对当前反馈检验更早的显式干预记录的额外作用；当前组仍保有当前方案和最近反馈，不称为完全无记忆。规则组获得同动作空间与同历史，防止将预写 if–then 规则包装为 Agent 新意。B1/B2 用于解释分配依据，不声称 B2 是 EmbodiRSI 的复现。<cite data-ref="dagger dart sirius embodirsi"></cite> 同预算改进须同时报告相对 B0 的绝对变化；只有胜过其他退化模型不能称为学生能力提升。缺失评价与实际失败分开记账。</p>
<h3 id="external" data-nav="原生回测与来源 H3" data-number="4.4">4.4 AM-Bench 原生回测与数据来源对照</h3>
<p>全部闭环结束后冻结保存的学生，在未改动的 AM-Bench 任务与评分协议中统一回测；版本、环境 ID、本体、控制器、观测、动作、终止与评分均进入锁定清单。原生封存初态不用于 AirSpark 干预，阶段指标不能替代完整终态。未满足合同的结果单列为衍生设置。</p>
<figure class="paper-figure diagram-figure" id="figure-3"><span id="figure-4" aria-hidden="true"></span>
<div class="diagram-heading"><b>图 3 · 实验流程</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.22" data-figure-title="图 3 · 实验流程" aria-label="放大图 3：实验流程"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.22" alt="图 3. 先核验任务、初始策略与部署合同，再在至少两个任务中比较固定、规则式与 Agent 修订；至少一个主任务增加原生／学院数据来源对照。冻结学生后，原生回测与真实机器人执行分别报告。" width="1440" height="1000" loading="lazy"></button>
<figcaption>图 3. 先核验任务、初始策略与部署合同，再在至少两个任务中比较固定、规则式与 Agent 修订；至少一个主任务增加原生／学院数据来源对照。冻结学生后，原生回测与真实机器人执行分别报告。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.22" data-figure-title="图 3 · 实验流程">放大查看</button><a href="figures/fig04-evaluation-protocol-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig04-evaluation-protocol-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig04-evaluation-protocol.svg?v=0.22" download>英文 SVG</a><a href="figures/fig04-evaluation-protocol.png?v=0.22" download>英文 PNG</a></div>
</figure>
<div class="table-wrap" id="source-control"><table><caption>至少一个主任务的最小“数据来源 × 决策策略”对照；各格共用同一 B0。</caption><thead><tr><th>经验来源</th><th>B1 · 覆盖采集</th><th>B3+adapt-history · 历史修订</th></tr></thead><tbody>
<tr><td>原生 AM-Bench</td><td>直接在原生环境按覆盖补采并训练。</td><td>同一 Harness 与动作空间，直接在原生环境补采并训练。</td></tr>
<tr><td>AirSpark</td><td>仅更换经验来源，保留覆盖规则。</td><td>学院内反馈修订；复用主比较结果。</td></tr>
</tbody></table></div>
<p>这个对照直接回答“为什么不在原生基准多采数据”。匹配因素范围、专家能力、部署合同与资源上限；无法匹配的控制／观测／专家差异公开披露。原生 B1 对学院 B1 量化更换数据来源后的总体变化，同源修订对覆盖检验决策收益；不能将来源差异单独归因于渲染或物理求解器。该 2×2 至少进入一个主任务的结果，不扩展到所有任务与模型。</p>
<p>报告每组相对 B0 的变化及同一来源内／相同方法跨来源的配对差值与区间。跨引擎域差可能削弱收益，但不得据此免除绝对提升检验；无提升时可进一步分析域差，不能自动归为“学习有效”。原生回测支持外部协议效用，真实机器人执行另行验证。学院不以原生成绩无条件超过原生采集为唯一价值标准：原生保持而对应实机改善，可支持部署相关效用；学院内部改善而两种外部评价均无收益，则不支持外部能力增益。各项结论分别报告。</p>
<h3 id="realworld" data-nav="物理实机验证 H3" data-number="4.5">4.5 对应真实场景中的冻结策略执行</h3>
<p>Real-to-Sim-to-Real 在本文指：真实场景扫描与 3DGS 外观重建 → 显式碰撞／交互资产、相机与机器人配准 → 仿真内学习 → 冻结学生后在物理实机上执行。3DGS 不承担接触求解；重建场景中的仿真成绩单列，不称为实机迁移。</p>
<p>主任务冻结前优先检查 AM-Bench 本体、动作接口与真机是否可对应。可共用时使用同一部署合同；不一致时，必须为真实本体建立匹配的初始策略与数据，并在一项真实对应任务上重跑最小闭环。此时比较 B0、按 V 预选的最强固定／规则基线和历史反馈方法，单列适配与重跑成本，不宣称原生 checkpoint 直接零适配迁移，也不将全部方法重新展开。</p>
<p>各组共享相机标定、低层控制、真实数据预算和部署适配；冻结测试中不调用 Mentor 临场纠错。随机化执行顺序与配对初态，报告完整成功、阶段结果、耗时、接管与安全终止。分别评价已重建场景内对应任务与预留物体／布局；只有独立新场地结果才能支持跨场景泛化。正式实机测试画面与反馈不得进入训练或方案选择。本版验证“重建与配准—仿真学习—冻结实机执行”；尚未据此声称完成“真实失败回流学院、再次更新部署”的持续实机闭环。</p>
<h3 id="ablation" data-nav="机制分析与边界" data-number="4.6">4.6 机制分析与适用边界</h3>
<p id="teaching-analysis">修订与历史记忆已进入主比较，本节复用同一批记录解释其作用：触发证据、已尝试方案、候选修改、合格监督产出、完整任务变化与拒绝成本。报告至少一个无收益或被拒案例，检查 Agent 是否避免重复低效干预；文字反思、工具调用数与专家延续成功均不能替代学生提升。</p>
<p>代表任务只增加最必要的检查：过程与终态／覆盖分配、固定减速或等待、局部延续与完整示范。接近速度通过合法初态与实际运动产生；不对起点、比例、模型和任务做全组合。学生历史窗口在主组间一致；若任务物理不能表达滑移／载荷现象，则删除对应主张。3DGS 的独立作用仅在另作外观消融后讨论，跨引擎来源对照不替代该归因。</p>
<p>开发池的重复使用可能产生选择偏差。接纳门槛只是经验规则，不保证每轮泛化单调提高。更换新学生起点后复用记忆能否提升教学效率属于后续研究；本文不声称导师网络训练、通用递归自改进或长期收敛。</p>
</section>

<section id="discussion" data-title="讨论与局限" data-number="5">
<div class="eyebrow">DISCUSSION</div><h2>5. 讨论与局限</h2>
<p>AirSpark 的平台贡献在于连接空中操作的环境执行、经验生成和训练评价，使反馈驱动学习能够在统一协议下运行与检验。SparkMentor 维护实验连续性，练习方法决定设施如何服务于当前学生。过程条件分配是本文的参考实现，学习反馈在预定范围内修订练习方案，并通过主实验的固定、规则式、当前与历史反馈对照检验。两者共同服务于学生策略改进，但相应收益分别检验；平台可靠性、方法收益与迁移表现分别提供证据。</p>
<p>框架依赖可用的专家、足够的学生观测以及任务相关的仿真准确性。控制故障与不可达动作不能仅靠新增示范解决；视觉不可辨识的隐藏状态也可能限制监督的有效性。过程证据提供练习假设，不能替代因果识别；成本优先级也不保证最大化学习收益。仅由真值区分、学生输入无法辨识的条件可能无法通过监督学习修复。接触、负载和相机时延的误差仍可能影响真实迁移。</p>
<p>本文以单一空中机器人平台、固定任务子集和有限轮次建立证据。共享接口为后续诊断方法、练习策略和训练后端的接入提供设计基础；更长时间的持续改进、其他机器人形态和开放场景作为未来扩展，需重新验证观测动作及物理协议。本文不据接口设计宣称这些扩展已完成。3DGS 对应场景迁移与未见场景泛化分别评价；导师 Harness 可以修订允许的进化计划；导师网络训练、工具任意改写和成功定义自修改不属于本版实验。</p>
<p>闭环中的学习动态受观测、专家和优化限制。经验接纳与开发集选择可能产生选择偏差，开发保留曲线不代表封存任务上的单调改善；完整成本、固定协议和最终回测共同限定结论。附录的条件性接纳说明也不保证候选存在、长期收敛或真实迁移。</p>
<p>教学自适应、反思与经验复用均有已有研究基础。本方案的研究范围是固定学习接口下的有界调整，其适用性取决于专家、学生观测、任务条件及评价样本。有限轮次的改进不能推出长期持续收益；原生回测和真实迁移仍是学院中所学能力的独立检验。</p>
</section>

<section id="conclusion" data-title="结论" data-number="6">
<div class="eyebrow">CONCLUSION</div><h2>6. 结论</h2>
<p>本文提出 AirSpark，一套面向空中操作策略自进化的模拟学院。平台通过共享任务与运行产物协议连接视觉—物理仿真、自动经验生成、训练和评价，SparkMentor 利用执行反馈、学习效果与干预记忆组织跨轮学习，并支持有界的练习方案调整。本文以过程条件分配作为参考方法，在共同设施上检验策略改进，并通过原生 AM-Bench 和对应真实任务评价学习结果。平台支持能力、闭环收益与真实迁移构成相互衔接的验证目标；具体效果及适用范围由后续实验确定。</p>
</section>

<section id="references" data-title="参考文献" data-number="R">
<div class="eyebrow">REFERENCES</div><h2>参考文献</h2>
<p class="caption">按作者姓氏或机构名称排序，使用方括号数字引用；条目包含作者、题名、出版物与年份。来源类型与核查备注可展开查看；正式出版、作者报告的录用、预印本和软件文档分别记录。基础文献核查：2026.10.18；RPG、学习反馈与原理文献补充核查：2026.10.19；教材书目修订：2026.10.20。</p>
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
<p>先导先测一轮的实际采集、训练、评价与代理开销。主矩阵采用至少两个任务、四条更新路线和至少三次有序干预机会；B0 另评，独立训练 seed 与每组回合数按先导功效／精度设计冻结。训练次数按“任务 × seed × 实际候选训练”汇总，不能再使用旧版固定 B1–B3 的 9／27 次估算。数据来源 2×2 仅在至少一个主任务展开，复用学院主方法；第二模型不是必做。被拒训练、规则／Agent 试探和中断重试均计入账本。</p>
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
<p>2026-10-13 的工程核查已建立分支和文档入口；后续修订将未实现的采集、训练、评价阶段改为显式拒绝执行，不生成占位成绩。原生环境、完整训练评测和跨仿真收益仍待验收。该实现状态不改变本文“提出的方法与预定实验”的性质；用户已报告真机设备可支撑实验；上层推理通信、相机时序、命令跟踪、停止确认与扫描配准仍须分别验收。设备可用不等于模型实机闭环已完成。</p>
<p>工程资料：<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/docs/wiki/Research-Branch-AM-Bench-v1.md">研究入口与核查</a>、<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/research/docs/PAPER_HYPOTHESIS.md">实验协议</a>、<a href="https://github.com/Zhangbt6/AirSpark/blob/codex/am-bench-research-v1/research/docs/PHYSICS_VALIDATION.md">物理对齐清单</a>（工程仓库可能需要访问权限）。这些资料是复现导航，不是已发布的数据或模型。</p>
<h3 id="experience-record">A.4 过程经验与划分记录</h3>
<p>经验记录包含父任务组与 C/V/T 归属、条件定义版本、事件时间、前缀策略与随机种子、速度和控制器状态、学生观测历史、接管边界、动作来源掩码、条件命中、专家终态、质量检查、各类成本以及数据—模型谱系。恢复与追加采集均继承父任务划分。标注字段可以多于学生输入，但训练导出必须保持部署输入白名单。</p>
<p>跨轮干预记录另含方案版本、选择依据、生成与使用配置、父模型及优化器状态、前后开发评价与不确定性、候选接受结果和完整成本。V 池仅返回预先允许的摘要，T 池结果不写回决策记忆；当前反馈分析屏蔽更早的显式干预记录，保留当前方案、最近反馈与完整审计日志。</p>
<h3 id="figure-library" data-nav="论文框图与下载" data-number="A.5">A.5 论文框图与汇报素材</h3>
<p>正文以两张方法主图组织平台与算法：图 1 展示学院设施，图 2 展示 RSI 的反馈、决策与参数更新；图 3 描述实验流程。附录图 A1–A2 分别展开执行接口和专家延续，图 A3 说明闭环反馈原理。网页默认使用中文，下载提供中英文 SVG 与高清 PNG。</p>
<p class="reference-tools"><a href="figures/AirSpark-Figures-v0.22.zip" download>下载中英文框图与绘图源文件</a> · <a href="figures/FIGURE-NOTES.txt?v=0.22">图注与使用说明</a></p>
<div class="figure-gallery"><a href="#figure-1"><img src="figures/fig01-academy-overview-zh.svg?v=0.22" alt="图 1：学院平台架构" width="1440" height="870" loading="lazy"><b>图 1 · 学院平台架构</b><span>跳转正文与下载</span></a><a href="#figure-2"><img src="figures/fig02-rsi-method-zh.svg?v=0.22" alt="图 2：RSI 策略方法" width="1640" height="950" loading="lazy"><b>图 2 · RSI 策略方法</b><span>跳转正文与下载</span></a><a href="#figure-3"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.22" alt="图 3：实验流程" width="1440" height="1000" loading="lazy"><b>图 3 · 实验流程</b><span>跳转正文与下载</span></a><a href="#figure-a1"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.22" alt="图 A1：视觉与物理执行链路" width="1440" height="1020" loading="lazy"><b>图 A1 · 视觉与物理执行链路</b><span>跳转正文与下载</span></a><a href="#figure-a2"><img src="figures/fig03-process-experience-zh.svg?v=0.22" alt="图 A2：过程条件与专家延续" width="1440" height="1030" loading="lazy"><b>图 A2 · 过程条件与专家延续</b><span>跳转正文与下载</span></a></div><p class="caption"><a href="#figure-a3">图 A3：闭环反馈原理与下载</a>。组会主讲使用图 1、图 2 和图 3；执行链路及专家监督细节作为备份材料。所有图均为当前研究设计，不代表实现和实验已经完成。</p>
<details class="editorial-note" id="implementation-figures"><summary>平台执行与经验生成细节（附录图 A1–A2）</summary><figure class="paper-figure diagram-figure" id="figure-a1">
<div class="diagram-heading"><b>图 A1 · 视觉与物理执行链路</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.22" data-figure-title="图 A1 · 视觉与物理执行链路" aria-label="放大图 A1：视觉与物理执行链路"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.22" alt="图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。" width="1440" height="1020" loading="lazy"></button>
<figcaption>图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.22" data-figure-title="图 A1 · 视觉与物理执行链路">放大查看</button><a href="figures/fig02-visual-physical-contract-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig02-visual-physical-contract-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig02-visual-physical-contract.svg?v=0.22" download>英文 SVG</a><a href="figures/fig02-visual-physical-contract.png?v=0.22" download>英文 PNG</a></div>
</figure><figure class="paper-figure diagram-figure" id="figure-a2">
<div class="diagram-heading"><b>图 A2 · 过程条件与专家延续</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.22" data-figure-title="图 A2 · 过程条件与专家延续" aria-label="放大图 A2：过程条件与专家延续"><img src="figures/fig03-process-experience-zh.svg?v=0.22" alt="图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。" width="1440" height="1030" loading="lazy"></button>
<figcaption>图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.22" data-figure-title="图 A2 · 过程条件与专家延续">放大查看</button><a href="figures/fig03-process-experience-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig03-process-experience-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig03-process-experience.svg?v=0.22" download>英文 SVG</a><a href="figures/fig03-process-experience.png?v=0.22" download>英文 PNG</a></div>
</figure></details>

<h3 id="feedback-assumptions" data-nav="原理与证据边界" data-number="A.6">A.6 反馈原理、条件与接纳依据</h3>
<p>这一节区分系统定义、已有理论和本研究待验证的机制。反馈表述说明闭环如何运行；物理与监督可行性由平台实验检验；方案的学习收益由对照实验检验。当前没有覆盖全部 AirSpark 设置的收敛定理。</p>
<p><b>必要条件。</b>相关差异需在学生允许的输入中留下线索；采集设施和专家需产生合法监督；学生与固定学习算法需能够利用这些经验；测量需与目标任务一致并量化不确定性。这些是方法适用性的要求，不是只要同时满足就必然提升的充分条件。</p>
<p><b>附加统计主张的适用条件。</b>算法 1 使用经验门槛，以下仅解释另行主张下置信界保证所需的条件，不作为基础算法新增步骤。设 ΔJ 是候选相对父模型在固定开发分布上的真实完整任务收益，Δc<sub>j</sub> 是预定旧能力组的变化。若某次验收得到同时有效的下置信界 L<sub>J</sub>、L<sub>j</sub>，覆盖概率至少为 1−α，则采用下述加强接纳规则：</p>
<div class="equation" aria-label="候选接纳的条件">L<sub>J</sub> ≥ δ<sub>J</sub>，且对所有预定保留组 j：L<sub>j</sub> ≥ −ε<sub>j</sub></div>
<p>在这些下界共同有效的事件上，任何按该规则接纳的候选满足 ΔJ ≥ δ<sub>J</sub> 且 Δc<sub>j</sub> ≥ −ε<sub>j</sub>；这是由下界定义直接得到的局部结论。δ<sub>J</sub>、ε<sub>j</sub> 和比较范围在评价前固定。条件要求候选固定后的独立验收样本，以及覆盖多个组、候选和轮次的有效统计控制；反复在同一开发记录上挑选最佳方案，不能直接套用单次区间。本文不将该说明作为新的学习定理，也不由此保证一定存在可接纳候选、长期收敛或真实迁移。基础实验仍报告全部候选和不确定性，有限样本不足时允许保留当前学生。</p>
<p><b>与已有理论的关系。</b>DAgger 将学习者状态上的监督聚合与无遗憾在线学习联系起来，并在特定损失、专家和采样假设下给出策略性能界；其结论并非逐轮单调提升。<cite data-ref="dagger"></cite> AirSpark 的局部专家延续、质量筛选和部分观测改变了这些条件，引用它用于解释覆盖学习者状态的依据，不声称已证明同样的界。学习反馈与课程选择的合理性还可参考 ALP-GMM；其学习进展目标不等于本文完整任务收益保证。<cite data-ref="alp-gmm"></cite></p>
<figure class="paper-figure diagram-figure" id="figure-a3">
<div class="diagram-heading"><b>图 A3 · 学习过程的闭环反馈表述</b><span>原理说明</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig05-learning-feedback-zh.svg?v=0.22" data-figure-title="图 A3 · 学习过程的闭环反馈表述" aria-label="放大图 A3：学习过程的闭环反馈表述"><img src="figures/fig05-learning-feedback-zh.svg?v=0.22" alt="固定能力目标引导 SparkMentor 选择干预，学院采集与训练改变学生，开发测量和验收形成学习反馈并进入记忆；封存测试不回流。此图说明信息关系，不表示已有收敛保证。" width="1440" height="810" loading="lazy"></button>
<figcaption>图 A3. 图 2 的反馈原理解释。学习状态 x 与能力测量 ĉ 分开，学习决策 μ 与机器人低层控制 K 分开。U 表示实际采集和训练，H 表示评价测量，未引入学习收益预测器。最终测试不进入反馈闭环。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig05-learning-feedback-zh.svg?v=0.22" data-figure-title="图 A3 · 学习过程的闭环反馈表述">放大查看</button><a href="figures/fig05-learning-feedback-zh.svg?v=0.22" download>中文 SVG</a><a href="figures/fig05-learning-feedback-zh.png?v=0.22" download>中文 PNG</a><a href="figures/fig05-learning-feedback.svg?v=0.22" download>英文 SVG</a><a href="figures/fig05-learning-feedback.png?v=0.22" download>英文 PNG</a></div>
</figure>

<details class="editorial-note" id="principle-reading"><summary>原理阅读路线：系统组织、学习依据与反馈概念</summary>
<p><b>RSI-Anything，第 2 节与表 1。</b>适合学习如何区分预测、实际执行、更新对象与保留规则。它确实定义了行动结果预测器；各应用启用的更新路径不同，系统描述和实验结果不等同于通用 RSI 收敛证明。<cite data-ref="rsi-anything"></cite></p>
<p><b>DAgger，AISTATS 2011，第 2–3 节。</b>适合学习“问题为何发生—算法如何解决—结论依赖哪些假设”的推导方式。它不是近期 RSI 系统，却是交互式监督和反馈采集的清晰理论基础。<cite data-ref="dagger"></cite></p>
<p><b>Feedback Systems，第 1–3 章。</b>用于梳理参考目标、被调节过程、测量、决策、扰动及时间尺度。作者维护的第二版资源提供公开章节；此处借用基础概念，不直接移植线性系统或 PID 的稳定性结论。<cite data-ref="feedback-systems"></cite></p>
<p>EmbodiRSI 的第 3.3 节已经明确监测、纠正、采集和参数更新的接口与公式；其主要支撑是所报告的实验，所核查的方法部分没有给出适用于 AirSpark 的长期收敛保证。<cite data-ref="embodirsi"></cite> 本页区分方法定义、理论保证与实证支持，按照原始来源评价各项主张。</p>
</details>

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
<tr><td>Feedback Systems · 第二版 2021；DAgger · AISTATS 2011<cite data-ref="feedback-systems dagger"></cite></td><td>反馈结构与学习者状态监督的原理依据。</td><td>分别学习模块定义与带假设的性能分析，不将已有定理自动套用到学院。</td></tr>
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
<tr><td>RSI-Anything</td><td>核查 v1 第 2 节、表 1 与表 4：预测指导选择，外部反馈支持更新与保留；各应用启用范围不同。</td><td>用于原理组织和证据边界，不将 AirSpark 的测量器或采集规则改名为世界模型。</td></tr>
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
<tr><td><a href="../v0.6/index.html">v0.6</a></td><td>自主教学与学生—教师双层改进。</td><td>保留环境、练习与评价的学院概念；教师自修改作为独立扩展。</td></tr>
<tr><td><a href="../v0.7/index.html">v0.7</a></td><td>通用模拟学院、持续学习、研究记忆和 harness。</td><td>保留完整工具链与跨轮连续性。</td></tr>
<tr><td><a href="../v0.8/index.html">v0.8</a></td><td>空中操作的数据需求、高保真仿真与真实迁移。</td><td>确立具体研究对象和已有平台积累。</td></tr>
<tr><td><a href="../v0.9.1/index.html">v0.9.1</a></td><td>面向策略自进化的模拟学院，加入 AM-Bench 复用。</td><td>保留学院定位、策略改进目标与原生回测。</td></tr>
<tr><td><a href="../v0.10/index.html">v0.10</a></td><td>阶段证据、等预算闭环、原生与真实评价及编号引用。</td><td>成为当前方法与实验协议的基础。</td></tr>
<tr><td><a href="../v0.11/index.html">v0.11</a></td><td>空中学习需求 → 持续反馈 → 模拟学院 → 策略更新 → 外部验证。</td><td>按论文主文重组；实现安排与版本讨论移入附录。</td></tr>
<tr><td><a href="../v0.12/index.html">v0.12</a></td><td>事件阶段、物理对应、受限数据决策与原生复现。</td><td>纳入研究分支核查，区分拟议方法、实施路线与真实验收；未新增实验成绩。</td></tr>
<tr><td><a href="../v0.13/index.html">v0.13</a></td><td>过程条件 → 物理重现 → 有效监督 → 独立学生收益。</td><td>保留学院主线；明确条件选择、C/V/T、监督边界与同成本对照，补全近邻文献和标准引用。</td></tr>
<tr><td><a href="../v0.14/index.html">v0.14</a></td><td>空中交互学习设施 → 反馈驱动策略更新 → 独立能力验证。</td><td>统一 SparkMentor；补充正式发表的基础与直接近邻，区分程序和参数改进，保留两项贡献并加强恢复监督基线。</td></tr>
<tr><td><a href="../v0.15/index.html">v0.15</a></td><td>模拟学院平台 → 共享学习工具与编排 → 参考练习方法 → 独立验证。</td><td>突出平台定位，明确方法可替换；单列平台支持能力评价，保留现有学习对照与真实验证，补充组会提纲。</td></tr>
<tr><td><a href="../v0.15.1/index.html">v0.15.1</a></td><td>保持学院平台定位，补充仿真练习与真实部署的直接近邻。</td><td>加入 RPG 正文引用、书目与组会比较；区分技能和提示修订、学生参数更新及场景重建，未扩展主实验矩阵。</td></tr>
<tr><td>v0.16</td><td>保持学院主线，形成架构、执行、经验与验证四张论文框图。</td><td>新增可放大的矢量图、高清导出、绘图源文件与汇报索引；保持现有方法和实验矩阵，未新增结果。</td></tr>
<tr><td>v0.16.1</td><td>网页默认使用中文框图。</td><td>保留英文原图，新增中英文 SVG / PNG 下载及双语素材包；研究内容不变。</td></tr>
<tr><td>v0.16.2</td><td>以常规论文流程图呈现实验设计。</td><td>图 4 简化为初始策略、闭环改进与仿真 / 实机评价；图注和正文同步改写。</td></tr>
<tr><td><a href="../v0.17/index.html">v0.17</a></td><td>学院平台架构与 RSI 策略方法分别作为主图。</td><td>重绘图 1，新增完整 RSI 方法图 2，实验流程编号为图 3；原执行链路与专家延续图移入附录。</td></tr>
<tr><td><a href="../v0.18/index.html">v0.18</a></td><td>保持模拟学院与反馈自进化主线，补充学习反馈及跨轮方案调整。</td><td>保留两项贡献和 B0–B3；扩充干预记忆、有限调整、图 2 与代表任务分析；新增四篇课程与学习反馈文献。</td></tr>
<tr><td><a href="../v0.19/index.html">v0.19</a></td><td>明确反馈原理与可执行干预，保持平台和策略自进化定位。</td><td>补充能力画像、优先级、空中案例、诊断分流及原理附录；主贡献与实验矩阵不变。</td></tr>
<tr><td>v0.22 · 当前</td><td>六步主闭环与跨轮学习反馈；叙事聚焦经验的学习效用。</td><td>恢复诊断与规划的职责边界；统一名称和因果时序，实验矩阵保持。<a href="#revision-v022">本轮修改</a></td></tr>
<tr><td><a href="../v0.21/index.html">v0.21</a></td><td>2026.10.23：模拟学院与有界反馈自进化。</td><td>规则式／当前／历史修订进入至少两个任务；来源对照、实机定义与统计冻结补全。<a href="#revision-v021">本轮修改</a></td></tr><tr><td><a href="../v0.20/index.html">v0.20</a></td><td>论文化精修与可复现协议补全。</td><td>压缩摘要，统一目标与成本符号，补算法、配置和状态处理，统一实验组名；贡献和方法范围不变。</td></tr>
</tbody></table></div>
<p>本轮 v0.22 见<a href="#revision-v022">修改对照</a>；此前 v0.21 见<a href="#revision-v021">修改对照</a>；此前 v0.20 的修改见<a href="#revision-v020">修改对照</a>。v0.14 起统一论文中的 SparkMentor 命名，工程中的旧 sparkclaw 路径暂作兼容名称。v0.15 完善平台、编排与方法的层次；v0.15.1 补充 2026-10-19 的 RPG 核查，保留其他文献原核查日期。v0.18 的变更见<a href="#revision-v018">前轮修改对照</a>；v0.19 见<a href="#revision-v019">前轮修改对照</a>。本轮未迁移工程接口，也未新增实验结果。</p>
</details>

<details class="editorial-note" id="revision-v018"><summary>v0.18 修改对照：保留主线，补充闭环机制</summary>
<p>v0.18 依据讨论补充自进化机制，不将论文改写为教学算法搜索。下表记录相对 <a href="../v0.17/index.html">v0.17</a> 的变化，便于核查。</p>
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
<details class="editorial-note" id="revision-v019"><summary>v0.19 修改对照：原理、优先级、案例与诊断</summary>
<p>相对 <a href="../v0.18/index.html">v0.18</a>，本轮保持论文标题、两项贡献、三张主图、B0–B3、AM-Bench 回测与真实验证。以下均为研究设计补充，未新增实验结果。</p>
<div class="table-wrap compact-table"><table><thead><tr><th>位置</th><th>本轮具体修改</th></tr></thead><tbody>
<tr><td>摘要与引言</td><td>增加学习过程反馈表述的简短说明；模拟学院和反馈驱动策略自进化仍为主线。</td></tr>
<tr><td>§3.1 原理</td><td>定义能力画像、固定目标、测量 H、学习决策 μ 和实际更新 U；区分执行反馈与学习反馈、内层控制与外层学习。</td></tr>
<tr><td>§3.3 方法案例</td><td>补充六类诊断分流和抓持—抬升候选监督时段；保留 PressButton 作为首个机制验证任务。</td></tr>
<tr><td>§3.4 优先级</td><td>明确基础闭环、代表任务补充、后续诊断扩展及独立学习路线；增加探索、暂缓与重测约定。</td></tr>
<tr><td>§3.5 与 §4.6</td><td>补足运行退出路径、最小案例验证和环节证据；不增加全面交叉实验或控制器自修改。</td></tr>
<tr><td>附录与引用</td><td>新增图 A3、条件性接纳说明和原理阅读路线；细化 RSI-Anything、DAgger 的适用边界，新增反馈系统作者资源。</td></tr>
</tbody></table></div>
</details>
<details class="editorial-note" id="revision-v020"><summary>v0.20 修改对照：算法、配置、状态与论文表述</summary>
<p>本轮依据核查意见精修 <a href="../v0.19/index.html">v0.19</a>。标题与两项贡献保持，未增加任务、模型或进化手段；参数和效果继续按研究设计状态呈现。</p>
<div class="table-wrap compact-table"><table><thead><tr><th>位置</th><th>具体修改</th></tr></thead><tbody>
<tr><td>摘要与正文</td><td>摘要压缩为问题、学院能力、反馈学习及验证协议；精简重复边界说明，实施优先级与路线折叠保留。</td></tr>
<tr><td>§3.1 符号</td><td>以总体性能 J𝒟 替代 Jtest；能力 c 与成本 κ 分开；c* 用于报告及预定补充检查，不新增误差加权分配。</td></tr>
<tr><td>§3.3 分配规则</td><td>明确首次进入计数、原始频率与失败统计、q 的失败负担／成本含义及稀疏条件覆盖处理。</td></tr>
<tr><td>§3.4 算法与验收</td><td>新增算法 1，定义候选产生、同父分支、经验接纳、并列处理和预算停止；下置信界说明留作附录条件性解释。</td></tr>
<tr><td>§3.5 复现协议</td><td>新增表 3 状态处理与表 4 配置清单，提供 JSON 模板；拒绝不回滚成本和记忆，候选数据不自动进入回放。</td></tr>
<tr><td>§4 与图件</td><td>统一 B0–B3 及 B3＋方案调整的当前／历史反馈变体；图 2 同步 κ，图 3 增加部署接口与共享适配说明，图 A3 同步目标用途。</td></tr>
<tr><td>引用与版本</td><td>Feedback Systems 改为第二版、Princeton University Press、2021 的书籍主引用；保留作者资源，补全书籍导出格式，完整归档 v0.19。</td></tr>
</tbody></table></div>
</details>
<details class="editorial-note" id="task-contract-audit"><summary>官方任务源码核查与待运行门</summary>
<p>2026-10-23 核查 AM-Bench commit <code>60bf5b73041df4eab571f7d9f0a297aeecbf2e0d</code>：LemonHarvesting 与 CabinetPickPlace 均注册了多种本体／控制器，正式使用哪个环境 ID 尚未冻结。柠檬 reset 配置包含可断裂的墙面固定关节（break force／torque），成功逻辑包含入容器与松爪，另以移动一致性记录抓持／脱离阶段。这些代码支持核查任务定义，不证明真实果梗、摩擦滑移或仿真运行已验证。</p>
<p>原始依据：<a href="https://github.com/ambench/ambench/blob/60bf5b73041df4eab571f7d9f0a297aeecbf2e0d/source/ambench/ambench/tasks/lemon_harvesting/lemon_harvesting_env_cfg.py">柠檬配置</a>、<a href="https://github.com/ambench/ambench/blob/60bf5b73041df4eab571f7d9f0a297aeecbf2e0d/source/ambench/ambench/tasks/lemon_harvesting/lemon_harvesting_env.py">成功与阶段判定</a>、<a href="https://github.com/ambench/ambench/blob/60bf5b73041df4eab571f7d9f0a297aeecbf2e0d/source/ambench/ambench/tasks/cabinet_pick_place/__init__.py">柜体任务注册</a>。主实验必须补实际运行的本体、动作、相机、控制器、专家与评分对应表；不匹配时单列衍生设置。</p></details>
<details class="editorial-note" id="submission-plan"><summary>投稿节点与最先冻结的事项</summary>
<p>按 2026-10-23 核查的 <a href="https://cvpr.thecvf.com/Conferences/2027/CallForPapers">CVPR 2027 官方 CFP</a>：注册截止 2026-11-10、正文 11-16、补充 11-23，均为 AoE。先冻结任务／本体合同与 B0 来源，再用实测成本确定统计规模和主矩阵；主实验前冻结 C/V/T、规则修订器、Agent 版本与提示、候选选项、预算、验收和功效／精度方案。封存测试只在冻结后执行。时间不足时压缩扩展实验与主张，不能事后改变成功定义。</p></details>
<details class="editorial-note" id="revision-v021"><summary>v0.21 · 本轮具体修改</summary>
<div class="table-wrap"><table><thead><tr><th>位置</th><th>修改与原因</th></tr></thead><tbody>
<tr><td>摘要／引言</td><td>保留模拟学院与反馈自进化两项贡献；将场景重建／物理配准写入平台，将学习计划修订明确对应主结果。</td></tr>
<tr><td>§3.4–3.5／图 2</td><td>修订从补充支路提升为有界主机制；明确规则式基线、当前／历史信息权限、同动作空间和拒绝后的下一次决策。</td></tr>
<tr><td>§4.1–4.3</td><td>新增 H1–H3；至少两个任务比较四条更新路线，至少三次有序干预；B1/B2 下沉为辅助分配分析，seed／回合数由先导设计。</td></tr>
<tr><td>§4.4／图 3</td><td>至少一个主任务做原生／学院 × 覆盖／历史修订 2×2；B0 来源和跨环境合同前置；同时报告绝对与相对变化。</td></tr>
<tr><td>§4.5</td><td>真实迁移明确为冻结学生在物理真机执行；本体不一致时披露匹配父代与最小重跑成本；3DGS 不替代物理交互。</td></tr>
<tr><td>附录／配置／同步</td><td>删除失效的 9／27 训练预算估算；记录官方源码与投稿节点；同源中英图、LaTeX 与中文网页同步，原 v0.20 完整归档。</td></tr>
</tbody></table></div></details>

<details class="editorial-note" id="rsi-module-contract"><summary>图 2 模块职责、产物与反馈时序</summary>
<div class="table-wrap"><table><thead><tr><th>模块</th><th>职责／主要产物</th><th>边界</th></tr></thead><tbody>
<tr><td>策略执行 / Policy Rollout</td><td>在 C 使用学生策略执行；记录观测、命令、运动与任务结果。</td><td>控制器与学生部署输入固定。</td></tr>
<tr><td>交互过程诊断 / Interaction Diagnosis</td><td>整理阶段到达、转换失败、频率、成本与可行性，输出 E。</td><td>未到达不等于下游失败；诊断不是因果识别。</td></tr>
<tr><td>反馈驱动练习规划 / Feedback-Guided Practice Planning</td><td>SparkMentor 依据 E、既往 M、η 和预算提出可执行计划 A。</td><td>决定条件分配、监督起点、示范构成和回放；不修改评分与学生结构。</td></tr>
<tr><td>专家监督生成 / Expert Supervision Generation</td><td>实际执行前缀和固定专家延续，质检后导出 D。</td><td>学生前缀不作专家动作标签；全部实际成本保留。</td></tr>
<tr><td>学生策略更新 / Student Policy Update</td><td>以合格数据和已接纳回放训练候选学生。</td><td>这是更新学生参数的环节，候选分支隔离。</td></tr>
<tr><td>学习评估与接纳 / Learning Evaluation and Acceptance</td><td>在 V 比较完整任务、保留和不确定性；输出 F 与接纳决定。</td><td>V 只返回允许摘要，训练样本不回流；拒绝保留父代。</td></tr>
<tr><td>跨轮干预记忆 / Intervention Memory</td><td>保存每次干预方案、数据／模型版本、结果、成本和接纳／拒绝。</td><td>Fᵣ 更新 Mᵣ₊₁，供后续轮次读取；不是新教师网络。</td></tr>
</tbody></table></div><p>第 r 轮先读取 Mᵣ，再执行干预并测量 Fᵣ；评估后写 Mᵣ₊₁。图中深色箭头表示六步主循环，绿色标识执行反馈，紫色表示跨轮学习反馈。计划修订属于原有闭环，不是新增实验任务或额外算法层。</p></details>
<details class="editorial-note" id="revision-v022"><summary>v0.22 · 图 2 与论文叙事精修</summary>
<p>保留两项贡献、主实验四条更新路线、至少两个任务及现有资源协议。本轮没有新增任务、模型、候选操作或完成结果。</p>
<ul><li>图 2 恢复六步环形流程，独立呈现诊断与规划；跨轮记忆置于侧边，消除主环箭头交叉。</li><li>移出实验组 ID、训练计费与随机状态细节；保留正文算法，主图集中解释数据与反馈的流向。</li><li>统一中英模块名，明确 A 是可执行计划、η 是已接纳配置；μ<sub>g</sub> 表示不同对照采用的固定决策器。</li><li>写清本轮执行证据与既往记忆进入规划，训练后的 F 供后续轮次使用。</li><li>摘要、引言与贡献聚焦“经验生成不等于学生收益”；原有技术栈与实验数量移回方法和实验。</li><li>明确 B3 仍按新反馈分配条件，当前组不是完全无记忆；区分冻结实机验证与真实反馈再训练。</li></ul></details>
</section>
`);
