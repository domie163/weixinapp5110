const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmn11j0/",
            name: "ssmn11j0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmn11j0/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信阅读小程序"
        } 
    }
}
export default base
