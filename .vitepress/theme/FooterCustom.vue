<template>
  <div class="custom-footer-content">
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="icp-link">
      <img src="/icons/icp_log.png" alt="ICP 备案图标" class="icon" />
      京ICP备 2021012920号
    </a>

    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402053696" target="_blank" rel="noopener noreferrer"
      class="gongan-link">
      <img src="/icons/beian_logo.png" alt="公安备案图标" class="icon" />
      京公网安备 11011402053696号
    </a>

    <span>Copyright © 2023-Present Wang Shuo (SpaceGT)</span>
  </div>
</template>
  
<style scoped>
.custom-footer-content {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  /* 使用 VitePress 变量保持样式一致 */
  font-size: 0.85rem;
  line-height: 1.8;
  display: flex;
  justify-content: center;
}

.icp-link,
.gongan-link {
  display: inline-flex;
  /* 使图标和文字在一行并居中 */
  align-items: center;
  margin: 0 1em;
  color: inherit;
  /* 继承父元素的颜色 */
  text-decoration: none;
  /* 去除默认下划线 */
}

.icp-link:hover,
.gongan-link:hover {
  color: var(--vp-c-brand-1);
  /* 鼠标悬停变色 */
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

span {
  margin-left: 1em;
}
</style>