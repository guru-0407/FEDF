// =======================================
// ES6+ Features + Closures + Functional Programming
// Immutability + Module Pattern
// =======================================

const UserApp = (() => {

  // Private Data
  let users = [
    { id: 1, name: "Ramya", age: 25 },
    { id: 2, name: "Krishna", age: 28 },
    { id: 3, name: "Sita", age: 22 }
  ];

  // Closure Counter (for unique IDs)
  const createCounter = (start = users.length) => {
    let count = start;

    return () => {
      count++;
      return count;
    };
  };

  const userCounter = createCounter();

  return {

    // Display Users
    showUsers() {
      console.log("\nAll Users:");
      users.forEach(user =>
        console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`)
      );
    },

    // Add User (Fixed ID logic)
    addUser(name, age) {
      const newUser = {
        id: userCounter(), // ✅ fixed unique ID
        name,
        age
      };

      users = [...users, newUser];

      console.log(`\nUser Added: ${name}`);
    },

    // Filter Adults
    showAdults() {
      const adults = users.filter(user => user.age >= 25);

      console.log("\nUsers Age >= 25:");
      adults.forEach(user =>
        console.log(`${user.name} (${user.age})`)
      );
    },

    // Map Names
    showNames() {
      const names = users.map(user => user.name);

      console.log("\nUser Names:");
      console.log(names);
    },

    // Update User Age
    updateAge(id, newAge) {
      users = users.map(user =>
        user.id === id ? { ...user, age: newAge } : user
      );

      console.log(`\nUpdated Age of User ID ${id}`);
    }
  };

})();

// =======================================
// Execute Program AFTER page loads
// =======================================

document.addEventListener("DOMContentLoaded", () => {

  UserApp.showUsers();

  UserApp.addUser("Ravi", 30);

  UserApp.showUsers();

  UserApp.showAdults();

  UserApp.showNames();

  UserApp.updateAge(2, 35);

  UserApp.showUsers();

});