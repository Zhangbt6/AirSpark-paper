/* Primary sources. Numbers follow first appearance; keys remain stable across edits. */
const paperReferences = {
  'aerial-survey': {
    title: 'Past, Present, and Future of Aerial Robotic Manipulators',
    meta: 'Aníbal Ollero et al. · IEEE Transactions on Robotics 38(1), 626–645 · 2022',
    type: '期刊综述', url: 'https://doi.org/10.1109/TRO.2021.3084395',
    note: '空中机器人驱动、控制、物理交互与自主性的基础综述。',
    links: [['开放全文', 'https://iris.uniroma1.it/handle/11573/1688354']]
  },
  'ambench': {
    title: 'AM-Bench: A Modular Simulation Suite and Benchmark for Aerial Manipulation Policy Learning',
    meta: 'Yutong Wang et al. · arXiv:2609.00641v1 · 2026',
    type: '预印本', url: 'https://arxiv.org/abs/2609.00641v1',
    note: '空中操作的模块化任务、策略实现与原生仿真评价。',
    links: [['项目', 'https://ambench.github.io/'], ['代码', 'https://github.com/ambench/ambench']]
  },
  'aeromanip': {
    title: 'AeroManip-VLA: Scalable Vision-Language-Action Learning for Aerial Manipulation with RL-Generated Demonstrations',
    meta: 'Rui Huang et al. · arXiv:2609.36915v1 · 2026',
    type: '预印本', url: 'https://arxiv.org/abs/2609.36915v1',
    note: '空中 VLA 自动示范、阶段标注与系统评测的直接近邻。',
    links: [['项目', 'https://ruihuangnus.github.io/AeroManip-VLA-page/']]
  },
  'contact-survey': {
    title: 'A Survey on Imitation Learning for Contact-Rich Tasks in Robotics',
    meta: 'Toshiaki Tsuji et al. · The International Journal of Robotics Research · 2026',
    type: '期刊综述', url: 'https://doi.org/10.1177/02783649261417694',
    note: '接触任务的示范、观测局限与仿真迁移。预印本初稿发表于 2025 年。',
    links: [['预印本', 'https://arxiv.org/abs/2506.13498']]
  },
  'dagger': {
    title: 'A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning',
    meta: 'Stéphane Ross, Geoffrey Gordon, Drew Bagnell · AISTATS · 2011',
    type: '会议论文', url: 'https://proceedings.mlr.press/v15/ross11a.html',
    note: 'DAgger：策略诱导分布上的交互式数据聚合。'
  },
  'dart': {
    title: 'DART: Noise Injection for Robust Imitation Learning',
    meta: 'Michael Laskey et al. · CoRL · 2017',
    type: '会议论文', url: 'https://proceedings.mlr.press/v78/laskey17a.html',
    note: '通过扰动专家执行构造偏离理想轨迹后的监督。'
  },
  'enpire': {
    title: 'ENPIRE: Agentic Robot Policy Self-Improvement in the Real World',
    meta: 'Wenli Xiao et al. · arXiv:2606.19980 · 2026',
    type: '预印本 / 项目', url: 'https://arxiv.org/abs/2606.19980',
    note: '物理环境复位、验证、执行与策略改进的研究 harness；其重试口径不直接等于单次成功率。',
    links: [['项目与评测说明', 'https://enpire-research.github.io/']]
  },
  'embodirsi': {
    title: 'EmbodiRSI: Recursive Self-Improvement for Data-Efficient Robot Adaptation',
    meta: 'Haoran Lang et al. · arXiv:2609.38905v3 · 2026',
    type: '预印本', url: 'https://arxiv.org/abs/2609.38905v3',
    note: '反馈驱动的纠正与自适应采集，以及 real-to-sim-to-real 策略适应。'
  },
  'rsi-anything': {
    title: 'RSI-Anything: Unlocking Recursive Self-Improvement with World Models',
    meta: 'Taoyong Cui et al. · Technical Report v1 · 2026-10',
    type: '技术报告', url: 'https://phai-labs.com/papers/rsi-anything/rsi-anything-technical-report-v1-2026-10.pdf',
    note: '预测辅助的候选选择、外部反馈与更新后的组件兼容性检查。',
    links: [['官方说明', 'https://phai-labs.com/news/rsi-anything/']]
  },
  'air-vla': {
    title: 'AIR-VLA · Official Repository',
    meta: 'AIR-VLA authors · Isaac Sim implementation · 2026',
    type: '官方实现', url: 'https://github.com/SpencerSon2001/AIR-VLA',
    note: '基于 Isaac Sim 的空中视觉语言操作实现。',
    links: [['论文', 'https://arxiv.org/abs/2601.21602']]
  },
  'airvla': {
    title: 'AirVLA: π, But Make It Fly',
    meta: 'AirVLA authors · arXiv:2603.25038 · 2026',
    type: '预印本 / 项目', url: 'https://airvla.github.io/',
    note: '空中视觉语言动作策略与物理引导的迁移。',
    links: [['论文', 'https://arxiv.org/abs/2603.25038']]
  },
  'fsc': {
    title: 'Guiding Data Collection via Factored Scaling Curves',
    meta: 'Lihan Zha et al. · arXiv:2505.07728v1 · 2025',
    type: '预印本', url: 'https://arxiv.org/abs/2505.07728v1',
    note: '利用因素化的数据收益估计指导采集预算分配。'
  },
  'aha': {
    title: 'AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation',
    meta: 'ICLR · 2025', type: '会议论文',
    url: 'https://proceedings.iclr.cc/paper_files/paper/2025/hash/70a06501001e1820fd1eb9ee821302d2-Abstract-Conference.html',
    note: '操作失败检测与解释；诊断准确和干预有效需要分别验证。'
  },
  'urlab': {
    title: 'Unreal Robotics Lab (URLab)',
    meta: 'URLab official project', type: '官方项目',
    url: 'https://urlab-sim.github.io/UnrealRoboticsLab/',
    note: 'UE 与 MuJoCo 集成、机器人及视觉—物理基础设施；AirSpark 明确复用来源。'
  },
  '3dgs': {
    title: '3D Gaussian Splatting for Real-Time Radiance Field Rendering',
    meta: 'Bernhard Kerbl, Georgios Kopanas, Thomas Leimkühler, George Drettakis · ACM TOG / SIGGRAPH · 2023',
    type: '论文 / 官方项目', url: 'https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/',
    note: '外观重建基础；接触、碰撞与动态物体由额外物理资产实现。'
  },
  'ambench-docs': {
    title: 'AM-Bench · Reproduce Research Workflows',
    meta: 'AM-Bench official documentation · accessed 2026-10-12',
    type: '官方文档', url: 'https://github.com/ambench/ambench.github.io/blob/main/docs/evaluation/reproduce.md',
    note: '数据格式、训练入口与原生评价流程的官方复现文档。',
    links: [['数据合同', 'https://github.com/ambench/ambench.github.io/blob/main/docs/reference/dataset-format.md']]
  },
  'act': {
    title: 'Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware',
    meta: 'Tony Z. Zhao, Vikash Kumar, Sergey Levine, Chelsea Finn · RSS · 2023',
    type: '会议论文', url: 'https://tonyzhaozh.github.io/aloha/',
    note: 'ACT 的原始方法；AirSpark 优先复用 AM-Bench 的对应训练接口。'
  },
  'dp': {
    title: 'Diffusion Policy: Visuomotor Policy Learning via Action Diffusion',
    meta: 'Cheng Chi et al. · RSS · 2023', type: '会议论文',
    url: 'https://roboticsproceedings.org/rss19/p026.html',
    note: '动作扩散策略，可用于检验数据收益对学生架构的依赖。',
    links: [['项目', 'https://diffusion-policy.cs.columbia.edu/']]
  },
  'openpi': {
    title: 'OpenPI · π₀ / π₀.₅ Policy Implementations',
    meta: 'Physical Intelligence · official repository', type: '官方实现',
    url: 'https://github.com/Physical-Intelligence/openpi',
    note: 'VLA 候选后端；基础权重与任务微调权重分开登记。'
  },
  'lightnav': {
    title: 'LightNav-0 · Official Repository',
    meta: 'LightOrigins · 2026', type: '官方实现',
    url: 'https://github.com/lightorigins/LightNav-0',
    note: '固定导航前端的扩展选项，不承担接触操作主实验。'
  }
};

