// Title: Async Dependency (Expert)
// Goal: Fetch User ID, then use ID to fetch Posts.
// Input: getUser() returns {id: 5} -> getPosts(5)
// Output: Final resolved value is the posts array.

const users = [
  { name: "KK", ID: 1 },
  { name: "LL", ID: 2 },
  { name: "MM", ID: 3 },
  { name: "WK", ID: 4 },
];

const posts = [
  { ID: 1, comment: "KAY" },
  { ID: 2, comment: "LAY" },
  { ID: 3, comment: "MAY" },
  { ID: 4, comment: "WY" },
];

function getUser(userName) {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.name === userName);
    if (user) {
      resolve(user); // Passing the whole user object
    } else {
      reject("No user was found");
    }
  });
}

function getPosts(userID) {
  return new Promise((resolve, reject) => {
    const userPosts = posts.filter((p) => p.ID === userID);
    if (userPosts.length > 0) {
      resolve(userPosts);
    } else {
      reject("No posts were found");
    }
  });
}

// THE CHAIN
getUser("KK")
  .then((user) => {
    console.log("Found User ID:", user.ID);
    return getPosts(user.ID); // Step 2 depends on Step 1
  })
  .then((userPosts) => {
    console.log("Found Posts:", userPosts);
  })
  .catch((err) => console.error(err));