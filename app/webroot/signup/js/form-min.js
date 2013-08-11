/* ZD */
YUI.add("form",function(Y){var validateJSON={name:{required:{errmsg:"请填写您的姓名"}},birthday:{required:{errmsg:"请选择正确的出生日期"}},highschool:{required:{errmsg:"请填写您所在高中"}},telephone:{required:{errmsg:"请填写您的手机号码"},regx:{rule:"telephone",errmsg:"您所填的手机号码格式不正确"}},qq:{required:{errmsg:"请填写您的QQ号码"},regx:{rule:"number",errmsg:"您所填的QQ号码格式不正确"}},email:{required:{errmsg:"请填写您的邮箱"},regx:{rule:"email",errmsg:"您所填的邮箱格式不正确"}}};Y.Form={init:function(){this.domCache(),this.initDateCascade(),this.initValidator(),this.bindEvents()},domCache:function(){this.form=Y.one("#s-form"),this.formNode=this.form.getDOMNode(),this.elemNodes=this.formNode.elements,this.elems=Y.all(this.elemNodes),this.requiredInputs=this.form.all(".required-info .elem-txt"),this.dateSelectInput=this.form.one("#birthday"),this.uploadInput=this.form.one("#avartar-unload-ipt"),this.avartarImage=this.form.one(".avartar-image img")},initDateCascade:function(){this.date=new Y.DateCascade({id:"f-birthday",dateStart:"1950/01/01"}),this.dateSelectInput.set("value",this.date.get("date"))},initValidator:function(){this.validator=Validator(validateJSON)},bindEvents:function(){this.form.on("submit",function(a){var b,c=this.validator.checkForm(this.formNode);a.preventDefault(),this.removeError(this.requiredInputs),c.valid?this.submit():(this.addError(c.ErrObj),b=this.form.one(".item-error .elem-txt"),b.hasClass("hidden")&&(b=b.ancestor("li").one("select")),b.focus())},this),this.requiredInputs.on("blur",function(a){var b=this.validator.validateElem(a.target.getDOMNode());b.valid?this.removeError(a.target):this.addError(b.ErrObj)},this),this.date.after("dateChange",function(a){this.dateSelectInput.set("value",a.newVal),a.newVal?this.removeError(this.dateSelectInput):this.addError(this.validator.validateElem(this.dateSelectInput._node).ErrObj)},this),this.uploadInput.on("change",function(a){var b,c=this,d=a.target._node.files;d&&"undefined"!=typeof FileReader&&(b=new FileReader,b.onload=function(){c.avartarImage._node.src=this.result},b.readAsDataURL(d[0]))},this)},addError:function(a,b){var c;Y.Lang.isUndefined(b)?Y.Object.each(a,function(a,b){this.addError(b,a[0])},this):(a=Y.one(Y.Lang.isString(a)?this.elemNodes[a]:a),a&&(c=a.ancestor("li"),c.addClass("item-error"),c.one(".info").setContent(b)))},removeError:function(a){var b;a.size?a.each(function(a){this.removeError(a)},this):(a=Y.one(a),a&&(b=a.ancestor("li"),b.removeClass("item-error"),a.ancestor("li").one(".info").setContent("")))},submit:function(){Y.io(this.form.getAttribute("action"),{method:"POST",on:{success:function(){alert("报名成功！")},failure:function(id,res){var r;try{r=eval("("+res.responseText+")")}catch(err){}alert(r&&r.msg||"报名失败，请稍后重试")}},form:{id:this.form._node}})}},Y.Form.init()},"0.0.1",{requires:["node","validator","event-hover","io"]});