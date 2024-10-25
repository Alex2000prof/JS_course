interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(
    `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Membership: ${
      user.membershipLevel ?? "Standard"
    }`
  );
}

const premiumUser: PremiumUser = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold",
};

printUserDetails(premiumUser);
