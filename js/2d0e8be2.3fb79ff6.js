(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"row flex-center"},[s("div",{staticClass:"full-width"},[s("div",{staticClass:"q-gutter-md"},[s("q-carousel",{staticClass:"shadow-1 rounded-borders",attrs:{swipeable:"",animated:"","control-color":"secondary",navigation:"",padding:"",arrows:"",height:"500px"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{"img-src":"/statics/images/color-color-palette-colors-259714.jpg",name:"style"}},[s("q-icon",{attrs:{name:"style",size:"56px",color:"secondary"}}),s("div",{staticClass:"q-mt-md text-center"},[s("p",{staticClass:"q-md-lg"},[s("b",[t._v(t._s("Design Services "))])]),s("q-btn",{attrs:{color:"white",outline:"",label:"Make your Request"}})],1)],1),s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{"img-src":"/statics/images/celebrate-celebration-communication-296878.jpg",name:"tv"}},[s("q-icon",{attrs:{name:"card_giftcard",size:"56px",color:"secondary"}}),s("div",{staticClass:"q-mt-md text-center"},[s("p",{staticClass:"q-md-lg"},[s("b",[t._v(t._s("Gifts "))])]),s("q-btn",{attrs:{color:"white",outline:"",label:"Make your Request"}})],1)],1),s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{"img-src":"/statics/images/building-business-close-up-2460434.jpg",name:"layers"}},[s("q-icon",{attrs:{name:"landscape",size:"56px",color:"secondary"}}),s("div",{staticClass:"q-mt-md text-center q-pd-none q-md-none"},[s("p",{staticClass:"q-md-lg"},[s("b",[t._v(t._s("Outdoor Signage "))])]),s("q-btn",{attrs:{color:"white",outline:"",label:"Make your Request"}})],1)],1),s("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{"img-src":"/statics/images/black-black-and-white-black-white-6663.jpg",name:"map"}},[s("q-icon",{attrs:{name:"terrain",size:"56px",color:"secondary"}}),s("div",{staticClass:"q-mt-md text-center"},[s("p",{staticClass:"q-md-lg"},[s("b",[t._v(t._s("Design Services "))])]),s("q-btn",{attrs:{color:"white",outline:"",label:"Make your Request"}})],1)],1)],1)],1)]),s("div",{staticClass:"row q-pa-md q-gutter-sm"},[s("q-btn",{attrs:{outline:"",rounded:"",color:"secondary",label:"All"}}),s("q-btn",{attrs:{outline:"",rounded:"",color:"secondary",label:"Paper"}}),s("q-btn",{attrs:{outline:"",rounded:"",color:"secondary",label:"Print on Signage"}}),s("q-btn",{attrs:{outline:"",rounded:"",color:"secondary",label:"Print"}}),s("q-btn",{attrs:{outline:"",rounded:"",color:"secondary",label:"Gifts"}})],1),s("div",{staticClass:"row"},t._l(t.product_list,function(e){return s("div",{key:e.id,staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-4 col-sm-6 col-xs-12"}),s("q-card",{staticClass:"my-card"},[s("q-card-section"),s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"text-h6 text-center"},[t._v(t._s(e.product_name))]),s("div",{staticClass:"text-subtitle2 text-center"},[t._v(t._s(e.description))])]),s("q-card-actions",{attrs:{align:"around"}},[s("q-btn",{attrs:{outline:"",rounded:"",color:"red",icon:"shopping_cart",label:"Add to Cart",loading:t.loading},on:{click:function(s){return t.add_cart(e.id)}}}),s("q-btn",{attrs:{outline:"",rounded:"",color:"teal",icon:"credit_card",label:"Buy Now"}})],1)],1)],1)}),0),t._v(t._s(t.userData)+"\n\n  ")])},r=[],n=s("967e"),i=s.n(n),c=(s("96cf"),s("fa84")),o=s.n(c),l={name:"PageIndex",data:function(){return{loading:!1,slide:"style",product_list:[]}},created:function(){this.get_data()},computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]},userData:function(){return this.$store.getters["auth/user"]}},methods:{get_data:function(){var t=o()(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("api/product");case 2:e=t.sent,this.product_list=e.data.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),add_cart:function(){var t=o()(i.a.mark(function t(e){return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.$axios.post("api/cart",{user_id:1,product_id:e});case 4:t.sent,this.$store.dispatch("auth/user"),this.$q.notify({message:"Successufully added to cart",color:"secondary"}),this.loading=!1,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e){return t.apply(this,arguments)}return e}()}},d=l,u=s("2877"),p=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=p.exports}}]);