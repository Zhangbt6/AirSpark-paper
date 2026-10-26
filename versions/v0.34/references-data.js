// Shared publication metadata; see docs/05_reference-audit-v0.34.txt for evidence scope.
const paperReferences = {
  "aerial-survey": {
    "title": "Past, Present, and Future of Aerial Robotic Manipulators",
    "type": "期刊综述",
    "url": "https://doi.org/10.1109/tro.2021.3084395",
    "note": "空中机器人驱动、控制、物理交互与自主性的基础综述。",
    "links": [
      [
        "开放全文",
        "https://iris.uniroma1.it/handle/11573/1688354"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Ollero, Anibal",
      "Tognon, Marco",
      "Suarez, Alejandro",
      "Lee, Dongjun",
      "Franchi, Antonio"
    ],
    "year": "2022",
    "venue": "IEEE Transactions on Robotics",
    "doi": "10.1109/tro.2021.3084395",
    "entryType": "article",
    "volume": "38",
    "number": "1",
    "pages": "626--645",
    "sortKey": "Ollero, Anibal | Tognon, Marco | Suarez, Alejandro | Lee, Dongjun | Franchi, Antonio | 2022 | aerial-survey"
  },
  "ambench": {
    "title": "AM-Bench: A Modular Simulation Suite and Benchmark for Aerial Manipulation Policy Learning",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2609.00641v1",
    "note": "空中操作基准与原生学习接口。作者实验室公开列为 CoRL 2026；本轮未取得正式会录条目，保留 arXiv v1。录用来源和运行复现是不同证据。",
    "links": [
      [
        "项目",
        "https://ambench.github.io/"
      ],
      [
        "代码",
        "https://github.com/ambench/ambench"
      ],
      [
        "作者实验室发表记录",
        "https://lecar-lab.github.io/publications.html"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Wang, Yutong",
      "Lee, Dongjae",
      "Guo, Xiaofeng",
      "Zhan, Yuanzhu",
      "Jiang, Yufei",
      "Saravanan, Bavin",
      "Cao, Muqing",
      "Xie, Jia",
      "Mao, Chenyang",
      "Scherer, Sebastian",
      "Geng, Junyi",
      "Shi, Guanya"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2609.00641",
    "venue": "arXiv",
    "version": "v1",
    "sortKey": "Wang, Yutong | Lee, Dongjae | Guo, Xiaofeng | Zhan, Yuanzhu | Jiang, Yufei | Saravanan, Bavin | Cao, Muqing | Xie, Jia | Mao, Chenyang | Scherer, Sebastian | Geng, Junyi | Shi, Guanya | 2026 | ambench"
  },
  "aeromanip": {
    "title": "AeroManip-VLA: Scalable Vision-Language-Action Learning for Aerial Manipulation with RL-Generated Demonstrations",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2609.36915v1",
    "note": "空中 VLA 自动示范、阶段标注与系统评测的直接近邻。",
    "links": [
      [
        "项目",
        "https://ruihuangnus.github.io/AeroManip-VLA-page/"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Huang, Rui",
      "Mu, Yanlin",
      "Li, Lidong",
      "Wang, Yucong",
      "Yan, Zichen",
      "Zhao, Lin"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2609.36915",
    "venue": "arXiv",
    "version": "v1",
    "sortKey": "Huang, Rui | Mu, Yanlin | Li, Lidong | Wang, Yucong | Yan, Zichen | Zhao, Lin | 2026 | aeromanip"
  },
  "contact-survey": {
    "title": "A survey on imitation learning for contact-rich tasks in robotics",
    "type": "期刊综述",
    "url": "https://doi.org/10.1177/02783649261417694",
    "note": "IJRR 于 2026-03-14 在线发表；卷期页码暂未在所核 Crossref 记录中给出。",
    "links": [
      [
        "预印本",
        "https://arxiv.org/abs/2506.13498"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Tsuji, Toshiaki",
      "Kato, Yasuhiro",
      "Solak, Gokhan",
      "Zhang, Heng",
      "Petrič, Tadej",
      "Nori, Francesco",
      "Ajoudani, Arash"
    ],
    "year": "2026",
    "venue": "The International Journal of Robotics Research",
    "doi": "10.1177/02783649261417694",
    "entryType": "article",
    "sortKey": "Tsuji, Toshiaki | Kato, Yasuhiro | Solak, Gokhan | Zhang, Heng | Petrič, Tadej | Nori, Francesco | Ajoudani, Arash | 2026 | contact-survey"
  },
  "dagger": {
    "title": "A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning",
    "type": "会议论文",
    "url": "https://proceedings.mlr.press/v15/ross11a.html",
    "note": "AISTATS 2011。学习者诱导状态上的监督聚合及无遗憾在线学习分析；性能界依赖其专家、损失和采样条件，不保证每轮单调提升，不自动适用于 AirSpark。",
    "verified": "2026-10-19",
    "authors": [
      "Stephane Ross",
      "Geoffrey Gordon",
      "Drew Bagnell"
    ],
    "year": "2011",
    "entryType": "inproceedings",
    "venue": "Proceedings of the Fourteenth International Conference on Artificial Intelligence and Statistics",
    "pages": "627--635",
    "volume": "15",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Ross, Stephane | Gordon, Geoffrey | Bagnell, Drew | 2011 | dagger"
  },
  "dart": {
    "title": "DART: Noise Injection for Robust Imitation Learning",
    "type": "会议论文",
    "url": "https://proceedings.mlr.press/v78/laskey17a.html",
    "note": "通过扰动专家执行构造偏离理想轨迹后的监督。",
    "verified": "2026-10-18",
    "authors": [
      "Michael Laskey",
      "Jonathan Lee",
      "Roy Fox",
      "Anca Dragan",
      "Ken Goldberg"
    ],
    "year": "2017",
    "entryType": "inproceedings",
    "venue": "Conference on Robot Learning",
    "pages": "143--156",
    "volume": "78",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Laskey, Michael | Lee, Jonathan | Fox, Roy | Dragan, Anca | Goldberg, Ken | 2017 | dart"
  },
  "enpire": {
    "title": "ENPIRE: Agentic Robot Policy Self-Improvement in the Real World",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2606.19980v2",
    "note": "按 v2 §3.2、§3.4 核对：工具化真实机器人实验、梯度策略改进、训练方案修订及经验迁移；不能说其仅改执行代码或没有记忆。作者及 arXiv 标 CoRL 2026，未取得正式会录，保留 arXiv v2。",
    "links": [
      [
        "作者项目",
        "https://research.nvidia.com/labs/gear/enpire/"
      ],
      [
        "方法全文",
        "https://arxiv.org/html/2606.19980v2"
      ],
      [
        "作者实验室发表记录",
        "https://lecar-lab.github.io/publications.html"
      ]
    ],
    "verified": "2026-10-19",
    "authors": [
      "Xiao, Wenli",
      "Xie, Jia",
      "Zhang, Tonghe",
      "Lin, Haotian",
      "Fu, Letian \"Max\"",
      "Xue, Haoru",
      "Lu, Jalen",
      "Yang, Yi",
      "Dai, Cunxi",
      "Wang, Zi",
      "Wu, Jimmy",
      "Wang, Guanzhi",
      "Sastry, S. Shankar",
      "Goldberg, Ken",
      "Fan, Linxi \"Jim\"",
      "Zhu, Yuke",
      "Shi, Guanya"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2606.19980",
    "venue": "arXiv",
    "version": "v2",
    "sortKey": "Xiao, Wenli | Xie, Jia | Zhang, Tonghe | Lin, Haotian | Fu, Letian \"Max\" | Xue, Haoru | Lu, Jalen | Yang, Yi | Dai, Cunxi | Wang, Zi | Wu, Jimmy | Wang, Guanzhi | Sastry, S. Shankar | Goldberg, Ken | Fan, Linxi \"Jim\" | Zhu, Yuke | Shi, Guanya | 2026 | enpire"
  },
  "embodirsi": {
    "title": "EmbodiRSI: Recursive Self-Improvement for Data-Efficient Robot Adaptation",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2609.38905v3",
    "note": "v3 包含监测、CEC、ADC 及优势条件化训练；失败集中度是采集启发式，不估计配置特定学习收益。直接学习型近邻；按预印本引用，B2 不是其复现。",
    "verified": "2026-10-19",
    "authors": [
      "Lang, Haoran",
      "Lu, Haotao",
      "Sang, Shiyu",
      "Luo, Haoyang",
      "Chen, Guo",
      "Li, Qun",
      "Yu, Jingyi",
      "Shi, Ye",
      "Wang, Jingya"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2609.38905",
    "venue": "arXiv",
    "version": "v3",
    "sortKey": "Lang, Haoran | Lu, Haotao | Sang, Shiyu | Luo, Haoyang | Chen, Guo | Li, Qun | Yu, Jingyi | Shi, Ye | Wang, Jingya | 2026 | embodirsi"
  },
  "rsi-anything": {
    "title": "RSI-Anything: Unlocking Recursive Self-Improvement with World Models",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2610.13912v1",
    "note": "v1 第 2 节区分行动结果预测、外部反馈、更新对象和保留规则；表 4 说明各应用启用的路径。作为框架组织参考，不将其描述为通用收敛定理；AirSpark 本版不引入学习收益预测器。",
    "links": [
      [
        "官方代码",
        "https://github.com/Gen-Verse/RSI-Anything"
      ]
    ],
    "authors": [
      "Cui, Taoyong",
      "Zeng, Pinxian",
      "Xu, Wanghan",
      "Xiao, Hao",
      "Xue, Shuhan",
      "Gao, Qiang",
      "Ouyang, Wanli",
      "Heng, Pheng Ann",
      "Yin, Zhenfei",
      "Wu, Yingcheng",
      "Yang, Ling"
    ],
    "year": "2026",
    "venue": "arXiv",
    "entryType": "misc",
    "eprint": "2610.13912",
    "version": "v1",
    "verified": "2026-10-19",
    "sortKey": "Cui, Taoyong | Zeng, Pinxian | Xu, Wanghan | Xiao, Hao | Xue, Shuhan | Gao, Qiang | Ouyang, Wanli | Heng, Pheng Ann | Yin, Zhenfei | Wu, Yingcheng | Yang, Ling | 2026 | rsi-anything"
  },
  "air-vla": {
    "title": "AIR-VLA: Vision-Language-Action Systems for Aerial Manipulation",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2601.21602v2",
    "note": "基于 Isaac Sim 的空中视觉语言操作实现。",
    "links": [
      [
        "代码",
        "https://github.com/SpencerSon2001/AIR-VLA"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Sun, Jianli",
      "Tian, Bin",
      "Zhang, Qiyao",
      "Li, Chengxiang",
      "Song, Zihan",
      "Cui, Zhiyong",
      "Lv, Yisheng",
      "Tian, Yonglin"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2601.21602",
    "venue": "arXiv",
    "version": "v2",
    "sortKey": "Sun, Jianli | Tian, Bin | Zhang, Qiyao | Li, Chengxiang | Song, Zihan | Cui, Zhiyong | Lv, Yisheng | Tian, Yonglin | 2026 | air-vla"
  },
  "airvla": {
    "title": "π, But Make It Fly: Physics-Guided Transfer of VLA Models to Aerial Manipulation",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2603.25038v1",
    "note": "空中视觉语言动作策略与物理引导的迁移。",
    "links": [
      [
        "项目",
        "https://airvla.github.io/"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Tucker, Johnathan",
      "Liu, Denis",
      "Swann, Aiden",
      "Ren, Allen",
      "Yu, Javier",
      "Sun, Jiankai",
      "Kim, Brandon",
      "McGranahan, Lachlain",
      "Vuong, Quan",
      "Schwager, Mac"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2603.25038",
    "venue": "arXiv",
    "version": "v1",
    "sortKey": "Tucker, Johnathan | Liu, Denis | Swann, Aiden | Ren, Allen | Yu, Javier | Sun, Jiankai | Kim, Brandon | McGranahan, Lachlain | Vuong, Quan | Schwager, Mac | 2026 | airvla"
  },
  "fsc": {
    "title": "Guiding Data Collection via Factored Scaling Curves",
    "type": "预印本",
    "url": "https://arxiv.org/abs/2505.07728v1",
    "note": "因子化缩放曲线估计不同环境因素上的数据—性能关系，用于定向采集；正文仅引用此机制。未取得正式主会条目，保持 arXiv v1；workshop 展示不等同主会录用。AirSpark 未实现或声称使用 FSC 分配器。",
    "verified": "2026-10-25",
    "authors": [
      "Zha, Lihan",
      "Badithela, Apurva",
      "Zhang, Michael",
      "Lidard, Justin",
      "Bao, Jeremy",
      "Zhou, Emily",
      "Snyder, David",
      "Ren, Allen Z.",
      "Shah, Dhruv",
      "Majumdar, Anirudha"
    ],
    "year": "2025",
    "entryType": "misc",
    "eprint": "2505.07728",
    "venue": "arXiv",
    "version": "v1",
    "sortKey": "Zha, Lihan | Badithela, Apurva | Zhang, Michael | Lidard, Justin | Bao, Jeremy | Zhou, Emily | Snyder, David | Ren, Allen Z. | Shah, Dhruv | Majumdar, Anirudha | 2025 | fsc"
  },
  "aha": {
    "title": "AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation",
    "type": "会议论文",
    "url": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/70a06501001e1820fd1eb9ee821302d2-Abstract-Conference.html",
    "note": "操作失败检测与解释；诊断准确和干预有效需要分别验证。",
    "verified": "2026-10-18",
    "authors": [
      "Duan, Jiafei",
      "Pumacay, Wilbert",
      "Kumar, Nishanth",
      "Wang, Yi Ru",
      "Tian, Shulin",
      "Yuan, Wentao",
      "Krishna, Ranjay",
      "Fox, Dieter",
      "Mandlekar, Ajay",
      "Guo, Yijie"
    ],
    "year": "2025",
    "entryType": "inproceedings",
    "venue": "International Conference on Learning Representations",
    "pages": "45493--45517",
    "sortKey": "Duan, Jiafei | Pumacay, Wilbert | Kumar, Nishanth | Wang, Yi Ru | Tian, Shulin | Yuan, Wentao | Krishna, Ranjay | Fox, Dieter | Mandlekar, Ajay | Guo, Yijie | 2025 | aha"
  },
  "urlab": {
    "title": "Unreal Robotics Lab (URLab)",
    "type": "官方项目",
    "url": "https://urlab-sim.github.io/UnrealRoboticsLab/",
    "note": "UE 与 MuJoCo 集成、机器人及视觉—物理基础设施；AirSpark 明确复用来源。",
    "authors": [
      "URLab contributors"
    ],
    "corporate": true,
    "venue": "Official software / documentation",
    "entryType": "misc",
    "accessed": "2026-10-12",
    "sortKey": "URLab contributors |  | urlab"
  },
  "3dgs": {
    "title": "3D Gaussian Splatting for Real-Time Radiance Field Rendering",
    "type": "论文 / 官方项目",
    "url": "https://doi.org/10.1145/3592433",
    "note": "外观重建基础；接触、碰撞与动态物体由额外物理资产实现。",
    "verified": "2026-10-18",
    "authors": [
      "Kerbl, Bernhard",
      "Kopanas, Georgios",
      "Leimkuehler, Thomas",
      "Drettakis, George"
    ],
    "year": "2023",
    "venue": "ACM Transactions on Graphics",
    "doi": "10.1145/3592433",
    "entryType": "article",
    "volume": "42",
    "number": "4",
    "pages": "1--14",
    "links": [
      [
        "项目",
        "https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/"
      ]
    ],
    "sortKey": "Kerbl, Bernhard | Kopanas, Georgios | Leimkuehler, Thomas | Drettakis, George | 2023 | 3dgs"
  },
  "ambench-docs": {
    "title": "AM-Bench · Reproduce Research Workflows",
    "type": "官方文档",
    "url": "https://github.com/ambench/ambench.github.io/blob/main/docs/evaluation/reproduce.md",
    "note": "数据格式、训练入口与原生评价流程的官方复现文档。",
    "links": [
      [
        "数据合同",
        "https://github.com/ambench/ambench.github.io/blob/main/docs/reference/dataset-format.md"
      ]
    ],
    "authors": [
      "AM-Bench contributors"
    ],
    "corporate": true,
    "venue": "Official software / documentation",
    "entryType": "misc",
    "accessed": "2026-10-12",
    "sortKey": "AM-Bench contributors |  | ambench-docs"
  },
  "ambench-install": {
    "title": "AM-Bench · Installation and Quick Start",
    "type": "官方安装说明",
    "url": "https://github.com/ambench/ambench#installation",
    "note": "原生 Linux、Isaac Sim 5.1 与 Python 3.11 的维护路径；实际运行环境仍需独立验收。",
    "authors": [
      "AM-Bench contributors"
    ],
    "corporate": true,
    "venue": "Official software / documentation",
    "entryType": "misc",
    "accessed": "2026-10-13",
    "sortKey": "AM-Bench contributors |  | ambench-install"
  },
  "act": {
    "title": "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware",
    "type": "会议论文",
    "url": "https://roboticsproceedings.org/rss19/p016.html",
    "note": "ACT 的原始方法；AirSpark 优先复用 AM-Bench 的对应训练接口。",
    "verified": "2026-10-18",
    "authors": [
      "Tony Z. Zhao",
      "Vikash Kumar",
      "Sergey Levine",
      "Chelsea Finn"
    ],
    "year": "2023",
    "entryType": "inproceedings",
    "venue": "Robotics: Science and Systems XIX",
    "doi": "10.15607/RSS.2023.XIX.016",
    "links": [
      [
        "项目",
        "https://tonyzhaozh.github.io/aloha/"
      ]
    ],
    "sortKey": "Zhao, Tony Z. | Kumar, Vikash | Levine, Sergey | Finn, Chelsea | 2023 | act"
  },
  "dp": {
    "title": "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion",
    "type": "会议论文",
    "url": "https://roboticsproceedings.org/rss19/p026.html",
    "note": "动作扩散策略，可用于检验数据收益对学生架构的依赖。",
    "links": [
      [
        "项目",
        "https://diffusion-policy.cs.columbia.edu/"
      ]
    ],
    "verified": "2026-10-18",
    "authors": [
      "Cheng Chi",
      "Siyuan Feng",
      "Yilun Du",
      "Zhenjia Xu",
      "Eric Cousineau",
      "Benjamin CM Burchfiel",
      "Shuran Song"
    ],
    "year": "2023",
    "entryType": "inproceedings",
    "venue": "Robotics: Science and Systems XIX",
    "doi": "10.15607/RSS.2023.XIX.026",
    "sortKey": "Chi, Cheng | Feng, Siyuan | Du, Yilun | Xu, Zhenjia | Cousineau, Eric | Burchfiel, Benjamin CM | Song, Shuran | 2023 | dp"
  },
  "openpi": {
    "title": "OpenPI · π₀ / π₀.₅ Policy Implementations",
    "type": "官方实现",
    "url": "https://github.com/Physical-Intelligence/openpi",
    "note": "VLA 候选后端；基础权重与任务微调权重分开登记。",
    "authors": [
      "Physical Intelligence"
    ],
    "corporate": true,
    "venue": "Official software / documentation",
    "entryType": "misc",
    "accessed": "2026-10-12",
    "sortKey": "Physical Intelligence |  | openpi"
  },
  "lightnav": {
    "title": "LightNav-0 · Official Repository",
    "type": "官方实现",
    "url": "https://github.com/lightorigins/LightNav-0",
    "note": "固定导航前端的扩展选项，不承担接触操作主实验。",
    "authors": [
      "LightOrigins"
    ],
    "corporate": true,
    "venue": "Official software / documentation",
    "entryType": "misc",
    "accessed": "2026-10-12",
    "sortKey": "LightOrigins |  | lightnav"
  },
  "fly-by-code": {
    "note": "主动 View / Probe 诊断与任务程序修订；程序可表示策略，本文区分其改进机制与学生参数训练。未核得正式会录，按 arXiv v1 引用。",
    "type": "预印本",
    "links": [
      [
        "项目",
        "https://fly-by-code.github.io/"
      ]
    ],
    "url": "https://arxiv.org/abs/2610.12549v1",
    "verified": "2026-10-18",
    "title": "Fly-by-Code: Embodied Coding Agents for Aerial Manipulation with Active Visual and Physical Feedback",
    "authors": [
      "Lee, Jaewoo",
      "Seo, Jeongyeon",
      "Cho, Sihyun",
      "Choe, Gyeongrak",
      "Wang, Yutong",
      "Saravanan, Bavin",
      "Huang, Jia-Bin",
      "Huang, Furong",
      "Scherer, Sebastian",
      "Shi, Guanya",
      "Kim, H. Jin",
      "Lee, Seungjae",
      "Lee, Dongjae"
    ],
    "year": "2026",
    "entryType": "misc",
    "eprint": "2610.12549",
    "venue": "arXiv",
    "version": "v1",
    "sortKey": "Lee, Jaewoo | Seo, Jeongyeon | Cho, Sihyun | Choe, Gyeongrak | Wang, Yutong | Saravanan, Bavin | Huang, Jia-Bin | Huang, Furong | Scherer, Sebastian | Shi, Guanya | Kim, H. Jin | Lee, Seungjae | Lee, Dongjae | 2026 | fly-by-code"
  },
  "rialto": {
    "note": "数字孪生中的策略鲁棒化与真实迁移。",
    "type": "会议论文",
    "url": "https://www.roboticsproceedings.org/rss20/p015.html",
    "verified": "2026-10-18",
    "title": "Reconciling Reality through Simulation: A Real-To-Sim-to-Real Approach for Robust Manipulation",
    "authors": [
      "Marcel Torne Villasevil",
      "Anthony Simeonov",
      "Zechu Li",
      "April Chan",
      "Tao Chen",
      "Abhishek Gupta",
      "Pulkit Agrawal"
    ],
    "year": "2024",
    "entryType": "inproceedings",
    "venue": "Robotics: Science and Systems XX",
    "doi": "10.15607/RSS.2024.XX.015",
    "sortKey": "Villasevil, Marcel Torne | Simeonov, Anthony | Li, Zechu | Chan, April | Chen, Tao | Gupta, Abhishek | Agrawal, Pulkit | 2024 | rialto"
  },
  "mimicgen": {
    "note": "将少量人类示范扩展到新情境的自动数据生成系统。",
    "type": "会议论文",
    "url": "https://proceedings.mlr.press/v229/mandlekar23a.html",
    "verified": "2026-10-18",
    "title": "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
    "authors": [
      "Ajay Mandlekar",
      "Soroush Nasiriany",
      "Bowen Wen",
      "Iretiayo Akinola",
      "Yashraj Narang",
      "Linxi Fan",
      "Yuke Zhu",
      "Dieter Fox"
    ],
    "year": "2023",
    "entryType": "inproceedings",
    "venue": "Conference on Robot Learning",
    "pages": "1820--1864",
    "volume": "229",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Mandlekar, Ajay | Nasiriany, Soroush | Wen, Bowen | Akinola, Iretiayo | Narang, Yashraj | Fan, Linxi | Zhu, Yuke | Fox, Dieter | 2023 | mimicgen"
  },
  "mujoco": {
    "note": "动力学与接触求解的基础引擎；平台使用本身不等于已验证任务保真度。",
    "type": "会议论文",
    "url": "https://doi.org/10.1109/iros.2012.6386109",
    "verified": "2026-10-18",
    "title": "MuJoCo: A physics engine for model-based control",
    "authors": [
      "Todorov, Emanuel",
      "Erez, Tom",
      "Tassa, Yuval"
    ],
    "year": "2012",
    "venue": "2012 IEEE/RSJ International Conference on Intelligent Robots and Systems",
    "doi": "10.1109/iros.2012.6386109",
    "entryType": "inproceedings",
    "pages": "5026--5033",
    "sortKey": "Todorov, Emanuel | Erez, Tom | Tassa, Yuval | 2012 | mujoco"
  },
  "aerial-bench": {
    "title": "Benchmarks for Aerial Manipulation",
    "authors": [
      "Suarez, Alejandro",
      "Vega, Victor M.",
      "Fernandez, Manuel",
      "Heredia, Guillermo",
      "Ollero, Anibal"
    ],
    "year": "2020",
    "venue": "IEEE Robotics and Automation Letters",
    "url": "https://doi.org/10.1109/LRA.2020.2972870",
    "note": "实体空中操作的精度、时间和交互响应基准；原文与作者机构记录已核。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-18",
    "volume": "5",
    "number": "2",
    "pages": "2650--2657",
    "doi": "10.1109/LRA.2020.2972870",
    "links": [
      [
        "作者机构全文",
        "https://idus.us.es/bitstreams/45a9b76f-eb80-4e0c-b38f-8a89165d7ebe/download"
      ]
    ],
    "sortKey": "Suarez, Alejandro | Vega, Victor M. | Fernandez, Manuel | Heredia, Guillermo | Ollero, Anibal | 2020 | aerial-bench"
  },
  "aerial-gym": {
    "title": "Aerial Gym Simulator: A Framework for Highly Parallelized Simulation of Aerial Robots",
    "authors": [
      "Kulkarni, Mihir",
      "Rehberg, Welf",
      "Alexis, Kostas"
    ],
    "year": "2025",
    "venue": "IEEE Robotics and Automation Letters",
    "url": "https://doi.org/10.1109/LRA.2025.3548507",
    "note": "动力学、并行控制、传感器渲染及学习接口；引用 RA-L 2025 扩展版而非早期预发布。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-18",
    "volume": "10",
    "number": "4",
    "pages": "4093--4100",
    "doi": "10.1109/LRA.2025.3548507",
    "links": [
      [
        "官方代码与期刊书目",
        "https://github.com/ntnu-arl/aerial_gym_simulator"
      ],
      [
        "开放全文",
        "https://arxiv.org/html/2503.01471v1"
      ]
    ],
    "sortKey": "Kulkarni, Mihir | Rehberg, Welf | Alexis, Kostas | 2025 | aerial-gym"
  },
  "aerial-sliding": {
    "title": "Learning Variable Impedance Control for Aerial Sliding on Uneven Heterogeneous Surfaces by Proprioceptive and Tactile Sensing",
    "authors": [
      "Zhang, Weixuan",
      "Ott, Lionel",
      "Tognon, Marco",
      "Siegwart, Roland"
    ],
    "year": "2022",
    "venue": "IEEE Robotics and Automation Letters",
    "url": "https://doi.org/10.1109/LRA.2022.3194315",
    "note": "空中接触控制的仿真学习与真实迁移；其本体/触觉输入和低层学习目标不同于本文视觉动作学生。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-18",
    "volume": "7",
    "number": "4",
    "pages": "11275--11282",
    "doi": "10.1109/LRA.2022.3194315",
    "links": [
      [
        "作者公开记录",
        "https://marco-tognon-robotics.com/content/learning-variable-impedance-control-aerial-sliding-uneven-heterogeneous-surfaces"
      ],
      [
        "开放全文",
        "https://arxiv.org/abs/2206.14122"
      ]
    ],
    "sortKey": "Zhang, Weixuan | Ott, Lionel | Tognon, Marco | Siegwart, Roland | 2022 | aerial-sliding"
  },
  "sim-benchmark": {
    "title": "Benchmarking Simulated Robotic Manipulation Through a Real World Dataset",
    "authors": [
      "Collins, Jack",
      "McVicar, Jessie",
      "Wedlock, David",
      "Brown, Ross",
      "Howard, David",
      "Leitner, Jurgen"
    ],
    "year": "2020",
    "venue": "IEEE Robotics and Automation Letters",
    "url": "https://doi.org/10.1109/LRA.2019.2953663",
    "note": "通过真实记录与协议评价模拟操作误差；2020 卷期，DOI 中的 2019 为在线出版年份。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-18",
    "volume": "5",
    "number": "1",
    "pages": "250--257",
    "doi": "10.1109/LRA.2019.2953663",
    "links": [
      [
        "作者机构记录",
        "https://research.monash.edu/en/publications/benchmarking-simulated-robotic-manipulation-through-a-real-world-/"
      ]
    ],
    "sortKey": "Collins, Jack | McVicar, Jessie | Wedlock, David | Brown, Ross | Howard, David | Leitner, Jurgen | 2020 | sim-benchmark"
  },
  "sirius": {
    "title": "Robot learning on the job: Human-in-the-loop autonomy and learning during deployment",
    "authors": [
      "Liu, Huihan",
      "Nasiriany, Soroush",
      "Zhang, Lance",
      "Bao, Zhiyao",
      "Zhu, Yuke"
    ],
    "year": "2025",
    "venue": "The International Journal of Robotics Research",
    "url": "https://doi.org/10.1177/02783649241273901",
    "note": "Sirius：部署中的人工接管、训练样本加权与策略更新。使用 IJRR 2025 卷期版；2024 在线与 RSS 2023 原版分别登记，不重复计为两项独立方法。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-25",
    "links": [
      [
        "RSS 2023 原版",
        "https://www.roboticsproceedings.org/rss19/p005.html"
      ]
    ],
    "doi": "10.1177/02783649241273901",
    "pages": "1727--1742",
    "volume": "44",
    "number": "10-11",
    "sortKey": "Liu, Huihan | Nasiriany, Soroush | Zhang, Lance | Bao, Zhiyao | Zhu, Yuke | 2025 | sirius"
  },
  "thrifty": {
    "title": "ThriftyDAgger: Budget-Aware Novelty and Risk Gating for Interactive Imitation Learning",
    "authors": [
      "Hoque, Ryan",
      "Balakrishna, Ashwin",
      "Novoseller, Ellen",
      "Wilcox, Albert",
      "Brown, Daniel S.",
      "Goldberg, Ken"
    ],
    "year": "2022",
    "venue": "Proceedings of the 5th Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v164/hoque22a.html",
    "note": "CoRL 2021 会议，PMLR 正式书目年份为 2022；预算下基于新颖性和风险的介入选择。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "volume": "164",
    "pages": "598--608",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Hoque, Ryan | Balakrishna, Ashwin | Novoseller, Ellen | Wilcox, Albert | Brown, Daniel S. | Goldberg, Ken | 2022 | thrifty"
  },
  "miles": {
    "title": "MILES: Making Imitation Learning Easy with Self-Supervision",
    "authors": [
      "Papagiannis, Georgios",
      "Johns, Edward"
    ],
    "year": "2025",
    "venue": "Proceedings of The 8th Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v270/papagiannis25a.html",
    "note": "CoRL 2024 会议，PMLR 正式书目年份为 2025；单示范及单次复位约束下的自主经验扩充，非通用多轮 RSI。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "volume": "270",
    "pages": "810--829",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Papagiannis, Georgios | Johns, Edward | 2025 | miles"
  },
  "autonomous-cost": {
    "title": "So You Think You Can Scale Up Autonomous Robot Data Collection?",
    "authors": [
      "Mirchandani, Suvir",
      "Belkhale, Suneel",
      "Hejna, Joey",
      "Choi, Evelyn",
      "Islam, Md Sazzad",
      "Sadigh, Dorsa"
    ],
    "year": "2025",
    "venue": "Proceedings of The 8th Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v270/mirchandani25a.html",
    "note": "CoRL 2024 / PMLR 2025。检验自主采集的环境维护、复位与数据收益；其负结果适用于所测设置，不推广为自动采集普遍无效。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "volume": "270",
    "pages": "2791--2810",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Mirchandani, Suvir | Belkhale, Suneel | Hejna, Joey | Choi, Evelyn | Islam, Md Sazzad | Sadigh, Dorsa | 2025 | autonomous-cost"
  },
  "robotwin": {
    "title": "RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins",
    "authors": [
      "Mu, Yao",
      "Chen, Tianxing",
      "Chen, Zanxin",
      "Peng, Shijia",
      "Lan, Zhiqian",
      "Gao, Zeyu",
      "Liang, Zhixuan",
      "Yu, Qiaojun",
      "Zou, Yude",
      "Xu, Mingkun",
      "Lin, Lunkai",
      "Xie, Zhiqiang",
      "Ding, Mingyu",
      "Luo, Ping"
    ],
    "year": "2025",
    "venue": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Mu_RoboTwin_Dual-Arm_Robot_Benchmark_with_Generative_Digital_Twins_CVPR_2025_paper.html",
    "note": "CVPR 2025 主会正式记录；生成式数字孪生、专家数据与双臂评价。引用 1.0 论文，不将其他版本成果混入。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "pages": "27649--27660",
    "sortKey": "Mu, Yao | Chen, Tianxing | Chen, Zanxin | Peng, Shijia | Lan, Zhiqian | Gao, Zeyu | Liang, Zhixuan | Yu, Qiaojun | Zou, Yude | Xu, Mingkun | Lin, Lunkai | Xie, Zhiqiang | Ding, Mingyu | Luo, Ping | 2025 | robotwin"
  },
  "robosplat": {
    "title": "Novel Demonstration Generation with Gaussian Splatting Enables Robust One-Shot Manipulation",
    "authors": [
      "Yang, Sizhe",
      "Yu, Wenye",
      "Zeng, Jia",
      "Lv, Jun",
      "Ren, Kerui",
      "Lu, Cewu",
      "Lin, Dahua",
      "Pang, Jiangmiao"
    ],
    "year": "2025",
    "venue": "Robotics: Science and Systems XXI",
    "url": "https://www.roboticsproceedings.org/rss21/p146.html",
    "note": "RoboSplat：直接编辑三维高斯扩展示范的视觉与几何条件；不能将该增强过程等同于接触动力学执行。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "doi": "10.15607/RSS.2025.XXI.146",
    "sortKey": "Yang, Sizhe | Yu, Wenye | Zeng, Jia | Lv, Jun | Ren, Kerui | Lu, Cewu | Lin, Dahua | Pang, Jiangmiao | 2025 | robosplat"
  },
  "correctnav": {
    "title": "CorrectNav: Self-Correction Flywheel Empowers Vision-Language-Action Navigation Model",
    "authors": [
      "Yu, Zhuoyuan",
      "Long, Yuxing",
      "Yang, Zihan",
      "Zeng, Chengyan",
      "Fan, Hongwei",
      "Zhang, Jiyao",
      "Dong, Hao"
    ],
    "year": "2026",
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence",
    "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38942",
    "note": "AAAI 2026 主会正式论文；训练集错误轨迹、纠正数据和多轮参数更新。导航与空中接触的专家、动作及评价不同。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-18",
    "volume": "40",
    "number": "22",
    "pages": "18737--18745",
    "doi": "10.1609/aaai.v40i22.38942",
    "sortKey": "Yu, Zhuoyuan | Long, Yuxing | Yang, Zihan | Zeng, Chengyan | Fan, Hongwei | Zhang, Jiyao | Dong, Hao | 2026 | correctnav"
  },
  "rpg": {
    "title": "Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents",
    "authors": [
      "Wang, Yen-Jen",
      "Jiang, Haozhe",
      "Deng, Shuying",
      "Xue, Haoru",
      "Ye, Weirui",
      "Duan, Rocky",
      "Haghtalab, Nika",
      "Sastry, S. Shankar",
      "Abbeel, Pieter",
      "Qi, Haozhi"
    ],
    "year": "2026",
    "venue": "arXiv",
    "entryType": "misc",
    "type": "预印本",
    "eprint": "2610.02204",
    "version": "v1",
    "url": "https://arxiv.org/abs/2610.02204v1",
    "verified": "2026-10-19",
    "note": "按 v1 摘要及 §III 核对：从数据集构造仿真练习，依据执行诊断修订共享技能库和系统提示，验证后保留；模型权重保持固定。未核得正式会录，保留预印本；不缩写成只改一次任务程序。",
    "links": [
      [
        "论文全文",
        "https://arxiv.org/html/2610.02204v1"
      ],
      [
        "官方项目",
        "https://rpg-robot.github.io/"
      ]
    ],
    "sortKey": "Wang, Yen-Jen | Jiang, Haozhe | Deng, Shuying | Xue, Haoru | Ye, Weirui | Duan, Rocky | Haghtalab, Nika | Sastry, S. Shankar | Abbeel, Pieter | Qi, Haozhi | 2026 | rpg"
  },
  "learning-to-teach": {
    "title": "Learning to Teach",
    "authors": [
      "Fan, Yang",
      "Tian, Fei",
      "Qin, Tao",
      "Li, Xiang-Yang",
      "Liu, Tie-Yan"
    ],
    "year": "2018",
    "venue": "International Conference on Learning Representations",
    "url": "https://openreview.net/forum?id=HJewuJWCZ",
    "links": [
      [
        "作者机构记录",
        "https://www.microsoft.com/en-us/research/publication/learning-to-teach/"
      ],
      [
        "正式论文",
        "https://openreview.net/pdf?id=HJewuJWCZ"
      ]
    ],
    "note": "ICLR 2018；学生反馈用于优化教学决策，作为教学自适应的已有基础。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-19",
    "sortKey": "Fan, Yang | Tian, Fei | Qin, Tao | Li, Xiang-Yang | Liu, Tie-Yan | 2018 | learning-to-teach"
  },
  "alp-gmm": {
    "title": "Teacher algorithms for curriculum learning of Deep RL in continuously parameterized environments",
    "authors": [
      "Portelas, Rémy",
      "Colas, Cédric",
      "Hofmann, Katja",
      "Oudeyer, Pierre-Yves"
    ],
    "year": "2020",
    "venue": "Proceedings of the Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v100/portelas20a.html",
    "pages": "835--853",
    "volume": "100",
    "series": "Proceedings of Machine Learning Research",
    "note": "CoRL 2019，PMLR 会录出版年 2020。ALP-GMM 基于绝对学习进展生成课程；本文借鉴调度思想，不声称复现其 RL 算法。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-19",
    "sortKey": "Portelas, Rémy | Colas, Cédric | Hofmann, Katja | Oudeyer, Pierre-Yves | 2020 | alp-gmm"
  },
  "multitask-dagger": {
    "title": "Data-Efficient Multitask DAgger",
    "authors": [
      "Fu, Haotian",
      "Gong, Ran",
      "Zhang, Xiaohan",
      "Minniti, Maria Vittoria",
      "Patel, Jigarkumar",
      "Schmeckpeper, Karl"
    ],
    "year": "2025",
    "venue": "arXiv",
    "url": "https://arxiv.org/abs/2509.25466v1",
    "eprint": "2509.25466",
    "version": "v1",
    "entryType": "misc",
    "type": "预印本",
    "links": [
      [
        "方法全文",
        "https://arxiv.org/html/2509.25466v1"
      ]
    ],
    "note": "分别研究成功率驱动的 Task Need 与模仿损失下降驱动的 Performance Gain 调度；PG 不等同于完整任务学习收益。未核得正式会录，保留预印本状态。",
    "verified": "2026-10-19",
    "sortKey": "Fu, Haotian | Gong, Ran | Zhang, Xiaohan | Minniti, Maria Vittoria | Patel, Jigarkumar | Schmeckpeper, Karl | 2025 | multitask-dagger"
  },
  "eureka": {
    "title": "Eureka: Human-Level Reward Design via Coding Large Language Models",
    "authors": [
      "Ma, Yecheng Jason",
      "Liang, William",
      "Wang, Guanzhi",
      "Huang, De-An",
      "Bastani, Osbert",
      "Jayaraman, Dinesh",
      "Zhu, Yuke",
      "Fan, Linxi",
      "Anandkumar, Anima"
    ],
    "year": "2024",
    "venue": "International Conference on Learning Representations",
    "url": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/70c26937fbf3d4600b69a129031b66ec-Abstract-Conference.html",
    "entryType": "inproceedings",
    "type": "会议论文",
    "note": "ICLR 2024 正式会议记录；利用训练反馈迭代奖励代码，支撑学习信号改进已有研究基础。AirSpark 本轮不新增奖励搜索实验。",
    "verified": "2026-10-19",
    "sortKey": "Ma, Yecheng Jason | Liang, William | Wang, Guanzhi | Huang, De-An | Bastani, Osbert | Jayaraman, Dinesh | Zhu, Yuke | Fan, Linxi | Anandkumar, Anima | 2024 | eureka"
  },
  "feedback-systems": {
    "title": "Feedback Systems: An Introduction for Scientists and Engineers",
    "authors": [
      "Åström, Karl J.",
      "Murray, Richard M."
    ],
    "entryType": "book",
    "type": "学术专著",
    "year": "2021",
    "edition": "2",
    "publisher": "Princeton University Press",
    "venue": "Princeton University Press",
    "url": "https://fbswiki.org/wiki/index.php/FBS",
    "links": [
      [
        "作者维护的教材资源",
        "https://fbswiki.org/wiki/index.php/FBS"
      ],
      [
        "作者机构版次书目",
        "https://www.cds.caltech.edu/~murray/books/AM08/pdf/obc-backmatter_20Feb2023.pdf"
      ]
    ],
    "note": "书籍主引用：第二版，Princeton University Press，2021。作者机构书目列明版次与出版年；在线资源另提供公开章节。用于反馈系统基本概念，不作为本方法的稳定性证明。",
    "verified": "2026-10-20",
    "sortKey": "Astrom, Karl J. | Murray, Richard M. | 2021 | feedback-systems"
  },
  "agentic-robots-survey": {
    "title": "Towards Agentic Robots: Model, Data, Environment, and Harness",
    "authors": [
      "Qin, Chonghan",
      "Wu, Dongming",
      "Feng, Kaituo",
      "Wang, Jiaxu",
      "Yu, Xinlei",
      "Sun, Peiwen",
      "Fan, Yijia",
      "He, Xilin",
      "Chen, Bingao",
      "Lian, Weitong",
      "Ji, Ryan",
      "Ren, Wenqi",
      "Hu, Xiaobin",
      "Lin, Dahua",
      "Jiang, Yu-Gang",
      "Yue, Xiangyu"
    ],
    "year": "2026",
    "venue": "arXiv",
    "entryType": "misc",
    "type": "综述预印本",
    "eprint": "2610.20442",
    "version": "v1",
    "url": "https://arxiv.org/abs/2610.20442v1",
    "links": [
      [
        "作者维护的文献目录",
        "https://github.com/chonghanqin/Awesome-Agentic-Robots"
      ]
    ],
    "note": "2026-10-14 公开的综述 v1；本轮核查未列正式会议或期刊发表信息。按模型、数据、环境和 Harness 四个功能域组织 Agentic Robotics，兼顾任务执行与能力发展。用于系统背景与功能边界，不作为 AirSpark 方法原创性、学习增益或收敛的证明。",
    "verified": "2026-10-23",
    "sortKey": "Qin, Chonghan | Wu, Dongming | Feng, Kaituo | Wang, Jiaxu | Yu, Xinlei | Sun, Peiwen | Fan, Yijia | He, Xilin | Chen, Bingao | Lian, Weitong | Ji, Ryan | Ren, Wenqi | Hu, Xiaobin | Lin, Dahua | Jiang, Yu-Gang | Yue, Xiangyu | 2026 | agentic-robots-survey"
  },
  "flying-hand": {
    "title": "Flying Hand: End-Effector-Centric Framework for Versatile Aerial Manipulation Teleoperation and Policy Learning",
    "authors": [
      "He, Guanqi",
      "Guo, Xiaofeng",
      "Tang, Luyi",
      "Zhang, Yuanhang",
      "Mousaei, Mohammadreza",
      "Xu, Jiahe",
      "Geng, Junyi",
      "Scherer, Sebastian",
      "Shi, Guanya"
    ],
    "year": "2025",
    "venue": "Robotics: Science and Systems XXI",
    "url": "https://www.roboticsproceedings.org/rss21/p130.html",
    "note": "正式 RSS 2025 会录与摘要核查。末端中心接口连接全身 MPC、遥操作与模仿学习；不把高层接口或空中策略学习视为 AirSpark 首创。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "doi": "10.15607/RSS.2025.XXI.130",
    "sortKey": "He, Guanqi | Guo, Xiaofeng | Tang, Luyi | Zhang, Yuanhang | Mousaei, Mohammadreza | Xu, Jiahe | Geng, Junyi | Scherer, Sebastian | Shi, Guanya | 2025 | flying-hand"
  },
  "umi-on-air": {
    "title": "UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies",
    "authors": [
      "Gupta, Harsh",
      "Guo, Xiaofeng",
      "Ha, Huy",
      "Pan, Chuer",
      "Cao, Muqing",
      "Lee, Dongjae",
      "Scherer, Sebastian",
      "Song, Shuran",
      "Shi, Guanya"
    ],
    "year": "2026",
    "venue": "2026 IEEE International Conference on Robotics and Automation (ICRA)",
    "url": "https://arxiv.org/abs/2510.02614v3",
    "note": "ICRA 2026 官方日程、论文 v3 摘要及 §III-C/§IV-B 核查。控制器跟踪代价梯度在推理时引导扩散采样；含真实柠檬采摘。不是多轮参数训练或学院闭环；不据同名任务声称协议相同。未核得 DOI 与页码，不填。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [
      [
        "官方会议程序",
        "https://ras.papercept.net/conferences/conferences/ICRA26/program/ICRA26_ContentListWeb_4.html"
      ],
      [
        "方法与任务全文",
        "https://arxiv.org/html/2510.02614v3"
      ],
      [
        "项目",
        "https://umi-on-air.github.io/"
      ]
    ],
    "sortKey": "Gupta, Harsh | Guo, Xiaofeng | Ha, Huy | Pan, Chuer | Cao, Muqing | Lee, Dongjae | Scherer, Sebastian | Song, Shuran | Shi, Guanya | 2026 | umi-on-air"
  },
  "pld": {
    "title": "Self-Improving Vision-Language-Action Models with Data Generation via Residual RL",
    "authors": [
      "Xiao, Wenli",
      "Lin, Haotian",
      "Peng, Andy",
      "Xue, Haoru",
      "He, Tairan",
      "Xie, Yuqi",
      "Hu, Fengyuan",
      "Wu, Jimmy",
      "Luo, Zhengyi",
      "Fan, Linxi",
      "Shi, Guanya",
      "Zhu, Yuke"
    ],
    "year": "2026",
    "venue": "International Conference on Learning Representations",
    "url": "https://openreview.net/forum?id=eUGoqrZ6Ea",
    "note": "ICLR 2026 官方目录及作者方法页核查。训练残差专家，混合 rollout 采集学生分布相关的纠正经验，再以 SFT 更新 VLA；与本文参数学习直接相关。未据摘要复核其全部实验与数值。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [
      [
        "ICLR 2026 官方目录",
        "https://iclr.cc/Downloads/2026"
      ],
      [
        "方法说明",
        "https://wenlixiao.com/self-improve-VLA-PLD"
      ],
      [
        "预印本",
        "https://arxiv.org/abs/2511.00091"
      ]
    ],
    "sortKey": "Xiao, Wenli | Lin, Haotian | Peng, Andy | Xue, Haoru | He, Tairan | Xie, Yuqi | Hu, Fengyuan | Wu, Jimmy | Luo, Zhengyi | Fan, Linxi | Shi, Guanya | Zhu, Yuke | 2026 | pld"
  },
  "robocat": {
    "title": "RoboCat: A Self-Improving Generalist Agent for Robotic Manipulation",
    "authors": [
      "Bousmalis, Konstantinos",
      "Vezzani, Giulia",
      "Rao, Dushyant",
      "Devin, Coline",
      "Lee, Alex X.",
      "Bauza, Maria",
      "Davchev, Todor",
      "Zhou, Yuxiang",
      "Gupta, Agrim",
      "Raju, Akhil",
      "Laurens, Antoine",
      "Fantacci, Claudio",
      "Dalibard, Valentin",
      "Zambelli, Martina",
      "Martins, Murilo F.",
      "Pevceviciute, Rugile",
      "Blokzijl, Michiel",
      "Denil, Misha",
      "Batchelor, Nathan",
      "Lampe, Thomas",
      "Parisotto, Emilio",
      "Zolna, Konrad",
      "Reed, Scott",
      "Colmenarejo, Sergio Gomez",
      "Scholz, Jon",
      "Abdolmaleki, Abbas",
      "Groth, Oliver",
      "Regli, Jean-Baptiste",
      "Sushkov, Oleg",
      "Rothorl, Tom",
      "Chen, Jose Enrique",
      "Aytar, Yusuf",
      "Barker, Dave",
      "Ortiz, Joy",
      "Riedmiller, Martin",
      "Springenberg, Jost Tobias",
      "Hadsell, Raia",
      "Nori, Francesco",
      "Heess, Nicolas"
    ],
    "year": "2023",
    "venue": "Transactions on Machine Learning Research",
    "url": "https://openreview.net/pdf/2a72d6fcd3472bdf5725a3e011fe30f7ad1c46e0.pdf",
    "note": "正式 PDF 页首标注 Published in TMLR (12/2023)，采用正式 Generalist 标题，不沿用早期 Foundation 标题；作者机构页亦登记 TMLR。模型生成数据进入后续训练是自改进先例，不等于无限轮次提升。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-25",
    "links": [
      [
        "正式 PDF（作者机构所链）",
        "https://openreview.net/pdf/2a72d6fcd3472bdf5725a3e011fe30f7ad1c46e0.pdf"
      ],
      [
        "作者机构发表页",
        "https://deepmind.google/research/publications/35829/"
      ]
    ],
    "sortKey": "Bousmalis, Konstantinos | Vezzani, Giulia | Rao, Dushyant | Devin, Coline | Lee, Alex X. | Bauza, Maria | Davchev, Todor | Zhou, Yuxiang | Gupta, Agrim | Raju, Akhil | Laurens, Antoine | Fantacci, Claudio | Dalibard, Valentin | Zambelli, Martina | Martins, Murilo F. | Pevceviciute, Rugile | Blokzijl, Michiel | Denil, Misha | Batchelor, Nathan | Lampe, Thomas | Parisotto, Emilio | Zolna, Konrad | Reed, Scott | Colmenarejo, Sergio Gomez | Scholz, Jon | Abdolmaleki, Abbas | Groth, Oliver | Regli, Jean-Baptiste | Sushkov, Oleg | Rothorl, Tom | Chen, Jose Enrique | Aytar, Yusuf | Barker, Dave | Ortiz, Joy | Riedmiller, Martin | Springenberg, Jost Tobias | Hadsell, Raia | Nori, Francesco | Heess, Nicolas | 2023 | robocat"
  },
  "soar": {
    "title": "Autonomous Improvement of Instruction Following Skills via Foundation Models",
    "authors": [
      "Zhou, Zhiyuan",
      "Atreya, Pranav",
      "Lee, Abraham",
      "Walke, Homer Rich",
      "Mees, Oier",
      "Levine, Sergey"
    ],
    "year": "2025",
    "venue": "Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v270/zhou25b.html",
    "note": "正式 CoRL 2024 会录，PMLR 于 2025 出版。以 VLM 引导自主经验采集与评价，并学习改进指令执行；不是仅推理时反思。正文依据会录摘要，不引用未复核数值。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "volume": "270",
    "pages": "4805--4825",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Zhou, Zhiyuan | Atreya, Pranav | Lee, Abraham | Walke, Homer Rich | Mees, Oier | Levine, Sergey | 2025 | soar"
  },
  "robogen": {
    "title": "RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning via Generative Simulation",
    "authors": [
      "Wang, Yufei",
      "Xian, Zhou",
      "Chen, Feng",
      "Wang, Tsun-Hsuan",
      "Wang, Yian",
      "Fragkiadaki, Katerina",
      "Erickson, Zackory",
      "Held, David",
      "Gan, Chuang"
    ],
    "year": "2024",
    "venue": "International Conference on Machine Learning",
    "url": "https://proceedings.mlr.press/v235/wang24cc.html",
    "note": "正式 ICML 2024 会录与摘要核查。提出任务、生成场景与监督、选择学习方式并学习策略；不将这些通用环节的连接视为 AirSpark 独创。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "volume": "235",
    "pages": "51936--51983",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Wang, Yufei | Xian, Zhou | Chen, Feng | Wang, Tsun-Hsuan | Wang, Yian | Fragkiadaki, Katerina | Erickson, Zackory | Held, David | Gan, Chuang | 2024 | robogen"
  },
  "pi05": {
    "title": "π0.5: A Vision-Language-Action Model with Open-World Generalization",
    "authors": [
      "Black, Kevin",
      "Brown, Noah",
      "Darpinian, James",
      "Dhabalia, Karan",
      "Driess, Danny",
      "Esmail, Adnan",
      "Equi, Michael Robert",
      "Finn, Chelsea",
      "Fusai, Niccolo",
      "Galliker, Manuel Y.",
      "Ghosh, Dibya",
      "Groom, Lachy",
      "Hausman, Karol",
      "ichter, brian",
      "Jakubczak, Szymon",
      "Jones, Tim",
      "Ke, Liyiming",
      "LeBlanc, Devin",
      "Levine, Sergey",
      "Li-Bell, Adrian",
      "Mothukuri, Mohith",
      "Nair, Suraj",
      "Pertsch, Karl",
      "Ren, Allen Z.",
      "Shi, Lucy Xiaoyang",
      "Smith, Laura",
      "Springenberg, Jost Tobias",
      "Stachowicz, Kyle",
      "Tanner, James",
      "Vuong, Quan",
      "Walke, Homer",
      "Walling, Anna",
      "Wang, Haohuan",
      "Yu, Lili",
      "Zhilinsky, Ury"
    ],
    "year": "2025",
    "venue": "Conference on Robot Learning",
    "url": "https://proceedings.mlr.press/v305/black25a.html",
    "note": "π0.5 原始模型论文，正式 CoRL 2025，PMLR 305:17–40。OpenPI 仅为实现来源；本论文的单卡 LoRA 路线是待先导核验的实验设计，不是原文硬件保证。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [
      [
        "实现",
        "https://github.com/Physical-Intelligence/openpi"
      ]
    ],
    "volume": "305",
    "pages": "17--40",
    "series": "Proceedings of Machine Learning Research",
    "sortKey": "Black, Kevin | Brown, Noah | Darpinian, James | Dhabalia, Karan | Driess, Danny | Esmail, Adnan | Equi, Michael Robert | Finn, Chelsea | Fusai, Niccolo | Galliker, Manuel Y. | Ghosh, Dibya | Groom, Lachy | Hausman, Karol | ichter, brian | Jakubczak, Szymon | Jones, Tim | Ke, Liyiming | LeBlanc, Devin | Levine, Sergey | Li-Bell, Adrian | Mothukuri, Mohith | Nair, Suraj | Pertsch, Karl | Ren, Allen Z. | Shi, Lucy Xiaoyang | Smith, Laura | Springenberg, Jost Tobias | Stachowicz, Kyle | Tanner, James | Vuong, Quan | Walke, Homer | Walling, Anna | Wang, Haohuan | Yu, Lili | Zhilinsky, Ury | 2025 | pi05"
  },
  "splatsim": {
    "title": "SplatSim: Zero-Shot Sim2Real Transfer of RGB Manipulation Policies Using Gaussian Splatting",
    "authors": [
      "Qureshi, M. Nomaan",
      "Garg, Sparsh",
      "Yandun, Francisco",
      "Held, David",
      "Kantor, George",
      "Silwal, Abhisesh"
    ],
    "year": "2025",
    "venue": "2025 IEEE International Conference on Robotics and Automation (ICRA)",
    "url": "https://doi.org/10.1109/icra55743.2025.11128339",
    "note": "ICRA 2025 正式 DOI 元数据与作者项目摘要核查。GS 渲染层结合已有物理仿真用于 RGB 策略迁移；不将 3DGS 外观等同接触物理。正式登记页码 6502–6509，不使用预排目录页码。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [
      [
        "项目与任务",
        "https://splatsim.github.io/"
      ]
    ],
    "doi": "10.1109/icra55743.2025.11128339",
    "pages": "6502--6509",
    "sortKey": "Qureshi, M. Nomaan | Garg, Sparsh | Yandun, Francisco | Held, David | Kantor, George | Silwal, Abhisesh | 2025 | splatsim"
  },
  "aerial-learning-review": {
    "title": "Learning-Based Methods for Aerial Manipulation: A Focused Review",
    "authors": [
      "Zeng, Chao",
      "Li, Zhan",
      "Yang, Yipeng",
      "Liu, Cunjia",
      "Yang, Chenguang"
    ],
    "year": "2026",
    "venue": "IEEE/ASME Transactions on Mechatronics",
    "url": "https://doi.org/10.1109/tmech.2025.3625915",
    "note": "TMech 正式期刊卷期 31(2), 2270–2287 (2026)，早期发表信息为 2025；不以 DOI 年份代替卷期年份。核查出版社登记与作者机构记录，仅用于学习型空中操作综述性背景。",
    "entryType": "article",
    "type": "期刊论文",
    "verified": "2026-10-25",
    "links": [
      [
        "作者机构发表记录",
        "https://publications.lboro.ac.uk/publications/all/collated/ttcl3.html"
      ]
    ],
    "doi": "10.1109/tmech.2025.3625915",
    "pages": "2270--2287",
    "volume": "31",
    "number": "2",
    "sortKey": "Zeng, Chao | Li, Zhan | Yang, Yipeng | Liu, Cunjia | Yang, Chenguang | 2026 | aerial-learning-review"
  },
  "hg-dagger": {
    "title": "HG-DAgger: Interactive Imitation Learning with Human Experts",
    "authors": [
      "Kelly, Michael",
      "Sidrane, Chelsea",
      "Driggs-Campbell, Katherine",
      "Kochenderfer, Mykel J."
    ],
    "year": "2019",
    "venue": "2019 International Conference on Robotics and Automation (ICRA)",
    "url": "https://doi.org/10.1109/icra.2019.8793698",
    "note": "ICRA 2019 正式 DOI 元数据；专家决定接管并聚合交互监督。本文只引用这一机制，不借其结果证明自主导师收益。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "doi": "10.1109/icra.2019.8793698",
    "pages": "8077--8083",
    "sortKey": "Kelly, Michael | Sidrane, Chelsea | Driggs-Campbell, Katherine | Kochenderfer, Mykel J. | 2019 | hg-dagger"
  },
  "airsim": {
    "title": "AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles",
    "authors": [
      "Shah, Shital",
      "Dey, Debadeepta",
      "Lovett, Chris",
      "Kapoor, Ashish"
    ],
    "year": "2018",
    "venue": "Field and Service Robotics",
    "url": "https://doi.org/10.1007/978-3-319-67361-5_40",
    "note": "FSR 2017 会议；Springer 正式章引用年份为 2018（2017-11-03 online）。基于 UE 的视觉与物理仿真先例，不声称其没有物理；本文聚焦空中接触学习设施。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "doi": "10.1007/978-3-319-67361-5_40",
    "pages": "621--635",
    "volume": "5",
    "series": "Springer Proceedings in Advanced Robotics",
    "sortKey": "Shah, Shital | Dey, Debadeepta | Lovett, Chris | Kapoor, Ashish | 2018 | airsim"
  },
  "demogen": {
    "title": "DemoGen: Synthetic Demonstration Generation for Data-Efficient Visuomotor Policy Learning",
    "authors": [
      "Xue, Zhengrong",
      "Deng, Shuying",
      "Chen, Zhenyang",
      "Wang, Yixuan",
      "Yuan, Zhecheng",
      "Xu, Huazhe"
    ],
    "year": "2025",
    "venue": "Robotics: Science and Systems XXI",
    "url": "https://www.roboticsproceedings.org/rss21/p157.html",
    "note": "正式 RSS 2025 会录与摘要核查。动作适配与 3D 点云编辑生成增强示范；不表述成重新执行接触动力学。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "doi": "10.15607/RSS.2025.XXI.157",
    "sortKey": "Xue, Zhengrong | Deng, Shuying | Chen, Zhenyang | Wang, Yixuan | Yuan, Zhecheng | Xu, Huazhe | 2025 | demogen"
  },
  "reflexion": {
    "title": "Reflexion: Language Agents with Verbal Reinforcement Learning",
    "authors": [
      "Shinn, Noah",
      "Cassano, Federico",
      "Gopinath, Ashwin",
      "Narasimhan, Karthik",
      "Yao, Shunyu"
    ],
    "year": "2023",
    "venue": "Advances in Neural Information Processing Systems",
    "url": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/1b44b878bb782e6954cd888628510e90-Abstract-Conference.html",
    "note": "NeurIPS 2023 正式会录摘要。用语言化反馈与情节记忆改进后续 Agent 决策，不更新模型权重；仅作为记忆组织先例，不证明机器人学生训练收益。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [],
    "volume": "36",
    "sortKey": "Shinn, Noah | Cassano, Federico | Gopinath, Ashwin | Narasimhan, Karthik | Yao, Shunyu | 2023 | reflexion"
  },
  "lora": {
    "title": "LoRA: Low-Rank Adaptation of Large Language Models",
    "authors": [
      "Hu, Edward J.",
      "Shen, Yelong",
      "Wallis, Phillip",
      "Allen-Zhu, Zeyuan",
      "Li, Yuanzhi",
      "Wang, Shean",
      "Wang, Lu",
      "Chen, Weizhu"
    ],
    "year": "2022",
    "venue": "International Conference on Learning Representations",
    "url": "https://openreview.net/forum?id=nZeVKeeFYf9",
    "note": "ICLR 2022 正式论文。低秩可训练增量；不以其原文证明 π0.5 在 RTX 4090 的可行性。",
    "entryType": "inproceedings",
    "type": "会议论文",
    "verified": "2026-10-25",
    "links": [
      [
        "正式 PDF",
        "https://openreview.net/pdf?id=nZeVKeeFYf9"
      ]
    ],
    "sortKey": "Hu, Edward J. | Shen, Yelong | Wallis, Phillip | Allen-Zhu, Zeyuan | Li, Yuanzhi | Wang, Shean | Wang, Lu | Chen, Weizhu | 2022 | lora"
  }
};
