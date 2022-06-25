var obj = JSON.parse($response.body);
// obj.advertisement_num = 0;
// obj.advertisement_info = [];
// delete obj.appid;
console.log(obj)
$done({body: JSON.stringify(obj)}); 
