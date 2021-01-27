var app = new Vue({
 el: '#root',
 data:{
   imgList: [
     'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
     'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
   ],
   index : 0,
   active: 'active',
 },
 methods:{
    next: function(){
        this.index++
      if (this.index === this.imgList.length) {
        this.index = 0

      }
      console.log(this.index);
      return this.index
    },
    prev: function(){
      this.index--
      if (this.index == -1 ) {
        this.index = this.imgList.length - 1;
      }
      console.log(this.index);
      return this.index
    },
    isActive: function(i){
      if (i == this.index) {
        return 'fas fa-circle active'
      }else {
        return 'fas fa-circle'
      }
    },
    changePic:function(i){
      this.index = i
    }
 },
});

Vue.config.devtools = true;
