
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {

        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('password', info.password);
        fetch(`http://localhost:5000/addAdmin`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h5 className="text-center">Admin Dashboard </h5>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="CategoryList">
                            <ul>
                                <Link to="/home"> <li>Home</li></Link>
                                <Link to="/admin"><li>Add Post</li></Link>
                                <Link to="/addAdmin"> <li>Add Admin</li></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-9 col-sm-12">
                        <h4 className="mb-3 mt-3 ">Add Admin</h4>
                        <div className="rightSide">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onBlur={handleBlur} type="password" className="form-control" name="password" placeholder="Enter password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;