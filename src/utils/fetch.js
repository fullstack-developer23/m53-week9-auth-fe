export const signupFetch = async (username, email, password) => {
    const response = await fetch("http://localhost:5001/user", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    });

    const data = await response.json();
    console.log("signup done: ", data);
}

export const loginFetch = async (username, password) => {
    const response = await fetch("http://localhost:5001/user/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    const data = await response.json();
    // console.log("login successful: ", data);

    return data;
}

export const getAllBooks = async () => {
    const response = await fetch ("http://localhost:5001/book", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await response.json();

    return data;
}

export const addFavBook = async (id, username) => {
    const response = await fetch("http://localhost:5001/user/updateFavBook",{
        method:"PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            BookId: id,
            username: username,
        }),
    });

    const data = await response.json();
    return data;
    // console.log(data);
};