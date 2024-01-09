export const testFetch = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();

    console.log(data);
};

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