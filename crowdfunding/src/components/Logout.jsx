import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Logout = () => {
    const history = useHistory();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
            history.push('/login', { replace: true });
        }).catch((err) => {
            console.log(err);
        });
    });
    return (
        <>

        </>
    )
}

export default Logout;
