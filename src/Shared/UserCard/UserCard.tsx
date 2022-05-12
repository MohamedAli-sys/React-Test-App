import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import IUsers from "../../interfaces/users";
import './UserCard.scss'
interface UserCardProps {
    user: IUsers
}

const UserCard: FunctionComponent<UserCardProps> = ({ user }) => {
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
            </div>
        </>
    );
}

export default UserCard;