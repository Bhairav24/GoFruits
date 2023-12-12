const express=require('express');
const axios=require('axios');
const router=express.Router();
router.post('/getlocation', async (req, res) => {
    try {
        let lat = req.body.latlong.lat
        let long = req.body.latlong.long
        console.log(lat, long)
        let location = await axios
            .get("https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + long + "&key=fe29aa2fb79248a889c90ed5bd36f22c")
            .then(async res => {
                // // console.log(`statusCode: ${res.status}`)
                // console.log(res.data.results)
                // // let response = stringify(res)
                // // response = await JSON.parse(response)
                // let response = res.data.results[0].components;
                // console.log(response)
                // let { village, county, state_district, state, postcode } = response
                // return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode)
           
                let { village, county, state_district, state, postcode } = res.data.results[0].components;
                return String(village + "," + county + "," + state_district + "," + state + "\n" + postcode);
           
           
            })
            .catch(error => {
                console.error(error)

                return "error fetching"
            })
        res.send({ location })

    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
})

router.post('/foodData',(req,res)=>{
    try {

      
        res.send([global.food_items,global.Category])
    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }
})

module.exports=router;
