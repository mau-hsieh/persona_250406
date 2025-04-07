function createBar(label, value) {
    return `
      <p class="label">${label}</p>
      <div class="bar"><div class="bar-fill" style="width: ${value}%"></div></div>
    `;
  }
  
  document.getElementById('left-column').innerHTML = `
    <img src="${personaData.image}" alt="${personaData.name}">
    <h2>人物基本資料</h2>
    <p><strong>姓名：</strong>${personaData.name}</p>
    <p><strong>身分：</strong>${personaData.role}</p>
    <p><strong>代表作：</strong>${personaData.work}</p>
    <p><strong>名言：</strong><br>${personaData.quote}</p>
    <p><strong>簡介：</strong><br>${personaData.intro}</p>
  `;
  
  document.getElementById('middle-column').innerHTML = `
    <p class="label">目標</p>
    <ul>${personaData.goals.map(g => `<li>${g}</li>`).join("")}</ul>
  
    <p class="label">喜歡 / 不喜歡</p>
    <ul>
      <li><strong>喜歡：</strong>${personaData.likes.join("、")}</li>
      <li><strong>不喜歡：</strong>${personaData.dislikes.join("、")}</li>
    </ul>
  
    <p class="label">困難</p>
    <ul>${personaData.difficulties.map(d => `<li>${d}</li>`).join("")}</ul>
  `;
  
  document.getElementById('right-column').innerHTML = `
    <h2>性格量化評估</h2>
    ${personaData.traits.map(t => createBar(t.label, t.value)).join("")}
  
    <p class="label">特徵</p>
    <ul>${personaData.features.map(f => `<li>${f}</li>`).join("")}</ul>
  
    <p class="label">喜歡的品牌 / 地方 / 興趣</p>
    <ul>
      <li>品牌：${personaData.favorites.brand.join("、")}</li>
      <li>地方：${personaData.favorites.place.join("、")}</li>
      <li>興趣：${personaData.favorites.hobby.join("、")}</li>
    </ul>
  `;
  