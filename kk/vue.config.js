
const data=require('./public/Mock/index')

module.exports={
    lintOnSave:false,
    devServer:{
        before:function(app){
            app.get('/api/list',(req,res)=>{
                res.json(data)
            })
        }
    }
}