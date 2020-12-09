import request from 'superagent';

// nice work! most groups didn't store the URL in a const, and never made a file for fetches--this looks great!
const herokuBackend = 'https://rocky-dawn-10139.herokuapp.com/'
const localBackend = 'http://localhost:4000/';

export async function fetchFavorite(someId, payload ) {
    try{
        return await request.get(`${herokuBackend}api/favorites/${someId}`)
        .set('Authorization', payload)
    } catch(e) {
        throw e;
    }
}

export async function fetchAllFavorites(payload) {
    try{
        return await request.get(`${herokuBackend}api/favorites`)
        .set('Authorization', payload)
    } catch(e) {
        throw e;
    }
}

export async function deleteFavorites(someId, token) {
    try {
        return await request.delete(`${herokuBackend}api/favorites/${someId}`)
        .set('Authorization', token)
    } catch(err) {
        throw err;
    }
}

export async function signUp(payload) {
    try {
  
        return await request.post(`${herokuBackend}auth/signup`)
        .send(payload);
    } catch(err) {
        throw err;
    }
}

export async function randomName(payload) {
    try {
        return await request
        .get(`${herokuBackend}api/random-name`)
        .set('Authorization', payload);
    } catch(err) {
        throw err;
    }
}

export async function login(payload) {
    try {
  
        return await request.post(`${herokuBackend}auth/signin`)
        .send(payload);
    } catch(err) {
        throw err;
    }
}

export async function getRandomVideo(payload) {
    try {
  
        return await request.get(`${herokuBackend}api/random-videos`)
        .set('Authorization', payload)
    } catch(err) {
        throw err;
    }
}

export async function addFavoriteVideo(token, payload) {
    try {
        return await request.post(`${herokuBackend}api/favorites`)
        .set('Authorization', token)
        .send(payload)
    } catch(err) {
        throw err;
    }
}
