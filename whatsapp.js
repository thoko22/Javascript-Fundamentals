// Users Akhil & Sam have a conversation

const akhil = "Akhil";
const sam = "Sam";

const message1 = sendMessage(akhil, "Hi Sam, how are you doing?")
console.log(message1)
sendMessage(sam, "Hi Akhil, I am doing fine, how about you?")
sendMessage(akhil, "Doing good, Tell me a joke.")

function sendMessage(user, message) {
    console.log(`${user}: ${message}`);
}