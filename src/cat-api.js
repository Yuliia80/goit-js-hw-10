const url = 'https://api.thecatapi.com/v1';
const api_key = "live_WoDl0dsjUmfKnWvhp8T8iZ756q60Jd0eYAk5Ti2u71lyQKzXfu7X6mbqFZ7c5xW2";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};