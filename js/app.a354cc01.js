(function(){"use strict";var e={3043:function(e,o,t){var n=t(5130),r=t(6768);function s(e,o,t,n,s,a){const i=(0,r.g2)("MainNavigation"),l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(i),(0,r.bF)(l)])}const a={class:"bg-gray-800 p-4"},i={class:"container mx-auto flex justify-between items-center"},l=(0,r.Lk)("div",{class:"text-white text-xl font-semibold"},"Room Booking",-1);function c(e,o,t,n,s,c){const d=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",a,[(0,r.Lk)("div",i,[l,(0,r.Lk)("div",null,[s.isLoggedIn?((0,r.uX)(),(0,r.Wv)(d,{key:0,to:"/",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1})):(0,r.Q3)("",!0),s.isLoggedIn?((0,r.uX)(),(0,r.Wv)(d,{key:1,to:"/rooms",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Rooms")])),_:1})):(0,r.Q3)("",!0),s.isLoggedIn?((0,r.uX)(),(0,r.Wv)(d,{key:2,to:"/bookings",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Bookings")])),_:1})):(0,r.Q3)("",!0),s.isAdmin?((0,r.uX)(),(0,r.Wv)(d,{key:3,to:"/admin",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Admin")])),_:1})):(0,r.Q3)("",!0),s.isLoggedIn?((0,r.uX)(),(0,r.CE)("button",{key:4,onClick:o[0]||(o[0]=(...e)=>c.logout&&c.logout(...e)),class:"text-gray-300 hover:text-white mx-2"},"Logout")):((0,r.uX)(),(0,r.CE)(r.FK,{key:5},[(0,r.bF)(d,{to:"/login",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1}),(0,r.bF)(d,{to:"/register",class:"text-gray-300 hover:text-white mx-2"},{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})],64))])])])}t(4114);var d={name:"MainNavigation",data(){return{isLoggedIn:!1,isAdmin:!1}},created(){this.checkAuth()},methods:{checkAuth(){const e=localStorage.getItem("token"),o=localStorage.getItem("role");this.isLoggedIn=!!e,this.isAdmin="admin"===o},logout(){localStorage.removeItem("token"),localStorage.removeItem("role"),this.isLoggedIn=!1,this.isAdmin=!1,this.$router.push("/login")}},watch:{$route(){this.checkAuth()}}},u=t(1241);const m=(0,u.A)(d,[["render",c]]);var p=m,b={name:"App",components:{MainNavigation:p}};const h=(0,u.A)(b,[["render",s]]);var g=h,k=t(1387);const f={class:"min-h-screen flex items-center justify-center bg-gray-100"},y={class:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md"},w=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6 text-center"},"Login",-1),v={class:"mb-4"},x=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"username"},"Username",-1),L={class:"mb-4"},R=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"password"},"Password",-1),C=(0,r.Lk)("button",{class:"w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"},"Login",-1),E={class:"mt-4 text-center"};function A(e,o,t,s,a,i){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.Lk)("div",y,[w,(0,r.Lk)("form",{onSubmit:o[2]||(o[2]=(0,n.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",v,[x,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>a.username=e),class:"w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",id:"username",type:"text",required:""},null,512),[[n.Jo,a.username]])]),(0,r.Lk)("div",L,[R,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>a.password=e),class:"w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",id:"password",type:"password",required:""},null,512),[[n.Jo,a.password]])]),C],32),(0,r.Lk)("p",E,[(0,r.eW)(" Don't have an account? "),(0,r.bF)(l,{to:"/register",class:"text-blue-500 hover:underline"},{default:(0,r.k6)((()=>[(0,r.eW)("Register")])),_:1})])])])}t(4979);var _=t(4373);const S=_.A.create({baseURL:"https://room-booking-api.chips.my",headers:{"Content-Type":"application/json"}});S.interceptors.request.use((e=>{const o=localStorage.getItem("token");return o&&(e.headers.Authorization=`Bearer ${o}`),e}),(e=>Promise.reject(e)));var X=S,D={name:"LoginPage",data(){return{username:"",password:""}},methods:{async login(){try{const e=await X.post("/login",{username:this.username,password:this.password});localStorage.setItem("token",e.data.token);const o=e.data.token.split(".")[1],t=o.replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")),r=JSON.parse(n);localStorage.setItem("role",r.role),this.$router.push("/")}catch(e){console.error("Login failed",e)}}}};const I=(0,u.A)(D,[["render",A]]);var F=I;const q={class:"min-h-screen flex items-center justify-center bg-gray-100"},O={class:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md"},U=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6 text-center"},"Register",-1),B={class:"mb-4"},W=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"username"},"Username",-1),j={class:"mb-4"},P=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"email"},"Email",-1),$={class:"mb-4"},J=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"password"},"Password",-1),V=(0,r.Lk)("button",{class:"w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"},"Register",-1),M={class:"mt-4 text-center"};function N(e,o,t,s,a,i){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",q,[(0,r.Lk)("div",O,[U,(0,r.Lk)("form",{onSubmit:o[3]||(o[3]=(0,n.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",B,[W,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>a.username=e),class:"w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",id:"username",type:"text",required:""},null,512),[[n.Jo,a.username]])]),(0,r.Lk)("div",j,[P,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>a.email=e),class:"w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",id:"email",type:"email",required:""},null,512),[[n.Jo,a.email]])]),(0,r.Lk)("div",$,[J,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>a.password=e),class:"w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",id:"password",type:"password",required:""},null,512),[[n.Jo,a.password]])]),V],32),(0,r.Lk)("p",M,[(0,r.eW)(" Already have an account? "),(0,r.bF)(l,{to:"/login",class:"text-blue-500 hover:underline"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})])])])}var Q={name:"RegisterPage",data(){return{username:"",email:"",password:""}},methods:{async register(){try{await X.post("/register",{username:this.username,email:this.email,password:this.password}),this.$router.push("/login")}catch(e){console.error("Registration failed",e)}}}};const T=(0,u.A)(Q,[["render",N]]);var K=T,H=t(4232);const z={class:"min-h-screen bg-gray-100 p-8"},G=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6"},"Rooms",-1),Y={class:"text-xl font-semibold"};function Z(e,o,t,n,s,a){return(0,r.uX)(),(0,r.CE)("div",z,[G,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.rooms,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"bg-white p-6 rounded-lg shadow mb-6"},[(0,r.Lk)("h2",Y,(0,H.v_)(e.name),1),(0,r.Lk)("p",null,(0,H.v_)(e.description),1),(0,r.Lk)("p",null,"Capacity: "+(0,H.v_)(e.capacity),1),(0,r.Lk)("p",null,[(0,r.eW)("Status: "),(0,r.Lk)("span",{class:(0,H.C4)({"text-green-500":e.available,"text-red-500":!e.available})},(0,H.v_)(e.available?"Available":"Booked"),3)])])))),128))])}var ee={name:"HomePage",data(){return{rooms:[]}},created(){this.fetchRooms()},methods:{async fetchRooms(){try{const e=await X.get("/available");this.rooms=e.data}catch(e){console.error("Error fetching rooms",e)}},async bookRoom(e){try{await X.post("/book",{room_id:e,booking_date:(new Date).toISOString().split("T")[0]}),alert("Room booked successfully"),this.fetchRooms()}catch(o){console.error("Error booking room",o)}}}};const oe=(0,u.A)(ee,[["render",Z]]);var te=oe;const ne={class:"min-h-screen bg-gray-100 p-8"},re=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6"},"Rooms",-1),se={class:"text-xl font-semibold"},ae=["onClick"];function ie(e,o,t,n,s,a){return(0,r.uX)(),(0,r.CE)("div",ne,[re,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.rooms,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"bg-white p-6 rounded-lg shadow mb-6"},[(0,r.Lk)("h2",se,(0,H.v_)(e.name),1),(0,r.Lk)("p",null,(0,H.v_)(e.description),1),(0,r.Lk)("p",null,"Capacity: "+(0,H.v_)(e.capacity),1),(0,r.Lk)("button",{onClick:o=>a.bookRoom(e.id),class:"bg-blue-500 text-white px-4 py-2 rounded mt-4"},"Book",8,ae)])))),128))])}var le={name:"RoomsPage",data(){return{rooms:[]}},created(){this.fetchRooms()},methods:{async fetchRooms(){try{const e=await X.get("/rooms");this.rooms=e.data}catch(e){console.error("Error fetching rooms",e)}},async bookRoom(e){try{await X.post("/book",{room_id:e,booking_date:(new Date).toISOString().split("T")[0]}),alert("Room booked successfully")}catch(o){console.error("Error booking room",o)}}}};const ce=(0,u.A)(le,[["render",ie]]);var de=ce;const ue={class:"min-h-screen bg-gray-100 p-8"},me=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6"},"My Bookings",-1),pe={class:"text-xl font-semibold"},be=["onClick"];function he(e,o,t,n,s,a){return(0,r.uX)(),(0,r.CE)("div",ue,[me,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.bookings,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"bg-white p-6 rounded-lg shadow mb-6"},[(0,r.Lk)("h2",pe,"Room: "+(0,H.v_)(e.room_name),1),(0,r.Lk)("p",null,"Booking Date: "+(0,H.v_)(e.booking_date),1),(0,r.Lk)("p",null,"Status: "+(0,H.v_)(e.status),1),"booked"===e.status?((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:o=>a.cancelBooking(e.id),class:"bg-red-500 text-white px-4 py-2 rounded mt-4"}," Cancel ",8,be)):(0,r.Q3)("",!0)])))),128))])}var ge={name:"BookingsPage",data(){return{bookings:[]}},created(){this.fetchBookings()},methods:{async fetchBookings(){try{const e=await X.get("/bookings");this.bookings=e.data}catch(e){console.error("Error fetching bookings",e)}},async cancelBooking(e){try{await X.post(`/cancel/${e}`),alert("Booking cancelled successfully"),this.fetchBookings()}catch(o){console.error("Error cancelling booking",o)}}}};const ke=(0,u.A)(ge,[["render",he]]);var fe=ke;const ye={class:"min-h-screen bg-gray-100 p-8"},we=(0,r.Lk)("h1",{class:"text-2xl font-semibold mb-6"},"Admin Dashboard",-1),ve={key:0,class:"bg-white p-6 rounded-lg shadow mb-6"},xe=(0,r.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Add New Room",-1),Le={class:"mb-4"},Re=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"name"},"Name",-1),Ce={class:"mb-4"},Ee=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"description"},"Description",-1),Ae={class:"mb-4"},_e=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"capacity"},"Capacity",-1),Se=(0,r.Lk)("button",{type:"submit",class:"bg-green-500 text-white px-4 py-2 rounded"},"Add Room",-1),Xe={class:"text-xl font-semibold"},De=["onClick"],Ie=["onClick"],Fe={key:1,class:"bg-white p-6 rounded-lg shadow mb-6"},qe=(0,r.Lk)("h2",{class:"text-xl font-semibold mb-4"},"Edit Room",-1),Oe={class:"mb-4"},Ue=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"edit-name"},"Name",-1),Be={class:"mb-4"},We=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"edit-description"},"Description",-1),je={class:"mb-4"},Pe=(0,r.Lk)("label",{class:"block mb-1 font-medium",for:"edit-capacity"},"Capacity",-1),$e=(0,r.Lk)("button",{type:"submit",class:"bg-green-500 text-white px-4 py-2 rounded"},"Update Room",-1);function Je(e,o,t,s,a,i){return(0,r.uX)(),(0,r.CE)("div",ye,[we,(0,r.Lk)("button",{onClick:o[0]||(o[0]=e=>a.showAddRoomForm=!0),class:"bg-blue-500 text-white px-4 py-2 rounded mb-6"},"Add New Room"),a.showAddRoomForm?((0,r.uX)(),(0,r.CE)("div",ve,[xe,(0,r.Lk)("form",{onSubmit:o[5]||(o[5]=(0,n.D$)(((...e)=>i.addRoom&&i.addRoom(...e)),["prevent"]))},[(0,r.Lk)("div",Le,[Re,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>a.newRoom.name=e),class:"w-full px-4 py-2 border rounded",id:"name",type:"text",required:""},null,512),[[n.Jo,a.newRoom.name]])]),(0,r.Lk)("div",Ce,[Ee,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":o[2]||(o[2]=e=>a.newRoom.description=e),class:"w-full px-4 py-2 border rounded",id:"description",required:""},null,512),[[n.Jo,a.newRoom.description]])]),(0,r.Lk)("div",Ae,[_e,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>a.newRoom.capacity=e),class:"w-full px-4 py-2 border rounded",id:"capacity",type:"number",required:""},null,512),[[n.Jo,a.newRoom.capacity]])]),Se,(0,r.Lk)("button",{onClick:o[4]||(o[4]=e=>a.showAddRoomForm=!1),class:"bg-red-500 text-white px-4 py-2 rounded ml-2"},"Cancel")],32)])):(0,r.Q3)("",!0),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.rooms,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"bg-white p-6 rounded-lg shadow mb-6"},[(0,r.Lk)("h2",Xe,(0,H.v_)(e.name),1),(0,r.Lk)("p",null,(0,H.v_)(e.description),1),(0,r.Lk)("p",null,"Capacity: "+(0,H.v_)(e.capacity),1),(0,r.Lk)("button",{onClick:o=>i.editRoom(e),class:"bg-yellow-500 text-white px-4 py-2 rounded mt-4"},"Edit",8,De),(0,r.Lk)("button",{onClick:o=>i.deleteRoom(e.id),class:"bg-red-500 text-white px-4 py-2 rounded mt-4 ml-2"},"Delete",8,Ie)])))),128)),a.showEditRoomForm?((0,r.uX)(),(0,r.CE)("div",Fe,[qe,(0,r.Lk)("form",{onSubmit:o[10]||(o[10]=(0,n.D$)(((...e)=>i.updateRoom&&i.updateRoom(...e)),["prevent"]))},[(0,r.Lk)("div",Oe,[Ue,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[6]||(o[6]=e=>a.editRoomData.name=e),class:"w-full px-4 py-2 border rounded",id:"edit-name",type:"text",required:""},null,512),[[n.Jo,a.editRoomData.name]])]),(0,r.Lk)("div",Be,[We,(0,r.bo)((0,r.Lk)("textarea",{"onUpdate:modelValue":o[7]||(o[7]=e=>a.editRoomData.description=e),class:"w-full px-4 py-2 border rounded",id:"edit-description",required:""},null,512),[[n.Jo,a.editRoomData.description]])]),(0,r.Lk)("div",je,[Pe,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[8]||(o[8]=e=>a.editRoomData.capacity=e),class:"w-full px-4 py-2 border rounded",id:"edit-capacity",type:"number",required:""},null,512),[[n.Jo,a.editRoomData.capacity]])]),$e,(0,r.Lk)("button",{onClick:o[9]||(o[9]=e=>a.showEditRoomForm=!1),class:"bg-red-500 text-white px-4 py-2 rounded ml-2"},"Cancel")],32)])):(0,r.Q3)("",!0)])}var Ve={name:"AdminHomePage",data(){return{rooms:[],showAddRoomForm:!1,showEditRoomForm:!1,newRoom:{name:"",description:"",capacity:""},editRoomData:{id:"",name:"",description:"",capacity:""}}},created(){this.fetchRooms()},methods:{async fetchRooms(){try{const e=await X.get("/rooms");this.rooms=e.data}catch(e){console.error("Error fetching rooms",e)}},async addRoom(){try{await X.post("/admin/rooms",this.newRoom),this.newRoom={name:"",description:"",capacity:""},this.showAddRoomForm=!1,this.fetchRooms()}catch(e){console.error("Error adding room",e)}},editRoom(e){this.editRoomData={...e},this.showEditRoomForm=!0},async updateRoom(){try{await X.put(`/admin/rooms/${this.editRoomData.id}`,this.editRoomData),this.showEditRoomForm=!1,this.fetchRooms()}catch(e){console.error("Error updating room",e)}},async deleteRoom(e){try{await X.delete(`/admin/rooms/${e}`),this.fetchRooms()}catch(o){console.error("Error deleting room",o)}}}};const Me=(0,u.A)(Ve,[["render",Je]]);var Ne=Me;const Qe=[{path:"/",component:te,meta:{requiresAuth:!0,title:"Home"}},{path:"/login",component:F,meta:{title:"Login"}},{path:"/register",component:K,meta:{title:"Register"}},{path:"/rooms",component:de,meta:{requiresAuth:!0,title:"Rooms"}},{path:"/bookings",component:fe,meta:{requiresAuth:!0,title:"My Bookings"}},{path:"/admin",component:Ne,meta:{requiresAuth:!0,requiresAdmin:!0,title:"Admin Dashboard"}}],Te=(0,k.aE)({history:(0,k.LA)(),routes:Qe});Te.beforeEach(((e,o,t)=>{const n=!!localStorage.getItem("token"),r=localStorage.getItem("role");e.matched.some((e=>e.meta.requiresAuth))&&!n?t("/login"):e.matched.some((e=>e.meta.requiresAdmin))&&"admin"!==r?t("/"):(e.meta.title&&(document.title=e.meta.title),t())}));var Ke=Te;const He=(0,n.Ef)(g);He.config.globalProperties.$axios=X,He.use(Ke),He.mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var d=l(t)}for(o&&o(n);c<a.length;c++)s=a[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3043)}));n=t.O(n)})();
//# sourceMappingURL=app.a354cc01.js.map