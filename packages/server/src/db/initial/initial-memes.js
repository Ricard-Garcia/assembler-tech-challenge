function getInitialMemes() {
  //   let { _id: userId } = await db.User.findOne({}, { _id: 1 }).lean();
  return [
    {
      url: "https://media1.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif?cid=790b761149c79dc72447f646aca4493ff6f621e5e735738f&rid=giphy.gif&ct=g",
      tags: ["tag1", "tag2"],
      userId: "userId",
      likedBy: ["userId1", "userId2"],
    },
    {
      url: "https://media3.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif",
      tags: ["tag3", "tag4"],
      userId: "userId",
      likedBy: ["userId3", "userId4"],
    },
  ];
}

module.exports = { getInitialUsers };
