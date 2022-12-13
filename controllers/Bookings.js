const path = require('path')

const User = require('../models/Bookings')

exports.getBooking =  (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'Booking.html'));
}

exports.postBooking = (req, res, next) => {
  console.log(req.body);
  res.redirect('/user-add-user');
}




exports.getUsers = async (req,res,next)=>{
    console.log("Getting users");

    try{
      
     const data =  await User.findAll()
     res.status(201).json(data);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({error:error});
    }
    
   
}

exports.postAddUser = async(req, res, next) => {
  console.log('adding a user');
  try{
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Phonenumber = req.body.Phonenumber;

    if(!Phonenumber){
      throw new Error('please enter phone number');
    }

    const data = await User.create({
      Name: Name,
      Email: Email,
      Phonenumber: Phonenumber,
    })
    res.status(201).json({newUserDetails: data});
  }
  catch(error){
    console.log(error);
    res.status(500).json({error:error});
  }
}


exports.deleteUser = async (req,res,next)=>{
  
  try{
    let userId = req.params.userId;
    if(!userId){
      res.status(400).json({error:'id missing'});
    }
    await User.destroy({where:{id:userId}});
    res.sendStatus(200);
    
  }
  catch(error){
    console.log(error);
    res.status(500).json('error occured');
  };



}
