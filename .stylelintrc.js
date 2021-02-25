module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    // "order/properties-alphabetical-order": true,
    'color-no-invalid-hex': true,
    'rule-empty-line-before': null,
    // 16颜色使用长表示法
    'color-hex-length': 'long',
    // 16进制颜色使用小写
    'color-hex-case': 'lower',
    'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'vh', 'vw', 'deg'],
    'declaration-colon-newline-after': null,
    // 禁止在速记属性中使用冗余值（可自动修复） padding:10px 10px 10px; 需写成 padding: 10px;
    'shorthand-property-no-redundant-values': true,
    // 不允许属性值带供应商前缀   如：display: -webkit-flex;
    'value-no-vendor-prefix': true,
    // 禁止将可合并的属性分开写，如分别写padding-[left|right|top|bottom],但如果四个少一个的话可以分开写，如只写 right, left,top
    'declaration-block-no-redundant-longhand-properties': true,
    // 一行可显示属性个数
    'declaration-block-single-line-max-declarations': 1,
    // 禁止选择器添加供应商前缀
    'selector-no-vendor-prefix': true,
    // 使用的函数名应小写
    'function-name-case': 'lower',
    // 网址禁止使用引号
    'function-url-quotes': null,
    // 多个函数间必须要有空格
    'function-whitespace-after': 'always',
    // 必须在小于1的数字前加0
    'number-leading-zero': 'always',
    // 不允许有bom前缀
    'unicode-bom': 'never',
    // 注释前需添加空格
    'comment-whitespace-inside': 'always',
    // 属性名应使用全小写
    'at-rule-name-case': 'lower',
    // 伪元素必须使用 ::
    'selector-pseudo-element-colon-notation': 'double',
    // 是否必须添加字体族 generic-family
    'font-family-no-missing-generic-family-keyword': null,
    // 是否禁止低优先级的选择器出现在高优先级选择器之后
    'no-descending-specificity': null
  }
}
