(function () {
  var root = document.querySelector(".resume-layout");
  var buttons = document.querySelectorAll("[data-resume-lang-button]");

  if (!root || !buttons.length) return;

  var translations = {
    zh: {
      "sidebar.role": "硕士研究生，SJTU",
      "link.email": "邮箱",
      "link.paper": "论文",
      "nav.biography": "个人简介",
      "nav.work": "工作经历",
      "nav.projects": "项目经历",
      "nav.publications": "论文发表",
      "nav.awards": "奖项荣誉",
      "section.biography": "个人简介",
      "section.work": "工作经历",
      "section.projects": "项目经历",
      "section.publications": "论文发表",
      "section.awards": "奖项荣誉",
      "bio.title": "关于我",
      "bio.p1": "你好！我是谭宇宏，目前是上海交通大学自动化专业二年级硕士研究生，导师为乐心怡教授。",
      "bio.p2": "我于 2020 年获得上海交通大学学士学位。我的研究方向包括自动驾驶 🚗、Vision-Language-Action (VLA) 🤖 和 多机器人路径规划 🗺️。",
      "bio.p3": "我正在寻找全职工作 🤩🙏。",
      "work.xpeng.title": "小鹏 | 算法实习生",
      "work.sensetime.title": "商汤 | 算法实习生",
      "work.huawei.title": "华为 | 算法实习生",
      "date.xpeng": "2026年5月 - 至今",
      "date.sensetime": "2026年1月 - 2026年4月",
      "date.huawei": "2024年1月 - 2024年6月",
      "date.heli": "2025年1月 - 2025年10月",
      "date.wayzim": "2024年6月 - 2025年1月",
      "work.xpeng.li1": "参与 VLA 团队的算法开发 ✊。",
      "work.sensetime.li1": "参与 Diffusion Planner 基座模型的研发。使用强化学习微调提升规划质量 🧠。参与微调网络，并优化算法框架。",
      "work.huawei.li1": "设计动态终身二分图匹配框架，用于多机器人任务分配🤖。",
      "work.huawei.li2": "使用动态混合分配实现指令衔接和预调度。",
      "work.huawei.li3": "使用多维图卷积网络提取任务流特征。",
      "meta.leader": "负责人",
      "project.heli.title": "合力 | 多车集群调度内核",
      "project.heli.li1": "构建面向异构多机器人系统的分层规划框架 🤖。",
      "project.heli.li2": "结合全局指引与局部解锁，支持不同车体结构和动力学约束的机器人。",
      "project.wayzim.title": "中科微至 | 大规模四向穿梭车系统",
      "project.wayzim.li1": "开发用于四向穿梭车的大规模集群调度系统🚚。支持超过 100,000 个地图节点和 300 台以上机器人。",
      "project.wayzim.li2": "基于时变图结构解决路径冲突。为分层规划设计解锁机制。",
      "award.scholarship": "国家奖学金（前 1%），上海交通大学 🏅。",
      "award.graduate": "上海交通大学优秀毕业生。",
      "award.robocup": "RoboCup 中国区小型组：全国亚军。上海交通大学队队长 🏆。",
      "award.meituan": "第二届美团低空经济智能飞行管理挑战赛，全国前 10 ✈️。",
      "award.noi": "NOI 系列竞赛：NOIp 一等奖，HNOI 一等奖。"
    }
  };

  var translatable = document.querySelectorAll("[data-i18n]");

  translatable.forEach(function (element) {
    if (!element.hasAttribute("data-i18n-en")) {
      element.setAttribute("data-i18n-en", element.textContent);
    }
  });

  function setLanguage(lang) {
    var activeLang = lang === "zh" ? "zh" : "en";

    root.setAttribute("data-resume-lang", activeLang);
    root.setAttribute("lang", activeLang === "zh" ? "zh-Hans" : "en");
    document.documentElement.setAttribute("lang", activeLang === "zh" ? "zh-Hans" : "en");

    translatable.forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      element.textContent = activeLang === "zh" && translations.zh[key]
        ? translations.zh[key]
        : element.getAttribute("data-i18n-en");
    });

    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-resume-lang-button") === activeLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-resume-lang-button"));
    });
  });

  setLanguage("en");
})();
