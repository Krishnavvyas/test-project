"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[667],{6667:(k,u,l)=>{l.r(u),l.d(u,{CustomerDetailsModule:()=>w});var s=l(6814),m=l(72),o=l(95),e=l(4946),c=l(6655);function d(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Name is required. "),e.qZA())}function g(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Name must have at least 3 character. "),e.qZA())}function p(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Name must have at most 50 characters. "),e.qZA())}function f(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Name can have aplhabtes & space only. "),e.qZA())}function h(t,a){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,d,2,0,"div",21),e.YNc(2,g,2,0,"div",21),e.YNc(3,p,2,0,"div",21),e.YNc(4,f,2,0,"div",21),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.name.errors?null:r.name.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.name.errors?null:r.name.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==r.name.errors?null:r.name.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.name.errors?null:r.name.errors.pattern)}}function v(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Age is required. "),e.qZA())}function _(t,a){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,v,2,0,"div",21),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.age.errors?null:r.age.errors.required)}}function C(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Email is required. "),e.qZA())}function Z(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Email must have at least 5 character. "),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Email must have at most 250 characters. "),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Invalid email format. "),e.qZA())}function D(t,a){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,C,2,0,"div",21),e.YNc(2,Z,2,0,"div",21),e.YNc(3,T,2,0,"div",21),e.YNc(4,N,2,0,"div",21),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.email.errors?null:r.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.email.errors?null:r.email.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==r.email.errors?null:r.email.errors.maxlength),e.xp6(1),e.Q6J("ngIf",!(null!=r.email.errors&&r.email.errors.required)&&!(null!=r.email.errors&&r.email.errors.minlength)&&!(null!=r.email.errors&&r.email.errors.maxlength)&&(null==r.email.errors?null:r.email.errors.emailValidator))}}function y(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Account Number is required. "),e.qZA())}function F(t,a){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,y,2,0,"div",21),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.accountNo.errors?null:r.accountNo.errors.required)}}function q(t,a){if(1&t&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&t){const r=a.$implicit;e.Q6J("ngValue",r),e.xp6(1),e.hij(" ",r," ")}}function I(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1," Card type is required. "),e.qZA())}function A(t,a){1&t&&(e.TgZ(0,"div",26)(1,"strong"),e._uU(2,"Failure! "),e.qZA(),e._uU(3," Card already exists for this account number.\n"),e.qZA())}const x=[{path:"",component:(()=>{class t{constructor(r){this.router=r,this.userData=[],this.showBanner=!1,this.cards=["Platinum Card","Silver Card","Gold Card","Master Card"],this.user={}}ngOnInit(){this.customerDetailsForm=new o.cw({name:new o.NI(this.user.name,[o.kI.required,o.kI.minLength(3),o.kI.maxLength(50),o.kI.pattern("^[a-zA-Z ]*$")]),age:new o.NI(this.user.age,[o.kI.required,o.kI.maxLength(2)]),email:new o.NI(this.user.email,[o.kI.required,o.kI.minLength(5),o.kI.maxLength(50)]),accountNo:new o.NI(this.user.accountNo,[o.kI.required,o.kI.minLength(5),o.kI.maxLength(12)]),cardType:new o.NI(this.user.cardType,[o.kI.required])})}get name(){return this.customerDetailsForm.get("name")}get age(){return this.customerDetailsForm.get("age")}get email(){return this.customerDetailsForm.get("email")}get accountNo(){return this.customerDetailsForm.get("accountNo")}get cardType(){return this.customerDetailsForm.get("cardType")}validate(){if(this.showBanner=!1,this.customerDetailsForm.invalid){for(const n of Object.keys(this.customerDetailsForm.controls))this.customerDetailsForm.controls[n].markAsTouched();return}this.user=this.customerDetailsForm.value,console.log("userrrr",this.user);const r=localStorage.getItem("userDetails")||null;console.log("daaaaa",r),r?(this.userData=JSON.parse(r),console.log("userData",this.userData),this.userData.forEach(n=>{if(n.accountNo===this.customerDetailsForm.get("accountNo").value&&n.cardType===this.customerDetailsForm.get("cardType").value)return console.log("hiiii"),void(this.showBanner=!0)})):this.userData=[],this.userData.push(this.user),localStorage.setItem("userDetails",JSON.stringify(this.userData)),this.showBanner||this.router.navigateByUrl("card-status")}changeType(r){console.log("eventtt",r);let n=r.target.value;console.log("id:",n),this.customerDetailsForm.controls.cardType.clearValidators(),0==n&&this.customerDetailsForm.controls.cardType.setValidators([o.kI.required])}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(m.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-customer-details-form"]],decls:47,vars:16,consts:[[1,"container-fluid","py-3"],[1,"d-flex","justify-content-center"],[1,"row","justify-content-center","my-5"],[1,"col-4"],[3,"formGroup"],["form","ngForm"],[1,"row"],[1,"col","mb-2"],["for","name",1,"form-label"],["type","text","id","name","name","name","formControlName","name","placeholder","Your name","required","","minlength","3","maxlength","50",1,"form-control","form-control-sm"],["class","invalid-feedback",4,"ngIf"],["for","age",1,"form-label"],["type","number","id","age","name","age","formControlName","age","placeholder","Your age","maxlength","2",1,"form-control","form-control-sm"],["for","email",1,"form-label"],["type","email","id","email","name","email","formControlName","email","placeholder","your-name@provider.com","required","","minlength","5","maxlength","250",1,"form-control","form-control-sm"],["for","accountNo",1,"form-label"],["type","number","id","accountNo","name","accountNo","formControlName","accountNo","placeholder","Your accountNo","minlength","5","maxlength","10",1,"form-control","form-control-sm"],[1,"dropdown"],["formControlName","cardType",1,"custom-select","mb-3","btn","btn-secondary",3,"change"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"invalid-feedback"],[4,"ngIf"],[1,"col","mb-2","d-grid","card-hover"],["type","button",1,"btn","btn-sm","btn-success",3,"click"],["class","alert alert-danger fade show width-30 d-flex mx-auto",4,"ngIf"],[3,"ngValue"],[1,"alert","alert-danger","fade","show","width-30","d-flex","mx-auto"]],template:function(n,i){1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-header-details"),e.qZA(),e.TgZ(2,"div",0)(3,"h1",1),e._uU(4,"Apply for Instant Credit Card"),e.qZA(),e.TgZ(5,"div",2)(6,"div",3)(7,"form",4,5)(9,"div",6)(10,"div",7)(11,"label",8),e._uU(12,"Name:"),e.qZA(),e._UZ(13,"input",9),e.YNc(14,h,5,4,"div",10),e.qZA()(),e.TgZ(15,"div",6)(16,"div",7)(17,"label",11),e._uU(18,"Age:"),e.qZA(),e._UZ(19,"input",12),e.YNc(20,_,2,1,"div",10),e.qZA()(),e.TgZ(21,"div",6)(22,"div",7)(23,"label",13),e._uU(24,"Email:"),e.qZA(),e._UZ(25,"input",14),e.YNc(26,D,5,4,"div",10),e.qZA()(),e.TgZ(27,"div",6)(28,"div",7)(29,"label",15),e._uU(30,"Account Number:"),e.qZA(),e._UZ(31,"input",16),e.YNc(32,F,2,1,"div",10),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7)(35,"label",15),e._uU(36,"Card Type:"),e.qZA(),e.TgZ(37,"div",17)(38,"select",18),e.NdJ("change",function(Y){return i.changeType(Y)}),e.YNc(39,q,2,2,"option",19),e.qZA()(),e.TgZ(40,"div",20),e.YNc(41,I,2,0,"div",21),e.qZA()()(),e.TgZ(42,"div",6)(43,"div",22)(44,"button",23),e.NdJ("click",function(){return i.validate()}),e._uU(45,"Get Card"),e.qZA()()()()()(),e.YNc(46,A,4,0,"div",24),e.qZA()),2&n&&(e.xp6(7),e.Q6J("formGroup",i.customerDetailsForm),e.xp6(6),e.ekj("is-invalid",i.name.invalid&&(i.name.dirty||i.name.touched)),e.xp6(1),e.Q6J("ngIf",i.name.invalid&&(i.name.dirty||i.name.touched)),e.xp6(5),e.ekj("is-invalid",i.age.invalid&&(i.age.dirty||i.age.touched)),e.xp6(1),e.Q6J("ngIf",i.age.invalid&&(i.age.dirty||i.age.touched)),e.xp6(5),e.ekj("is-invalid",i.email.invalid&&(i.email.dirty||i.email.touched)),e.xp6(1),e.Q6J("ngIf",i.email.invalid&&(i.email.dirty||i.email.touched)),e.xp6(5),e.ekj("is-invalid",i.accountNo.invalid&&(i.accountNo.dirty||i.accountNo.touched)),e.xp6(1),e.Q6J("ngIf",i.accountNo.invalid&&(i.accountNo.dirty||i.accountNo.touched)),e.xp6(7),e.Q6J("ngForOf",i.cards),e.xp6(2),e.Q6J("ngIf",null==i.cardType.errors?null:i.cardType.errors.required),e.xp6(5),e.Q6J("ngIf",i.showBanner))},dependencies:[s.sg,s.O5,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.Q7,o.wO,o.nD,o.sg,o.u,c.x],styles:[".width-30[_ngcontent-%COMP%]{max-width:30%}"]})}return t})()}];let J=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(x),m.Bz]})}return t})();var U=l(8236);let w=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[s.ez,J,o.UX,U.HeaderDetailsModule]})}return t})()}}]);