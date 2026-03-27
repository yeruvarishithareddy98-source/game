import { supabase } from './supabaseClient';
import type { User } from '../types';

export const authService = {
    async signup(email: string, password: string, name: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } },
        });
        if (error) throw error;
        return data;
    },
    async signin(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    },
    async signout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },
    async getCurrentUser() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        return session?.user;
    },
    async resetPassword(email: string) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
        return data;
    },
    async updateUserProfile(userId: string, name: string) {
        const { data, error } = await supabase.from('user_profiles').update({ name }).eq('id', userId);
        if (error) throw error;
        return data;
    },
};