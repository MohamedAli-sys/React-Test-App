import { FunctionComponent } from "react";
import IUsers from "../../interfaces/users";
import './UserCard.scss'
interface UserCardProps {
    user: IUsers
}

const UserCard: FunctionComponent<UserCardProps> = (props) => {
    return (
        <>
            <div className="user-card">
                <h5>
                    Name: {props.user.name}
                </h5>
                <h6>
                    Email: {props.user.email}
                </h6>
            </div>
        </>
    );
}

export default UserCard;