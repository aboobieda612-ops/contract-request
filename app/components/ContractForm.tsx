'use client'
import React, { useEffect, useState } from 'react'
import HeaderPage from './HeaderPage';
import HeaderForm from './HeaderForm';
import BodyForm from './BodyForm';
import FooterForm from './FooterForm';
import { UserResponse, UsersResponse } from '../types/user.types';
import { userService } from '../features/user.services';

export default function ContractForm() {
    const [user, setUser] = useState<UserResponse['data']>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        userService
            .getUser('1')
            .then((res) => setUser(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <form action="" className="w-full max-w-2xl px-6 pt-4 main-form">
            <HeaderPage headerImage='/logo.png' direction={user?.orgLevel1} />
            <HeaderForm titleForm='تعاقد عمل' idSlef={user?.selfId} idCotract={user?.formNumber} />
            <BodyForm formData={user} />
            <FooterForm additionDate={user?.additionDate} />
        </form>
    )
}
