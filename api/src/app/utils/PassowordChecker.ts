import bcrypt from 'bcrypt';

class PasswordChecker {
    static async check(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default PasswordChecker;