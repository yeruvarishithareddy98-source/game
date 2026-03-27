import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <form>
            <div>
                <label>Email:</label>
                <input type="email" required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;