import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';



const Admin = () => {
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
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('category', info.category);
        formData.append('author', info.author);

        fetch(`http://localhost:5000/admin`, {
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
                        <h4 className="mb-3 mt-3 ">Add Post</h4>

                        <div className="rightSide">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Title</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter service name" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Category</label>
                                    <select className="form-control" onBlur={handleBlur} name="category" id="">
                                        <option value="politics">Politics</option>
                                        <option value="sports">Sports</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="culture">Culture</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Author Name</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="author" placeholder="Author Name" />
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
}

export default Admin;