(() => {
  const used = new Map();
  let occurrence = 0;
  document.querySelectorAll('cite[data-ref]').forEach(cite => {
    for (const key of cite.dataset.ref.trim().split(/\s+/)) {
      const ref = paperReferences[key];
      if (!ref) throw new Error(`Unknown reference: ${key}`);
      if (!used.has(key)) used.set(key, { number: used.size + 1, locations: [] });
      const item = used.get(key);
      const anchor = document.createElement('a');
      anchor.id = `cite-${key}-${++occurrence}`;
      anchor.href = `#ref-${key}`;
      anchor.className = 'citation';
      anchor.textContent = `[${item.number}]`;
      anchor.title = `${ref.title}\n${ref.meta}`;
      anchor.setAttribute('aria-label', `参考文献 ${item.number}：${ref.title}`);
      anchor.setAttribute('role', 'doc-noteref');
      cite.append(anchor);
      item.locations.push({ id: anchor.id, chapter: cite.closest('section').dataset.title });
    }
  });
  const list = document.getElementById('reference-list');
  for (const [key, item] of used) {
    const ref = paperReferences[key];
    const li = document.createElement('li');
    li.id = `ref-${key}`;
    li.setAttribute('role', 'doc-biblioentry');
    const title = document.createElement('a');
    title.href = ref.url;
    title.textContent = ref.title;
    title.target = '_blank';
    title.rel = 'noopener';
    title.className = 'ref-title';
    const badge = document.createElement('span');
    badge.className = 'ref-type';
    badge.textContent = ref.type;
    const meta = document.createElement('small');
    meta.textContent = ref.meta;
    const note = document.createElement('p');
    note.className = 'ref-note';
    note.textContent = ref.note;
    const links = document.createElement('div');
    links.className = 'ref-links';
    for (const [label, url] of ref.links || []) {
      const link = document.createElement('a');
      link.textContent = `${label} ↗`;
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      links.append(link);
    }
    const chapters = new Set();
    item.locations.forEach(location => {
      if (chapters.has(location.chapter)) return;
      chapters.add(location.chapter);
      const back = document.createElement('a');
      back.href = `#${location.id}`;
      back.className = 'ref-back';
      back.textContent = `↩ ${location.chapter}`;
      back.setAttribute('aria-label', `返回${location.chapter}中对文献 ${item.number} 的引用`);
      links.append(back);
    });
    li.append(title, badge, meta, note, links);
    list.append(li);
  }
})();
