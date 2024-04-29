const user=require('../modules/user')
const mongoose=require("mongoose")
async function handleGetALLUsers(req, res) {
  const users = await user.find({});
  return res.json(users);
}

async function hadleGetUserById(req, res) {
  const users = await user.findById(req.params.id);
  return res.json(users);
}

async function handleAddUser(req, res) {
  const body = req.body;
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.json({ error: "all parameters must be provided" });
  }

  const result = await user.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "success",id:result._id });
}

async function handleUpdateUserById(req, res) {
  await user.findByIdAndUpdate(req.params.id, { lastName: "Gaudel" });
  return res.status(200).json({ msg: "updated!" });
}

async function handleDeleteUserById(req, res) {
  await user.findByIdAndDelete(req.params.id);
  return res.json({ msg: "deleted!" });
}

module.exports = {
  handleGetALLUsers,
  handleDeleteUserById,
  handleUpdateUserById,
  handleAddUser,
  hadleGetUserById,
};
