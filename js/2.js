var login = document.getElementsByClassName("header")[0].children[1].children[0]
var intro = document.getElementsByClassName("banner")[0].children[0].children[2].children[0]
var desc = document.getElementsByClassName("desc")
var tab = document.getElementsByClassName("tab")
console.log(desc)
var arr = [1,2]
console.log(arr.map((v,i)=>(v*i)))
// console.log(desc.map(v=>v.innerHTML = "1"))
// for(var i=0;i<desc.length;i++){
//     desc[i].innerHTML = "1"
//     console.log(desc[i].innerHTML)
// }
// let token = window.localStorage.getItem("token");
// console.log(token)
// axios.defaults.headers.common['token'] = token
// axios.defaults.withCredentials=true
// console.log(document.cookie)
axios({
    method:'get',
    url:'https://www.easy-mock.com/mock/5e75826fb6cc11259439bf2e/pro/',
    // withCredentials: true,
    // headers:{'token':token}
    // params:{
    //     account:account,
    //     password:password
    // },
}).then(function(response){
    // console.log(response)
    // if(response.data.state == 0){
    //     console.log(response.data.data.msg)
    // }
    console.log(response.data.state)
    console.log(response.data.data)
    // console.log(response.data.data.token)
    login.innerHTML = response.data.data.banner.login.title
    intro.innerHTML = response.data.data.intro.title
    // for(var i=0;i<tab.length;i++){
    //     tab.innerHTML = response.data.data.arts
    // }
    for(var i=0;i<desc.length;i++){
        desc[i].innerHTML = response.data.data.projects.data[i].desc
        console.log(desc[i].innerHTML)
    }
    // window.location.href = "3.html"
    // desc.map((v,i)=>{v.innerHTML = response.data.data.data[i].desc})   
})