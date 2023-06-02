const { Customers,contact, order} = require('./schema')



module.exports.insertCustomers = async (req, res) => {
    console.log(req.body)
    const Customer = new Customers({
        cid: Number(req.body.cid),

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,

        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: Number(req.body.zip),
        country: req.body.country,

        phoneNumber: Number(req.body.phoneNumber),

    });
    await Customer.save();
    res.send({ msg: "Customer added" });
};

module.exports.insertContact=async(req,res)=>{
    console.log(req.body)
    const contacts=new contact({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
    });
    await contacts.save();
    res.send({ msg: "Feedback added" });
};


module.exports.insertOrder=async(req,res)=>{
    console.log(req.body)
    const orders = new order({
        productname:req.body.productname,
        quantity:req.body.quantity,
    });
    await orders.save();
    res.send({ msg: " Order added" });
};