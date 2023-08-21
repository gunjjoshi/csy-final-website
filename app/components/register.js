"use client"
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const StudentForm = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);
    const [userData, setUserData] = useState({
        fullName: "",
        roll: "",
        email: "",
        interests: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { fullName, rollNumber, email, interests });
    };

    let name, value
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { fullName, roll, email, interests } = userData;

        if (fullName && roll && email && interests) {


            const res = await fetch("https://csyclub-1e1af-default-rtdb.firebaseio.com/userDataRecords.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName, roll, email, interests
                }),
            }
            );
            if (res) {
                setUserData({
                    fullName: "",
                    roll: "",
                    email: "",
                    interests: ""
                })
                alert("Data Stored");
            }
            else {
                alert("Invalid Data");
            }
        }
        else {
            alert("Invalid Data");
        }
    }


    return (

        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        body {
            font-family: 'Cascadia Code', 'Courier New', 'monospace';
          background-image: url("background.png");
        background-size: cover;
        background-repeat: no-repeat;
        }
      `,
                }}
            />
            <div style={{ marginTop: '8rem' }}>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded shadow text-white">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block mb-2">Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={postUserData}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="roll" className="block mb-2">Roll Number:</label>
                        <input
                            type="text"
                            name="roll"
                            value={userData.roll}
                            onChange={postUserData}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={postUserData}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interests" className="block mb-2">Interests:</label>
                        <textarea
                            name="interests"
                            value={userData.interests}
                            onChange={postUserData}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleSignIn}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default StudentForm;