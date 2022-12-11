import readlineSync from "readline-sync";

const sayHello = () => {
	const name = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${name}!`);
}

// module.exports = sayHello;
export default sayHello;
