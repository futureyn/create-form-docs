# CreateForm Blog
## latest 1.7.0
> [!NOTE]
> 【date】类型组件支持选择年月日时分

```html
<xc-form
        dataSource="{{dataForm}}"
></xc-form>
```
```js
Page({
    data: {
        dataForm: [
            {
                ele: 'date',
                placeholder: "请选择时间",
                parameter: 'date',
                required: true,
                disabled: false,
                label:'请选择时间',
                titleWidth: 100,
                defaultValue:"",
                type: 'datetime', // 新增属性
            }
        ]
    },
})
```
## 1.2.2
> [!NOTE]
> 增加输入类型【input】失去焦点后验证，获取当前组件输入的值和当前的组件名称

```html
<xc-form
    bind:blurGroup="onBlur"
></xc-form>
```
```js
Page({
    data: {},
    onBlur(e){
        // e.detail
        // { label: '姓名', value: '张三' }
    }
})
```

## 1.1.1
> [!NOTE]
> 增加 setComponentsAfter函数 向某个组件后添加一个组件

```html
<xc-form
    id="id"
></xc-form>
<van-button bind:tap="onAdd">添加</van-button>  
```
```js
Page({
    data: {},
    onAdd(e){
        this.selectComponent("#id").setComponentAfter('name', {
            ele:'input',
            parameter: 'age',
            placeholder:'请输入年龄',
            maxLength: 2,
            label:'年龄',
            titleWidth: 30,
            defaultValue: "",
            required: true,
            toastMessage:'年龄必填',
            disabled: false
        });
    }
})
```


## 1.0.0
> [!NOTE]
> 增加 setFieldDiabled函数 将某个值设置为是否禁用

```html
<xc-form
    id="id"
></xc-form>
<van-button bind:tap="onNameDisabled">禁用姓名</van-button>  
```
```js
Page({
    data: {},
    onNameDisabled(e){
        this.selectComponent("#id").setFieldDiabled(['name', true]);
    }
})
```
