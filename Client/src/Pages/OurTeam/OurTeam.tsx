import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IUsers from "../../interfaces/users";
import { axiosInst } from "../../Network";
import UserCard from "../../Shared/UserCard/UserCard";
import './OurTeam.scss'
interface OurTeamProps {

}

const OurTeam: FunctionComponent<OurTeamProps> = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        // 
        getApiUsers()
        // 
    }, [])

    // 
    const getApiUsers = ()=>{
        axiosInst.get('/users').then((res) => {
            setUsers(res.data)
        })
    }
    // 

    return (
        <>
            <div className="team-container">
                <Link className="button__arrows add" to={`/ourTeam/Add`} ><span>Add User</span></Link>
                <div className="team-members">
                    {
                        users.map((user: IUsers) => {
                            return (
                                // <UserCard user={user} key={user.id}/>
                                <UserCard user={user} key={user.id} getApiUsers={getApiUsers}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default OurTeam;