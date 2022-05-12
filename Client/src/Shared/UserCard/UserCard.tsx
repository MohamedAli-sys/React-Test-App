import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import IUsers from "../../interfaces/users";
import { axiosInst } from "../../Network";
import './UserCard.scss'
interface UserCardProps {
    user: IUsers,
    // 
    getApiUsers: Function
    // 
}

// const UserCard: FunctionComponent<UserCardProps> = ({ user }) => {
const UserCard: FunctionComponent<UserCardProps> = ({ user, getApiUsers }) => {
    const deleteUser = (id: number) => {
        axiosInst.delete(`users/${id}`).then((res) => {
            toast.success('User Deleted', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });

            // 
            getApiUsers()
            // 

        })
    }
    return (
        <>
            <div className="user-card">
                <h5>
                    Name: {user.name}
                </h5>
                <h6>
                    Email: {user.email}
                </h6>
                <Link className="button__arrows" to={`/ourTeam/Edit/${user.id}`} ><span>Edit</span></Link>
                <button className="button__arrows" onClick={() => deleteUser(user.id!)}><span>Delete</span></button>
            </div>
        </>
    );
}

export default UserCard;