/* Local-only planning and blank experiment records. No network writes. */
(() => {
  'use strict';
  const plan = window.AIRSPARK_STUDY_PLAN;
  if (!plan) return;
  const storageKey = 'airspark-study-records-v1';
  const fields = [...document.querySelectorAll('[data-result-field]')];
  const parameters = [...document.querySelectorAll('[data-study-param]')];
  const status = document.getElementById('study-save-status');
  let state = { schema: 1, sourceVersion: plan.plan_version, values: {}, parameters: {} };
  let persistent = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && saved.schema === 1) {
      state.values = saved.values && typeof saved.values === 'object' ? saved.values : {};
      state.parameters = saved.parameters && typeof saved.parameters === 'object' ? saved.parameters : {};
    }
  } catch (_) { persistent = false; }
  fields.forEach(field => {
    const value = state.values[field.dataset.resultField];
    if (typeof value === 'string') field.value = value;
  });
  parameters.forEach(field => {
    const value = state.parameters[field.dataset.studyParam];
    if (typeof value === 'string') field.value = value;
  });
  const n = value => Number(value).toLocaleString('zh-CN', { maximumFractionDigits: 1 });
  function params() {
    const out = { ...plan.planning_defaults };
    let valid = true;
    parameters.forEach(input => {
      const key = input.dataset.studyParam;
      if (key === 'gpuHours' && input.value.trim() === '') { out[key] = null; return; }
      const value = Number(input.value);
      const ok = input.value.trim() !== '' && Number.isFinite(value)
        && value >= Number(input.min) && value <= Number(input.max)
        && (key === 'gpuHours' || Number.isInteger(value));
      input.setAttribute('aria-invalid', String(!ok));
      if (ok) out[key] = value;
      else valid = false;
    });
    out.valid = valid;
    return out;
  }
  function setCount(key, text) {
    document.querySelectorAll('[data-study-count="' + key + '"]').forEach(node => { node.textContent = text; });
  }
  function renderCounts() {
    const p = params();
    const chains = plan.settings.length * p.seeds;
    const attempts = chains * p.rounds;
    setCount('chains', n(chains));
    setCount('candidates', '≤' + n(attempts));
    setCount('real', n(6 * p.real));
    setCount('trainingDetail', n(chains) + ' 条链，最多 ' + n(attempts) + ' 个候选');
    setCount('collection', '诊断 ' + n(attempts * p.diagnostic) + ' 回合；专家尝试 ≤' + n(attempts * p.expert) + ' 次');
    setCount('validation', '≤' + n(2 * attempts * p.validation) + ' 回合');
    setCount('academyTest', n(9 * p.seeds * p.test) + ' 回合');
    setCount('nativeTest', n(7 * p.seeds * p.test) + ' 回合');
    setCount('gpu', p.gpuHours === null ? '待先导成本' : '≤' + n(attempts * p.gpuHours) + ' GPU·h');
    setCount('realDetail', n(6 * p.real) + ' 回合；每组每条件 ' + n(p.real) + ' 回合，跨链均衡分配');
    const filled = fields.filter(field => field.value.trim()).length;
    if (status) {
      status.textContent = !p.valid ? '排期参数有空项或超出范围；估算暂用默认值，请修正后导出。'
        : persistent ? '本机记录：已填写 ' + filled + ' 个字段。请导出备份；不会自动发布或同步给组员。'
        : '当前浏览器不能持久保存，请及时导出；不会自动发布或同步给组员。';
    }
  }
  function save() {
    state.sourceVersion = plan.plan_version;
    state.updatedAt = new Date().toISOString();
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch (_) { persistent = false; }
    renderCounts();
  }
  fields.forEach(input => input.addEventListener('input', () => {
    state.values[input.dataset.resultField] = input.value;
    save();
  }));
  parameters.forEach(input => input.addEventListener('input', () => {
    state.parameters[input.dataset.studyParam] = input.value;
    save();
  }));
  // Preserve user text as data when CSV is opened by spreadsheet applications.
  function cell(value) {
    let text = value == null ? '' : String(value);
    if (/^[\s]*[=+@-]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  }
  function download(name, rows) {
    const csv = '\ufeff' + rows.map(row => row.map(cell).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = name;
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function value(td) {
    const input = td.querySelector('[data-result-field]');
    return input ? input.value : td.textContent.trim();
  }
  document.querySelectorAll('[data-export-table]').forEach(button => button.addEventListener('click', () => {
    const table = document.querySelector('table[data-result-table="' + button.dataset.exportTable + '"]');
    if (!table) return;
    const rows = [[...table.querySelectorAll('thead th')].map(th => th.textContent.trim())];
    table.querySelectorAll('tbody tr').forEach(tr => { rows.push([...tr.cells].map(value)); });
    download('AirSpark-' + button.dataset.exportTable + '-' + plan.plan_version + '.csv', rows);
  }));
  const all = document.getElementById('export-all-results');
  if (all) all.addEventListener('click', () => {
    const rows = [['表ID', '表名', '行ID', '字段', '值']];
    document.querySelectorAll('table[data-result-table]').forEach(table => {
      const headers = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());
      table.querySelectorAll('tbody tr').forEach(tr => [...tr.cells].forEach((td, index) => {
        rows.push([table.dataset.resultTable, table.dataset.resultTitle, tr.dataset.resultRow, headers[index], value(td)]);
      }));
    });
    parameters.forEach(input => rows.push(['planning', '未冻结排期参数', input.dataset.studyParam, input.dataset.studyParam, input.value]));
    download('AirSpark-study-records-' + plan.plan_version + '.csv', rows);
  });
  const manifest = document.getElementById('export-study-manifest');
  if (manifest) manifest.addEventListener('click', () => {
    const p = params();
    if (!p.valid) { if (status) status.textContent = '请先修正排期参数，再导出学习链清单。'; return; }
    const rows = [['排期版本', '状态', '执行包', '设置ID', '任务', '方法', '来源', '配对seed槽位（实际ID待冻结）', '学习链ID', '干预序号', '计划C诊断回合', '计划专家尝试上限', '计划每模型V回合', '父checkpoint', '执行证据ID', '计划ID', '合格监督数', '实际专家尝试数', '候选checkpoint', 'V收益pp', '不确定性', '接纳状态', 'worker小时', 'GPU小时', '记忆修订ID', '负责人', '状态或说明']];
    plan.settings.forEach(setting => {
      for (let seed = 1; seed <= p.seeds; seed++) {
        const slot = 'seed-slot-' + String(seed).padStart(2, '0');
        const chain = setting.id + '-' + slot;
        for (let round = 1; round <= p.rounds; round++) {
          rows.push([plan.plan_version, '排期草案，非已执行', setting.package, setting.id, setting.task, setting.group, setting.source, slot, chain, round, p.diagnostic, p.expert, p.validation, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
        }
      }
    });
    download('AirSpark-learning-chain-ledger-' + plan.plan_version + '.csv', rows);
  });
  renderCounts();
})();
