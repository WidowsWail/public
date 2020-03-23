// window.onload = function(){
    
    // const axios = require('axios')
    console.log(axios)
    
    var login = document.getElementsByClassName("btn")[0]
        login.onclick = function(){
            var account = document.getElementsByClassName("input-group")[0].children[0].value
            var password = document.getElementsByClassName("input-group")[1].children[0].value
            // console.log(1)
            // console.log(account,password)
            
                
                axios({
                    method:'post',
                    url:'https://www.easy-mock.com/mock/5e75826fb6cc11259439bf2e/pro/login',
                    data:{
                        account:account,
                        password:password
                    },
                }).then(function(response){
                    // console.log(response)
                    // if(response.data.state == 0){
                    //     console.log(response.data.data.msg)
                    // }
                    if(response.data.state==0){
                        // alert("1")
                        // document.cookie = "state="+response.data.state
                        window.location.href = "5.html"
                        console.log(response.data.state)
                        console.log(response.data.data)
                        // console.log(window.localStorage.getItem("token"))
                        // localStorage.setItem('token',response.data.data.token)
                        // cookies.setItem('token',response.data.state)
                        
                        
                    }else if(response.data.state==1){
                        console.log(response.data.state)
                        console.log(response.data.data.msg)
                    }
                   
                })
                // axios({
                //     method:'get',
                //     url:'https://www.easy-mock.com/mock/5e75826fb6cc11259439bf2e/pro',
                //     // params:{
                //     //     account:account,
                //     //     password:password
                //     // },
                // }).then(function(response){
                //     console.log(response)
                //     // if(response.data.state == 0){
                //     //     console.log(response.data.data.msg)
                //     // }
                // })
            
        
        }
// }