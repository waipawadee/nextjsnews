export default function random-number(req,res) {
    
    console.log("Request body: ",req.body);

    res.json ({ num: Math.floor(Math.random()*10) })

}

