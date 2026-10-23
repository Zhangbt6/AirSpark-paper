document.querySelector('#content').insertAdjacentHTML('beforeend',`
<section id="introduction" data-title="引言" data-number="1">
<div class="eyebrow">INTRODUCTION</div><h2>1. 引言</h2>
<p>空中操作将机器人的作业范围扩展至地面平台难以到达的三维空间，为自主抓取、运输与接触作业提供了新的可能。其视觉策略学习同时面临运动引起的机载观测变化，以及飞行基座、机械臂与接触过程之间的动力学耦合。策略因而需要在动态观测下协调空间对齐、运动状态与交互时序。<cite data-ref="aerial-survey aerial-bench aerial-sliding"></cite> 近期空中操作基准与视觉语言动作模型建立了相应的训练和评价流程，为学习型空中操作提供了研究基础。<cite data-ref="ambench airvla"></cite></p>
<p>可靠的任务执行依赖于接近、接触及后续操作阶段的协同。学生策略产生的动作会改变后续状态分布，执行偏差可能累积并影响完整任务表现。<cite data-ref="dagger"></cite> 示范覆盖不足与已覆盖条件下的学习不足均可能形成能力缺口。反馈学习将执行诊断、经验生成与更新评价相联系，以当前策略表现确定候选练习，并通过更新后的完整任务表现检验学习收益。然而，真实试验中的环境复位、监督获取与重复评价具有较高成本，限制了这一过程的规模化开展。<cite data-ref="autonomous-cost"></cite></p>
<p>反馈驱动的机器人自改进与真实—仿真—真实学习，为空中策略的迭代改进提供了互补途径。交互式模仿学习、部署纠正与近期具身自改进方法利用策略反馈组织数据采集和参数更新。<cite data-ref="sirius embodirsi enpire"></cite> 自动示范生成扩展了训练经验来源，数字孪生与 Real-to-Sim-to-Real 方法则连接仿真练习和真实部署。<cite data-ref="mimicgen robotwin rialto robosplat"></cite> 本文研究如何将这些能力组织为空中操作的可重复学习过程，使任务相关的视觉—物理交互、监督生成及多轮更新在统一设施上运行。模型、数据、环境与 Harness 的系统划分为这一组织方式提供了参考。<cite data-ref="agentic-robots-survey"></cite></p>
<p>为此，本文提出 <b>AirSpark，一套面向空中操作策略自进化的模拟学院</b>。学院以 UE 渲染和 MuJoCo 动力学为基础，通过统一的任务、观测、动作与运行记录接口，集成场景配置、可重复执行、专家监督生成及训练评价。3DGS 场景外观与显式物理资产、相机和机器人配准共同建立真实任务对应。共享接口支持不同练习方法的执行、追溯与受控比较，使平台同时承担经验生成和学习实验基础设施的职责。</p>
<p>AirSpark 通过 SparkMentor 组织反馈驱动的多轮策略改进。SparkMentor 是结合工具、状态管理与跨轮记忆的 Agent Harness：执行诊断提供候选能力缺口，练习规划调用学院设施生成监督，训练更新学生参数，学习评价形成后续计划修订的依据。跨轮干预记忆关联方案、数据、模型、评价与成本，为后续决策提供历史证据。执行反馈与学习反馈分别作用于练习选择和方案修订，所得能力通过更新后学生策略的独立执行予以检验。</p>
<p>评测围绕设施可靠性、闭环学习效用与外部有效性展开。主实验以冻结策略为初始参照，在相同采集和训练预算下比较固定采集训练流程与完整 AirSpark 闭环；代表任务进一步分析规则修订、当前反馈和历史反馈的作用。闭环结束后冻结学生，在原生 AM-Bench 及对应物理实机中评价完整任务表现。该设计分别检验学院的监督生成能力、反馈学习的增量收益及能力保留与迁移。</p>
<h3 id="contributions">本文的主要贡献</h3><ol class="contribution-list">
<li><b>面向空中操作策略学习的模拟学院。</b>将高保真视觉—物理仿真、场景与真实任务对应、可重复交互、自动经验生成及训练评测组织为共享学习设施，支持可追溯的空中操作学习实验。</li>
<li><b>反馈驱动的空中操作策略自进化框架。</b>由 SparkMentor 连接执行诊断、主动练习、学生更新与学习评价，利用跨轮干预记忆修订后续改进计划，并通过同预算比较及冻结策略的外部执行检验能力收益。</li>
</ol></section>

<section id="related" data-title="相关工作" data-number="2">
<div class="eyebrow">RELATED WORK</div><h2>2. 相关工作</h2>
<h3 id="related-aerial" data-nav="空中操作与视觉策略" data-number="2.1">2.1 空中操作与视觉动作策略</h3>
<p>空中机器人综述与实体操作基准系统讨论了浮动基座、机械臂和环境交互的耦合问题，学习型阻抗控制进一步探索了接触任务的控制与迁移。<cite data-ref="aerial-survey aerial-bench aerial-sliding"></cite> AM-Bench 提供任务、示范、策略训练及评价流程；AIR-VLA、AirVLA 与 AeroManip-VLA 研究空中视觉动作学习及模型适配。<cite data-ref="ambench air-vla airvla aeromanip"></cite> AirSpark 关注既有策略的反馈驱动改进，以共享仿真设施组织经验生成、参数更新和独立评价。原生基准比较以本体、动作及成功判据的一致性为前提。</p>
<h3 id="related-simulation" data-nav="仿真平台与经验生成" data-number="2.2">2.2 具身仿真平台与自动经验生成</h3>
<p>Aerial Gym 等仿真平台提供空中机器人的物理、渲染、控制与训练能力，基于真实数据的仿真评价则强调任务相关响应误差的测量。<cite data-ref="aerial-gym sim-benchmark"></cite> AirSpark 复用 UE、MuJoCo 与 URLab 组件，构建面向空中操作学习的视觉—物理执行接口，其可靠性通过时序、控制响应、接触事件及监督一致性评价。<cite data-ref="mujoco urlab"></cite></p>
<p>MimicGen、RoboTwin 与 MILES 分别研究示范扩展、自动数据生成和自主采集；RialTo 与 RoboSplat 利用数字孪生生成面向真实部署的训练经验。<cite data-ref="mimicgen robotwin miles rialto robosplat"></cite> 3DGS 支持真实场景外观重建，接触与可动物体则依赖显式物理表示。<cite data-ref="3dgs"></cite> AirSpark 将这些经验生成能力与可重复空中交互、专家监督及训练评测连接为统一学习设施。数据来源对照评价该系统的整体效用，渲染与动力学模块的独立贡献需通过额外消融辨识。</p>
<h3 id="related-feedback" data-nav="反馈驱动策略自改进" data-number="2.3">2.3 反馈驱动的机器人策略自改进</h3>
<span id="related-learning" aria-hidden="true"></span><span id="related-teaching" aria-hidden="true"></span>
<p>DAgger 与 DART 研究学习者状态或扰动条件下的专家监督，ThriftyDAgger 与 Sirius 进一步考虑介入成本及部署反馈。<cite data-ref="dagger dart thrifty sirius"></cite> CorrectNav 与 AHA 探索纠正数据和失败分析，自主采集研究则揭示复位、成功检测与数据效用对规模化学习的限制。<cite data-ref="correctnav aha autonomous-cost"></cite> 本文沿用学习者状态监督，并使固定流程与完整方法共享专家延续设施，以区分监督来源和反馈编排的作用。</p>
<p>近期具身自改进与 Agent Harness 研究将执行、工具调用和学习更新纳入多轮过程。Agentic Robots 提供系统组织视角，ENPIRE 研究工具化策略改进，EmbodiRSI 通过协作纠错与自适应采集更新学习型策略。<cite data-ref="agentic-robots-survey enpire embodirsi"></cite> Fly-by-Code 侧重主动视觉与物理诊断驱动的任务程序修订，RPG 利用仿真练习改进程序和提示。<cite data-ref="fly-by-code rpg"></cite> 与程序层面的修订不同，AirSpark 以学生参数更新保留学习结果，研究该反馈过程在空中操作学院中的实现及其学习效用。</p>
<p>Learning to Teach、ALP-GMM 与多任务 DAgger 利用学生表现或学习进展调整后续教学，Eureka 通过训练反馈改进奖励代码。<cite data-ref="learning-to-teach alp-gmm multitask-dagger eureka"></cite> AirSpark 在固定学生接口与有限干预空间内利用跨轮记忆修订练习方案，延续反馈教学的基本思想。规则修订与当前／历史反馈对照用于辨识决策和记忆的增量作用；奖励搜索与导师网络训练不属于本文方法。</p>
</section>

<section id="method" data-title="方法" data-number="3">
<div class="eyebrow">METHOD</div><h2>3. AirSpark 模拟学院</h2>
<p>AirSpark 由仿真学习设施、闭环执行与练习决策三层组成。学院提供环境交互、监督生成及训练评价工具；SparkMentor 维护实验状态并组织迭代执行；决策模块依据执行与学习反馈选择经验生成和使用方案。训练更新保留于学生参数，干预历史保留于实验记忆。图 1 展示平台架构，图 2 给出六步策略改进过程，图 3 描述评测流程；执行链路与专家延续见附录图 A1–A2。</p>
<figure class="paper-figure diagram-figure" id="figure-1">
<div class="diagram-heading"><b>图 1 · 学院平台架构</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.23" data-figure-title="图 1 · 学院平台架构" aria-label="放大图 1：学院平台架构"><img src="figures/fig01-academy-overview-zh.svg?v=0.23" alt="图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。" width="1440" height="870" loading="lazy"></button>
<figcaption>图 1. AirSpark 模拟学院平台架构。视觉仿真、物理仿真与场景任务共同支撑任务执行、同步记录、监督生成、训练与评价工具。学生策略、采集专家和 SparkMentor 通过共享接口调用这些能力。图 2 进一步描述运行在学院设施上的策略自进化方法。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig01-academy-overview-zh.svg?v=0.23" data-figure-title="图 1 · 学院平台架构">放大查看</button><a href="figures/fig01-academy-overview-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig01-academy-overview-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig01-academy-overview.svg?v=0.23" download>英文 SVG</a><a href="figures/fig01-academy-overview.png?v=0.23" download>英文 PNG</a></div>
</figure>

<h3 id="scope" data-nav="问题定义" data-number="3.1">3.1 问题定义</h3>
<p>设任务条件为 ξ，其中包含场景、目标、初始状态和物理参数。策略 π<sub>θ</sub> 根据观测历史 h<sub>t</sub>、可用本体状态 p<sub>t</sub> 及语言指令 ℓ 生成动作 u<sub>t</sub>，低层控制器 K 将动作转换为机器人执行。任务专用策略可省略语言输入。本文研究通过多轮经验生成与参数更新，提高策略在独立任务分布上的完整成功率。记初始策略为 θ<sub>0</sub>、迭代轮次为 R，实验资源上限为 B。</p>
<div class="equation" aria-label="目标任务分布上的策略性能">u<sub>t</sub> = π<sub>θ</sub>(h<sub>t</sub>, p<sub>t</sub>, ℓ)<br>J<sub>𝒟</sub>(θ) = 𝔼<sub>ξ∼𝒟</sub>[Success(π<sub>θ</sub>, ξ)]<br>最大化 J<sub>𝒟</sub>(θ<sub>R</sub>)，满足 ∑<sub>r</sub> Cost<sub>r</sub> ≤ B</div>
<p>𝒟 是目标任务分布，封存测试 T 用于估计最终策略的 J<sub>𝒟</sub>，不参与干预选择。B 用于界定受控比较的资源条件与执行终止条件，各资源分量分别计量。任务组预先划分为采集池 C、开发验收池 V 和封存测试池 T；诊断与专家延续来自 C，V 用于预定的模型验收，并向方案调整提供预先允许的汇总反馈；其轨迹及由轨迹派生的训练样本不进入学生训练。T 在研究配置冻结后统一评价，不向闭环提供反馈。闭环选择仅读取 C 的过程证据及预先允许的开发验收摘要。目标位置、接触真值及专家信息用于诊断、采集和标注，学生输入由部署协议固定。我们将“策略自进化”定义为执行与学习反馈影响后续练习、训练更新跨轮次保留的有界过程，不要求各轮性能单调提高。过程条件分配是初始参考规则；基于学习反馈的有界计划修订与学生参数更新共同构成本文研究的跨轮闭环。正式评价冻结学生参数，不使用教师临场纠错或测试时程序修订；评价中的人工接管单独记录。该定义区分学习阶段的反馈闭环与执行阶段的任务求解。</p>

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
<p>在学院设施之上，本文以执行反馈驱动后续经验采集，并通过训练更新学生策略（图 2）。一次学习迭代包含执行、能力缺口诊断、练习决策、经验生成、参数更新和开发验收。SparkMentor 利用当前证据和跨轮记录组织这些步骤；学生参数保留学习结果，实验记忆保留已尝试的练习、成本及验收结果。下文给出过程条件分配与有限练习选项的参考实现。第 4.3 节比较冻结父代、固定覆盖采集训练流程与完整 AirSpark 闭环；具体分配和修订机制在代表任务中分析。</p>
<figure class="paper-figure diagram-figure" id="figure-2">
<div class="diagram-heading"><b>图 2 · RSI 策略方法</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.23" data-figure-title="图 2 · RSI 策略方法" aria-label="放大图 2：RSI 策略方法"><img src="figures/fig02-rsi-method-zh.svg?v=0.23" alt="图 2. 执行与学习反馈驱动的策略自进化。主循环依次为策略执行、交互过程诊断、反馈驱动练习规划、专家监督生成、学生策略更新和学习评估与接纳。第 r 轮根据执行证据 Eᵣ 与既往干预记录 Mᵣ 生成练习计划 Aᵣ；训练后的学习反馈 Fᵣ 写入 Mᵣ₊₁，供后续规划读取。接纳的学生进入下一轮，未接纳时保留父代；两种结果均进入记忆。封存评价与物理实机最终测试位于学习闭环之外。" width="1640" height="950" loading="lazy"></button>
<figcaption>图 2. 执行与学习反馈驱动的策略自进化。主循环依次为策略执行、交互过程诊断、反馈驱动练习规划、专家监督生成、学生策略更新和学习评估与接纳。第 r 轮根据执行证据 Eᵣ 与既往干预记录 Mᵣ 生成练习计划 Aᵣ；训练后的学习反馈 Fᵣ 写入 Mᵣ₊₁，供后续规划读取。接纳的学生进入下一轮，未接纳时保留父代；两种结果均进入记忆。封存评价与物理实机最终测试位于学习闭环之外。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-rsi-method-zh.svg?v=0.23" data-figure-title="图 2 · RSI 策略方法">放大查看</button><a href="figures/fig02-rsi-method-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig02-rsi-method-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig02-rsi-method.svg?v=0.23" download>英文 SVG</a><a href="figures/fig02-rsi-method.png?v=0.23" download>英文 PNG</a></div>
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
<p>失败诊断依据执行证据选择检查与干预路径。多个候选解释可同时保留，证据不足时记录未知并在预算内复验。表中分流规则定义操作流程，不构成因果识别。基础实验固定检查顺序，诊断顺序的自适应选择留作后续研究。</p>
<div class="table-wrap compact-table"><table><caption>从观察到下一步处理。</caption><thead><tr><th>观察</th><th>优先核查与处理</th></tr></thead><tbody>
<tr><td>策略命令与实际运动明显不一致</td><td>检查时序、动作参考系、执行器限制和低层跟踪；平台故障进入修复流程，不归入学生补采收益。</td></tr>
<tr><td>学生无法区分需要不同动作的状态</td><td>检查部署允许的视觉历史与本体线索。若确有观测缺失，另设接口研究；主比较不暗中增加传感器或真值输入。</td></tr>
<tr><td>专家延续产出低</td><td>检查候选起点、可达性与专家适用范围；比较更合适的接管时刻，或暂缓该条件。</td></tr>
<tr><td>监督有效，但学生完整任务仍失败</td><td>检查经验覆盖、标签与阶段衔接，再比较局部延续和完整示范。</td></tr>
<tr><td>新条件改善、原有能力下降</td><td>检查数据集中与训练干扰；在预设范围内比较回放覆盖及混合比例。</td></tr>
<tr><td>跨轮变化小于评价不确定性</td><td>按预定复验预算补充证据或保持当前方案；不将随机波动直接解释为教学失败。</td></tr>
</tbody></table></div>
<p><b>参考分配规则。</b>本版以过程条件优先级 q(z) = ρ̂<sub>z</sub>f̂<sub>z</sub>/κ̂<sub>z</sub> 初始化练习：依据诊断分布中的条件访问、转换失败和实测合格监督成本安排采集，同时保留预定覆盖与探索份额。q 是经验排序规则，不是学习收益预测器；计数、重叠条件、零产出与未知成本处理见<a href="#process-allocation-details">附录参考实现</a>。更换这一规则不改变模拟学院与六步反馈闭环的定义。</p>
<p><b>物理前缀与专家延续。</b>学院从合法初态出发，使用当前学生或预先规定的扰动前缀实际进入目标条件，再由固定专家继续执行。前缀未命中、接管失败及完整终态失败均记录并计费。重执行保留速度、控制器、接触及观测历史；使用状态快照须先验证这些状态的恢复一致性。附录图 A2 展开这一经验生成步骤。全过程承接学习者状态监督与扰动专家示范的思想。<cite data-ref="dagger dart"></cite></p>
<p><b>监督起点的候选调整。</b>对于接触失败，以及经验证任务物理支持的抓持／载荷失稳，可在少量预定事件时刻重执行物理前缀，并使用同一专家检查延续产出。这里得到的是给定专家、约束与预算下可产生有效监督的候选时刻，不是系统的绝对可恢复域；不假定越早接管越好或恢复能力随时间单调变化。起点调整作为第 3.4 节的可选经验生成方式，与固定接管规则比较，全部试探计入成本。最终价值由学生完整任务表现检验。</p>
<p><b>动作监督边界。</b>学生前缀仅提供部署允许的观测历史，不作为专家动作标签。动作块目标必须完整落在通过质检的专家区间内，或使用冻结的边界掩码规则；特权状态仅供专家、诊断与质检，不进入学生输入。</p>
<h4 id="aerial-case">空中操作案例：接触失败后的练习修订</h4>
<p>考虑学生能够到达目标附近，却因接近速度或动作时刻不合适而接触失败的情形。系统先排除命令与实际运动不一致，再比较接触前不同事件点的专家延续。若接管过晚导致合格监督产出低，可试验更早起点；若局部延续成功但正常初态下的完整任务未改善，则比较包含前置接近的完整示范。两种调整均是候选假设，须经实际采集和训练检验，不能由诊断标签直接推定有效。</p>
<p>若连续多轮出现“产出提高而完整任务无收益”，历史反馈组可检查此前起点与经验构成是否已被重复尝试，并在相同选项中选择另一干预或暂缓。规则式修订组获得相同历史摘要，按冻结的触发规则作决定；由此区分 Agent 决策与预写规则的效果。低层控制器与学生输入保持固定。柠檬抓持、脱离与运输只按已核验的任务机制解释，不将约束辅助或标志位当作真实抗滑落、果梗断裂或载荷稳定的证据。</p>

<h3 id="evolution" data-nav="多轮更新与记忆" data-number="3.4">3.4 多轮策略更新、学习反馈与实验记忆</h3>
<p>图 2 同时包含学生学习与练习计划修订。主实验比较完整反馈闭环与固定覆盖采集训练流程；固定过程方案及不同修订器留作代表任务分析。可修订组在相同选项与总预算内调整练习配置。F 记录完整任务收益、旧能力变化及不确定性；采集成本与专家产出作为辅助诊断。每次干预关联父训练状态、配置、数据、候选模型、评价和资源记录。收益归属于整次干预，不按混合训练中的条件重复分摊。</p>
<figure class="algorithm" id="closed-loop-algorithm" aria-labelledby="algorithm-title">
<figcaption id="algorithm-title"><b>算法 1 · 预算约束下的反馈驱动策略更新</b></figcaption>
<p><b>输入：</b>初始学习状态 x<sub>0</sub>，隔离的 C/V/T，实验组 g，冻结配置 P，资源预算 B。<b>输出：</b>各轮保留状态、全部候选产物及成本记录。</p>
<ol>
<li>核查冻结协议 P、任务划分、版本与剩余预算；初始化记忆与账本。B0 直接保留初始策略。</li>
<li>保存父状态 x<sub>r</sub>、已接纳配置 η<sub>r</sub> 与数据清单。</li>
<li>在 C 执行登记的诊断任务，形成 E<sub>r</sub> 并计费；平台故障进入修复流程，不伪装为学生失败。</li>
<li>按实验组的信息权限和规则选择一个可执行计划 A<sub>r</sub>。固定 B1 按覆盖流程；完整闭环读取 E<sub>r</sub> 与既往 M<sub>r</sub>。保持当前配置同样是合法选择。</li>
<li>为这一次采集、一次固定步数训练和完整开发评价预留资源；不足则停止新干预。每次干预最多训练一个候选，不训练多个方案后择优。</li>
<li>执行计划中的物理前缀、专家延续与质检；记录全部失败和成本。无效或不足的数据进入拒绝路径。</li>
<li>从保存的父状态出发，使用合格新增数据与已接纳回放训练一个候选 x′；固定训练配方并记录随机状态。</li>
<li>在相同的 V 初态列表上评价父代与该候选，获得 F<sub>r</sub> 与不确定性。完全相同的已完成父代评价可复用并仅计费一次。</li>
<li>应用经验接纳规则：通过则提交候选模型、训练状态、合格数据与允许的配置；否则恢复父状态并保留原配置。</li>
<li>将方案、数据、结果、拒绝原因及实际成本写入 M<sub>r+1</sub>。拒绝也推进尝试轮次与采集随机流；到达固定轮次或资源上限后退出。封存测试不回流。</li>
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
<tr><td>主实验：至少两个任务</td><td>少量监督起点、局部／完整示范构成、预设回放比例；比较 B0、固定覆盖采集训练 B1 与完整闭环；具体轮次由先导成本确定，须覆盖多轮反馈。</td></tr>
<tr><td>后续扩展</td><td>依据历史证据安排诊断试验与探索预算。可改变检查顺序，不改变成功定义与封存评价。</td></tr>
<tr><td>独立研究路线</td><td>新奖励或损失、策略结构、世界模型、残差控制及执行时规划器；不纳入本版闭环完成条件。</td></tr>
</tbody></table></div>
<p>规则式修订、当前反馈以及过程／终态分配用于代表任务的机制分析；第二模型架构不是本轮完成前提。采集保留预定的覆盖与探索份额，并保留关键成功经验。反复低产出或无收益的条件可以暂缓，记录其原因及重测条件；学生版本或相关设施改变后再检查。暂停补采是一项资源决策，不代表该条件已解决或永远不可学习。历史反馈用于选择干预，跨学生可复用的教学能力仍需另行验证。</p>
</details>
<details class="editorial-note" id="practice-adaptation"><summary>参考实现：有界计划选项与代表任务对照</summary>
<p>η 记录监督起点、局部／完整示范构成与预设回放选项。SparkMentor 是工具、状态、记忆和决策组成的 Agent Harness；本文不训练一个独立“导师网络”。比较固定学生结构、输入、动作语义、专家、低层控制、优化算法和评分器，仅在登记选项内修改经验生成与使用方案。任务组预算权重保持固定，不临时改变目标分布。</p>
<div class="table-wrap"><table><caption>计划修订的统一动作空间与规则基线。</caption><thead><tr><th>可观测证据</th><th>可执行选项／规则式修订</th><th>Agent 需要验证的内容</th></tr></thead><tbody>
<tr><td>合格专家产出低</td><td>达到冻结阈值时，试验相邻的更早合法接管点；不可达则暂缓。</td><td>是否已有反例，低产出是否真由起点导致。</td></tr>
<tr><td>局部延续改善，完整任务无收益</td><td>达到触发条件时，选择预定的衔接／完整示范比例。</td><td>哪项前置或衔接假设值得有限预算试验。</td></tr>
<tr><td>新条件改善，保留组退步</td><td>依固定顺序选择下一档回放选项。</td><td>此前哪项数据构成产生干扰，是否应重复尝试。</td></tr>
<tr><td>证据不足或差异小于不确定性</td><td>预算内固定复验或保留原方案。</td><td>是否值得复验；不得将不确定直接解释为策略失败。</td></tr>
</tbody></table></div>
<p>规则组与历史 Agent 组读取相同结构化执行证据、当前及历史学习摘要，调用同一工具并使用相同动作、单候选执行协议和资源上限。规则的触发阈值、优先级、并列顺序在先导后冻结。当前反馈组仅读取本轮 E 与最近一次 F，不读取更早干预结果，但可读取执行所需的当前方案与资源状态。审计日志对所有组完整保留，日志存在不等于决策可访问。</p>
<p>反思只用于提出待验证的计划。证据链为“执行／学习摘要 → 假设与方案 → 实际采集 → 训练 → 开发比较 → 接纳或拒绝”；最终收益必须体现在冻结学生中。每次决策只选一个方案，采集、训练一次，并与保留父代比较；规则与 Agent 共用这一执行协议和固定验收，不另行训练多个备选分支。拒绝不提交候选方案，但失败记录与成本继续保留，可供下一次允许的修订使用。</p></details>

<h3 id="harness" data-nav="研究工具与验证" data-number="3.5">3.5 研究工具与独立验证</h3>
<p>研究 harness 将环境配置、执行、采集、质检、训练和评价暴露为结构化工具。SparkMentor 负责提出和调度有预算约束的实验，工具负责实际执行与产物检查，验证模块依据固定标准接纳或拒绝更新。这一组织方式借鉴自主机器人研究中的工具化反馈流程。<cite data-ref="enpire"></cite> 每次运行记录输入配置、状态、输出与失败原因，使中断恢复和重放依赖可核查的产物，而非代理的文字总结。</p>
<p>可行性检查与先导执行筛除不适合当前学生、专家或执行系统的条件；实际采集提供监督，训练后的独立评价检验经验价值。学生架构、观测历史、动作语义、归一化方案、专家、低层控制和评分器在比较中固定；学生权重随各轮训练更新。正式测试与代理记忆隔离，在全部闭环结束后统一回测保存的模型。</p>
<p>一次运行须覆盖证据不足、条件不可行、监督不合格、候选无收益与预算耗尽等退出路径。诊断分流可以暂停采集并提交平台检查；修复环境、观测接口或控制器后建立新的配置版本，重新确认基线，相关收益与策略学习分开报告。各类退出均保留状态、原因与成本，使用同一轮配置和产物清单恢复工作。</p>
<p>固定 B3 保持经验生成与使用配置；规则式和 Agent 修订组开放同一组预定配置，但固定学生架构、输入历史、动作接口、专家、低层控制、主要损失、优化器及总训练预算；每次决策至多训练一个候选，干预次数与总资源预先限定。SparkMentor 将决策连接到采集、训练与验收工具，不修改成功标准或封存测试。各决策器共用可恢复执行器，依据同一轮的配置、数据、模型和评价记录恢复中断。确定性计划器作为参考实现；Agent 决策与显式历史的增量作用通过代表任务中的规则修订及当前／历史反馈比较评价。</p>
<h4 id="candidate-state">候选接纳、拒绝与中断后的状态处理</h4>
<div class="table-wrap state-table"><table><caption>表 3. 单次干预后的状态归属。</caption><thead><tr><th>对象</th><th>接纳候选</th><th>拒绝、无效或证据不足</th></tr></thead><tbody>
<tr><td>模型与训练状态</td><td>提交 θ′ 与对应 ψ′，用于下一轮。</td><td>继续使用父状态 θ、ψ；不沿用候选优化器动量或训练进度。</td></tr>
<tr><td>训练与回放数据</td><td>仅将本次接纳候选的合格新增数据加入已接纳清单。</td><td>已接纳清单保持不变；候选数据归档，不自动进入后续回放。</td></tr>
<tr><td>方案版本 η</td><td>基础组保持固定版本；可修订组提交通过比较的允许配置。</td><td>保留当前版本，记录未采用的候选及原因。</td></tr>
<tr><td>产物与干预记忆</td><td colspan="2">所有尝试均保存配置、父状态、数据来源、质检、评价和结果；平台异常另标，不伪装为策略任务失败。</td></tr>
<tr><td>成本、轮次与随机流</td><td colspan="2">按实际消耗扣减预算；拒绝也推进尝试轮次、全局采集随机流和任务 ID。父训练随机状态的恢复仅用于恢复可比较的父训练起点。</td></tr>
<tr><td>运行中断</td><td colspan="2">依据阶段完成标记、产物哈希和账本恢复；完整产物可复用，不完整阶段按登记的重试上限处理。同一实际执行不重复计费，新执行继续计费。</td></tr>
</tbody></table></div>
<p>候选被拒后保留配置 η 与父代学习状态，后续决策可基于新增证据提出新方案；成本与尝试轮次持续累积。归档数据的重新使用必须由主实验前冻结的数据规则决定；本版默认不自动重用被拒候选的数据。跨实验复用需单列数据与历史成本。平台修复或观测接口变化建立新配置，重新确认基线。</p>
<details class="editorial-note" id="protocol-configuration"><summary>表 4 · 算法配置与冻结清单</summary>
<p>下表区分已明确的协议与待先导确定的数值。待定项不能当作已运行设置；主对照须填齐对应实验组的必填项、生成配置哈希并冻结。<a href="protocol/closed-loop-config.template.json" download>下载配置模板</a>。</p>
<div class="table-wrap state-table"><table><thead><tr><th>配置项</th><th>固定协议</th><th>待先导冻结／发布值</th></tr></thead><tbody>
<tr><td>任务与版本</td><td>C/V/T 按父任务划分；实例、布局与派生数据继承归属。</td><td>任务子集、环境／专家／学生版本、划分清单及哈希。</td></tr>
<tr><td>任务权重与目标</td><td>任务组预算权重固定；c* 用于报告和预定检查。</td><td>组权重、能力报告目标、旧能力保留组。</td></tr>
<tr><td>诊断与事件</td><td>同轨迹同条件首次进入计一次；原始计数，无额外平滑。</td><td>N、事件谓词、条件区间、转换窗口与超时。</td></tr>
<tr><td>分配与探索</td><td>可行条件按 q；稀疏／未知成本条件走覆盖试采；q 全零则覆盖。</td><td>最小计数、探索份额、覆盖规则参数和确定性排序。</td></tr>
<tr><td>试采、暂缓与重测</td><td>零产出不定义有限成本；达到上限后暂缓，按登记条件重测。</td><td>试采次数上限、暂缓条件、重测检查点。</td></tr>
<tr><td>基础采集配置</td><td>B1–B3 使用相同前缀、专家、监督起点与质检。</td><td>起点、前缀扰动、专家版本与质检阈值。</td></tr>
<tr><td>训练与轮次</td><td>主比较共享优化器、每候选步数与总训练上限；开展有限多轮干预；轮次与 seed 数由先导成本、方差和精度设计冻结。</td><td>实际步数、回放比例、seed ID、轮次与保存清单。</td></tr>
<tr><td>方案调整</td><td>可修订组共享动作空间和对应信息权限；一次选择一个方案，最多训练一个候选，与保留父代比较。</td><td>检查轮次、监督起点列表、经验构成与回放选项。</td></tr>
<tr><td>开发评价</td><td>父代和候选使用配对初态；任务组权重固定。</td><td>V 初态列表、各组次数、配对重采样次数及区间水平。</td></tr>
<tr><td>候选接纳</td><td>使用经验差值门槛；缺失评价暂不接纳。</td><td>δ<sub>J</sub>、各组 ε<sub>j</sub>、规定评价样本量。</td></tr>
<tr><td>预算与恢复</td><td>采集、训练、评价、代理分别记账；重试有上限。</td><td>各资源上限、每轮预留预算、重试次数与停止条件。</td></tr>
</tbody></table></div>
<p>模板记录研究协议，未代表仿真、训练、评价执行器已完成。实际使用参数随结果一并发布；各决策组分别保存配置。</p>
</details>
</section>

<section id="experiments" data-title="实验" data-number="4">
<div class="eyebrow">EXPERIMENTS</div><h2>4. 实验</h2>
<p class="experiment-status">本节为预定实验协议；具体任务合同、干预轮次、样本量和预算由先导核验后冻结，尚无定量结果。</p>
<div class="table-wrap" id="hypotheses"><table><caption>三个研究问题及对应证据。</caption><thead><tr><th>问题与假设</th><th>实验</th><th>不支持条件</th></tr></thead><tbody>
<tr><td>H1：学院能否支持可控练习与可靠监督？</td><td>E1 · §4.2：设施可靠性、监督产出与成本；一个任务的原生／学院固定补采对照。</td><td>执行或标签超出冻结容差、产出不足以训练，则先修复设施；不能解释为学生能力缺口。</td></tr>
<tr><td>H2：反馈自进化是否比固定采集训练流程更有效？</td><td>E2 · §4.3：B0 / B1 / 完整 AirSpark 的同预算多轮比较；§4.6 为代表任务归因。</td><td>完整闭环未表现出具有实际意义的优势，或区间过宽，则相应主张不成立或证据不足；主表本身不证明每个组件均有效。</td></tr>
<tr><td>H3：收益能否保留于冻结学生并通过外部检验？</td><td>E3 · §4.4–4.5：原生 AM-Bench 与物理实机分别报告。</td><td>仅开发池提高、仅胜过退化对照、或只有重建场景仿真成绩，不能支持相应的外部提升与真实迁移。</td></tr>
</tbody></table></div>
<h3 id="benchmark" data-nav="实验设置与先导" data-number="4.1">4.1 实验设置</h3>
<p>候选任务为 AM-Bench 的 Lemon Harvesting 与 Cabinet Pick-and-Place，主比较保留至少两个不同任务定义和一个可训练学生后端。<cite data-ref="ambench ambench-docs"></cite> 优先验证 Diffusion Policy 路径，ACT 与 OpenPI 保留为接入选项，不展开第二模型矩阵。<cite data-ref="dp act openpi"></cite> 逐任务核查环境 ID、本体、控制器、动作参考系／单位／频率、相机、本体字段、归一化、复位、附着规则与完整成功判据；修改任务或部署合同的结果单列为“衍生设置”，不能称为原生回测。</p>
<p>B0 使用锁定官方训练路径和合格原生数据，记录数据、配置、脚本、seed 和 checkpoint 哈希；公开权重只有在实际资产和任务匹配后才使用。所有增量组从同一初始学习状态出发。C/V/T 按父任务、物体和布局隔离，派生数据跨引擎继承归属，T 不向规划和训练提供反馈。</p>
<p>主指标是完整任务成功率，阶段到达与转换结果、耗时、人工接管和安全终止用于解释。以<b>完整独立学习链</b>为统计单位，各组共用配对随机种子与评价初态；不能将同一链中的轮次或同一模型的 rollout 当作独立训练重复。先导后冻结实际意义差值、独立链数量、V/T 回合数与不确定性方案，逐任务报告均值和区间；有限 seed 不自动构成充分统计证据。</p>
<details class="editorial-note" id="implementation-order"><summary>先导顺序与范围控制（执行细节）</summary><p>优先核验主任务与实机本体、接口和可用专家。使用具有飞行动力学的 PressButton 打通采集—训练—重载—评分；它是功能先导，不代替柠檬主任务。实测单次干预成本后，再确定有限轮次、完整独立学习链和预算。多轮设置须允许早先学习结果影响后续规划；拒绝占用一次干预机会。具体数值留待下一步实验讨论，不预填为已运行配置。<a href="#submission-plan">提交前冻结节点</a>。</p></details>
<h3 id="platform-evaluation" data-nav="E1 学院设施" data-number="4.2">4.2 E1：学院设施与监督可靠性</h3>
<p>从主实验日志提取观测—动作时间偏差、命令跟踪误差、复位偏差、条件命中、专家延续产出、标签一致性、每份合格监督成本及人工介入。以相机配准、配对控制响应和任务接触事件检验视觉—物理对应，保留所有未命中、失败与质检拒绝的分母。<cite data-ref="aerial-bench sim-benchmark"></cite> 一项任务核验产物提交后的中断恢复、版本一致与重复计费；这些设施指标与学生任务成功分开报告。</p>
<div class="table-wrap" id="source-control"><table><caption>一个主任务的最小来源对照：共用 B0 与固定 B1 流程。</caption><thead><tr><th>补采来源</th><th>保持一致</th><th>测量</th></tr></thead><tbody>
<tr><td>原生 AM-Bench 固定覆盖补采</td><td rowspan="2">部署合同、因素范围、专家能力、采集预算、训练配方和验收。</td><td rowspan="2">合格监督产出与成本，以及更新学生在同一外部协议下的表现。</td></tr>
<tr><td>AirSpark 固定覆盖补采</td></tr>
</tbody></table></div>
<p>该对照评价学院相对于原生环境的数据生成效用。学院 B1 复用主实验结果，比较反映数据来源的总体作用；未匹配因素单独披露，渲染与物理求解器的独立作用不由此推断。原生／学院 × 固定／反馈的 2×2 设计作为可选扩展。平台价值由可靠性、成本和任务效用共同评价，不预设学院在每个原生任务都更优。</p>
<h3 id="comparison" data-nav="E2 反馈自进化" data-number="4.3">4.3 E2：同预算多轮策略改进</h3>
<p>主比较检验完整反馈闭环相对于固定采集训练流程的学习效用。至少两个任务共享初始策略、学生接口与历史窗口、专家、低层控制、训练配方、任务组权重和接纳标准。B1 也可在学习者到达状态生成专家延续，与完整方法共用相同采集和恢复设施；其条件覆盖、监督起点、示范构成及回放安排在实验前固定，不根据跨轮学习结果修订。<cite data-ref="dagger dart sirius"></cite></p>
<div class="table-wrap"><table><caption>主表实验组。规范 ID 保留，网页名称明确其研究角色。</caption><thead><tr><th>实验组</th><th>采集与更新流程</th><th>角色</th></tr></thead><tbody>
<tr><td>B0 · 冻结初始策略</td><td>无新增采集训练。</td><td>所有主任务的初始能力和零增量成本参照。</td></tr>
<tr><td>B1 · 固定采集训练流程</td><td>覆盖补采、固定经验生成与使用方案；按共同调度训练与验收。</td><td>同预算固定流程基线，覆盖所有主任务。</td></tr>
<tr><td>AirSpark · 完整反馈闭环<br><code>B3+adapt-history</code></td><td>依据执行证据与跨轮干预记忆规划练习；采集、训练、评估并更新或保留学生。</td><td>完整方法，覆盖所有主任务。</td></tr>
</tbody></table></div>
<p>各增量组使用相同干预调度和资源上限；每次决策只选一个方案，采集、训练一次，至多产生一个训练候选，再与保留父代比较。诊断、失败、复位、质检、被拒训练、开发评价和 Agent 调用均计入实际开销；资源分别设上限并报告实际使用。B0 作为零增量训练成本的初始参照。主要比较为完整闭环相对 B1 的完整任务收益，并报告两组各自相对 B0 的绝对变化和随累计资源变化的学习曲线。能力提升以相对 B0 的绝对变化衡量，方法优势以相对 B1 的差值衡量。</p>
<p>以整条学习链进行配对分析。拒绝或未完成的尝试均保留在学习链与成本中，不能只统计接纳轮次或最优 seed；缺失评价与实际失败分别记录。详细资源登记、恢复和统计字段见方法状态表、附录与配置模板。</p>
<h3 id="external" data-nav="E3 原生基准" data-number="4.4">4.4 E3：冻结学生的 AM-Bench 原生回测</h3>
<p>闭环结束后冻结 B0、B1 与完整方法的保存学生，在未修改的 AM-Bench 任务、部署和评分协议中回测。原生封存初态不用于练习选择，阶段指标不能替代完整成功。报告相对 B0 的变化及完整方法与 B1 的差值和不确定性；数据来源对照见 §4.2。跨引擎域差可能削弱收益，需要分析，但不能自动据此宣称学习有效。若合同不匹配，结果单列为衍生实验。</p>
<figure class="paper-figure diagram-figure" id="figure-3"><span id="figure-4" aria-hidden="true"></span>
<div class="diagram-heading"><b>图 3 · 实验流程</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.23" data-figure-title="图 3 · 实验流程" aria-label="放大图 3：实验流程"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.23" alt="图 3. E1 复用日志检验学院设施，并在一个任务比较原生与学院的固定补采；E2 在至少两个任务比较 B0、固定流程 B1 与完整闭环，代表任务解释机制；E3 冻结学生后分别进行原生 AM-Bench 与物理实机检验。" width="1440" height="1000" loading="lazy"></button>
<figcaption>图 3. E1 复用日志检验学院设施，并在一个任务比较原生与学院的固定补采；E2 在至少两个任务比较 B0、固定流程 B1 与完整闭环，代表任务解释机制；E3 冻结学生后分别进行原生 AM-Bench 与物理实机检验。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig04-evaluation-protocol-zh.svg?v=0.23" data-figure-title="图 3 · 实验流程">放大查看</button><a href="figures/fig04-evaluation-protocol-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig04-evaluation-protocol-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig04-evaluation-protocol.svg?v=0.23" download>英文 SVG</a><a href="figures/fig04-evaluation-protocol.png?v=0.23" download>英文 PNG</a></div>
</figure>
<h3 id="realworld" data-nav="E3 物理实机" data-number="4.5">4.5 E3：对应真实场景的冻结策略执行</h3>
<p>Real-to-Sim-to-Real 在本文指真实场景扫描与 3DGS 外观重建、显式碰撞及交互资产与机器人配准、仿真内学习，再由冻结学生在物理实机执行。3DGS 不负责接触求解；重建场景内的仿真成绩不能代替实机结果。</p>
<p>在主任务冻结前检查本体与动作接口兼容程度，优先共用部署合同。若实机必须使用不同本体，明确匹配初始策略、适配数据与成本，另立对应任务的最小 B0/B1/完整闭环比较；是否开展及其范围由先导资源与可对应性决定，不能将不同本体成绩混作同一原生 checkpoint 的直接迁移。不要求把全部归因实验重复到真机；若只能执行演示，明确不能支持定量迁移主张。</p>
<p>各组共用标定、控制、适配与真实数据预算，测试中不使用 Mentor 临场纠错。使用配对初态与随机化执行顺序，报告完整成功、阶段结果、耗时、接管及安全终止。对应重建场景与预留物体／布局分别报告，独立新场地才支持新场景泛化。正式实机测试反馈不进入训练或方案选择；本版不由有限轮次推出长期持续改进。</p>
<h3 id="ablation" data-nav="代表任务机制分析" data-number="4.6">4.6 代表任务的机制归因与边界</h3>
<p id="teaching-analysis">在一个代表任务上，复用完整方法，再加入固定过程方案 B3、规则式修订 <code>B3+adapt-rule</code> 和当前反馈 <code>B3+adapt-current</code>。B3 仍按新执行反馈分配条件，固定的是经验生成和使用方案；规则组与历史 Agent 使用相同结构化历史、工具、动作和单候选预算；当前组读取 E、最近一次 F、当前配置与资源，不是完全无记忆。</p>
<p>完整方法对固定 B3 检验进一步修订计划的作用，对规则组检验超出预定规则的增量，对当前组检验更早显式干预记录的作用。B2 终态分配与局部／完整示范构成作为可选补充分析，不展开全组合；这些对照不构成 EmbodiRSI 的复现。<cite data-ref="embodirsi"></cite> 复用日志串联证据、方案、监督产出、学习结果和拒绝成本，包含无收益或被拒案例；单任务分析的结论限定于对应设置，不替代多任务主表。</p>
<p>学生观测和任务物理限制需要单独核查；未验证的滑移／载荷现象不写成已支持能力。反思文本、工具次数和专家成功均不是学生收益。开发池重复使用可能导致选择偏差，经验接纳不保证封存任务逐轮提高；3DGS 的独立学习增益需另作外观消融。本文不宣称导师网络训练、无限递归改进或收敛保证。</p>
</section>

<section id="discussion" data-title="讨论与局限" data-number="5">
<div class="eyebrow">DISCUSSION</div><h2>5. 讨论与局限</h2>
<p>AirSpark 将空中操作的环境执行、经验生成和训练评价组织为共享学习设施，并通过 SparkMentor 连接执行诊断、练习规划与学习反馈。过程条件分配是这一框架的参考实现；完整闭环效用与具体修订机制的作用分别通过主比较和代表任务分析评价。平台可靠性、策略学习收益和真实迁移属于不同证据层级，单一层面的改善不足以支持其余层面的结论。</p>
<p>方法依赖可用专家、充分的学生观测和任务相关的仿真准确性。控制故障、不可达动作及观测中不可辨识的状态差异，可能使新增监督无法转化为策略收益。过程证据用于形成练习假设，并不提供因果识别或最优预算分配保证。接触、负载与相机时延的建模误差进一步限制真实迁移。3DGS 对应场景中的迁移与未见场景泛化需分别评价。</p>
<p>当前研究限定于单一空中平台、固定任务子集和有限学习轮次。共享接口为诊断方法、练习策略与训练后端的扩展提供基础，但其他本体与开放场景仍需重新验证观测、动作和物理协议。SparkMentor 仅修订预定范围内的练习计划，不涉及导师网络训练、工具任意改写或成功标准修改。</p>
<p>开发集的重复使用及候选选择可能引入偏差。经验接纳规则不保证封存任务上的单调改善，有限轮次结果也不足以证明长期持续收益。完整成本记录、固定评价协议与冻结策略的外部测试共同限定方法结论；附录中的条件性接纳分析不保证有效候选存在、长期收敛或真实迁移。</p>
</section>

<section id="conclusion" data-title="结论" data-number="6">
<div class="eyebrow">CONCLUSION</div><h2>6. 结论</h2>
<p>本文提出 AirSpark，一套面向空中操作策略自进化的模拟学院。平台以共享接口连接视觉—物理交互、监督生成与训练评价，SparkMentor 结合执行反馈、学习效果与跨轮干预记忆组织有界策略改进。评测设计通过设施可靠性测量、同预算闭环比较及冻结策略的原生与实机评测，分别检验平台效用、学习收益和迁移能力。当前工作给出系统方法与评测协议，定量效果及适用范围有待实验验证。</p>
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
<p>先导先测一轮的实际采集、训练、评价与代理开销。主矩阵采用至少两个任务，比较 B0、固定流程 B1 和完整闭环；有限轮次、独立学习链与每组回合数由先导成本和精度设计冻结。训练次数按“任务 × seed × 实际候选训练”汇总，不能再使用旧版固定 B1–B3 的 9／27 次估算。来源对照至少在一个主任务比较原生与学院的固定 B1 补采；2×2 为可选扩展，第二模型不是必做。每次干预只选一个计划，最多训练一个候选；被拒训练、规则／Agent 调用和中断重试均计入账本。</p>
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
<details class="editorial-note" id="process-allocation-details"><summary>参考实现：过程条件计数、成本与预算分配</summary><p><b>诊断与分配。</b>每轮在 C 的固定诊断分布中执行 N 条轨迹。每条轨迹对条件 z 仅记录首次进入；n<sub>z</sub> 为进入轨迹数，m<sub>z</sub> 为对应转换窗口内未完成预定目标的轨迹数。事件谓词、转换窗口与终止规则在先导后冻结，驻留帧数和定向采集的命中分布不参与频率估计。基础参考规则使用原始计数：</p>
<div class="equation" aria-label="过程经验采集优先级">ρ̂<sub>z</sub> = n<sub>z</sub>/N，f̂<sub>z</sub> = m<sub>z</sub>/n<sub>z</sub><br>q(z) = ρ̂<sub>z</sub> · f̂<sub>z</sub> / κ̂<sub>z</sub> = m<sub>z</sub>/(N · κ̂<sub>z</sub>)</div>
<p>κ̂<sub>z</sub> 是获得一份合格专家经验的实测平均成本，包括前缀、未命中、专家失败、复位与质检；主口径为固定硬件与并行设置下采集工作进程的占用时间，其他资源分别报告。q 优先处理诊断分布中失败发生量较高、合格监督成本较低的条件。条件可以重叠，因此它是排序权重，不是互斥失败概率或学习收益预测。</p>
<p>达到最小诊断计数、通过可行性检查且已有有限正成本估计的条件进入 q 分配。预定探索份额按固定覆盖规则试采稀疏或成本未知条件；剩余预算按归一化 q 分配，所有权重为零时返回覆盖规则。零合格产出记为成本未定义，进入受限试采或暂缓，不以零成本排序。基础规则不使用额外平滑；探索比例、最小计数及试采上限见配置表。</p>
<p>此处是练习规划的一种参考实现，不等同于整套学院或反馈自进化的定义。</p></details>
<h3 id="figure-library" data-nav="论文框图与下载" data-number="A.5">A.5 论文框图与汇报素材</h3>
<p>正文以两张方法主图组织平台与算法：图 1 展示学院设施，图 2 展示 RSI 的反馈、决策与参数更新；图 3 描述实验流程。附录图 A1–A2 分别展开执行接口和专家延续，图 A3 说明闭环反馈原理。网页默认使用中文，下载提供中英文 SVG 与高清 PNG。</p>
<p class="reference-tools"><a href="figures/AirSpark-Figures-v0.23.zip" download>下载中英文框图与绘图源文件</a> · <a href="figures/FIGURE-NOTES.txt?v=0.23">图注与使用说明</a></p>
<div class="figure-gallery"><a href="#figure-1"><img src="figures/fig01-academy-overview-zh.svg?v=0.23" alt="图 1：学院平台架构" width="1440" height="870" loading="lazy"><b>图 1 · 学院平台架构</b><span>跳转正文与下载</span></a><a href="#figure-2"><img src="figures/fig02-rsi-method-zh.svg?v=0.23" alt="图 2：RSI 策略方法" width="1640" height="950" loading="lazy"><b>图 2 · RSI 策略方法</b><span>跳转正文与下载</span></a><a href="#figure-3"><img src="figures/fig04-evaluation-protocol-zh.svg?v=0.23" alt="图 3：实验流程" width="1440" height="1000" loading="lazy"><b>图 3 · 实验流程</b><span>跳转正文与下载</span></a><a href="#figure-a1"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.23" alt="图 A1：视觉与物理执行链路" width="1440" height="1020" loading="lazy"><b>图 A1 · 视觉与物理执行链路</b><span>跳转正文与下载</span></a><a href="#figure-a2"><img src="figures/fig03-process-experience-zh.svg?v=0.23" alt="图 A2：过程条件与专家延续" width="1440" height="1030" loading="lazy"><b>图 A2 · 过程条件与专家延续</b><span>跳转正文与下载</span></a></div><p class="caption"><a href="#figure-a3">图 A3：闭环反馈原理与下载</a>。组会主讲使用图 1、图 2 和图 3；执行链路及专家监督细节作为备份材料。所有图均为当前研究设计，不代表实现和实验已经完成。</p>
<details class="editorial-note" id="implementation-figures"><summary>平台执行与经验生成细节（附录图 A1–A2）</summary><figure class="paper-figure diagram-figure" id="figure-a1">
<div class="diagram-heading"><b>图 A1 · 视觉与物理执行链路</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.23" data-figure-title="图 A1 · 视觉与物理执行链路" aria-label="放大图 A1：视觉与物理执行链路"><img src="figures/fig02-visual-physical-contract-zh.svg?v=0.23" alt="图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。" width="1440" height="1020" loading="lazy"></button>
<figcaption>图 A1. 视觉与物理执行细节。3DGS 提供静态场景外观，显式物理资产承担碰撞、接触与载荷；MuJoCo 状态驱动 UE 动态资产。适配器统一坐标、时间和动作语义，并区分学生输入、特权诊断与专家监督。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig02-visual-physical-contract-zh.svg?v=0.23" data-figure-title="图 A1 · 视觉与物理执行链路">放大查看</button><a href="figures/fig02-visual-physical-contract-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig02-visual-physical-contract-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig02-visual-physical-contract.svg?v=0.23" download>英文 SVG</a><a href="figures/fig02-visual-physical-contract.png?v=0.23" download>英文 PNG</a></div>
</figure><figure class="paper-figure diagram-figure" id="figure-a2">
<div class="diagram-heading"><b>图 A2 · 过程条件与专家延续</b><span>研究设计示意</span></div>
<button class="diagram-open" type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.23" data-figure-title="图 A2 · 过程条件与专家延续" aria-label="放大图 A2：过程条件与专家延续"><img src="figures/fig03-process-experience-zh.svg?v=0.23" alt="图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。" width="1440" height="1030" loading="lazy"></button>
<figcaption>图 A2. RSI 经验生成步骤的展开。从合法初态实际执行前缀，在目标过程条件上采集专家延续；每条分支是独立的物理执行。前缀提供允许的历史上下文，动作监督仅来自通过质检的专家区间。轨迹为方法示意，非实测结果。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig03-process-experience-zh.svg?v=0.23" data-figure-title="图 A2 · 过程条件与专家延续">放大查看</button><a href="figures/fig03-process-experience-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig03-process-experience-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig03-process-experience.svg?v=0.23" download>英文 SVG</a><a href="figures/fig03-process-experience.png?v=0.23" download>英文 PNG</a></div>
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
<button class="diagram-open" type="button" data-figure-src="figures/fig05-learning-feedback-zh.svg?v=0.23" data-figure-title="图 A3 · 学习过程的闭环反馈表述" aria-label="放大图 A3：学习过程的闭环反馈表述"><img src="figures/fig05-learning-feedback-zh.svg?v=0.23" alt="固定能力目标引导 SparkMentor 选择干预，学院采集与训练改变学生，开发测量和验收形成学习反馈并进入记忆；封存测试不回流。此图说明信息关系，不表示已有收敛保证。" width="1440" height="810" loading="lazy"></button>
<figcaption>图 A3. 图 2 的反馈原理解释。学习状态 x 与能力测量 ĉ 分开，学习决策 μ 与机器人低层控制 K 分开。U 表示实际采集和训练，H 表示评价测量，未引入学习收益预测器。最终测试不进入反馈闭环。</figcaption>
<div class="figure-tools"><button type="button" data-figure-src="figures/fig05-learning-feedback-zh.svg?v=0.23" data-figure-title="图 A3 · 学习过程的闭环反馈表述">放大查看</button><a href="figures/fig05-learning-feedback-zh.svg?v=0.23" download>中文 SVG</a><a href="figures/fig05-learning-feedback-zh.png?v=0.23" download>中文 PNG</a><a href="figures/fig05-learning-feedback.svg?v=0.23" download>英文 SVG</a><a href="figures/fig05-learning-feedback.png?v=0.23" download>英文 PNG</a></div>
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
<tr><td><a href="versions/v0.18/index.html">v0.18</a></td><td>保持模拟学院与反馈自进化主线，补充学习反馈及跨轮方案调整。</td><td>保留两项贡献和 B0–B3；扩充干预记忆、有限调整、图 2 与代表任务分析；新增四篇课程与学习反馈文献。</td></tr>
<tr><td><a href="versions/v0.19/index.html">v0.19</a></td><td>明确反馈原理与可执行干预，保持平台和策略自进化定位。</td><td>补充能力画像、优先级、空中案例、诊断分流及原理附录；主贡献与实验矩阵不变。</td></tr>
<tr><td><a href="versions/v0.22/index.html">v0.22</a></td><td>六步主闭环与跨轮学习反馈；叙事聚焦经验的学习效用。</td><td>恢复诊断与规划的职责边界；统一名称和因果时序，实验矩阵保持。<a href="#revision-v022">本轮修改</a></td></tr>
<tr><td><a href="versions/v0.21/index.html">v0.21</a></td><td>2026.10.23：模拟学院与有界反馈自进化。</td><td>规则式／当前／历史修订进入至少两个任务；来源对照、实机定义与统计冻结补全。<a href="#revision-v021">本轮修改</a></td></tr><tr><td><a href="versions/v0.20/index.html">v0.20</a></td><td>论文化精修与可复现协议补全。</td><td>压缩摘要，统一目标与成本符号，补算法、配置和状态处理，统一实验组名；贡献和方法范围不变。</td></tr>
<tr><td><a href="versions/v0.23/index.html">v0.23</a></td><td>空中操作模拟学院与反馈自进化；相关工作归为三部分。</td><td>主比较 B0/B1/完整闭环；代表任务归因；一次干预一个训练候选。<a href="#revision-v023">本轮修改</a></td></tr>
<tr><td><a href="versions/v0.24/index.html">v0.24</a></td><td>空中操作能力挑战 → 反馈自进化 → 模拟学院 → 能力验证。</td><td>更新中文摘要、引言和贡献；RSI 方法骨架与 E1–E3 沿用 v0.23，英文暂缓同步。<a href="#revision-v024">本轮修改</a></td></tr>
<tr><td><a href="versions/v0.25/index.html">v0.25</a></td><td>空中交互能力要求 → 执行与学习反馈 → 可重复的学院练习。</td><td>精修中文摘要、引言；贡献、方法、实验和英文不变。<a href="#revision-v025">逐句对照</a></td></tr>
<tr><td><a href="versions/v0.26/index.html">v0.26</a></td><td>正式论文语体：问题、系统方法与验证。</td><td>精简中文摘要与引言，统一相关工作、方法概述、实验与讨论措辞；贡献与技术协议不变。<a href="#revision-v026">本轮修改</a></td></tr>
<tr><td>v0.27 · 当前</td><td>空中能力挑战 → 自进化与仿真学习机会 → 模拟学院。</td><td>凝练摘要，补齐引言承接，预算回归实验约束；技术方案不变。<a href="#revision-v027">修改与一致性核查</a></td></tr>
</tbody></table></div>
<p>本轮 v0.27 见<a href="#revision-v027">修改与核查</a>；此前 v0.26 见<a href="#revision-v026">修改记录</a>；此前 v0.25 见<a href="#revision-v025">逐句对照</a>；此前 v0.24 见<a href="#revision-v024">修改对照</a>；此前 v0.23 见<a href="#revision-v023">修改对照</a>；此前 v0.22 见<a href="#revision-v022">修改对照</a>；此前 v0.21 见<a href="#revision-v021">修改对照</a>；此前 v0.20 的修改见<a href="#revision-v020">修改对照</a>。v0.14 起统一论文中的 SparkMentor 命名，工程中的旧 sparkclaw 路径暂作兼容名称。v0.15 完善平台、编排与方法的层次；v0.15.1 补充 2026-10-19 的 RPG 核查，保留其他文献原核查日期。v0.18 的变更见<a href="#revision-v018">前轮修改对照</a>；v0.19 见<a href="#revision-v019">前轮修改对照</a>。本轮未迁移工程接口，也未新增实验结果。</p>
</details>

<details class="editorial-note" id="revision-v018"><summary>v0.18 修改对照：保留主线，补充闭环机制</summary>
<p>v0.18 依据讨论补充自进化机制，不将论文改写为教学算法搜索。下表记录相对 <a href="versions/v0.17/index.html">v0.17</a> 的变化，便于核查。</p>
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
<p>相对 <a href="versions/v0.18/index.html">v0.18</a>，本轮保持论文标题、两项贡献、三张主图、B0–B3、AM-Bench 回测与真实验证。以下均为研究设计补充，未新增实验结果。</p>
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
<p>本轮依据核查意见精修 <a href="versions/v0.19/index.html">v0.19</a>。标题与两项贡献保持，未增加任务、模型或进化手段；参数和效果继续按研究设计状态呈现。</p>
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
<tr><td>学生策略更新 / Student Policy Update</td><td>以合格数据和已接纳回放训练候选学生。</td><td>这是更新学生参数的环节，每次干预最多训练一个候选。</td></tr>
<tr><td>学习评估与接纳 / Learning Evaluation and Acceptance</td><td>在 V 比较完整任务、保留和不确定性；输出 F 与接纳决定。</td><td>V 只返回允许摘要，训练样本不回流；拒绝保留父代。</td></tr>
<tr><td>跨轮干预记忆 / Intervention Memory</td><td>保存每次干预方案、数据／模型版本、结果、成本和接纳／拒绝。</td><td>Fᵣ 更新 Mᵣ₊₁，供后续轮次读取；不是新教师网络。</td></tr>
</tbody></table></div><p>第 r 轮先读取 Mᵣ，再执行干预并测量 Fᵣ；评估后写 Mᵣ₊₁。图中深色箭头表示六步主循环，绿色标识执行反馈，紫色表示跨轮学习反馈。计划修订属于原有闭环，不是新增实验任务或额外算法层。</p></details>
<details class="editorial-note" id="revision-v022"><summary>v0.22 · 图 2 与论文叙事精修</summary>
<p>保留两项贡献、主实验四条更新路线、至少两个任务及现有资源协议。本轮没有新增任务、模型、候选操作或完成结果。</p>
<ul><li>图 2 恢复六步环形流程，独立呈现诊断与规划；跨轮记忆置于侧边，消除主环箭头交叉。</li><li>移出实验组 ID、训练计费与随机状态细节；保留正文算法，主图集中解释数据与反馈的流向。</li><li>统一中英模块名，明确 A 是可执行计划、η 是已接纳配置；μ<sub>g</sub> 表示不同对照采用的固定决策器。</li><li>写清本轮执行证据与既往记忆进入规划，训练后的 F 供后续轮次使用。</li><li>摘要、引言与贡献聚焦“经验生成不等于学生收益”；原有技术栈与实验数量移回方法和实验。</li><li>明确 B3 仍按新反馈分配条件，当前组不是完全无记忆；区分冻结实机验证与真实反馈再训练。</li></ul></details>
<details class="editorial-note" id="revision-v023"><summary>v0.23 · 本轮具体修改</summary><p>恢复 v0.10 的研究目标，承接 v0.15–v0.18 的学院定位，保留 v0.22 的六步闭环与验证边界。两项贡献仍为模拟学院与反馈驱动自进化，没有新增进化操作、任务类型或完成结果。</p><ul><li>摘要、引言和贡献围绕空中视觉交互挑战、可重复学院、反馈学习和外部检验重写；机载视角随运动变化前置。</li><li>相关工作收为“空中操作与视觉动作策略”“具身仿真平台与自动经验生成”“反馈驱动的机器人策略自改进”三部分；保留近邻边界和已有引用。</li><li>主表恢复 B0、固定覆盖流程 B1、完整 AirSpark；规则、固定过程方案和当前反馈放到代表任务。具体轮次、seed 与预算留待先导。</li><li>E1 平台、E2 闭环、E3 外部检验对齐；来源对照先做一个任务的原生／学院 B1 配对，2×2 降为可选扩展。</li><li>每次决策只选一个方案，采集、训练一次，至多一个候选与父代比较；拒绝保留父模型与配置，记忆、尝试和成本继续推进。</li><li>图 2 中英文六步结构与资源文件原样保留；图 3 更新实验层级。过程计数与成本细节移入附录，未删除参考实现。</li><li>中英文稿、算法、配置模板、图注与版本记录同步；v0.22 完整归档，无新增实验结论。</li></ul></details>
<details class="editorial-note" id="revision-v024"><summary>v0.24 · 研究主线与方法设计的延续</summary>
<p>本轮只推进中文叙事，采用 v0.10–v0.12 的领域问题入口，延续学院与反馈自进化两项贡献。具体方法继续沿用 v0.23，后续依据任务和实验逐项细化；叙事调整不表示既有框架或机制被废弃。</p>
<ul><li>摘要采用“空中操作价值与挑战 → 反馈学习 → AirSpark 学院 → SparkMentor → 外部验证”，压缩组件和六步模块的逐项列举。</li><li>引言将经验获取成本、策略能力缺口及多轮学习连接起来，分别说明反馈自改进与真实—仿真—真实的作用。</li><li>保留六步闭环、执行与学习两种反馈、跨轮记忆、能力画像和失败诊断分流。</li><li>保留过程条件分配、物理前缀与专家延续、有限监督起点／经验构成／回放选项、学生参数更新及接纳拒绝状态协议。</li><li>保持图 1–3、配置模板、E1/E2/E3、B0/B1/完整闭环主比较和代表任务归因。未增加实验范围或完成结果。</li><li>英文 LaTeX 与已有 PDF 保留 v0.23；中文叙事确定后再逐段同步。框图下载仍使用内容未变的 v0.23 素材包。</li></ul>
<p>接下来分两条线完善：正文逐句核查背景、缺口与贡献的表述；方法逐项落实信息输入、可执行干预、记忆使用和评价规则。新增机制不自动改写论文主问题。</p></details>
<details class="editorial-note" id="revision-v025"><summary>v0.25 · 摘要与引言逐句修改记录</summary>
<p>本轮补清空中操作挑战、反馈学习与模拟学院之间的联系。两项贡献逐字保留；六步闭环、跨轮记忆、方法框图、配置与实验设计未变。英文 LaTeX 与 PDF 仍保留 v0.23，待中文逐句确认后同步。</p>
<p>动机不将所有失败归因于示范覆盖不足，也不预设 Agent 或记忆必然优于规则。完整闭环的收益与具体组件的额外作用，仍分别由既有主实验和归因分析检验。</p>
<div class="table-wrap"><table><thead><tr><th>位置</th><th>v0.24 原句</th><th>v0.25 改句</th></tr></thead><tbody><tr><td>摘要改句 1</td><td>然而，变化的机载视角以及飞行基座、机械臂与环境交互的耦合，使策略需要协调视觉判断、运动状态和动作时机。</td><td>然而，飞行和机械臂运动会改变机载视角，接触又会反过来影响机体运动，使策略需要协调视觉判断、运动状态和动作时机。</td></tr>
<tr><td>摘要改句 2</td><td>获取覆盖这些条件的训练经验需要反复执行、复位与监督，预先收集的示范也难以保证覆盖策略更新后暴露的能力缺口。</td><td>实际执行中的位置、速度或接触变化，可能暴露出既有训练尚未充分解决的动作协调与阶段衔接问题。本文研究如何根据策略的执行表现和训练后的能力变化安排后续练习，支持空中操作策略的多轮改进。围绕这些需求反复开展真实试验、获取监督并检验更新，又受到执行、复位与监督成本的限制。</td></tr>
<tr><td>摘要改句 3</td><td>本文研究如何通过仿真中的反馈学习支持空中操作策略的多轮改进，并提出 AirSpark，一套面向空中操作策略自进化的模拟学院。</td><td>为此，我们提出 AirSpark，一套面向空中操作策略自进化的模拟学院。</td></tr>
<tr><td>引言改句 1</td><td>视觉动作策略为自主完成这些任务提供了学习途径，但机载视角随飞行和机械臂运动变化，视觉判断需要与运动状态和动作时机对应，接触反作用还会影响后续观测与执行。</td><td>视觉动作策略为自主完成这些任务提供了学习途径。飞行和机械臂运动会改变相机看到的目标位置与视角，接触反作用又会影响机体运动，因此策略需要将视觉判断与接近、对齐和接触的动作时机相协调。</td></tr>
<tr><td>引言改句 2</td><td>策略需要从经验中学习接近、对齐、接触及后续操作之间的衔接。获取覆盖运动偏差与阶段变化的视觉动作经验，需要反复执行、复位和专家监督，而真实飞行中的场景布置、环境维护与安全成本限制了这一过程。自动示范生成和自主采集已扩展经验来源，但数据规模的增加并不保证覆盖当前策略实际访问的条件；随着策略更新，其暴露的能力缺口也可能改变。 因此，空中操作的学习问题既涉及可用经验的获取，也涉及如何根据策略反馈安排后续练习。</td><td>策略需要从经验中学习接近、对齐、接触及后续操作之间的衔接。实际执行中的位置、速度或接触变化，可能暴露出既有训练尚未充分解决的协调问题：相似的目标外观，并不意味着可以采用相同的接近速度或接触时机。学生还会通过自身动作改变后续遇到的状态，这也是交互式模仿学习关注的问题。 这些困难既可能来自示范覆盖不足，也可能来自已有经验尚未被充分学会。因此，本文关注如何依据当前执行表现安排练习，并通过训练后的能力变化判断这些安排是否有效。</td></tr>
<tr><td>引言改句 3</td><td>数字孪生与 Real-to-Sim-to-Real 学习则提供另一项基础：</td><td>围绕当前学习需求反复开展真实交互，需要场景复位、专家监督和更新后评价，真实采集的成本限制了这一过程。 自动示范生成与自主采集扩展了经验来源。 数字孪生与 Real-to-Sim-to-Real 学习则提供另一项基础：</td></tr>
<tr><td>引言改句 4</td><td>前者指导策略如何利用经历继续改进，后者建立练习环境与部署场景的联系。</td><td>反馈学习为后续练习提供依据，场景重建与仿真则为反复开展这些练习提供可控环境，并建立与真实部署的联系。</td></tr>
<tr><td>引言改句 5</td><td>这些设施共同支持可重复、可检查的学习实验，并让不同练习方法使用一致的执行与评价接口。</td><td>学院将场景、机载观测、机器人动作、物理交互与评价连接到同一执行过程中，使学习干预能够被实施、重复和追溯，不同练习方法也能够在共享接口上接受比较。</td></tr>
<tr><td>引言改句 6</td><td>在学院之上，SparkMentor 作为结合跨轮记忆的 Agent Harness，依据执行证据诊断候选能力缺口，组织针对性练习与学生更新，再根据实际学习结果安排后续改进。</td><td>在学院之上，学生策略产生执行行为，评价与诊断工具形成证据，SparkMentor 作为结合跨轮记忆的 Agent Harness 组织后续学习。执行反馈用于判断哪些任务条件或阶段值得练习，学习反馈用于判断上一轮安排是否带来能力改善；SparkMentor 据此安排练习与学生参数更新，并结合历史记录修订后续计划。</td></tr>
</tbody></table></div>
<p>摘要后半部分的学院设施、SparkMentor 与实验句未变；引言的核心研究问题、实验概述与两项贡献未变。引用使用原有文献库，调整了论据的落点，未新增文献或实验结果。</p></details>
<details class="editorial-note" id="revision-v026"><summary>v0.26 · 中文论文语体统一</summary>
<p>本轮调整写作形式，不改变研究范围。两项贡献逐字保留；六步算法、公式、表格、框图、实验组与配置协议保持原样。英文 LaTeX 与 PDF 暂留 v0.23，中文修改章节待后续同步。</p>
<ul><li>摘要由逐层解释压缩为问题、学院设施、反馈方法与评测设计，保留尚无定量结果的研究状态。</li><li>引言按领域挑战、学习瓶颈、已有研究、学院系统、反馈机制与评价组织，删除口语例解与重复论证。</li><li>相关工作维持三节，使用技术对象、机制差异和评价条件表述关系；写作提醒改为客观研究边界。</li><li>方法仅精修总览、诊断分流和执行状态说明；实验仅将设问、提醒式措辞改为评价目的与统计解释。</li><li>讨论合并重复局限；结论概括系统与协议，不补写未完成的结果。</li></ul></details>
<details class="editorial-note" id="revision-v027"><summary>v0.27 · 摘要精炼与正文一致性核查</summary>
<p>本轮以已讨论的“空中能力挑战 → 自进化机会 → 学院”摘要为基础压缩表述，不沿用 v0.26 中省略研究机会的直接跳转。预算保留为受控比较与运行终止条件，不作为论文的核心问题定位。</p>
<div class="table-wrap"><table><thead><tr><th>核查项</th><th>正文处理</th></tr></thead><tbody>
<tr><td>挑战与机会</td><td>摘要保留执行偏差、经验需求与真实试验成本；引言先说明策略反馈改进，再说明仿真与真实场景对应，连接学院方案。</td></tr>
<tr><td>平台定位</td><td>学院提供可重复视觉—物理交互及共享学习设施；UE、MuJoCo、3DGS 与机器人配准在引言和方法中展开。</td></tr>
<tr><td>自进化主体</td><td>学生参数更新保留能力；SparkMentor 使用执行证据、学习反馈与跨轮记忆编排后续练习。</td></tr>
<tr><td>机制层级</td><td>过程条件分配、监督起点、专家延续与回放是参考实现；六步闭环与算法保持原样。</td></tr>
<tr><td>预算定位</td><td>方法先定义能力改进目标，再说明资源上限；公式、成本账本与停止条件不变。</td></tr>
<tr><td>验证层级</td><td>E1 设施、E2 B0/B1/完整闭环及代表任务归因、E3 原生与实机验证原样保留。Agent 与记忆的额外收益仍需对应对照。</td></tr>
<tr><td>证据边界</td><td>执行偏差是候选缺口来源之一；控制故障、观测不足与仿真误差仍分别处理。实验结果尚待完成。</td></tr>
</tbody></table></div>
<p>两项贡献、相关工作、实验、讨论、结论、算法公式与图均未改。英文 LaTeX 与 PDF 保持 v0.23，正文措辞待后续同步。v0.26 已归档。</p></details>
</section>
`);
