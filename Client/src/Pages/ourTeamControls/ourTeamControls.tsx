import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInst } from '../../Network';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ourTeamControls.scss';
import { useNavigate } from 'react-router-dom';
interface OurTeamControlsProps { }

const OurTeamControls: FunctionComponent<OurTeamControlsProps> = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    useEffect(() => {
        if (params.id) {
            axiosInst.get(`/users/${params.id}`).then((res) => {
                setName(res.data.name);
                setEmail(res.data.email);
                setTitle(res.data.title);
                setImage(res.data.image)
            });
        }
    }, [params.id]);

    const submitForm = () => {
        let body = {
            name: name,
            email: email,
            title: title,
            image: image
        };
        if (params.id) {
            axiosInst.patch(`/users/${params.id}`, body).then((res) => {
                toast.success('Edited', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            }).then(() => {
                navigate('/ourTeam')
            });
        } else {
            axiosInst.post('/users', body).then((res) => {
                toast.success('Added', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            });
        }

        setName('');
        setEmail('');
        setTitle('');
        setImage('')
    };

    return (
        <>
            <div className="ourTeamControl-container">
                <h1>{params.id ? 'Edit User' : 'Add New User'}</h1>
                <div className="form">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type Your Name" />
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type Your Email" />
                    <input type="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type Your Title" />
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Type Your Image Link" />
                    <button className='button__arrows' onClick={submitForm}><span>{params.id ? 'Edit' : 'Add'}</span></button>
                </div>
            </div>
        </>
    );
};

export default OurTeamControls;
