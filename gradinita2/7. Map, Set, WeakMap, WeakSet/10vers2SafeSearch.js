const visited = new WeakSet();

function findPerson(startNode, targetName) {
  // 1. Guard: If we've already checked this person, stop looking here
  if (visited.has(startNode)) return false;

  // 2. Mark this person as "checked"
  visited.add(startNode);
  console.log(`Checking: ${startNode.name}`);

  // 3. Did we find them?
  if (startNode.name === targetName) {
    return true;
  }

  // 4. If not, check their friend (if they have one)
  if (startNode.friend) {
    return findPerson(startNode.friend, targetName);
  }

  return false;
}

// --- Our Circular Network ---
const alice = { name: "Alice" };
const bob = { name: "Bob" };
const charlie = { name: "Charlie" };

alice.friend = bob;
bob.friend = charlie;
charlie.friend = alice; // The Circle

// --- The Test ---
console.log("--- Starting Search ---");
const found = findPerson(alice, "Charlie");
console.log("Found Charlie?:", found);
