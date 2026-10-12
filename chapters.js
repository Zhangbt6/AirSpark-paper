document.querySelector('#content').insertAdjacentHTML('beforeend',`
<section id="introduction" data-title="引言">
<div class="eyebrow">AIRSPARK / INTRODUCTION</div>
<h2>从自主空中操作到可迁移的策略自进化</h2>
<p class="lead">空中操作的学习瓶颈不仅是示范数量，还包括能否持续获得与当前策略偏差相匹配、物理上可执行、观测上可学习的交互经历。</p>
<h3>空中操作拓展自主机器人的工作空间</h3>
<p>飞行基座与机械臂的协同使机器人能够接近、接触和搬运不同高度的目标，也带来运动耦合、驱动约束与接触稳定性问题。空中操作综述将这些问题与感知、规划及自主性共同讨论。<cite data-ref="aerial-survey"></cite> 近期 AM-Bench 和 AeroManip-VLA 将策略学习、自动示范和系统评测进一步引入这一领域。<cite data-ref="ambench aeromanip"></cite></p>
<h3>从“更多数据”到“当前策略缺少的经历”</h3>
<p>接触学习对执行条件敏感，交互力和抓持状态也未必能从单帧图像中辨认。<cite data-ref="contact-survey"></cite> 一条理想成功轨迹可能未覆盖学生接近偏差后的续行条件。交互式数据聚合与扰动专家示范已经为这种分布偏移提供方法基础。<cite data-ref="dagger dart"></cite> 对空中操作，值得进一步检验的是：哪些飞行—接触—负载转换条件构成真实、可通过训练改善的缺口？</p>
<h3>自主改进带来了新的组织方式</h3>
<p>ENPIRE 将复位、执行、验证与策略改进组织为可调用的研究 harness；EmbodiRSI 通过部署场景的仿真和反馈采集进行策略适应；RSI-Anything 探索预测筛选、外部反馈与更新检查。<cite data-ref="enpire embodirsi rsi-anything"></cite> 这些进展支持将单次训练扩展为多轮学习过程，但其结果不能直接外推为空中操作能力。</p>
<h3>AirSpark：让闭环在空中交互中落地</h3>
<p>AirSpark 将已有高保真渲染、空中物理和自动采集能力组织为模拟学院。SparkClaw 在限定任务与预算内读执行证据、选择练习、训练学生并记录结果。研究聚焦策略能力能否改善，以及改善能否返回原生基准与真实硬件；主动数据是更新策略的主要手段。</p>
<div class="thesis">核心研究问题<span>模拟学院能否将空中操作策略的执行缺口转化为有效练习，并在固定预算下带来原生基准与真实任务中的能力改进？</span></div>
<p class="section-note">论文检验有界多轮的策略自进化。当前方案不预设每轮提升，也不以通用递归自改进或研究代理自修改为结论。</p>
</section>
<section id="contributions" data-title="研究贡献">
<div class="eyebrow">AIRSPARK / CONTRIBUTIONS</div>
<h2>空中操作学院与可检验的策略改进闭环</h2>
<div class="table-wrap"><table><thead><tr><th>主体贡献</th><th>核心内容</th><th>需要的证据</th></tr></thead><tbody>
<tr><td>空中操作模拟学院</td><td>集成高保真观测、动力学与接触、任务复位、自动专家、同步标注和训练评测接口，支持可重复的视觉—物理学习实验。</td><td>任务相关时序与物理验收、有效数据成本、可重放产物和模型接口兼容。</td></tr>
<tr><td>执行证据驱动的策略自进化框架</td><td>SparkClaw 将阶段证据转化为受约束的练习，组织数据再生成、策略训练、验证和多轮经验留存。</td><td>超过等预算常规补采与简单失败补采；完整任务、阶段表现和能力保持共同验证。</td></tr>
</tbody></table></div>
<h3>同一论点，两条独立验证路线</h3><p><b>仿真：</b>承接 AM-Bench 的原生策略和任务，在 AirSpark 中改进，再返回原环境评价。<b>真实：</b>重建真实场景，在对应模拟学院中训练，再冻结策略返回同任务实机测试。两条路线共同检验学院内学习的外部效用。</p>
<p>有辨识度的机制候选是“阶段执行证据 → 动态条件选择 → 物理一致的示范再生成”。其算法贡献取决于相对强基线的实际收益；若未超出简单失败补采，应如实定位为平台与参考闭环。引擎组合、普通扰动和自动调用工具不单列为新算法。</p>
</section>
<section id="related" data-title="相关工作">
<div class="eyebrow">AIRSPARK / RELATED</div>
<h2>承接已有基准，明确学院需要补充的证据</h2>
<div class="table-wrap"><table><thead><tr><th>研究脉络</th><th>已有基础</th><th>AirSpark 的研究位置</th></tr></thead><tbody>
<tr><td>空中操作与学习</td><td>空中操作综述讨论驱动、控制与物理交互；AM-Bench 提供系统级策略评测；AeroManip-VLA 研究自动示范与阶段分析。<cite data-ref="aerial-survey ambench aeromanip"></cite></td><td>复用任务和学生模型，检验针对当前学生的数据能否改进空中完整任务。</td></tr>
<tr><td>空中 VLA 与迁移</td><td>AIR-VLA 与 AirVLA 是不同项目；后者研究空中操作的物理引导迁移。<cite data-ref="air-vla airvla"></cite></td><td>按形态、动作、控制、公开资源与实机协议比较，不笼统声称已有平台没有物理。</td></tr>
<tr><td>反馈与主动数据</td><td>DAgger、DART 和 FSC 分别涉及策略分布、偏差下示范和采集收益；AHA 研究失败检测与解释。<cite data-ref="dagger dart fsc aha"></cite></td><td>检验飞行—接触转换的过程证据是否改变有效练习选择，避免把失败分类或扰动本身当作原创。</td></tr>
<tr><td>机器人自主改进</td><td>ENPIRE 组织物理研究工具；EmbodiRSI 将反馈驱动采集与 real-to-sim-to-real 结合。<cite data-ref="enpire embodirsi"></cite></td><td>已有完整闭环先例；增量应由空中耦合交互、有效数据和外部任务成绩体现。</td></tr>
<tr><td>预测与更新验证</td><td>RSI-Anything 用预测支持候选筛选，并检查更新后的组件兼容性。<cite data-ref="rsi-anything"></cite></td><td>借鉴筛选、取证、验证的分工；本方案无需增加一个待训练世界模型。</td></tr>
<tr><td>视觉—物理仿真</td><td>URLab 提供相关引擎与机器人基础；3DGS 提供外观重建。<cite data-ref="urlab 3dgs"></cite></td><td>完善空中任务与数据闭环，验收时序、接触和资产配准；渲染逼真不能代替物理验证。</td></tr>
</tbody></table></div>
<p>比较单位是可复现的任务与协议。不同论文的硬件、重试次数和数据预算不一致时不直接排名；新近预印本、技术报告与正式发表论文在文献表中分别标注。</p>
</section>
<section id="scope" data-title="问题定义"><div class="eyebrow">AIRSPARK / SCOPE</div><h2>有限数据预算下的空中操作策略改进</h2><p>策略 π 根据图像、指令及明确声明的本体状态生成空中操作动作。任务从目标接近推进到抓持与抬升，扩展到搬运和放置。平台依据开发轨迹的阶段反馈 e 和历史实验记录 M，选择下一批任务条件 a。</p><div class="equation">a<sub>t</sub> = Select(e<sub>t</sub>, M<sub>t</sub>, B<sub>t</sub>)<br>D<sub>t</sub> = QC(Collect(a<sub>t</sub>))<br>π′<sub>t+1</sub> = Train(π<sub>t</sub>, D<sub>t</sub> ∪ D<sub>replay</sub>)<br>π<sub>t+1</sub>, M<sub>t+1</sub> = ValidateAndRecord(π′<sub>t+1</sub>, a<sub>t</sub>)</div><p>目标是在有限监督和计算预算下改善未见条件中的完整任务表现，并保持已有能力。主实验固定策略架构、训练配方、低层控制与代理工具；变化集中于数据选择。目标真值、接触真值和专家信息只进入采集、诊断与评价，不泄漏给学生策略。历史图像或本体输入必须实机可得，所有组一致。专家可行只是可学习性的线索，不能证明学生一定能学会。</p><p>候选策略通过预先冻结的开发验证和能力保持条件后接纳。保存每轮 checkpoint；闭环完成并冻结研究配置后，统一执行封存测试以绘制多轮曲线，测试结果不能进入代理记忆。本方案中的“策略自进化”指学院依据执行反馈组织练习与训练，推动策略的有界多轮改进；其效果需要对照验证，不要求每轮单调提升，也不指学院、教师或基础研究代理自行修改算法。</p></section>
<section id="platform" data-title="学院平台"><div class="eyebrow">AIRSPARK ACADEMY</div><h2>面向空中操作的视觉—物理数据基础设施</h2><figure class="paper-figure"><div class="architecture"><article><div><small>RESEARCH</small><h3>SparkClaw 与实验记忆</h3></div><p>能力证据 → 干预假设 → 预算计划 → 学习验证 → 经验更新。统一 harness 执行和记录全过程。</p></article><article><div><small>DATA ENGINE</small><h3>任务与主动数据生产</h3></div><p>参数化场景 · 任务生成 · 自动示范 · 语义与物理标注 · 质量检查 · 数据版本 · 训练与评测适配。</p></article><article><div><small>SIMULATION</small><h3>高保真视觉、飞行与接触</h3></div><p>UE 渲染与真实场景资产；MuJoCo 动力学与接触；URLab 等基础集成；相机、机器人和控制时序对齐。<cite data-ref="urlab"></cite></p></article></div><figcaption>图 1 · 学院提供可控学习经历，研究代理组织空中操作采集与训练。架构示意，不表示所有闭环能力已完成验收。</figcaption></figure><div class="table-wrap"><table><thead><tr><th>平台能力</th><th>已有基础与设计重点</th><th>验收方式</th></tr></thead><tbody><tr><td>空中导航—操作</td><td>复用旋翼平台、已有机械臂与夹爪控制、MuJoCo 电机与关节状态链路。</td><td>接近、接触、夹持、抬升与负载运动分阶段验收；代码存在不等于稳定抓取。</td></tr><tr><td>视觉—物理一致性</td><td>RGB / Depth / Seg、相机位姿、物理真值、动作时间和坐标约定。</td><td>曝光或采样时刻、外参与 FOV、动作延迟、深度和几何一致性。</td></tr><tr><td>自动数据引擎</td><td>复用任务规划、批量采集、coverage / gaps / failure_repair 和失败挖掘工具。</td><td>有效轨迹、标注抽检、重复样本率、运行成本；训练收益另测。</td></tr><tr><td>3DGS 真实场景</td><td>将真实外观重建与显式碰撞代理、语义实体、可动物体及材质参数配准。</td><td>尺度与坐标误差、可见性、接触、动态物体遮挡；不把高斯外观当物理网格。</td></tr><tr><td>模型与机器人适配</td><td>统一生命周期、数据合同与评测入口；导航与操作保留独立动作空间。</td><td>当前以空中平台验证；地面机械臂和四足属于扩展能力，不预先宣称已支持。</td></tr></tbody></table></div><h3>物理真实性服务于视觉学习</h3><p>对空中操作，悬停误差改变目标在图像中的位置，接触改变机体和物体状态，负载影响后续运动。数据应记录这些关联及其执行后果。平台价值由可见、可学、可复验的交互差异证明。MuJoCo 名称本身不能保证近壁效应、下洗或特定材料已建模，优先校核当前任务相关的接触、负载与执行时序。</p></section>
<section id="models" data-title="基模与基准复用"><div class="eyebrow">AIRSPARK / MODELS</div><h2>承接 AM-Bench，固定接口后再扩展模型</h2><p class="lead">先复现一个原生策略，再迁移数据链路。<cite data-ref="ambench"></cite>继承的是已有任务、模型实现和评测合同；AirSpark 的增量是针对策略缺口生成数据，并验证这些数据在外部环境中的效用。</p><p>截至本轮核查，<a href="https://github.com/ambench/ambench">AM-Bench 仓库</a>公开 ACT、Diffusion Policy 与 OpenPI 路径。<a href="https://github.com/ambench/ambench.github.io/blob/main/docs/evaluation/reproduce.md">复现文档</a>明确数据和 checkpoint 不保存在代码仓库：发布资产需逐项确认，否则按公开专家与训练流程重新生成。不能把论文中的基线成绩作为已下载权重的性能。<cite data-ref="ambench-docs"></cite></p><div class="table-wrap"><table><thead><tr><th>模型</th><th>本方案角色</th><th>能力与成本边界</th></tr></thead><tbody><tr><td>ACT · 首选工程基线<cite data-ref="act"></cite></td><td>先完成固定数据训练、重载和原生 rollout，验证跨平台数据转换；是否承担主矩阵由试点确定。</td><td>任务专用视觉动作策略，不直接视为语言理解模型。</td></tr><tr><td>Diffusion Policy · 第二架构候选<cite data-ref="dp"></cite></td><td>ACT 链路通过后做代表任务补充，检验数据收益是否依赖单一策略架构。</td><td>不默认重做全部实验矩阵；官方当前评测路径仅单环境。</td></tr><tr><td>π₀ / π₀.₅ · VLA 候选<cite data-ref="openpi"></cite></td><td>若主张视觉语言目标选择，选一个训练及部署可承受的 π 后端，复用匹配的 OpenPI 配方。</td><td>基础权重与空中微调权重分开登记；不能用零样本失败否定整个模型。</td></tr><tr><td>LightNav · 固定导航前端 / 扩展<cite data-ref="lightnav"></cite></td><td>用于目标搜索、接近或长程导航与操作的组合演示，操作策略负责接触阶段。</td><td>局部 SE(2) 导航输出不等价于末端操作动作；不直接比较先进程度，不加入首轮主矩阵。</td></tr></tbody></table></div><h3>模型、控制器与特权信息的边界</h3><p>优先采用末端相机、本体状态 → 末端轨迹与夹爪命令的公共接口。AM-Bench 当前文档以绝对动作作为原始数据，以观测时刻实测末端姿态为锚点构造相对 action chunk；AirSpark 需逐项匹配，不只匹配张量维度。</p><div class="table-wrap"><table><thead><tr><th>合同项</th><th>迁移验收</th></tr></thead><tbody><tr><td>观测</td><td>相机数量、外参、FOV、分辨率、采样时间、本体字段顺序与是否可在实机获得。</td></tr><tr><td>动作</td><td>坐标系、米 / 弧度、四元数顺序、绝对 / 相对语义、锚点、夹爪范围、归一化和动作频率。</td></tr><tr><td>控制</td><td>VLA / ACT 输出高层参考；固定 IK、机体—机械臂分配与稳定控制执行。控制器不读目标真值替策略选物体。</td></tr><tr><td>形态</td><td>AM-Bench 当前 BaseJoint 数据与 AirSpark 关节数并非天然相同；优先末端接口并验证可达性，不能补零后冒称等价。</td></tr><tr><td>复现记录</td><td>锁定源码、依赖与子模块、环境 ID、机器人、控制器、扰动、训练数据、seed 与权重哈希。</td></tr></tbody></table></div><p>复用核查起点：AM-Bench commit <code>60bf5b73041df4eab571f7d9f0a297aeecbf2e0d</code>。主仓库为 Apache-2.0，第三方代码和模型资产另查许可。本页只记录公开资源核查，尚未据此下载权重或运行基线。</p><p>官方接口依据：<a href="https://github.com/ambench/ambench.github.io/blob/main/docs/reference/dataset-format.md">数据格式</a>、<a href="https://github.com/ambench/ambench.github.io/blob/main/docs/policies/act.md">ACT</a>、<a href="https://github.com/ambench/ambench.github.io/blob/main/docs/policies/diffusion-policy.md">Diffusion Policy</a>、<a href="https://github.com/ambench/ambench.github.io/blob/main/docs/policies/openpi.md">OpenPI</a>。</p></section>
<section id="method" data-title="策略自进化闭环">
<div class="eyebrow">AIRSPARK / METHOD</div>
<h2>将执行缺口转化为下一轮有效练习</h2>
<p class="lead">SparkClaw 在固定工具、控制与预算内组织多轮策略更新。每轮都有执行证据、采集计划、训练产物和验证结果，学生模型的变化可以追溯到具体练习。</p>
<figure class="paper-figure"><div class="academy-loop"><div><small>01 · OBSERVE</small><b>读取执行证据</b><span>视觉、动作、阶段事件</span></div><i>→</i><div><small>02 · PRACTISE</small><b>生成匹配练习</b><span>条件筛选、专家重执行</span></div><i>→</i><div><small>03 · UPDATE</small><b>固定配方训练</b><span>新增数据与父代 replay</span></div><i>→</i><div><small>04 · VERIFY</small><b>验证与归档</b><span>开发收益、退化与成本</span></div></div><div class="loop-return">保留策略与实验记忆 → 下一轮评测和练习选择</div><figcaption>图 2 · 有界策略自进化。正式测试在闭环冻结后统一运行；反馈回路仅使用开发数据。</figcaption></figure>
<h3>1. 定位可检验的阶段缺口</h3>
<p>将 RGB、实际动作、机体与末端运动、接触和物体状态按时间对齐。先区分接口故障、控制能力不足、专家失败和学生能力缺口，再构造候选假设。视觉帮助判断目标、遮挡和对齐，执行事件帮助区分“接触过”与“稳定抓住”；单一残差或一次失败不能直接证明原因。<cite data-ref="contact-survey aha"></cite></p>
<div class="table-wrap"><table><thead><tr><th>候选缺口</th><th>需要的过程证据</th><th>拟生成的练习</th></tr></thead><tbody>
<tr><td>动态接近与对齐</td><td>图像目标运动、末端相对运动、闭爪时刻与偏差。</td><td>在合法接近条件下观察、减速、重新对齐和继续抓取。</td></tr>
<tr><td>接触建立与稳定抓持</td><td>接触持续性、相对滑移、夹爪动作与目标可见性。</td><td>保留困难条件，重新执行专家的调整、稳定或再次接近。</td></tr>
<tr><td>抬升与负载接入</td><td>离台事件、抓持变化、机体跟随误差与后续掉落。</td><td>在能力范围内生成不同负载与运动节奏的完整成功示范。</td></tr>
</tbody></table></div>
<h3>2. 选择条件，在物理中重新生成示范</h3>
<p>先做匹配条件探针：保持对象、相机和布局近似一致，改变合法动态条件，检查学生敏感性与专家可行性。选择器按“阶段 × 少量可控因素”组织条件桶，使用平滑条件失败率和实际采集成本排序，并保留固定覆盖探索预算。所有比较组共享合法性检查、专家和质检，失败尝试及探针均计费。</p>
<p>专家在选定条件下重新执行并产生同步视觉—动作监督。扰动专家已有 DART 等先例；本方案需检验当前策略偏差与转换时机是否带来额外收益。<cite data-ref="dart"></cite> 首轮从完整初态重跑，不要求任意接触状态恢复；若以后启用局部续行，须同时恢复速度、接触、执行器与观测历史。</p>
<h3>3. 保留能影响下一轮选择的实验记忆</h3>
<p>每条记录保存条件、证据引用、专家可行性、有效轨迹成本、训练数据版本与开发验证变化。配置固定证据有效期、重复尝试上限和重测规则；下一轮复用有效经验、重测过时判断并避免重复无效采集。收益必须来自实际验证，混合条件更新不能把总收益重复归因给每个条件。FSC 提供了估计数据收益的研究参照，复杂收益预测留作扩展。<cite data-ref="fsc"></cite></p>
<h3>4. 筛选、执行和验证分工</h3>
<div class="table-wrap"><table><thead><tr><th>角色</th><th>负责什么</th><th>产物</th></tr></thead><tbody>
<tr><td>SparkClaw</td><td>读开发证据，在预定义工具与参数范围内提出、排序练习计划。</td><td>带证据与成本的结构化计划，记录代理版本及提示。</td></tr>
<tr><td>学院执行工具</td><td>复位、执行专家、记录实际后果、质检、导出数据并训练。</td><td>可追溯轨迹、失败日志、数据与 checkpoint。</td></tr>
<tr><td>独立验证工具</td><td>按冻结指标检查候选策略的开发收益与能力保持。</td><td>接纳或拒绝及理由；代理不能修改评分标准。</td></tr>
</tbody></table></div>
<p>这一分工借鉴 ENPIRE 的工具化研究流程和 RSI-Anything 的更新检查思想。<cite data-ref="enpire rsi-anything"></cite> 执行成功预测不等于训练收益预测；不以代理的解释替代实际学习测试。主实验固定观测预处理、动作语义、归一化方案、低层控制和评分器，修改这些组件需重建对照。</p>
<details><summary>一个贯穿示例：抬升后掉落</summary><p>示意场景，非已完成结果：学生在抬升后掉落物体。先检查掉落前是否已出现滑移，排除时序或控制故障；用匹配条件探针检查接触到抬升的运动条件。若专家能在相同困难下完成任务，生成对齐—抓持—抬升的完整轨迹，训练后从任务初始状态复测掉落率、完整成功和耗时。若固定减速即可解决，应报告这一简单替代解释。</p></details>
</section>
<section id="benchmark" data-title="任务与评测协议">
<div class="eyebrow">AIRSPARK / BENCHMARK</div>
<h2>以原生 AM-Bench 为主要仿真评价合同</h2>
<p class="lead">AM-Bench 承担主要仿真成绩；AirSpark 承担练习生成、诊断和开发验证。真实任务沿用相同交互目标，并按实际硬件单独标定协议。</p>
<p>从 AM-Bench 已有任务中选择可在两个仿真环境中对应实现、且专家与学生可运行的子集。基准原任务的完整终态决定成功，AirSpark 内的阶段练习不改变它。<cite data-ref="ambench"></cite></p>
<div class="table-wrap"><table><thead><tr><th>层次</th><th>任务安排</th><th>报告范围</th></tr></thead><tbody>
<tr><td>工程试点</td><td>一个完整原生任务、一个模型，先验收动作和数据链路，再验证单轮补采可学习。</td><td>可行性结果，不作为完整基准成绩。</td></tr>
<tr><td>仿真主实验</td><td>试点后预先固定少量原生任务，覆盖接触与物体运输。Cabinet Pick-and-Place、Lemon Harvesting 等是待可行性筛选的候选。</td><td>注明 AM-Bench 子集、任务 ID、全部选定任务及失败。选集不依据本方法最终成绩。</td></tr>
<tr><td>学院练习</td><td>接近、对齐、稳定抓持、抬升和短程搬运；完整轨迹中的弱阶段驱动补采。</td><td>阶段练习收益与完整原任务成绩分别报告。</td></tr>
<tr><td>真实对应任务</td><td>同一任务语义和操作阶段，在真实场地完成物理抓持与搬运 / 放置；记录硬件差异。</td><td>真实迁移结果。简化为抓取—抬升时明确是子任务，不冒称原任务完整复现。</td></tr>
</tbody></table></div>
<h3>模型范围</h3><p>ACT 首先承担工程打通；从可用后端中确定一个主模型，第二架构仅验证代表任务。ACT 与 DP 的任务专用配置检验视觉动作学习；若主张语言理解，需要实际语言条件化 VLA 和同场景改变指令的目标选择测试。LightNav 保留为固定导航扩展，不加入空中操作主实验矩阵。</p>
<h3>指标与数据隔离</h3><p>主要指标为从统一初态计算的完整任务 SR；辅以阶段到达数及条件成功率、碰撞 / 掉落、耗时和干预。保留所有超时、故障和接管记录。仿真诊断可使用真值，学生输入严格遵守原模型合同。</p>
<p>训练、开发与封存测试按物体、场景布局和原始任务组划分；镜像、改写和后缀继承父任务归属。同场景新 seed 只能说明重采样，不能直接宣称场景泛化。原生官方指标照常报告，额外诊断不改变官方评分。</p>
</section>
<section id="experiments" data-title="核心实验">
<div class="eyebrow">AIRSPARK / EXPERIMENTS</div>
<h2>在同一基准与真实任务中检验改进</h2>
<div class="table-wrap"><table><thead><tr><th>问题</th><th>实验</th><th>主要产物</th></tr></thead><tbody>
<tr><td>E1 · 学院能否生成有效经历？</td><td>固定批次检查时序、接触、复位、专家和标注；对照原生自动专家，审计学生偏差与已有示范的覆盖。</td><td>有效轨迹 / 小时、总成本、标注质量；动态条件下的学生与专家表现。</td></tr>
<tr><td>E2 · 自进化能否改善原任务？</td><td>从相同原生父代出发，在 AirSpark 中运行等预算多轮采集和更新，保存每轮模型。冻结后返回 AM-Bench 原环境。</td><td>完整任务 SR 随轮次、数据量和成本变化；所有任务、seed、负收益与能力保持。</td></tr>
<tr><td>E3 · 为什么需要这种练习环境？</td><td>代表任务单轮比较同一选择器在原生 AM-Bench 与 AirSpark 中补采。</td><td>相同预算下的数据来源收益；不将所有提升归功于 UE 或 MuJoCo。</td></tr>
<tr><td>E4 · 改进能否返回真实世界？</td><td>在 3DGS 对应场景中完成仿真更新，冻结父代、最强非本方法子代与 SparkClaw 子代，执行配对实机测试。</td><td>真实完整 SR、阶段表现、掉落、接管与耗时；仿真增益和真实增益分别报告。</td></tr>
</tbody></table></div>
<h3>最小主矩阵：一个参照，三条训练路线</h3>
<div class="table-wrap"><table><thead><tr><th>组别</th><th>采集策略</th><th>回答的问题</th></tr></thead><tbody>
<tr><td>B0 · 冻结父代</td><td>原生训练完成后固定权重，不新增训练。</td><td>初始能力与绝对学习增益。</td></tr>
<tr><td>B1 · 覆盖采集</td><td>联合覆盖视觉与物理因素，采用合理的通用扰动专家示范，不按当前学生缺口定向。</td><td>常规增加多样化数据能做到什么。</td></tr>
<tr><td>B2 · 简单失败补采</td><td>按任务 / 条件的终态失败率分配预算；共享专家、合法性检查和质检。</td><td>只知道哪里失败最多是否已经足够。</td></tr>
<tr><td>AirSpark / SparkClaw</td><td>结合阶段视觉与动态证据选择练习，保留可审计历史并进行有界多轮更新。</td><td>过程证据和连续反馈能否带来额外有效数据。</td></tr>
</tbody></table></div>
<h3>预算与规模</h3><p>先一个任务、一个学生的单轮试点。主实验建议三个训练 seed、三轮增量更新：三条训练路线共 27 次增量训练，另计父代训练；这是单个任务专用策略的计算量，多任务分别训练时需乘以任务数。第二架构、来源对照和消融只在代表任务补充，避免全面交叉。</p>
<p>各训练组共享初始父代、因素范围、学生输入、专家、质检、每轮训练步数与 replay 配方。预设相同总采集预算，并报告获得的有效监督量；代表任务增加等有效数据量比较，以区分数据质量与产出效率。计入探针、无效采集、复位、代理推理、诊断和训练，不能同时假定总成本与有效轨迹数天然相等。</p>
<h3>统计与结果组织</h3><p>主表并列原生 AM-Bench 与真实完整 SR，主曲线呈现封存回测的多轮表现，辅助表呈现阶段与成本。固定任务组与配对初态；按独立训练运行和场景 / 物体组报告不确定性。基于试点预先冻结实机试验数量、模型选择及终止规则，随机化策略执行顺序。</p>
<p class="section-note">“提升”是待验证假设。仅超过冻结父代说明新增训练有效；超过同预算 B1 与 B2 才支持定向闭环的额外价值。实机收益需要独立测量。</p>
</section>
<section id="external" data-title="原基准回测"><div class="eyebrow">AIRSPARK / EXTERNAL</div><h2>从 AM-Bench 出发，在 AirSpark 学习，返回原环境验证</h2><div class="equation">原生父代与参考成绩<br>↓ 固定观测—动作适配<br>AirSpark：覆盖 / 简单失败 / 阶段证据驱动补采<br>↓ 固定配方更新并冻结策略<br>原生 AM-Bench 正式回测 ＋ 对应真实任务</div><p>原基准提供主要仿真评价环境，AirSpark 提供新增数据。<cite data-ref="ambench ambench-docs"></cite>它检验策略改善是否超出自建场景，不自动证明实机迁移，也不是官方背书或合作声明。</p><div class="table-wrap"><table><thead><tr><th>步骤</th><th>控制要求</th></tr></thead><tbody><tr><td>1 · 建立父代</td><td>取得明确来源的 checkpoint 或按官方配方重训；先在原生 AM-Bench 记录可复现参考值。复现偏差如实报告。</td></tr><tr><td>2 · 冻结桥接接口</td><td>在更新前完成观测与动作变换、归一化及低层接口验收，所有实验组共享；不得按子代分别调整桥接器。</td></tr><tr><td>3 · AirSpark 补采</td><td>从相同父代开始，使用相同专家、质量门、训练预算与原始数据 replay。各路线后续父代按统一开发接纳规则独立演进。源基准测试状态和结果不进入选择器。</td></tr><tr><td>4 · 原生环境回测</td><td>保持原任务成功条件、控制器、形态、扰动与评测频率，运行全部比较组；报告 Pick / Place 或相应阶段及完整任务指标。</td></tr><tr><td>5 · 区分结论</td><td>同源任务回测支持跨仿真数据迁移 / 能力保持；只有未参与采集与开发的条件才支持泛化。不同仿真引擎间的改善仍需实机另证。</td></tr></tbody></table></div><h3>何时不能称为原基准成绩</h3><p>替换机器人、控制器、传感、成功阈值或起点后，只能报告 AM-Bench 衍生设置；选择少数任务须明确为子集，不宣称完整榜单领先。若数据与权重尚未公开，应注明独立重训及差异，不写成精确复现。</p><h3>用一个对照回答“为什么需要 AirSpark”</h3><p>为代表任务增加“原生 AM-Bench 内补采”对照，使用同一选择器、匹配的任务因素、专家能力与控制约束、同等预算和训练配方，与 AirSpark 补采比较。闭环对照回答主动选择的价值，这一对照回答完整数据来源的价值；二者不可互相替代。专家或任务不能匹配时，只能作系统级比较，不能将差异归因到渲染引擎。先做单任务单轮，再决定是否扩展。</p><p>原生公开测试协议可用于最终回测，但反复查看结果调参后就属于开发反馈。预留配置与 seed，正式冻结前仅使用单独开发集合；不能仅靠更换随机种子声称场景未见。</p></section>
<section id="realworld" data-title="3DGS 与实机验证"><div class="eyebrow">REAL–SIM–REAL</div><h2>在模拟学院中练习，在真实任务中检验</h2><p class="lead">选择一个可重复布置的真实场地，重建外观并标定物理条件。<cite data-ref="3dgs"></cite>策略在学院内训练，随后冻结并返回实机；真实评测检验相对父代的收益，而不只展示单次成功。</p><figure class="paper-figure"><div class="architecture"><article><div><small>01 · CAPTURE</small><h3>真实场景建档</h3></div><p>采集多视角图像、尺度和相机标定；记录机器人、物体质量及接触参数。任务试验影像与重建采集分开管理。</p></article><article><div><small>02 · RECONSTRUCT</small><h3>3DGS + 物理代理</h3></div><p>3DGS 表示静态外观；配准碰撞几何、可交互物体及语义 ID。抓取对象使用独立物理资产，处理与静态重建的重影和遮挡。</p></article><article><div><small>03 · EVOLVE</small><h3>学院内多轮改进</h3></div><p>在已验收的姿态、遮挡与物理参数范围内生成练习；普通 3DGS 固定光照外观不等于可重照明，图像增强另行标记。保存父代、最强非本方法子代和主动子代；真实测试结果不进入本阶段。若使用真实训练示范或真机微调，各组数量一致、单独计费；仅仿真训练与混合训练结果分开报告。</p></article><article><div><small>04 · DEPLOY</small><h3>冻结策略实机考试</h3></div><p>固定低层控制、观测和动作协议。随机化策略测试顺序，匹配初态；记录全部成功、失败、人工接管与物理误差。</p></article></div><figcaption>图 3 · 真实场景到模拟学院，再到实机的验证路线。此处是实验设计，尚未完成重建与硬件试验。</figcaption></figure><div class="table-wrap"><table><thead><tr><th>设置</th><th>训练允许信息</th><th>结论边界</th></tr></thead><tbody><tr><td>R1 · 已重建场景迁移</td><td>可使用该场地的静态重建；训练阶段不可使用正式测试轨迹或结果。</td><td>证明场景适应后的迁移，不称未见场景泛化。</td></tr><tr><td>R2 · 未见条件泛化</td><td>预留目标布局、物体实例或光照条件，训练与开发不可访问。</td><td>支持条件泛化；只有另一个未参与重建和训练的场地才能支持跨场景结论。</td></tr><tr><td>R3 · 真实反馈回流 · 扩展</td><td>另设真实开发试验，失败经登记后用于追加仿真干预。</td><td>使用新的封存测试条件；不能继续把同一批真实失败称为隐藏测试。</td></tr></tbody></table></div><h3>最小实机任务与对照</h3><p>采用与现有空中平台对应的硬件，先验证接近和停稳，再开展轻量物体抓取—抬升。各策略使用相同标定和低层控制，不按策略单独调参；人工复位与安全接管均记录，接管计为失败或单独冻结的终止类别。没有真实接触操作证据时，只报告已完成的导航或接近迁移。若硬件与 AM-Bench 形态不同，实机线使用匹配本体的同架构父代，各组共享初始权重与适配；不能把不同动作接口的 checkpoint 直接称为同一模型迁移。</p><p>最小对照为父代、开发验证中表现最强的同预算非本方法子代和主动子代，使用相同 3DGS 与物理场景。这样可隔离主动闭环增量。若要单独主张 3DGS 的贡献，增加同几何、同物理、同数据预算的普通渲染对照；否则将 3DGS 定位为场景重建工具。</p><p>比较基线从 B1 覆盖采集与 B2 简单失败补采中，按预先冻结的开发指标选择最强者，不能用实机测试挑选。模型、训练 seed 与选择规则在正式实机前冻结；必要时同时报告两条基线。</p><h3>需要报告的误差</h3><p>相机与动作时延、尺度和外参、轨迹跟随、接触与负载误差；同时报告任务成功率、阶段完成率和干预成本。单一真实场地不能支持开放世界或通用 sim-to-real 结论。实机外部跟踪若参与控制，各组一致并明确披露，不能将其写成纯视觉能力。</p></section>
<section id="ablation" data-title="必要对照">
<div class="eyebrow">AIRSPARK / ABLATION</div>
<h2>用少量对照辨别改进来自哪里</h2>
<div class="table-wrap"><table><thead><tr><th>主张</th><th>关键比较</th><th>安排</th></tr></thead><tbody>
<tr><td>主动闭环有增量</td><td>B1 覆盖采集、B2 简单失败补采与本方法，固定共同工具和预算。</td><td>主实验必需。</td></tr>
<tr><td>动态阶段证据影响练习价值</td><td>代表任务中匹配因素、扰动幅度、预算及专家，比较通用随机时机与交互转换时机；同时移除过程证据只保留终态标签。</td><td>按最终机制选择一项主消融，另一项作为补充。</td></tr>
<tr><td>改进不只是更慢</td><td>给父代使用合法的固定减速 / 等待设置，报告完整成功与总耗时。</td><td>试点诊断，原生基准正式成绩仍固定原控制合同。</td></tr>
<tr><td>记忆或 LLM 具有独立收益</td><td>相同工具与证据下，无历史记忆或固定规则计划器。</td><td>仅在突出这项独立贡献时追加；默认作为框架机制。</td></tr>
<tr><td>学院数据来源有价值</td><td>同一选择器在原生 AM-Bench 与 AirSpark 补采。</td><td>代表任务单轮；对应 E3。</td></tr>
<tr><td>3DGS 本身改善迁移</td><td>同几何、物理与预算，普通渲染和 3DGS 外观比较。</td><td>仅在主张其独立效果时追加；默认作为实景重建工具。</td></tr>
</tbody></table></div>
<p>保持强而合理的低层控制，不为制造学习难点而削弱它。若主要缺口来自目标理解或观测信息不足，应调整练习假设，不能强行归为动力学问题。教师自修改、世界模型训练、多机器人和独立导航榜单不进入核心矩阵。</p>
</section>
<section id="resources" data-title="资源与复现"><div class="eyebrow">RESOURCES & REPRODUCIBILITY</div><h2>从一段演示到可重放的研究过程</h2><div class="table-wrap"><table><thead><tr><th>资源</th><th>交付内容</th></tr></thead><tbody><tr><td>环境与任务</td><td>场景、机器人、相机、物理参数、任务族和组级划分；资产许可及替代配置。</td></tr><tr><td>数据合同</td><td>原始观测与动作、语义及物理标注、质检结果、训练导出和父任务 ID。</td></tr><tr><td>闭环运行</td><td>工具 schema、预算、运行状态、失败尝试、记忆条目及证据链接。</td></tr><tr><td>模型谱系</td><td>父子 checkpoint、数据清单、训练配方、开发接纳结果和冻结测试成绩。</td></tr><tr><td>真实场景包</td><td>可公开的重建资产、物理代理、标定、真实任务初态与完整试验清单。</td></tr><tr><td>版本路线</td><td>v0.10 明确原生 AM-Bench 主评价、阶段证据闭环与正文引用；v0.9.1 统一模拟学院与策略自进化定位；v0.9 增加 AM-Bench 复用和返回评测；v0.8 聚焦空中操作；v0.7 为通用学院方案；v0.6 为自主教学与双层改进备选。</td></tr></tbody></table></div><p>发布范围以许可和最终可运行内容为准。隐藏测试与代理开发隔离；对受限真实场景给出可复现参数及公开替代资产。<a href="versions/v0.7/index.html">历史方案 v0.7</a> · <a href="versions/v0.6/index.html">备选方案 v0.6</a>。</p></section>
<section id="discussion" data-title="实施与证据边界"><div class="eyebrow">AIRSPARK / DISCUSSION</div><h2>先完成一个真实可学的空中操作闭环</h2><h3>零阶段：原生复现与接口冻结</h3><p>Linux 端核验 AM-Bench 依赖、资产与模型来源，完成一个 ACT 或 DP 原生训练和 rollout。再对齐 AirSpark 的相机、末端动作与控制频率；尚未完成这些步骤前，不批量启动训练。</p><h3>第一阶段：平台和专家可用</h3><p>复验已有空中机械臂与夹爪，稳定抓持、抬升和复位，核查观测与控制时序，生成通过质检的专家数据。已有控制代码和早期接触记录不等于已实现稳定操作。</p><h3>第二阶段：策略真正学习</h3><p>选定一个可训练后端，先完成固定数据的模仿学习与开发复测，审计专家示范与学生偏差。保持几何近似一致检查动态条件是否构成真实缺口，再做单轮覆盖 / 简单失败 / 阶段证据补采试点。确认数据能改变模型能力后，冻结任务子集、预算、选择规则与成功协议，再开展多轮实验和原生回测。若动态条件并非瓶颈，转向试点发现的真实弱项，不预设结论。</p><h3>第三阶段：真实任务验证</h3><p>场景采集、物理配准和硬件标定与仿真开发并行。冻结模型后进行真实对照；未完成真实接触与抬升时，不以接近演示代替空中操作迁移。多轮实验只支持所测范围内的持续改进。</p><h3>团队验收入口</h3><div class="table-wrap"><table><thead><tr><th>工作线</th><th>首项交付</th><th>状态 / 负责人 / 证据</th></tr></thead><tbody><tr><td>基模与原生基准</td><td>数据及权重清单、固定数据可学习、原生 rollout。</td><td>待运行 · 待指派 · 待记录</td></tr><tr><td>AirSpark 数据与控制</td><td>稳定抓取—抬升—复位、动作合同与转换验收。</td><td>已有工程基础，待专项验收 · 待指派</td></tr><tr><td>闭环与回测</td><td>Select 配置、强基线、谱系、外部留出协议。</td><td>设计阶段 · 待指派 · 待记录</td></tr><tr><td>场景与实机</td><td>重建与物理代理一致、冻结控制和初步策略执行。</td><td>待验收 · 待指派 · 待记录</td></tr></tbody></table></div><p>本轮更新是研究设计与公开资源核查，不代表模型已移植或实验已运行。时间节点按团队试点结果制定，不将未核实的投稿日期或同期政策写入执行计划。</p><h3>研究范围</h3><p>主贡献围绕空中操作模拟学院与可迁移的策略自进化。通用接口和“模拟学院”是系统组织方式；多机器人、代理自修改和更广泛自主研究保留为扩展。3DGS 重建过的场地支持对应场景迁移，另一个完全未参与训练的场地才支持跨场景结论。</p><p><a href="versions/v0.7/index.html">v0.7：通用模拟学院与策略进化</a> · <a href="versions/v0.6/index.html">v0.6：自主教学与双层改进</a>。历史方案作为备选保留，不与当前核心实验叠加。</p></section>
<section id="references" data-title="参考文献">
<div class="eyebrow">AIRSPARK / REFERENCES</div>
<h2>正文引用与原始来源</h2>
<p class="caption">正文编号可跳至对应文献；文献下方可返回各引用章节。正式论文、预印本、技术报告与官方实现分别标注。资料核查日期：2026.10.12。</p>
<ol class="ref-list" id="reference-list"></ol>
<noscript><p>请启用 JavaScript 查看章节与编号文献。</p></noscript>
<p class="section-note">本页中的机制与实验为 AirSpark 研究设计。引用用于支持背景或说明借鉴来源，不代表文献已经验证本方案。历史版本保留其当时的参考资料。</p>
</section>
`);
