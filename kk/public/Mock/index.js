const Mock=require('mockjs')

const data=[]
for(let i=0;i<10;i++){
    data.push({
        id:Mock.Random.id(),
        img:Mock.Random.image('100x100',Mock.Random.color()),
        name:Mock.Random.cname(),
        title:Mock.Random.ctitle()
    })
}

module.exports={
    data
}