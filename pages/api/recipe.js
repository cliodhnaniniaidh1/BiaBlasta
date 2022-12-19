
//req = contains data about incoming request
//res = sends back response
//Only triggers post requests
function handler(req,res){
   if(req.method === 'POST') {
    const data = req.body; //data of request
   }
}
export default handler