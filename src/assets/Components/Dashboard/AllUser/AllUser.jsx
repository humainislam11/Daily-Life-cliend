import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });

        console.log("delete confirm");
      }
    });
  };

  return (
    <div className="ml-5 mt-10 bg-slate-300 p-4 sm:ml-20 sm:mt-20 sm:p-9">
      <div className="my-3 font-semibold">
        <h1 className="text-2xl sm:text-3xl">Total Users: {users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            {/* head */}
            <thead className="bg-lime-500">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2">{user?.name}</td>
                  <td className="border px-4 py-2">{user?.email}</td>
                  <td className="border px-4 py-2">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleAdmin(user)}
                        className="btn mt-2 mb-2 btn-lg bg-orange-500"
                      >
                        <FaUsers className="text-white" />
                      </button>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="text-red-600 btn text-[20px]"
                    >
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
