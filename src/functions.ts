import { SayHelloProp } from "./types";

export function sayhello({ fisrName, lastName, age }: SayHelloProp) {
  console.log("Say hello");
  console.log(`your first name is ${fisrName}`);

  if (lastName) {
    console.log(`your last name is ${lastName}`);
  }

  if (age) {
    console.log(`your age  is ${age}`);
  }
}
