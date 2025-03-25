import bcrypt from "bcryptjs"



// 1. Hashear password
export const createHash = (password: string) => {
	const salt = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	return salt;
};
// 2. Validar password
export const isValidPassowrd = (plainPassword: string, hashedPassword: string) => {
	const result = bcrypt.compareSync(plainPassword, hashedPassword);
	return result;
};
