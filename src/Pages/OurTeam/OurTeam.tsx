import { FunctionComponent, useEffect, useState } from "react";
import IUsers from "../../interfaces/users";
import { axiosInst } from "../../Network";
import UserCard from "../../Shared/UserCard/UserCard";
import './OurTeam.scss'
interface OurTeamProps {

}

const OurTeam: FunctionComponent<OurTeamProps> = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        axiosInst.get('/users').then((res) => {
            setUsers(res.data)
        })
    }, [])

    return (
        <>
            <div className="team-container">
                <div className="team-members">
                    {
                        users.map((user: IUsers) => {
                            return (
                                <UserCard user={user} key={user.id} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default OurTeam;