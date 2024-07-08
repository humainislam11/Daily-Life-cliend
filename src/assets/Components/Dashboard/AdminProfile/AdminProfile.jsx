import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminProfile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        fetch(`https://y-mu-three.vercel.app/allPost`)
            .then(res => res.json())
            .then(data => setAllPost(data));
    }, []);

    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(`https://y-mu-three.vercel.app/allPost/${user?.email}`)
            .then(res => res.json())
            .then(data => setList(data));
    }, [user?.email]);

    const data = [
        { name: 'Group A', value: allPost.length },
        { name: 'Group B', value: users.length },
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="p-4">
            <div className="bg-lime-400 h-10 grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
                <h1 className="font-semibold text-xl ml-3">Total Users: {users.length}</h1>
                <h1 className="font-semibold text-xl">Admin Post: {list.length}</h1>
                <button className="font-semibold text-blue-700" onClick={() => document.getElementById('my_modal_1').showModal()}>Comments..</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        {list.map(comment => <li className="list-disc" key={comment._id}>{comment.comments}</li>)}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-10">
                <div className="mt-20 lg:mt-1 card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-base-100 shadow-md mx-auto lg:mx-4 mb-4 lg:mb-0">
                    <figure className="flex justify-center p-4">
                        <img className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 rounded-full" src={user?.photoURL} alt="photo" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">{user?.displayName}</h2>
                        <h1 className="font-semibold">{user.email}</h1>
                    </div>
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
