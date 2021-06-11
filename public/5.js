(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{115:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n);function r(t,e,a,n,i,r,o){try{var s=t[r](o),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var o=t.apply(e,a);function s(t){r(o,n,i,s,c,"next",t)}function c(t){r(o,n,i,s,c,"throw",t)}s(void 0)}))}}var s={name:"SubCategory",data:function(){return{add:!1,edit:!1,search:"",isLoading:!1,confirmation:!1,update:!1,subcatid:"",pagination:{current:1,total:0},categories:[],items:[],singleItem:{},dialog:!1,valid:!0,nameRules:[function(t){return!!t||"catname_is_required"}],form:{name:"",category_id:""}}},computed:{headers:function(){return[{sortable:!1,text:"Sub-Category",value:"name"},{sortable:!1,text:"Category",value:"cat_name"},{sortable:!1,text:"Actions",value:"actions"}]}},mounted:function(){this.getSubCategories(),this.getCategories()},methods:{opendialog:function(){this.dialog=!0},closedialog:function(){this.dialog=!this.dialog},getCategories:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,axios.get("api/category").then((function(e){t.categories=e.data.data,t.isLoading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getSubCategories:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("api/subcategory?page="+t.pagination.current).then((function(e){t.items=e.data.data,t.pagination.current=e.data.meta.current_page,t.pagination.total=e.data.meta.last_page,t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},onPageChange:function(){this.getSubCategories()},deleteCategory:function(t){this.confirmation=!0,this.subcatid=t.id},confirmDelete:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.delete("api/subcategory/".concat(t.subcatid)).then((function(e){t.confirmation=!1,t.getSubCategories()}));case 2:case"end":return e.stop()}}),e)})))()},searchItem:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("api/search-subcategory?keyword="+t.search).then((function(e){t.items=e.data.data,t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},submitForm:function(){var t=this;return o(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=9;break}if(0!=t.edit){e.next=7;break}return console.log("jdjd"),e.next=5,axios.post("api/subcategory",t.form).then((function(e){t.$refs.form.reset(),t.dialog=!1,t.getSubCategories()}));case 5:e.next=9;break;case 7:return e.next=9,axios.patch("api/subcategory/".concat(t.subcatid),t.form).then((function(e){t.$refs.form.reset(),t.dialog=!1,t.getSubCategories()}));case 9:case"end":return e.stop()}}),e)})))()},editCategory:function(t){this.dialog=!0,this.subcatid=t.id,this.form.name=t.name,this.form.category_id=t.cat_id,this.edit=!0}}},c=a(1),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-sm":""}},[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("\n                        ADD SUBCATEGORY\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:t.closedialog}},[t._v(" mdi-close ")])],1),t._v(" "),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-select",{attrs:{items:t.categories,label:"Category","item-text":"name","item-value":"id",dense:"",outlined:""},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Name",required:"",rules:t.nameRules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closedialog}},[t._v("\n                            Close\n                        ")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.submitForm}},[t._v("\n                            Save\n                        ")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"300"},model:{value:t.confirmation,callback:function(e){t.confirmation=e},expression:"confirmation"}},[a("v-card",[a("v-card-title",[t._v("\n                        Are you sure?\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(e){t.confirmation=!1}}},[t._v("\n                            mdi-close\n                        ")])],1),t._v(" "),a("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[a("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(e){t.confirmation=!1}}},[t._v(" No ")]),t._v(" "),a("v-btn",{attrs:{color:"success",text:""},on:{click:function(e){return t.confirmDelete()}}},[t._v(" Yes ")])],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-btn",{staticClass:"float-right",attrs:{tile:"",dark:"",color:"indigo"},on:{click:t.opendialog}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v("\n                    ADD\n                ")],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[t.isLoading?a("v-card",[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"table"}})],1):a("v-card",[a("v-card-title",[t._v("\n                        LIST\n                        "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{solo:"",dense:"","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{"click:append":t.searchItem},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",small:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-dots-horizontal ")])],1)]}}],null,!0)},[t._v(" "),a("v-list",{attrs:{small:""}},[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.editCategory(n)}}},[a("v-list-item-title",[a("v-icon",[t._v(" mdi-pencil ")]),t._v("Edit\n                                            ")],1)],1),t._v(" "),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.deleteCategory(n)}}},[a("v-list-item-title",[a("v-icon",[t._v(" mdi-delete ")]),t._v(" Delete\n                                            ")],1)],1)],1)],1)]}}])}),t._v(" "),a("v-pagination",{attrs:{length:t.pagination.total},on:{input:t.onPageChange},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);