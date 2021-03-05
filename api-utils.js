import request from "superagent";

import request from 'superagent';

const URL = 'https://morning-coast-62177.herokuapp.com';

export async function signUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    return response;
}

export async function login(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
    return response.body;
}

export async function searchAnime()