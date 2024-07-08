import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Make = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

  return (
    <div className="p-4 sm:p-9">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          {/* head */}
          <thead className="bg-lime-500">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Title</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="border px-4 py-2">{user?.name}</td>
                <td className="border px-4 py-2">{user?.email}</td>
                <td className="border px-4 py-2">
                  <img className="w-12 h-12" src={user.photo} alt="user" />
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Make;
