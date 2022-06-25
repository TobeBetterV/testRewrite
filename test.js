var obj = JSON.parse($response.body);
// var obj1 = JSON.parse(obj);
// obj.advertisement_num = 0;
// obj.advertisement_info = [];
// delete obj.appid;
obj['data'].map((oneObj)=>{
    oneObj['module'].map((twoObj)=>{
        twoObj['vip'] = 0;
        twoObj['vip_state'] = true;
        console.log(twoObj)
    })
})
$done({body: JSON.stringify(obj)}); 
