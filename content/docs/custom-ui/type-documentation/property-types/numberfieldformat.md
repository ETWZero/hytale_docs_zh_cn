---
title: NumberFieldFormat
authors:
  - name: "Hypixel Studios Canada Inc."
    url: "https://hytale.com"
---

<OfficialDocumentationNotice />

# NumberFieldFormat

## 属性

| 名称                   | 类型      | 描述                                                                                                                                                                                                                                  |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MaxDecimalPlaces** | Integer | 指定允许的最大小数位数。使用 0 表示整数                                                                                                                                                                                                               |
| **Step**             | Decimal | 指定使用按键控制时数字的递增或递减量                                                                                                                                                                                                                  |
| **MinValue**         | Decimal | 可输入的最小数字。数字不能小于此值                                                                                                                                                                                                                   |
| **MaxValue**         | Decimal | 可输入的最大数字。数字不能大于此值                                                                                                                                                                                                                   |
| **DefaultValue**     | Decimal | 默认数字                                                                                                                                                                                                                                |
| **Suffix**           | String  | 如果指定，将在数字后添加文本后缀。适用于百分比（100%）或其他单位（10px、10€）。用户可以编辑此后缀，但如果删除，元素失去焦点时后缀会被重新添加                                                                                                                                                        |
